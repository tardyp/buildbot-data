class LoggingInterceptor extends Config
    constructor: ($httpProvider) ->
        ### @ngInject ###
        $httpProvider.interceptors.push ($log, API) ->
            return request: (config) ->
                # log API request only
                if config.url.indexOf(API) is 0
                    $log.debug("#{config.method} #{config.url}")
                return config
