# TODO rename this, or the dataService in waterfall view
class Data extends Provider
    constructor: ->
    # TODO caching
    cache: false

    $get: ($log, $injector, $q, restService, socketService, dataUtilsService, ENDPOINTS) ->
        return new class DataService
            self = null
            constructor: ->
                self = @
                socketService.eventStream.onUnsubscribe = @unsubscribeListener
                # map of path: [listener id]
                @listeners = {}
                # resend the start consuming messages for active paths
                socketService.socket.onclose = =>
                    for path, listenerIds of @listeners
                        if listenerIds.length > 0 then @startConsuming(path)
                # generate loadXXX functions for root endpoints
                @constructor.generateEndpoints()

            # the arguments are in this order: endpoint, id, child, id of child, query
            get: (args...) ->
                # keep defined arguments only
                args = args.filter (e) -> e?

                # get the query parameters
                [..., last] = args
                # subscribe for changes if 'subscribe' is true or undefined
                subscribe = last.subscribe or not last.subscribe?
                if angular.isObject(last)
                    query = args.pop()
                    # 'subscribe' is not part of the query
                    query.subscribe = null

                # up to date array, this will be returned
                updating = []

                promise = $q (resolve, reject) =>

                    if subscribe
                        # TODO needs testing
                        # store all messages before the classes subscribe for changes
                        # resend once those are ready
                        messages = []
                        unsubscribe = socketService.eventStream.subscribe (data) ->
                            messages.push(data)

                        # start consuming WebSocket messages
                        socketPath = dataUtilsService.socketPath(args)
                        socketPromise = @startConsuming(socketPath)
                    else socketPromise = $q.resolve()

                    socketPromise.then =>
                        # get the data from the rest api
                        restPath = dataUtilsService.restPath(args)
                        restPromise = restService.get(restPath, query)

                        restPromise.then (response) =>

                            type = dataUtilsService.type(restPath)
                            response = response[type]
                            try
                                # try to get the wrapper class
                                className = dataUtilsService.className(restPath)
                                # the classes have the dataService as a dependency
                                # $injector.get doesn't throw circular dependency exception
                                WrapperClass = $injector.get(className)
                            catch e
                                # use the Base class otherwise
                                WrapperClass = $injector.get('Base')
                            # the response should always be an array
                            if angular.isArray(response)
                                # strip the id or name from the path if it's there
                                endpoint = dataUtilsService.endpointPath(args)
                                # wrap the elements in classes
                                response = response.map (i) -> new WrapperClass(i, endpoint)
                                # add listener ids to the socket path
                                @listeners[socketPath] ?= []
                                response.forEach (r) =>
                                    @listeners[socketPath].push(r.listenerId)
                                # handle /new messages
                                socketService.eventStream.subscribe (data) =>
                                    key = data.k
                                    message = data.m
                                    # filter for relevant message
                                    streamRegex = ///^#{endpoint}\/(\w+|\d+)\/new$///g
                                    # add new instance to the updating array
                                    if streamRegex.test(key)
                                        newInstance = new WrapperClass(message, endpoint)
                                        updating.push(newInstance)
                                        @listeners[socketPath].push(newInstance.listenerId)
                                # TODO needs testing
                                # resend messages
                                if subscribe
                                    messages.forEach (m) -> socketService.eventStream.push(m)
                                    unsubscribe()
                                # fill up the updating array
                                angular.copy(response, updating)
                                # the updating array is ready to be used
                                resolve(updating)
                            else
                                e = "#{response} is not an array"
                                $log.error(e)
                                reject(e)
                        , (e) => reject(e)
                    , (e) => reject(e)

                promise.getArray = -> updating

                return promise

            startConsuming: (path) ->
                socketService.send({
                    cmd: 'startConsuming'
                    path: path
                })

            stopConsuming: (path) ->
                socketService.send({
                    cmd: 'stopConsuming'
                    path: path
                })

            # make the stopConsuming calls when there is no listener for a specific endpoint
            unsubscribeListener: (removed) ->
                for k, v of self.listeners
                    i = v.indexOf(removed.id)
                    if i >= 0
                        v.splice(i, 1)
                        if v.length is 0 then self.stopConsuming(k)

            # TODO control messages
            control: () ->
                #restService.post()

            # returns next id for jsonrpc2 control messages
            getNextId: ->
                @jsonrpc ?= 0
                @jsonrpc++

            # generate functions for root endpoints
            @generateEndpoints: ->
                ENDPOINTS.forEach (e) =>
                    # capitalize endpoint names
                    E = dataUtilsService.capitalize(e)
                    @::["get#{E}"] = (args...) =>
                        self.get(e, args...)

            # opens a new group
            open: ->
                return new class Group
                    rootClasses = null
                    constructor: ->
                        @rootClasses = []
                        rootClasses = @rootClasses
                        @constructor.generateEndpoints()

                    # calls unsubscribe on each root classes
                    close: ->
                        @rootClasses.forEach (c) ->
                            c.unsubscribe() if angular.isFunction(c.unsubscribe)

                    # closes the group when the scope is destroyed
                    closeOnDestroy: (scope) ->
                        if not angular.isFunction(scope.$on)
                            throw new TypeError("Parameter 'scope' doesn't have an $on function")
                        scope.$on '$destroy', => @close()

                    # generate functions for root endpoints
                    @generateEndpoints: ->
                        ENDPOINTS.forEach (e) =>
                            # capitalize endpoint names
                            E = dataUtilsService.capitalize(e)
                            @::["get#{E}"] = (args...) =>
                                p = self["get#{E}"](args...)
                                p.then (classes) ->
                                    classes.forEach (c) -> rootClasses.push(c)
                                return p