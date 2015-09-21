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
  var HttpConfig;

  HttpConfig = (function() {
    function HttpConfig($httpProvider) {
      $httpProvider.useApplyAsync(true);

      /* @ngInject */
      $httpProvider.interceptors.push(function($log, API) {
        return {
          request: function(config) {
            if (config.url.indexOf(API) === 0) {
              $log.debug("" + config.method + " " + config.url);
            }
            return config;
          }
        };
      });
    }

    return HttpConfig;

  })();

  angular.module('bbData').config(['$httpProvider', HttpConfig]);

}).call(this);

(function() {
  var Api;

  Api = (function() {
    function Api() {
      return 'api/v2/';
    }

    return Api;

  })();

  angular.module('bbData').constant('API', Api());

}).call(this);

(function() {
  var Specification;

  Specification = (function() {
    function Specification() {
      return {
        FIELDTYPES: {
          IDENTIFIER: 'i',
          NUMBER: 'n'
        },
        builds: {
          id: 'buildid',
          fields: ['buildid', 'builderid', 'buildrequestid', 'buildslaveid', 'complete', 'complete_at', 'masterid', 'number', 'results', 'started_at', 'state_string'],
          root: true,
          paths: ['changes', 'properties', 'steps', 'steps/i:name', 'steps/i:name/logs', 'steps/i:name/logs/i:slug', 'steps/i:name/logs/i:slug/contents', 'steps/i:name/logs/i:slug/raw', 'steps/n:number', 'steps/n:number/logs', 'steps/n:number/logs/i:slug', 'steps/n:number/logs/i:slug/contents', 'steps/n:number/logs/i:slug/raw'],
          "static": {
            complete: true
          }
        },
        builders: {
          id: 'builderid',
          identifier: 'name',
          fields: ['builderid', 'description', 'name', 'tags'],
          root: true,
          paths: ['forceschedulers', 'buildrequests', 'masters', 'masters/n:masterid', 'buildslaves', 'buildslaves/i:name', 'buildslaves/n:buildslaveid', 'builds', 'builds/n:number', 'builds/n:number/steps', 'builds/n:number/steps/i:name', 'builds/n:number/steps/i:name/logs', 'builds/n:number/steps/i:name/logs/i:slug', 'builds/n:number/steps/i:name/logs/i:slug/contents', 'builds/n:number/steps/i:name/logs/i:slug/raw', 'builds/n:number/steps/n:number', 'builds/n:number/steps/n:number/logs', 'builds/n:number/steps/n:number/logs/i:slug', 'builds/n:number/steps/n:number/logs/i:slug/contents', 'builds/n:number/steps/n:number/logs/i:slug/raw'],
          "static": true
        },
        buildrequests: {
          id: 'buildrequestid',
          fields: ['buildrequestid', 'builderid', 'buildsetid', 'claimed', 'claimed_at', 'claimed_by_masterid', 'complete', 'complete_at', 'priority', 'results', 'submitted_at', 'waited_for'],
          root: true,
          paths: ['builds'],
          "static": {
            complete: true
          }
        },
        buildsets: {
          id: 'bsid',
          fields: ['bsid', 'complete', 'complete_at', 'external_idstring', 'parent_buildid', 'parent_relationship', 'reason', 'results', 'sourcestamps', 'submitted_at'],
          root: true,
          paths: ['properties'],
          "static": {
            complete: true
          }
        },
        buildslaves: {
          id: 'buildslaveid',
          fields: ['buildslaveid', 'configured_on', 'connected_to', 'name', 'slaveinfo'],
          root: true,
          paths: [],
          "static": true
        },
        changes: {
          id: 'changeid',
          fields: ['changeid', 'author', 'branch', 'category', 'codebase', 'comments', 'files', 'parent_changeids', 'project', 'properties', 'repository', 'revision', 'revlink', 'sourcestamp', 'when_timestamp'],
          root: true,
          paths: [],
          "static": true
        },
        changesources: {
          id: 'changesourceid',
          fields: ['changesourceid', 'master', 'name'],
          root: true,
          paths: [],
          "static": true
        },
        forceschedulers: {
          id: 'name',
          fields: ['name', 'all_fields', 'builder_names', 'label'],
          root: true,
          paths: [],
          "static": true
        },
        masters: {
          id: 'masterid',
          fields: ['masterid', 'active', 'last_active', 'name'],
          root: true,
          paths: ['builders', 'builders/n:builderid', 'builders/n:builderid/buildslaves', 'builders/n:builderid/buildslaves/n:buildslaveid', 'builders/n:builderid/buildslaves/i:name', 'buildslaves', 'buildslaves/i:name', 'buildslaves/n:buildslaveid', 'changesources', 'changesources/n:changesourceid', 'schedulers', 'schedulers/n:schedulerid'],
          "static": true
        },
        schedulers: {
          id: 'schedulerid',
          fields: ['schedulerid', 'master', 'name'],
          root: true,
          paths: [],
          "static": true
        },
        sourcestamps: {
          id: 'ssid',
          fields: ['ssid', 'branch', 'codebase', 'created_at', 'patch', 'project', 'repository', 'revision'],
          root: true,
          paths: ['changes'],
          "static": true
        },
        steps: {
          id: 'stepid',
          identifier: 'name',
          fields: ['stepid', 'buildid', 'complete', 'complete_at', 'hidden', 'name', 'number', 'results', 'started_at', 'state_string', 'urls'],
          root: false,
          paths: ['logs', 'logs/i:slug', 'logs/i:slug/contents', 'logs/i:slug/raw'],
          "static": {
            complete: true
          }
        },
        logs: {
          id: 'logid',
          identifier: 'slug',
          fields: ['logid', 'complete', 'name', 'num_lines', 'slug', 'stepid', 'type'],
          root: false,
          paths: ['contents', 'raw'],
          "static": {
            complete: true
          }
        },
        contents: {
          id: null,
          fields: ['logid', 'logchunks', 'firstline'],
          root: false,
          restField: 'logchunks'
        },
        properties: {
          id: null,
          fields: [],
          root: false
        }
      };
    }

    return Specification;

  })();

  angular.module('bbData').constant('SPECIFICATION', Specification());

}).call(this);

(function() {
  var Generator,
    __slice = [].slice;

  Generator = (function() {
    var self;

    self = null;

    function Generator() {
      self = this;
    }

    Generator.prototype.number = function(min, max) {
      var random;
      if (min == null) {
        min = 0;
      }
      if (max == null) {
        max = 100;
      }
      random = Math.random() * (max - min) + min;
      return Math.floor(random);
    };

    Generator.prototype.ids = {};

    Generator.prototype.id = function(name) {
      var _base;
      if (name == null) {
        name = '';
      }
      if ((_base = self.ids)[name] == null) {
        _base[name] = 0;
      }
      return self.ids[name]++;
    };

    Generator.prototype.boolean = function() {
      return Math.random() < 0.5;
    };

    Generator.prototype.timestamp = function(after) {
      var date;
      if (after == null) {
        after = Date.now();
      }
      date = new Date(after + self.number(1, 1000000));
      return Math.floor(date.getTime() / 1000);
    };

    Generator.prototype.string = function(length) {
      if (length != null) {
        length++;
      }
      return self.number(100, Number.MAX_VALUE).toString(36).substring(0, length);
    };

    Generator.prototype.array = function() {
      var args, array, fn, i, times, _i;
      fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      times = self.number(1, 10);
      array = [];
      for (i = _i = 1; 1 <= times ? _i <= times : _i >= times; i = 1 <= times ? ++_i : --_i) {
        array.push(fn.apply(null, args));
      }
      return array;
    };

    return Generator;

  })();

  angular.module('bbData').service('generatorService', [Generator]);

}).call(this);

(function() {
  var Data,
    __slice = [].slice;

  Data = (function() {
    var config;

    Data.prototype.cache = true;

    config = null;

    function Data() {
      config = {
        cache: this.cache
      };
    }


    /* @ngInject */

    Data.prototype.$get = function($log, $injector, $q, $window, Collection, restService, dataUtilsService, tabexService, indexedDBService, SPECIFICATION) {
      var DataService;
      return new (DataService = (function() {
        var self;

        self = null;

        function DataService() {
          var endpoints;
          self = this;
          angular.extend(this, config);
          endpoints = Object.keys(SPECIFICATION).filter(function(e) {
            return SPECIFICATION[e].id != null;
          });
          this.constructor.generateEndpoints(endpoints);
        }

        DataService.prototype.clearCache = function() {
          return indexedDBService.clear().then(function() {
            if ($injector.has('$state')) {
              return $injector.get('$state').reload();
            } else if ($injector.has('$route')) {
              return $injector.get('$route').reload();
            } else {
              return $window.location.reload();
            }
          });
        };

        DataService.prototype.get = function() {
          var args, collection, query, restPath, _ref;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          _ref = this.processArguments(args), restPath = _ref[0], query = _ref[1];
          if (query.subscribe == null) {
            query.subscribe = false;
          }
          collection = this.createCollection(restPath, query);
          return collection.subscribe();
        };

        DataService.prototype.mocks = {};

        DataService.prototype.spied = false;

        DataService.prototype.when = function() {
          var args, query, returnValue, url, _base, _ref;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          url = args[0], query = args[1], returnValue = args[2];
          if (returnValue == null) {
            _ref = [{}, query], query = _ref[0], returnValue = _ref[1];
          }
          if ((typeof jasmine !== "undefined" && jasmine !== null) && !this.spied) {
            spyOn(this, 'get').and.callFake(this._mockGet);
            this.spied = true;
          }
          if ((_base = this.mocks)[url] == null) {
            _base[url] = {};
          }
          return this.mocks[url][query] = returnValue;
        };

        DataService.prototype._mockGet = function() {
          var args, collection, p, query, queryWithoutSubscribe, returnValue, url, _ref, _ref1, _ref2;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          _ref = this.processArguments(args), url = _ref[0], query = _ref[1];
          queryWithoutSubscribe = angular.copy(query);
          delete queryWithoutSubscribe.subscribe;
          returnValue = ((_ref1 = this.mocks[url]) != null ? _ref1[query] : void 0) || ((_ref2 = this.mocks[url]) != null ? _ref2[queryWithoutSubscribe] : void 0);
          if (returnValue == null) {
            throw new Error("No return value for: " + url + " (" + (angular.toJson(query)) + ")");
          }
          collection = this.createCollection(url, query);
          collection.from(returnValue);
          p = $q.resolve(collection);
          p.getArray = function() {
            return collection;
          };
          return p;
        };

        DataService.prototype.createCollection = function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return (function(func, args, ctor) {
            ctor.prototype = func.prototype;
            var child = new ctor, result = func.apply(child, args);
            return Object(result) === result ? result : child;
          })(Collection, args, function(){});
        };

        DataService.prototype.processArguments = function(args) {
          var last, query, restPath;
          args.filter(function(e) {
            return e != null;
          });
          last = args[args.length - 1];
          if (angular.isObject(last)) {
            query = args.pop();
          }
          restPath = dataUtilsService.restPath(args);
          return [restPath, query || {}];
        };

        DataService.prototype.control = function(url, method, params) {
          if (params == null) {
            params = {};
          }
          if (this.jsonrpc == null) {
            this.jsonrpc = 1;
          }
          return restService.post(url, {
            id: this.jsonrpc++,
            jsonrpc: '2.0',
            method: method,
            params: params
          });
        };

        DataService.generateEndpoints = function(endpoints) {
          return endpoints.forEach((function(_this) {
            return function(e) {
              var E;
              E = dataUtilsService.capitalize(e);
              return _this.prototype["get" + E] = function() {
                var args;
                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                return self.get.apply(self, [e].concat(__slice.call(args)));
              };
            };
          })(this));
        };

        DataService.prototype.open = function(scope) {
          var DataAccessor;
          return new (DataAccessor = (function() {
            var collections;

            collections = [];

            function DataAccessor() {
              var endpoints;
              this.collections = collections;
              endpoints = Object.keys(SPECIFICATION).filter(function(e) {
                return SPECIFICATION[e].id != null;
              });
              this.constructor.generateEndpoints(endpoints);
              if (scope != null) {
                this.closeOnDestroy(scope);
              }
            }

            DataAccessor.prototype.close = function() {
              return collections.forEach(function(c) {
                return typeof c.unsubscribe === "function" ? c.unsubscribe() : void 0;
              });
            };

            DataAccessor.prototype.closeOnDestroy = function(scope) {
              if (!angular.isFunction(scope.$on)) {
                throw new Error("Parameter 'scope' doesn't have an $on function");
              }
              return scope.$on('$destroy', (function(_this) {
                return function() {
                  return _this.close();
                };
              })(this));
            };

            DataAccessor.generateEndpoints = function(endpoints) {
              return endpoints.forEach((function(_this) {
                return function(e) {
                  var E;
                  E = dataUtilsService.capitalize(e);
                  return _this.prototype["get" + E] = function() {
                    var args, last, p;
                    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                    last = args[args.length - 1];
                    if (angular.isObject(last)) {
                      if (last.subscribe == null) {
                        last.subscribe = true;
                      }
                    } else {
                      args.push({
                        subscribe: true
                      });
                    }
                    p = self["get" + E].apply(self, args);
                    collections.push(p.getArray());
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
    Data.prototype.$get.$inject = ["$log", "$injector", "$q", "$window", "Collection", "restService", "dataUtilsService", "tabexService", "indexedDBService", "SPECIFICATION"];

    return Data;

  })();

  angular.module('bbData').provider('dataService', [Data]);

}).call(this);

(function() {
  var DBStores;

  DBStores = (function() {
    function DBStores() {
      return {
        paths: '&[path+query],path,query,lastActive'
      };
    }

    return DBStores;

  })();

  angular.module('bbData').constant('DBSTORES', DBStores());

}).call(this);

(function() {
  var DataUtils;

  DataUtils = (function() {
    function DataUtils(SPECIFICATION) {
      var dataUtilsService;
      return new (dataUtilsService = (function() {
        function dataUtilsService() {}

        dataUtilsService.prototype.capitalize = function(string) {
          return string[0].toUpperCase() + string.slice(1).toLowerCase();
        };

        dataUtilsService.prototype.type = function(arg) {
          var a;
          a = this.copyOrSplit(arg);
          a = a.filter(function(e) {
            return e !== '*';
          });
          if (a.length % 2 === 0) {
            a.pop();
          }
          return a.pop();
        };

        dataUtilsService.prototype.singularType = function(arg) {
          return this.type(arg).replace(/s$/, '');
        };

        dataUtilsService.prototype.socketPath = function(arg) {
          var a, stars;
          a = this.copyOrSplit(arg);
          stars = ['*'];
          if (a.length % 2 === 1) {
            stars.push('*');
          }
          return a.concat(stars).join('/');
        };

        dataUtilsService.prototype.restPath = function(arg) {
          var a;
          a = this.copyOrSplit(arg);
          a = a.filter(function(e) {
            return e !== '*';
          });
          return a.join('/');
        };

        dataUtilsService.prototype.endpointPath = function(arg) {
          var a;
          a = this.copyOrSplit(arg);
          a = a.filter(function(e) {
            return e !== '*';
          });
          if (a.length % 2 === 0) {
            a.pop();
          }
          return a.join('/');
        };

        dataUtilsService.prototype.copyOrSplit = function(arrayOrString) {
          if (angular.isArray(arrayOrString)) {
            return arrayOrString.slice(0);
          } else if (angular.isString(arrayOrString)) {
            return arrayOrString.split('/');
          } else {
            throw new TypeError("Parameter 'arrayOrString' must be a array or a string, not " + (typeof arrayOrString));
          }
        };

        dataUtilsService.prototype.unWrap = function(data, path) {
          var type, _ref;
          type = this.type(path);
          type = ((_ref = SPECIFICATION[type]) != null ? _ref.restField : void 0) || type;
          return data[type];
        };

        dataUtilsService.prototype.parse = function(object) {
          var error, k, v;
          for (k in object) {
            v = object[k];
            try {
              object[k] = angular.fromJson(v);
            } catch (_error) {
              error = _error;
            }
          }
          return object;
        };

        dataUtilsService.prototype.numberOrString = function(str) {
          var number;
          if (str == null) {
            str = null;
          }
          if (angular.isNumber(str)) {
            return str;
          }
          number = parseInt(str, 10);
          if (!isNaN(number)) {
            return number;
          } else {
            return str;
          }
        };

        dataUtilsService.prototype.emailInString = function(string) {
          var emailRegex;
          if (!angular.isString(string)) {
            throw new TypeError("Parameter 'string' must be a string, not " + (typeof string));
          }
          emailRegex = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/;
          return emailRegex.exec(string).pop() || '';
        };

        return dataUtilsService;

      })());
    }

    return DataUtils;

  })();

  angular.module('bbData').service('dataUtilsService', ['SPECIFICATION', DataUtils]);

}).call(this);

(function() {
  var IndexedDB,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  IndexedDB = (function() {
    function IndexedDB($log, $injector, $q, $window, dataUtilsService, DBSTORES, SPECIFICATION) {
      var IndexedDBService;
      return new (IndexedDBService = (function() {
        function IndexedDBService() {
          var stores;
          this.db = new $window.Dexie('BBCache');
          stores = {};
          angular.extend(stores, this.processSpecification(SPECIFICATION), DBSTORES);
          this.db.version(1).stores(stores);
          this.db.on('error', function(e) {
            return $log.error(e);
          });
          this.open();
        }

        IndexedDBService.prototype.open = function() {
          return $q((function(_this) {
            return function(resolve) {
              return _this.db.open()["catch"](function(e) {
                return $log.error('indexedDBService: open', e);
              })["finally"](function() {
                return resolve();
              });
            };
          })(this));
        };

        IndexedDBService.prototype.clear = function() {
          return $q((function(_this) {
            return function(resolve) {
              return _this.db["delete"]()["catch"](function(e) {
                return $log.error('indexedDBService: clear', e);
              })["finally"](function() {
                return _this.open().then(function() {
                  return resolve();
                });
              });
            };
          })(this));
        };

        IndexedDBService.prototype.get = function(url, query) {
          if (query == null) {
            query = {};
          }
          return $q((function(_this) {
            return function(resolve, reject) {
              return _this.processUrl(url).then(function(_arg) {
                var id, q, table, tableName;
                tableName = _arg[0], q = _arg[1], id = _arg[2];
                angular.extend(query, q);
                if (SPECIFICATION[tableName] == null) {
                  resolve([]);
                  return;
                }
                table = _this.db[tableName];
                return _this.db.transaction('r', table, function() {
                  if (id != null) {
                    table.get(id).then(function(e) {
                      return resolve(dataUtilsService.parse(e));
                    });
                    return;
                  }
                  return table.toArray().then(function(array) {
                    var fieldAndOperator, fields, filters, limit, offset, order, property, value;
                    array = array.map(function(e) {
                      return dataUtilsService.parse(e);
                    });
                    filters = [];
                    for (fieldAndOperator in query) {
                      value = query[fieldAndOperator];
                      if (['field', 'limit', 'offset', 'order'].indexOf(fieldAndOperator) < 0) {
                        filters[fieldAndOperator] = value;
                      }
                    }
                    array = _this.filter(array, filters, tableName);
                    order = query != null ? query.order : void 0;
                    array = _this.sort(array, order);
                    offset = query != null ? query.offset : void 0;
                    limit = query != null ? query.limit : void 0;
                    array = _this.paginate(array, offset, limit);
                    property = query != null ? query.property : void 0;
                    array = _this.properties(array, property);
                    fields = query != null ? query.field : void 0;
                    array = _this.fields(array, fields);
                    return resolve(array);
                  });
                });
              });
            };
          })(this));
        };

        IndexedDBService.prototype.filter = function(array, filters, tableName) {
          return array.filter(function(v) {
            var cmp, field, fieldAndOperator, operator, value, _ref;
            for (fieldAndOperator in filters) {
              value = filters[fieldAndOperator];
              if (['on', 'true', 'yes'].indexOf(value) > -1) {
                value = true;
              } else if (['off', 'false', 'no'].indexOf(value) > -1) {
                value = false;
              }
              _ref = fieldAndOperator.split('__'), field = _ref[0], operator = _ref[1];
              switch (operator) {
                case 'ne':
                  cmp = v[field] !== value;
                  break;
                case 'lt':
                  cmp = v[field] < value;
                  break;
                case 'le':
                  cmp = v[field] <= value;
                  break;
                case 'gt':
                  cmp = v[field] > value;
                  break;
                case 'ge':
                  cmp = v[field] >= value;
                  break;
                default:
                  cmp = v[field] === value || (angular.isArray(v[field]) && __indexOf.call(v[field], value) >= 0) || v["_" + field] === value || (angular.isArray(v["_" + field]) && __indexOf.call(v["_" + field], value) >= 0);
              }
              if (!cmp) {
                return false;
              }
            }
            return true;
          });
        };

        IndexedDBService.prototype.sort = function(array, order) {
          var compare, copy;
          compare = function(property) {
            var reverse;
            if (property[0] === '-') {
              property = property.slice(1);
              reverse = true;
            }
            return function(a, b) {
              var _ref;
              if (reverse) {
                _ref = [b, a], a = _ref[0], b = _ref[1];
              }
              if (a[property] < b[property]) {
                return -1;
              } else if (a[property] > b[property]) {
                return 1;
              } else {
                return 0;
              }
            };
          };
          copy = array.slice(0);
          if (angular.isString(order)) {
            copy.sort(compare(order));
          } else if (angular.isArray(order)) {
            copy.sort(function(a, b) {
              var f, o, _i, _len;
              for (_i = 0, _len = order.length; _i < _len; _i++) {
                o = order[_i];
                f = compare(o)(a, b);
                if (f) {
                  return f;
                }
              }
              return 0;
            });
          }
          return copy;
        };

        IndexedDBService.prototype.paginate = function(array, offset, limit) {
          var end;
          if (offset == null) {
            offset = 0;
          }
          if (offset >= array.length) {
            return [];
          }
          if ((limit == null) || offset + limit > array.length) {
            end = array.length;
          } else {
            end = offset + limit - 1;
          }
          return array.slice(offset, +end + 1 || 9e9);
        };

        IndexedDBService.prototype.properties = function(array, properties) {
          return array;
        };

        IndexedDBService.prototype.fields = function(array, fields) {
          var element, key, _i, _len;
          if (fields == null) {
            return array;
          }
          if (!angular.isArray(fields)) {
            fields = [fields];
          }
          for (_i = 0, _len = array.length; _i < _len; _i++) {
            element = array[_i];
            for (key in element) {
              if (__indexOf.call(fields, key) < 0) {
                delete element[key];
              }
            }
          }
          return array;
        };

        IndexedDBService.prototype.processUrl = function(url) {
          return $q((function(_this) {
            return function(resolve, reject) {
              var fieldName, fieldType, fieldValue, id, match, nextUrl, parentFieldName, parentFieldValue, parentId, parentName, path, pathString, query, root, specification, splitted, tableName, _ref, _ref1, _ref2, _ref3;
              _ref = url.split('/'), root = _ref[0], id = _ref[1], path = 3 <= _ref.length ? __slice.call(_ref, 2) : [];
              specification = SPECIFICATION[root];
              query = {};
              if (path.length === 0) {
                id = dataUtilsService.numberOrString(id);
                if (angular.isString(id) && specification.identifier) {
                  query[specification.identifier] = id;
                  id = null;
                }
                resolve([root, query, id]);
                return;
              }
              pathString = path.join('/');
              match = specification.paths.filter(function(p) {
                var replaced;
                replaced = p.replace(RegExp("" + SPECIFICATION.FIELDTYPES.IDENTIFIER + "\\:\\w+", "g"), '[a-zA-Z]+').replace(RegExp("" + SPECIFICATION.FIELDTYPES.NUMBER + "\\:\\w+", "g"), '\\d+');
                return RegExp("^" + replaced + "$").test(pathString);
              }).pop();
              if (match == null) {
                throw new Error("No child path (" + (path.join('/')) + ") found for root (" + root + ")");
              }
              match = match.split('/');
              if (path.length % 2 === 0) {
                fieldValue = dataUtilsService.numberOrString(path.pop());
                _ref1 = match.pop().split(':'), fieldType = _ref1[0], fieldName = _ref1[1];
              }
              tableName = path.pop();
              match.pop();
              parentFieldValue = dataUtilsService.numberOrString(path.pop() || id);
              parentFieldName = ((_ref2 = match.pop()) != null ? _ref2.split(':').pop() : void 0) || SPECIFICATION[root].id;
              parentName = match.pop() || root;
              parentId = SPECIFICATION[parentName].id;
              if (fieldName === ((_ref3 = SPECIFICATION[tableName]) != null ? _ref3.id : void 0)) {
                id = fieldValue;
                return resolve([tableName, query, id]);
              } else {
                if (parentFieldName !== parentId) {
                  splitted = url.split('/');
                  nextUrl = splitted.slice(0, (splitted.length % 2 === 0 ? -2 : -1)).join('/');
                  return _this.get(nextUrl).then(function(array) {
                    query[parentId] = array[0][parentId];
                    if (fieldName != null) {
                      query[fieldName] = fieldValue;
                    }
                    return resolve([tableName, query, null]);
                  });
                } else {
                  query[parentFieldName] = parentFieldValue;
                  if (fieldName != null) {
                    query[fieldName] = fieldValue;
                  }
                  return resolve([tableName, query, null]);
                }
              }
            };
          })(this));
        };

        IndexedDBService.prototype.processSpecification = function(specification) {
          var a, i, name, s, stores;
          stores = {};
          for (name in specification) {
            s = specification[name];
            if (angular.isArray(s.fields)) {
              a = s.fields.slice(0);
              i = a.indexOf(s.id);
              if (i > -1) {
                a[i] = "&" + a[i];
              } else {
                a.unshift('++id');
              }
              stores[name] = a.join(',');
            }
          }
          return stores;
        };

        return IndexedDBService;

      })());
    }

    return IndexedDB;

  })();

  angular.module('bbData').service('indexedDBService', ['$log', '$injector', '$q', '$window', 'dataUtilsService', 'DBSTORES', 'SPECIFICATION', IndexedDB]);

}).call(this);

(function() {
  var Rest,
    __slice = [].slice;

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
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
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
    function Socket($log, $q, $location, $window, webSocketBackendService) {
      var SocketService;
      return new (SocketService = (function() {
        function SocketService() {}

        SocketService.prototype.queue = [];

        SocketService.prototype.deferred = {};

        SocketService.prototype.onMessage = null;

        SocketService.prototype.onClose = null;

        SocketService.prototype.open = function() {
          if (this.socket == null) {
            this.socket = this.getWebSocket();
          }
          this.socket.onopen = (function(_this) {
            return function() {
              return _this.flush();
            };
          })(this);
          this.socket.onmessage = (function(_this) {
            return function(message) {
              var code, data, e, error, id, key, _ref, _ref1, _ref2, _ref3;
              try {
                data = angular.fromJson(message.data);
                $log.debug('WS message', data);
                if (data._id != null) {
                  _ref = [data.msg, data.error, data._id, data.code], message = _ref[0], error = _ref[1], id = _ref[2], code = _ref[3];
                  if (code === 200) {
                    return (_ref1 = _this.deferred[id]) != null ? _ref1.resolve(message) : void 0;
                  } else {
                    return (_ref2 = _this.deferred[id]) != null ? _ref2.reject(error) : void 0;
                  }
                } else {
                  _ref3 = [data.k, data.m], key = _ref3[0], message = _ref3[1];
                  return typeof _this.onMessage === "function" ? _this.onMessage(key, message) : void 0;
                }
              } catch (_error) {
                e = _error;
                return $log.error(e);
              }
            };
          })(this);
          return this.socket.onclose = (function(_this) {
            return function() {
              return typeof _this.onClose === "function" ? _this.onClose() : void 0;
            };
          })(this);
        };

        SocketService.prototype.close = function() {
          var _ref;
          return (_ref = this.socket) != null ? _ref.close() : void 0;
        };

        SocketService.prototype.send = function(data) {
          var id, _base;
          id = this.nextId();
          data._id = id;
          if ((_base = this.deferred)[id] == null) {
            _base[id] = $q.defer();
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
          var data, _results;
          _results = [];
          while (data = this.queue.shift()) {
            $log.debug('WS send', angular.fromJson(data));
            _results.push(this.socket.send(data));
          }
          return _results;
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

        SocketService.prototype.getWebSocket = function() {
          var url;
          url = this.getUrl();
          if (typeof jasmine !== "undefined" && jasmine !== null) {
            return webSocketBackendService.getWebSocket();
          }
          if ($window.ReconnectingWebSocket != null) {
            return new $window.ReconnectingWebSocket(url);
          }
          return new $window.WebSocket(url);
        };

        return SocketService;

      })());
    }

    return Socket;

  })();

  angular.module('bbData').service('socketService', ['$log', '$q', '$location', '$window', 'webSocketBackendService', Socket]);

}).call(this);

(function() {
  var WebSocketBackend;

  WebSocketBackend = (function() {
    var MockWebSocket, self;

    self = null;

    function WebSocketBackend() {
      self = this;
      this.webSocket = new MockWebSocket();
    }

    WebSocketBackend.prototype.sendQueue = [];

    WebSocketBackend.prototype.receiveQueue = [];

    WebSocketBackend.prototype.send = function(message) {
      var data;
      data = {
        data: message
      };
      return this.sendQueue.push(data);
    };

    WebSocketBackend.prototype.flush = function() {
      var message, _results;
      _results = [];
      while (message = this.sendQueue.shift()) {
        _results.push(this.webSocket.onmessage(message));
      }
      return _results;
    };

    WebSocketBackend.prototype.getWebSocket = function() {
      return this.webSocket;
    };

    MockWebSocket = (function() {
      function MockWebSocket() {}

      MockWebSocket.prototype.OPEN = 1;

      MockWebSocket.prototype.send = function(message) {
        return self.receiveQueue.push(message);
      };

      MockWebSocket.prototype.close = function() {
        return typeof this.onclose === "function" ? this.onclose() : void 0;
      };

      return MockWebSocket;

    })();

    return WebSocketBackend;

  })();

  angular.module('bbData').service('webSocketBackendService', [WebSocketBackend]);

}).call(this);

(function() {
  var Tabex,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  Tabex = (function() {
    function Tabex($log, $window, $q, $timeout, socketService, restService, dataUtilsService, indexedDBService, SPECIFICATION) {
      var TabexService;
      return new (TabexService = (function() {
        var CHANNELS, EVENTS, ROLES;

        CHANNELS = {
          MASTER: '!sys.master',
          REFRESH: '!sys.channels.refresh'
        };

        ROLES = {
          MASTER: 'bb.role.master',
          SLAVE: 'bb.role.slave'
        };

        TabexService.prototype._ROLES = ROLES;

        EVENTS = {
          READY: 'bb.event.ready',
          UPDATE: 'bb.event.update',
          NEW: 'bb.event.new'
        };

        TabexService.prototype.EVENTS = EVENTS;

        TabexService.prototype.client = $window.tabex.client();

        function TabexService() {
          this.closeHandler = __bind(this.closeHandler, this);
          this.messageHandler = __bind(this.messageHandler, this);
          this.refreshHandler = __bind(this.refreshHandler, this);
          this.masterHandler = __bind(this.masterHandler, this);
          socketService.onMessage = this.messageHandler;
          socketService.onClose = this.closeHandler;
          this.initialRoleDeferred = $q.defer();
          this.initialRole = this.initialRoleDeferred.promise;
          this.client.on(CHANNELS.MASTER, this.masterHandler);
          this.client.on(CHANNELS.REFRESH, this.refreshHandler);
          $window.onunload = $window.onbeforeunload = (function(_this) {
            return function(e) {
              _this.activatePaths();
              return null;
            };
          })(this);
        }

        TabexService.prototype.getSpecification = function(type) {
          return SPECIFICATION[type];
        };

        TabexService.prototype.masterHandler = function(data) {
          if (data.node_id === data.master_id) {
            this.role = ROLES.MASTER;
            this.initialRoleDeferred.resolve();
            return socketService.open();
          } else {
            this.role = ROLES.SLAVE;
            this.initialRoleDeferred.resolve();
            return socketService.close();
          }
        };

        TabexService.prototype.refreshHandler = function(data) {
          return this.initialRole.then((function(_this) {
            return function() {
              if (_this.role === ROLES.MASTER) {
                return _this.masterRefreshHandler(data);
              }
            };
          })(this));
        };

        TabexService.prototype.debounceTimeout = 100;

        TabexService.prototype.trackedPaths = {};

        TabexService.prototype.consuming = {};

        TabexService.prototype.masterRefreshHandler = function(data) {
          if (this.timeoutPromise != null) {
            $timeout.cancel(this.timeoutPromise);
          }
          return this.timeoutPromise = $timeout((function(_this) {
            return function() {
              return _this.activatePaths().then(function() {
                var channel, channels, e, paths, r, _i, _len, _name;
                channels = data.channels.filter(function(c) {
                  return c.indexOf('!sys.') !== 0;
                });
                paths = {};
                for (_i = 0, _len = channels.length; _i < _len; _i++) {
                  channel = channels[_i];
                  try {
                    r = angular.fromJson(channel);
                    if (paths[_name = r.path] == null) {
                      paths[_name] = [];
                    }
                    paths[r.path].push(r.query);
                  } catch (_error) {
                    e = _error;
                    $log.error('channel is not a JSON string', channel);
                    return;
                  }
                }
                return _this.startConsumingAll(paths).then(function() {
                  var path;
                  for (path in _this.consuming) {
                    if (!(path in paths)) {
                      _this.stopConsuming(path);
                      delete _this.consuming[path];
                    }
                  }
                  _this.trackedPaths = paths;
                  return _this.loadAll(paths);
                });
              });
            };
          })(this), this.debounceTimeout);
        };

        TabexService.prototype.messageHandler = function(key, message) {
          var event, id, type, _ref;
          _ref = key.split('/').slice(-3), type = _ref[0], id = _ref[1], event = _ref[2];
          if (event === 'new') {
            event = EVENTS.NEW;
          } else {
            event = EVENTS.UPDATE;
          }
          return indexedDBService.db[type].put(message).then((function(_this) {
            return function() {
              var path, query, _results;
              _results = [];
              for (path in _this.trackedPaths) {
                if (RegExp("^" + (path.replace(/\*/g, '(\\w+|\\d+)')) + "$").test(key)) {
                  _results.push((function() {
                    var _i, _len, _ref1, _results1;
                    _ref1 = this.trackedPaths[path];
                    _results1 = [];
                    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                      query = _ref1[_i];
                      _results1.push(this.emit(path, query, event));
                    }
                    return _results1;
                  }).call(_this));
                } else {
                  _results.push(void 0);
                }
              }
              return _results;
            };
          })(this));
        };

        TabexService.prototype.closeHandler = function() {
          var paths;
          paths = angular.copy(this.trackedPaths);
          this.trackedPaths = {};
          return this.startConsumingAll(paths);
        };

        TabexService.prototype.loadAll = function(paths) {
          var db;
          db = indexedDBService.db;
          return db.paths.toArray().then((function(_this) {
            return function(dbPaths) {
              var path, queries, query, _results;
              _results = [];
              for (path in paths) {
                queries = paths[path];
                _results.push((function() {
                  var _i, _len, _results1;
                  _results1 = [];
                  for (_i = 0, _len = queries.length; _i < _len; _i++) {
                    query = queries[_i];
                    _results1.push(this.load(path, query, dbPaths));
                  }
                  return _results1;
                }).call(_this));
              }
              return _results;
            };
          })(this));
        };

        TabexService.prototype.load = function(path, query, dbPaths) {
          if (dbPaths == null) {
            dbPaths = [];
          }
          return $q((function(_this) {
            return function(resolve, reject) {
              var active, db, dbPath, elapsed, inCache, parentId, parentIdName, parentName, restPath, specification, t, _i, _len, _ref, _ref1;
              db = indexedDBService.db;
              t = dataUtilsService.type(path);
              specification = _this.getSpecification(t);
              for (_i = 0, _len = dbPaths.length; _i < _len; _i++) {
                dbPath = dbPaths[_i];
                dbPath.query = angular.fromJson(dbPath.query);
                inCache = (dbPath.path === path && (angular.equals(dbPath.query, query) || angular.equals(dbPath.query, {}))) || (dbPath.path === t && angular.equals(dbPath.query, {}));
                elapsed = new Date() - new Date(dbPath.lastActive);
                active = elapsed < 2000 || specification["static"] === true;
                if (inCache && active) {
                  resolve();
                  return;
                }
              }
              restPath = dataUtilsService.restPath(path);
              _ref = _this.getParent(restPath), parentName = _ref[0], parentId = _ref[1];
              parentIdName = (_ref1 = SPECIFICATION[parentName]) != null ? _ref1.id : void 0;
              if (parentIdName != null) {
                parentIdName = "_" + parentIdName;
              }
              return restService.get(restPath, query).then(function(data) {
                var type;
                type = dataUtilsService.type(restPath);
                data = dataUtilsService.unWrap(data, type);
                return db.transaction('rw', db[type], function() {
                  if (!angular.isArray(data)) {
                    data = [data];
                  }
                  return data.forEach(function(i) {
                    var id, idName, put, _ref2;
                    put = function(element) {
                      var k, v;
                      for (k in element) {
                        v = element[k];
                        if (angular.isObject(element[k])) {
                          element[k] = angular.toJson(v);
                        }
                      }
                      return db[type].put(element);
                    };
                    idName = (_ref2 = SPECIFICATION[type]) != null ? _ref2.id : void 0;
                    id = i[idName];
                    if (id != null) {
                      return db[type].get(id).then(function(e) {
                        var k, v;
                        e = dataUtilsService.parse(e);
                        for (k in i) {
                          v = i[k];
                          e[k] = v;
                        }
                        if (parentIdName != null) {
                          if (e[parentIdName] == null) {
                            e[parentIdName] = [];
                          }
                          if (__indexOf.call(e[parentIdName], parentId) < 0) {
                            e[parentIdName].push(parentId);
                          }
                        }
                        return put(e);
                      })["catch"](function() {
                        if (parentIdName != null) {
                          i[parentIdName] = [parentId];
                        }
                        return put(i);
                      });
                    } else {
                      if (parentIdName != null) {
                        i[parentIdName] = [parentId];
                      }
                      return put(i);
                    }
                  });
                }).then(function() {
                  return db.transaction('rw', db.paths, function() {
                    return db.paths.put({
                      path: path,
                      query: angular.toJson(query)
                    });
                  }).then(function() {
                    return resolve();
                  })["catch"](function(error) {
                    return reject(error);
                  });
                })["catch"](function(error) {
                  return reject(error);
                });
              }, function(error) {
                return reject(error);
              });
            };
          })(this)).then((function(_this) {
            return function() {
              return _this.emit(path, query, EVENTS.READY);
            };
          })(this), (function(_this) {
            return function(error) {
              return $log.error(error);
            };
          })(this));
        };

        TabexService.prototype.getParent = function(restPath) {
          var id, name, path;
          path = restPath.split('/');
          if (path % 2 === 0) {
            path.pop();
          }
          path.pop();
          id = dataUtilsService.numberOrString(path.pop());
          name = path.pop();
          return [name, id];
        };

        TabexService.prototype.activatePaths = function() {
          var db, paths;
          paths = angular.copy(this.trackedPaths);
          db = indexedDBService.db;
          return db.transaction('rw', db.paths, (function(_this) {
            return function() {
              var now, path, queries, query, _results;
              now = (new Date()).toString();
              _results = [];
              for (path in paths) {
                queries = paths[path];
                _results.push((function() {
                  var _i, _len, _results1;
                  _results1 = [];
                  for (_i = 0, _len = queries.length; _i < _len; _i++) {
                    query = queries[_i];
                    _results1.push(db.paths.where('[path+query]').equals([path, angular.toJson(query)]).modify({
                      'lastActive': now
                    }));
                  }
                  return _results1;
                })());
              }
              return _results;
            };
          })(this));
        };

        TabexService.prototype.on = function() {
          var channel, listener, options, path, query, subscribe, _i;
          options = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), listener = arguments[_i++];
          path = options[0], query = options[1];
          query = angular.copy(query) || {};
          subscribe = query.subscribe;
          delete query.subscribe;
          if (subscribe === false) {
            indexedDBService.db.paths.toArray().then((function(_this) {
              return function(dbPaths) {
                return _this.load(path, query, dbPaths).then(function() {
                  return listener(EVENTS.READY);
                });
              };
            })(this));
            return;
          }
          channel = {
            path: path,
            query: query
          };
          return this.client.on(angular.toJson(channel), listener);
        };

        TabexService.prototype.off = function() {
          var channel, listener, options, path, query, _i;
          options = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), listener = arguments[_i++];
          path = options[0], query = options[1];
          query = angular.copy(query) || {};
          delete query.subscribe;
          channel = {
            path: path,
            query: query
          };
          return this.client.off(angular.toJson(channel), listener);
        };

        TabexService.prototype.emit = function() {
          var channel, message, options, path, query, _i;
          options = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), message = arguments[_i++];
          path = options[0], query = options[1];
          channel = {
            path: path,
            query: query || {}
          };
          return this.client.emit(angular.toJson(channel), message, true);
        };

        TabexService.prototype.startConsuming = function(path) {
          return socketService.send({
            cmd: 'startConsuming',
            path: path
          });
        };

        TabexService.prototype.stopConsuming = function(path) {
          return socketService.send({
            cmd: 'stopConsuming',
            path: path
          });
        };

        TabexService.prototype.startConsumingAll = function(paths) {
          var i, j, p, path, pathsToRemove, promises, q, r, socketPaths, _i, _j, _k, _l, _len, _len1, _len2, _len3;
          if (angular.isArray(paths)) {
            socketPaths = paths.slice(0);
          } else if (angular.isObject(paths)) {
            socketPaths = Object.keys(paths);
          } else {
            throw new Error('Parameter paths is not an object or an array');
          }
          pathsToRemove = [];
          for (i = _i = 0, _len = socketPaths.length; _i < _len; i = ++_i) {
            p = socketPaths[i];
            r = RegExp("^" + (p.replace(/\*/g, '(\\w+|\\d+|\\*)')) + "$");
            for (j = _j = 0, _len1 = socketPaths.length; _j < _len1; j = ++_j) {
              q = socketPaths[j];
              if (j !== i && r.test(q)) {
                pathsToRemove.push(q);
              }
            }
          }
          for (_k = 0, _len2 = pathsToRemove.length; _k < _len2; _k++) {
            p = pathsToRemove[_k];
            socketPaths.splice(socketPaths.indexOf(p), 1);
          }
          promises = [];
          for (_l = 0, _len3 = socketPaths.length; _l < _len3; _l++) {
            path = socketPaths[_l];
            if (!(path in this.trackedPaths)) {
              this.consuming[path] = true;
              promises.push(this.startConsuming(path));
            }
          }
          return $q.all(promises);
        };

        TabexService.prototype.mergePaths = function(dest, src) {
          var path, queries, query, _results;
          _results = [];
          for (path in src) {
            queries = src[path];
            if (dest[path] == null) {
              dest[path] = [];
            }
            _results.push((function() {
              var _i, _len, _results1;
              _results1 = [];
              for (_i = 0, _len = queries.length; _i < _len; _i++) {
                query = queries[_i];
                if (dest[path].filter(function(e) {
                  return angular.equals(e, query);
                }).length === 0) {
                  _results1.push(dest[path].push(query));
                } else {
                  _results1.push(void 0);
                }
              }
              return _results1;
            })());
          }
          return _results;
        };

        return TabexService;

      })());
    }

    return Tabex;

  })();

  angular.module('bbData').service('tabexService', ['$log', '$window', '$q', '$timeout', 'socketService', 'restService', 'dataUtilsService', 'indexedDBService', 'SPECIFICATION', Tabex]);

}).call(this);

(function() {
  var Collection,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Collection = (function() {
    function Collection($q, $injector, $log, dataUtilsService, tabexService, indexedDBService, SPECIFICATION) {
      var CollectionInstance;
      return CollectionInstance = (function(_super) {
        __extends(CollectionInstance, _super);

        function CollectionInstance(restPath, query) {
          var Wrapper, ready;
          if (query == null) {
            query = {};
          }
          this.listener = __bind(this.listener, this);
          this.getRestPath = function() {
            return restPath;
          };
          this.getQuery = function() {
            return query;
          };
          this.getSocketPath = function() {
            return dataUtilsService.socketPath(restPath);
          };
          this.getType = function() {
            return dataUtilsService.type(restPath);
          };
          this.getEndpoint = function() {
            return dataUtilsService.endpointPath(restPath);
          };
          this.getSpecification = function() {
            return SPECIFICATION[this.getType()];
          };
          Wrapper = $injector.get('Wrapper');
          this.getWrapper = function() {
            return Wrapper;
          };
          ready = $q.defer();
          this.getReadyDeferred = function() {
            return ready;
          };
          this.getReadyPromise = function() {
            return ready.promise;
          };
        }

        CollectionInstance.prototype.subscribe = function() {
          var promise;
          tabexService.on(this.getSocketPath(), this.getQuery(), this.listener);
          promise = this.getReadyPromise();
          promise.getArray = (function(_this) {
            return function() {
              return _this;
            };
          })(this);
          return promise;
        };

        CollectionInstance.prototype.unsubscribe = function() {
          this.forEach(function(e) {
            return e != null ? typeof e.unsubscribe === "function" ? e.unsubscribe() : void 0 : void 0;
          });
          return tabexService.off(this.getSocketPath(), this.getQuery(), this.listener);
        };

        CollectionInstance.prototype.listener = function(event) {
          var query;
          if (event === tabexService.EVENTS.READY && this.length !== 0) {
            return;
          }
          query = angular.copy(this.getQuery());
          delete query.subscribe;
          return indexedDBService.get(this.getRestPath(), query).then((function(_this) {
            return function(data) {
              if (!angular.isArray(data)) {
                data = [data];
              }
              switch (event) {
                case tabexService.EVENTS.READY:
                  return _this.readyHandler(data);
                case tabexService.EVENTS.UPDATE:
                  return _this.updateHandler(data);
                case tabexService.EVENTS.NEW:
                  return _this.newHandler(data);
                default:
                  return $log.error('Unhandled tabex event', event);
              }
            };
          })(this));
        };

        CollectionInstance.prototype.readyHandler = function(data) {
          var _ref;
          this.from(data);
          return (_ref = this.getReadyDeferred()) != null ? _ref.resolve(this) : void 0;
        };

        CollectionInstance.prototype.newHandler = function(data) {
          var id, ids;
          id = this.getSpecification().id;
          ids = {
            "new": data.map(function(e) {
              return e[id];
            }),
            old: this.map(function(e) {
              return e[id];
            })
          };
          data.forEach((function(_this) {
            return function(e) {
              var _ref;
              if (_ref = e[id], __indexOf.call(ids.old, _ref) < 0) {
                return _this.add(e);
              }
            };
          })(this));
          return this.forEach((function(_this) {
            return function(e) {
              var _ref;
              if (_ref = e[id], __indexOf.call(ids["new"], _ref) < 0) {
                return _this["delete"](e);
              }
            };
          })(this));
        };

        CollectionInstance.prototype.updateHandler = function(data) {
          var e, id, _i, _len, _results;
          this.newHandler(data);
          id = this.getSpecification().id;
          _results = [];
          for (_i = 0, _len = data.length; _i < _len; _i++) {
            e = data[_i];
            _results.push(this.forEach(function(i) {
              if (e[id] === i[id]) {
                return i.update(e);
              }
            }));
          }
          return _results;
        };

        CollectionInstance.prototype.from = function(data) {
          var i, _i, _len, _results;
          _results = [];
          for (_i = 0, _len = data.length; _i < _len; _i++) {
            i = data[_i];
            _results.push(this.add(i));
          }
          return _results;
        };

        CollectionInstance.prototype.add = function(element) {
          var Wrapper, instance;
          Wrapper = this.getWrapper();
          instance = new Wrapper(element, this.getEndpoint(), this.getQuery().subscribe);
          return this.push(instance);
        };

        CollectionInstance.prototype.clear = function() {
          var _results;
          _results = [];
          while (this.length > 0) {
            _results.push(this.pop());
          }
          return _results;
        };

        CollectionInstance.prototype["delete"] = function(element) {
          var index;
          index = this.indexOf(element);
          if (index > -1) {
            return this.splice(index, 1);
          }
        };

        return CollectionInstance;

      })(Array);
    }

    return Collection;

  })();

  angular.module('bbData').factory('Collection', ['$q', '$injector', '$log', 'dataUtilsService', 'tabexService', 'indexedDBService', 'SPECIFICATION', Collection]);

}).call(this);

(function() {
  var Wrapper,
    __slice = [].slice;

  Wrapper = (function() {
    function Wrapper($log, dataService, dataUtilsService, tabexService, SPECIFICATION) {
      var WrapperInstance;
      return WrapperInstance = (function() {
        function WrapperInstance(object, endpoint, _subscribe) {
          var endpoints;
          this._subscribe = _subscribe;
          if (!angular.isString(endpoint)) {
            throw new TypeError("Parameter 'endpoint' must be a string, not " + (typeof endpoint));
          }
          this._endpoint = endpoint;
          this.update(object);
          endpoints = Object.keys(SPECIFICATION);
          this.constructor.generateFunctions(endpoints);
        }

        WrapperInstance.prototype.update = function(o) {
          return angular.merge(this, o);
        };

        WrapperInstance.prototype.get = function() {
          var args, e, fieldName, fieldType, id, last, match, options, parameter, path, pathString, root, specification, _base, _i, _j, _ref, _ref1, _ref2;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          _ref = this._endpoint.split('/'), root = _ref[0], id = _ref[1], path = 3 <= _ref.length ? __slice.call(_ref, 2) : [];
          options = 2 <= args.length ? __slice.call(args, 0, _i = args.length - 1) : (_i = 0, []), last = args[_i++];
          if (angular.isObject(last)) {
            pathString = path.concat('*', options).join('/');
            if (this._subscribe != null) {
              if ((_base = args[args.length - 1]).subscribe == null) {
                _base.subscribe = this._subscribe;
              }
            }
          } else {
            pathString = path.concat('*', args).join('/');
            if (this._subscribe != null) {
              args.push({
                subscribe: this._subscribe
              });
            }
          }
          if (path.length === 0) {
            return dataService.get.apply(dataService, [this._endpoint, this.getId()].concat(__slice.call(args)));
          }
          specification = SPECIFICATION[root];
          match = specification.paths.filter(function(p) {
            var replaced;
            replaced = p.replace(/\w+\:\w+/g, '(\\*|\\w+|\\d+)');
            return RegExp("^" + replaced + "$").test(pathString);
          }).pop();
          if (match == null) {
            parameter = this.getId();
          } else {
            _ref1 = match.split('/').slice(0, -1);
            for (_j = _ref1.length - 1; _j >= 0; _j += -1) {
              e = _ref1[_j];
              if (e.indexOf(':') > -1) {
                _ref2 = e.split(':'), fieldType = _ref2[0], fieldName = _ref2[1];
                parameter = this[fieldName];
                break;
              }
            }
          }
          return dataService.get.apply(dataService, [this._endpoint, parameter].concat(__slice.call(args)));
        };

        WrapperInstance.prototype.control = function(method, params) {
          return dataService.control("" + this._endpoint + "/" + (this.getIdentifier() || this.getId()), method, params);
        };

        WrapperInstance.generateFunctions = function(endpoints) {
          return endpoints.forEach((function(_this) {
            return function(e) {
              var E, _base, _base1, _name, _name1;
              if (e === e.toUpperCase()) {
                return;
              }
              E = dataUtilsService.capitalize(e);
              if ((_base = _this.prototype)[_name = "get" + E] == null) {
                _base[_name] = function() {
                  var args;
                  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                  return this.get.apply(this, [e].concat(__slice.call(args)));
                };
              }
              return (_base1 = _this.prototype)[_name1 = "load" + E] != null ? _base1[_name1] : _base1[_name1] = function() {
                var args, p;
                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                p = this.get.apply(this, [e].concat(__slice.call(args)));
                this[e] = p.getArray();
                return p;
              };
            };
          })(this));
        };

        WrapperInstance.prototype.getId = function() {
          return this[this.classId()];
        };

        WrapperInstance.prototype.getIdentifier = function() {
          return this[this.classIdentifier()];
        };

        WrapperInstance.prototype.classId = function() {
          return SPECIFICATION[dataUtilsService.type(this._endpoint)].id;
        };

        WrapperInstance.prototype.classIdentifier = function() {
          return SPECIFICATION[dataUtilsService.type(this._endpoint)].identifier;
        };

        WrapperInstance.prototype.unsubscribe = function() {
          var e, _, _results;
          _results = [];
          for (_ in this) {
            e = this[_];
            _results.push(e != null ? typeof e.unsubscribe === "function" ? e.unsubscribe() : void 0 : void 0);
          }
          return _results;
        };

        return WrapperInstance;

      })();
    }

    return Wrapper;

  })();

  angular.module('bbData').factory('Wrapper', ['$log', 'dataService', 'dataUtilsService', 'tabexService', 'SPECIFICATION', Wrapper]);

}).call(this);

//# sourceMappingURL=scripts.js.map