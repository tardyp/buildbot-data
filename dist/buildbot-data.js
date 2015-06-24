(function() {
  var App;

  App = (function() {
    function App() {
      return [];
    }

    return App;

  })();

  angular.module('bbData', new App());

}).call(this);

(function() {
  var LoggingInterceptor;

  LoggingInterceptor = (function() {
    function LoggingInterceptor($httpProvider) {

      /* @ngInject */
      $httpProvider.interceptors.push(["$log", "API", function($log, API) {
        return {
          request: function(config) {
            if (config.url.indexOf(API) === 0) {
              $log.debug(config.method + " " + config.url);
            }
            return config;
          }
        };
      }]);
    }

    return LoggingInterceptor;

  })();

  angular.module('bbData').config(['$httpProvider', LoggingInterceptor]);

}).call(this);

(function() {
  var Api, Endpoints;

  Api = (function() {
    function Api() {
      return 'api/v2/';
    }

    return Api;

  })();

  Endpoints = (function() {
    function Endpoints() {
      return ['builders', 'builds', 'buildrequests', 'buildslaves', 'buildsets', 'changes', 'changesources', 'masters', 'sourcestamps', 'schedulers', 'forceschedulers'];
    }

    return Endpoints;

  })();

  angular.module('bbData').constant('API', Api()).constant('ENDPOINTS', Endpoints());

}).call(this);

(function() {
  var Base,
    slice = [].slice;

  Base = (function() {
    function Base(dataService, socketService, dataUtilsService) {
      var BaseInstance;
      return BaseInstance = (function() {
        function BaseInstance(object, endpoint, childEndpoints) {
          var classId;
          this.endpoint = endpoint;
          if (childEndpoints == null) {
            childEndpoints = [];
          }
          if (!angular.isString(this.endpoint)) {
            throw new TypeError("Parameter 'endpoint' must be a string, not " + (typeof this.endpoint));
          }
          this.update(object);
          this.constructor.generateFunctions(childEndpoints);
          classId = dataUtilsService.classId(this.endpoint);
          this.id = this[classId];
          this.subscribe();
        }

        BaseInstance.prototype.update = function(o) {
          return angular.merge(this, o);
        };

        BaseInstance.prototype.get = function() {
          var args;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return dataService.get.apply(dataService, [this.endpoint, this.id].concat(slice.call(args)));
        };

        BaseInstance.prototype.subscribe = function() {
          var listener;
          listener = (function(_this) {
            return function(data) {
              var key, message, streamRegex;
              key = data.k;
              message = data.m;
              streamRegex = RegExp("^" + _this.endpoint + "\\/" + _this.id + "\\/\\w+$", "g");
              if (streamRegex.test(key)) {
                return _this.update(message);
              }
            };
          })(this);
          this.unsubscribeEventListener = socketService.eventStream.subscribe(listener);
          return this.listenerId = listener.id;
        };

        BaseInstance.prototype.unsubscribe = function() {
          var k, v;
          for (k in this) {
            v = this[k];
            if (angular.isArray(v)) {
              v.forEach(function(e) {
                if (e instanceof BaseInstance) {
                  return e.unsubscribe();
                }
              });
            }
          }
          return this.unsubscribeEventListener();
        };

        BaseInstance.generateFunctions = function(endpoints) {
          return endpoints.forEach((function(_this) {
            return function(e) {
              var E;
              E = dataUtilsService.capitalize(e);
              return _this.prototype["load" + E] = function() {
                var args, p;
                args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                p = this.get.apply(this, [e].concat(slice.call(args)));
                this[e] = p.getArray();
                return p;
              };
            };
          })(this));
        };

        return BaseInstance;

      })();
    }

    return Base;

  })();

  angular.module('bbData').factory('Base', ['dataService', 'socketService', 'dataUtilsService', Base]);

}).call(this);

(function() {
  var Build,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Build = (function() {
    function Build(Base, dataService) {
      var BuildInstance;
      return BuildInstance = (function(superClass) {
        extend(BuildInstance, superClass);

        function BuildInstance(object, endpoint) {
          var endpoints;
          endpoints = ['changes', 'properties', 'steps'];
          BuildInstance.__super__.constructor.call(this, object, endpoint, endpoints);
        }

        return BuildInstance;

      })(Base);
    }

    return Build;

  })();

  angular.module('bbData').factory('Build', ['Base', 'dataService', Build]);

}).call(this);

(function() {
  var Builder,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Builder = (function() {
    function Builder(Base, dataService) {
      var BuilderInstance;
      return BuilderInstance = (function(superClass) {
        extend(BuilderInstance, superClass);

        function BuilderInstance(object, endpoint) {
          var endpoints;
          endpoints = ['builds', 'buildrequests', 'forceschedulers', 'buildslaves', 'masters'];
          BuilderInstance.__super__.constructor.call(this, object, endpoint, endpoints);
        }

        return BuilderInstance;

      })(Base);
    }

    return Builder;

  })();

  angular.module('bbData').factory('Builder', ['Base', 'dataService', Builder]);

}).call(this);

(function() {
  var Buildrequest,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Buildrequest = (function() {
    function Buildrequest(Base, dataService) {
      var BuildrequestInstance;
      return BuildrequestInstance = (function(superClass) {
        extend(BuildrequestInstance, superClass);

        function BuildrequestInstance(object, endpoint) {
          var endpoints;
          endpoints = ['builds'];
          BuildrequestInstance.__super__.constructor.call(this, object, endpoint, endpoints);
        }

        return BuildrequestInstance;

      })(Base);
    }

    return Buildrequest;

  })();

  angular.module('bbData').factory('Buildrequest', ['Base', 'dataService', Buildrequest]);

}).call(this);

(function() {
  var Buildset,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Buildset = (function() {
    function Buildset(Base, dataService) {
      var BuildsetInstance;
      return BuildsetInstance = (function(superClass) {
        extend(BuildsetInstance, superClass);

        function BuildsetInstance(object, endpoint) {
          var endpoints;
          endpoints = ['properties'];
          BuildsetInstance.__super__.constructor.call(this, object, endpoint, endpoints);
        }

        return BuildsetInstance;

      })(Base);
    }

    return Buildset;

  })();

  angular.module('bbData').factory('Buildset', ['Base', 'dataService', Buildset]);

}).call(this);

(function() {
  var Buildslave,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Buildslave = (function() {
    function Buildslave(Base, dataService) {
      var BuildslaveInstance;
      return BuildslaveInstance = (function(superClass) {
        extend(BuildslaveInstance, superClass);

        function BuildslaveInstance(object, endpoint) {
          BuildslaveInstance.__super__.constructor.call(this, object, endpoint);
        }

        return BuildslaveInstance;

      })(Base);
    }

    return Buildslave;

  })();

  angular.module('bbData').factory('Buildslave', ['Base', 'dataService', Buildslave]);

}).call(this);

(function() {
  var Change,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Change = (function() {
    function Change(Base, dataService) {
      var ChangeInstance;
      return ChangeInstance = (function(superClass) {
        extend(ChangeInstance, superClass);

        function ChangeInstance(object, endpoint) {
          ChangeInstance.__super__.constructor.call(this, object, endpoint);
        }

        return ChangeInstance;

      })(Base);
    }

    return Change;

  })();

  angular.module('bbData').factory('Change', ['Base', 'dataService', Change]);

}).call(this);

(function() {
  var Changesource,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Changesource = (function() {
    function Changesource(dataService, Base) {
      var ChangesourceInstance;
      return ChangesourceInstance = (function(superClass) {
        extend(ChangesourceInstance, superClass);

        function ChangesourceInstance(object, endpoint) {
          ChangesourceInstance.__super__.constructor.call(this, object, endpoint);
        }

        return ChangesourceInstance;

      })(Base);
    }

    return Changesource;

  })();

  angular.module('bbData').factory('Changesource', ['dataService', 'Base', Changesource]);

}).call(this);

(function() {
  var Forcescheduler,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Forcescheduler = (function() {
    function Forcescheduler(Base, dataService) {
      var ForceschedulerInstance;
      return ForceschedulerInstance = (function(superClass) {
        extend(ForceschedulerInstance, superClass);

        function ForceschedulerInstance(object, endpoint) {
          ForceschedulerInstance.__super__.constructor.call(this, object, endpoint);
        }

        return ForceschedulerInstance;

      })(Base);
    }

    return Forcescheduler;

  })();

  angular.module('bbData').factory('Forcescheduler', ['Base', 'dataService', Forcescheduler]);

}).call(this);

(function() {
  var Master,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Master = (function() {
    function Master(Base, dataService) {
      var MasterInstance;
      return MasterInstance = (function(superClass) {
        extend(MasterInstance, superClass);

        function MasterInstance(object, endpoint) {
          var endpoints;
          endpoints = ['builders', 'buildslaves', 'changesources', 'schedulers'];
          MasterInstance.__super__.constructor.call(this, object, endpoint, endpoints);
        }

        return MasterInstance;

      })(Base);
    }

    return Master;

  })();

  angular.module('bbData').factory('Master', ['Base', 'dataService', Master]);

}).call(this);

(function() {
  var Scheduler,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Scheduler = (function() {
    function Scheduler(Base, dataService) {
      var SchedulerInstance;
      return SchedulerInstance = (function(superClass) {
        extend(SchedulerInstance, superClass);

        function SchedulerInstance(object, endpoint) {
          SchedulerInstance.__super__.constructor.call(this, object, endpoint);
        }

        return SchedulerInstance;

      })(Base);
    }

    return Scheduler;

  })();

  angular.module('bbData').factory('Scheduler', ['Base', 'dataService', Scheduler]);

}).call(this);

(function() {
  var Sourcestamp,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Sourcestamp = (function() {
    function Sourcestamp(Base, dataService) {
      var SourcestampInstance;
      return SourcestampInstance = (function(superClass) {
        extend(SourcestampInstance, superClass);

        function SourcestampInstance(object, endpoint) {
          var endpoints;
          endpoints = ['changes'];
          SourcestampInstance.__super__.constructor.call(this, object, endpoint, endpoints);
        }

        return SourcestampInstance;

      })(Base);
    }

    return Sourcestamp;

  })();

  angular.module('bbData').factory('Sourcestamp', ['Base', 'dataService', Sourcestamp]);

}).call(this);

(function() {
  var Data,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    slice = [].slice;

  Data = (function() {
    function Data() {}

    Data.prototype.cache = false;


    /* @ngInject */

    Data.prototype.$get = function($log, $injector, $q, restService, socketService, dataUtilsService, ENDPOINTS) {
      var DataService;
      return new (DataService = (function() {
        var self;

        self = null;

        function DataService() {
          this.socketCloseListener = bind(this.socketCloseListener, this);
          this.unsubscribeListener = bind(this.unsubscribeListener, this);
          self = this;
          socketService.eventStream.onUnsubscribe = this.unsubscribeListener;
          socketService.socket.onclose = this.socketCloseListener;
          this.constructor.generateEndpoints();
        }

        DataService.prototype.get = function() {
          var args, last, promise, query, subscribe, updating;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          args = args.filter(function(e) {
            return e != null;
          });
          last = args[args.length - 1];
          subscribe = last.subscribe || (last.subscribe == null);
          if (angular.isObject(last)) {
            query = args.pop();
            delete query.subscribe;
          }
          updating = [];
          promise = $q((function(_this) {
            return function(resolve, reject) {
              var messages, socketPath, socketPromise, unsubscribe;
              if (subscribe) {
                messages = [];
                unsubscribe = socketService.eventStream.subscribe(function(data) {
                  return messages.push(data);
                });
                socketPath = dataUtilsService.socketPath(args);
                socketPromise = _this.startConsuming(socketPath);
              } else {
                socketPromise = $q.resolve();
              }
              return socketPromise.then(function() {
                var restPath, restPromise;
                restPath = dataUtilsService.restPath(args);
                restPromise = restService.get(restPath, query);
                return restPromise.then(function(response) {
                  var WrapperClass, base, className, e, endpoint, type;
                  type = dataUtilsService.type(restPath);
                  response = response[type];
                  try {
                    className = dataUtilsService.className(restPath);
                    WrapperClass = $injector.get(className);
                  } catch (_error) {
                    e = _error;
                    WrapperClass = $injector.get('Base');
                  }
                  if (angular.isArray(response)) {
                    endpoint = dataUtilsService.endpointPath(args);
                    response = response.map(function(i) {
                      return new WrapperClass(i, endpoint);
                    });
                    if (_this.listeners == null) {
                      _this.listeners = {};
                    }
                    if ((base = _this.listeners)[socketPath] == null) {
                      base[socketPath] = [];
                    }
                    response.forEach(function(r) {
                      return _this.listeners[socketPath].push(r.listenerId);
                    });
                    socketService.eventStream.subscribe(function(data) {
                      var key, message, newInstance, streamRegex;
                      key = data.k;
                      message = data.m;
                      streamRegex = RegExp("^" + endpoint + "\\/(\\w+|\\d+)\\/new$", "g");
                      if (streamRegex.test(key)) {
                        newInstance = new WrapperClass(message, endpoint);
                        updating.push(newInstance);
                        return _this.listeners[socketPath].push(newInstance.listenerId);
                      }
                    });
                    if (subscribe) {
                      messages.forEach(function(m) {
                        return socketService.eventStream.push(m);
                      });
                      unsubscribe();
                    }
                    angular.copy(response, updating);
                    return resolve(updating);
                  } else {
                    e = response + " is not an array";
                    $log.error(e);
                    return reject(e);
                  }
                }, function(e) {
                  return reject(e);
                });
              }, function(e) {
                return reject(e);
              });
            };
          })(this));
          promise.getArray = function() {
            return updating;
          };
          return promise;
        };

        DataService.prototype.startConsuming = function(path) {
          return socketService.send({
            cmd: 'startConsuming',
            path: path
          });
        };

        DataService.prototype.stopConsuming = function(path) {
          return socketService.send({
            cmd: 'stopConsuming',
            path: path
          });
        };

        DataService.prototype.unsubscribeListener = function(removed) {
          var i, ids, path, ref, results;
          ref = this.listeners;
          results = [];
          for (path in ref) {
            ids = ref[path];
            i = ids.indexOf(removed.id);
            if (i > -1) {
              ids.splice(i, 1);
              if (ids.length === 0) {
                results.push(this.stopConsuming(path));
              } else {
                results.push(void 0);
              }
            } else {
              results.push(void 0);
            }
          }
          return results;
        };

        DataService.prototype.socketCloseListener = function() {
          var ids, path, ref;
          if (this.listeners == null) {
            return;
          }
          ref = this.listeners;
          for (path in ref) {
            ids = ref[path];
            if (ids.length > 0) {
              this.startConsuming(path);
            }
          }
          return null;
        };

        DataService.prototype.control = function(method, params) {
          return restService.post({
            id: this.getNextId(),
            jsonrpc: '2.0',
            method: method,
            params: params
          });
        };

        DataService.prototype.getSpecification = function() {
          return restService.get('application.spec');
        };

        DataService.prototype.getNextId = function() {
          if (this.jsonrpc == null) {
            this.jsonrpc = 1;
          }
          return this.jsonrpc++;
        };

        DataService.generateEndpoints = function() {
          return ENDPOINTS.forEach((function(_this) {
            return function(e) {
              var E;
              E = dataUtilsService.capitalize(e);
              return _this.prototype["get" + E] = function() {
                var args;
                args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                return self.get.apply(self, [e].concat(slice.call(args)));
              };
            };
          })(this));
        };

        DataService.prototype.open = function() {
          var DataAccessor;
          return new (DataAccessor = (function() {
            var rootClasses;

            rootClasses = [];

            function DataAccessor() {
              this.rootClasses = rootClasses;
              this.constructor.generateEndpoints();
            }

            DataAccessor.prototype.close = function() {
              return this.rootClasses.forEach(function(c) {
                return c.unsubscribe();
              });
            };

            DataAccessor.prototype.closeOnDestroy = function(scope) {
              if (!angular.isFunction(scope.$on)) {
                throw new TypeError("Parameter 'scope' doesn't have an $on function");
              }
              return scope.$on('$destroy', (function(_this) {
                return function() {
                  return _this.close();
                };
              })(this));
            };

            DataAccessor.generateEndpoints = function() {
              return ENDPOINTS.forEach((function(_this) {
                return function(e) {
                  var E;
                  E = dataUtilsService.capitalize(e);
                  return _this.prototype["get" + E] = function() {
                    var args, p;
                    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                    p = self["get" + E].apply(self, args);
                    p.then(function(classes) {
                      return classes.forEach(function(c) {
                        return rootClasses.push(c);
                      });
                    });
                    return p;
                  };
                };
              })(this));
            };

            return DataAccessor;

          })());
        };

        return DataService;

      })());
    };
    Data.prototype.$get.$inject = ["$log", "$injector", "$q", "restService", "socketService", "dataUtilsService", "ENDPOINTS"];

    return Data;

  })();

  angular.module('bbData').provider('dataService', [Data]);

}).call(this);

(function() {
  var DataUtils;

  DataUtils = (function() {
    function DataUtils() {}

    DataUtils.prototype.capitalize = function(w) {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    };

    DataUtils.prototype.type = function(e) {
      var name, parsed, splitted;
      splitted = e.split('/');
      while (true) {
        name = splitted.pop();
        parsed = parseInt(name);
        if (splitted.length === 0 || !(angular.isNumber(parsed) && !isNaN(parsed))) {
          break;
        }
      }
      return name;
    };

    DataUtils.prototype.singularType = function(e) {
      return this.type(e).replace(/s$/, '');
    };

    DataUtils.prototype.classId = function(e) {
      return this.singularType(e) + 'id';
    };

    DataUtils.prototype.className = function(e) {
      return this.capitalize(this.singularType(e));
    };

    DataUtils.prototype.socketPath = function(args) {
      var stars;
      stars = ['*'];
      if (args.length % 2 === 1) {
        stars.push('*');
      }
      return args.concat(stars).join('/');
    };

    DataUtils.prototype.restPath = function(args) {
      return args.slice().join('/');
    };

    DataUtils.prototype.endpointPath = function(args) {
      var argsCopy;
      argsCopy = args.slice();
      if (argsCopy.length % 2 === 0) {
        argsCopy.pop();
      }
      return argsCopy.join('/');
    };

    return DataUtils;

  })();

  angular.module('bbData').service('dataUtilsService', [DataUtils]);

}).call(this);

(function() {
  var Rest,
    slice = [].slice;

  Rest = (function() {
    function Rest($http, $q, API) {
      var RestService;
      return new (RestService = (function() {
        function RestService() {}

        RestService.prototype.execute = function(config) {
          return $q((function(_this) {
            return function(resolve, reject) {
              return $http(config).success(function(response) {
                var data, e;
                try {
                  data = angular.fromJson(response);
                  return resolve(data);
                } catch (_error) {
                  e = _error;
                  return reject(e);
                }
              }).error(function(reason) {
                return reject(reason);
              });
            };
          })(this));
        };

        RestService.prototype.get = function(url, params) {
          var config;
          if (params == null) {
            params = {};
          }
          config = {
            method: 'GET',
            url: this.parse(API, url),
            params: params,
            headers: {
              'Accept': 'application/json'
            }
          };
          return this.execute(config);
        };

        RestService.prototype.post = function(url, data) {
          var config;
          if (data == null) {
            data = {};
          }
          config = {
            method: 'POST',
            url: this.parse(API, url),
            data: data,
            headers: {
              'Content-Type': 'application/json'
            }
          };
          return this.execute(config);
        };

        RestService.prototype.parse = function() {
          var args;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return args.join('/').replace(/\/\//, '/');
        };

        return RestService;

      })());
    }

    return Rest;

  })();

  angular.module('bbData').service('restService', ['$http', '$q', 'API', Rest]);

}).call(this);

(function() {
  var Socket;

  Socket = (function() {
    function Socket($log, $q, $rootScope, $location, Stream, webSocketService) {
      var SocketService;
      return new (SocketService = (function() {
        SocketService.prototype.eventStream = null;

        function SocketService() {
          this.queue = [];
          this.deferred = {};
          this.open();
        }

        SocketService.prototype.open = function() {
          if (this.socket == null) {
            this.socket = webSocketService.getWebSocket(this.getUrl());
          }
          this.socket.onopen = (function(_this) {
            return function() {
              return _this.flush();
            };
          })(this);
          return this.setupEventStream();
        };

        SocketService.prototype.setupEventStream = function() {
          if (this.eventStream == null) {
            this.eventStream = new Stream();
          }
          return this.socket.onmessage = (function(_this) {
            return function(message) {
              var data, e, id, ref, ref1, ref2;
              try {
                data = angular.fromJson(message.data);
                $log.debug('WS message', data);
                if (data.code != null) {
                  id = data._id;
                  if (data.code === 200) {
                    return (ref = _this.deferred[id]) != null ? ref.resolve(true) : void 0;
                  } else {
                    return (ref1 = _this.deferred[id]) != null ? ref1.reject(data) : void 0;
                  }
                } else {
                  return $rootScope.$applyAsync(function() {
                    return _this.eventStream.push(data);
                  });
                }
              } catch (_error) {
                e = _error;
                return (ref2 = _this.deferred[id]) != null ? ref2.reject(e) : void 0;
              }
            };
          })(this);
        };

        SocketService.prototype.close = function() {
          return this.socket.close();
        };

        SocketService.prototype.send = function(data) {
          var base, id;
          id = this.nextId();
          data._id = id;
          if ((base = this.deferred)[id] == null) {
            base[id] = $q.defer();
          }
          data = angular.toJson(data);
          if (this.socket.readyState === (this.socket.OPEN || 1)) {
            $log.debug('WS send', angular.fromJson(data));
            this.socket.send(data);
          } else {
            this.queue.push(data);
          }
          return this.deferred[id].promise;
        };

        SocketService.prototype.flush = function() {
          var data, results;
          results = [];
          while (data = this.queue.pop()) {
            $log.debug('WS send', angular.fromJson(data));
            results.push(this.socket.send(data));
          }
          return results;
        };

        SocketService.prototype.nextId = function() {
          if (this.id == null) {
            this.id = 0;
          }
          this.id = this.id < 1000 ? this.id + 1 : 0;
          return this.id;
        };

        SocketService.prototype.getUrl = function() {
          var host, port;
          host = $location.host();
          port = $location.port() === 80 ? '' : ':' + $location.port();
          return "ws://" + host + port + "/ws";
        };

        return SocketService;

      })());
    }

    return Socket;

  })();

  angular.module('bbData').service('socketService', ['$log', '$q', '$rootScope', '$location', 'Stream', 'webSocketService', Socket]);

}).call(this);

(function() {
  var WebSocket;

  WebSocket = (function() {
    function WebSocket($window) {
      var WebSocketProvider;
      return new (WebSocketProvider = (function() {
        function WebSocketProvider() {}

        WebSocketProvider.prototype.getWebSocket = function(url) {
          var match;
          match = /wss?:\/\//.exec(url);
          if (!match) {
            throw new Error('Invalid url provided');
          }
          if ($window.ReconnectingWebSocket != null) {
            return new $window.ReconnectingWebSocket(url);
          } else {
            return new $window.WebSocket(url);
          }
        };

        return WebSocketProvider;

      })());
    }

    return WebSocket;

  })();

  angular.module('bbData').service('webSocketService', ['$window', WebSocket]);

}).call(this);

(function() {
  var Stream;

  Stream = (function() {
    function Stream() {
      var StreamInstance;
      return StreamInstance = (function() {
        function StreamInstance() {}

        StreamInstance.prototype.onUnsubscribe = null;

        StreamInstance.prototype.listeners = [];

        StreamInstance.prototype.subscribe = function(listener) {
          if (!angular.isFunction(listener)) {
            throw new TypeError("Parameter 'listener' must be a function, not " + (typeof listener));
          }
          listener.id = this.generateId();
          this.listeners.push(listener);
          return (function(_this) {
            return function() {
              var i, removed;
              i = _this.listeners.indexOf(listener);
              removed = _this.listeners.splice(i, 1);
              if (angular.isFunction(_this.onUnsubscribe)) {
                return _this.onUnsubscribe(listener);
              }
            };
          })(this);
        };

        StreamInstance.prototype.push = function(data) {
          var j, len, listener, ref, results;
          ref = this.listeners;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            listener = ref[j];
            results.push(listener(data));
          }
          return results;
        };

        StreamInstance.prototype.destroy = function() {
          var results;
          results = [];
          while (this.listeners.length > 0) {
            results.push(this.listeners.pop());
          }
          return results;
        };

        StreamInstance.prototype.generateId = function() {
          if (this.lastId == null) {
            this.lastId = 0;
          }
          return this.lastId++;
        };

        return StreamInstance;

      })();
    }

    return Stream;

  })();

  angular.module('bbData').factory('Stream', [Stream]);

}).call(this);
