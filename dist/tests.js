/**
 * @license AngularJS v1.4.7
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {

'use strict';

/**
 * @ngdoc object
 * @name angular.mock
 * @description
 *
 * Namespace from 'angular-mocks.js' which contains testing related code.
 */
angular.mock = {};

/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 *
 * @description
 * This service is a mock implementation of {@link ng.$browser}. It provides fake
 * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
 * cookies, etc...
 *
 * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
 * that there are several helper methods available which can be used in tests.
 */
angular.mock.$BrowserProvider = function() {
  this.$get = function() {
    return new angular.mock.$Browser();
  };
};

angular.mock.$Browser = function() {
  var self = this;

  this.isMock = true;
  self.$$url = "http://server/";
  self.$$lastUrl = self.$$url; // used by url polling fn
  self.pollFns = [];

  // TODO(vojta): remove this temporary api
  self.$$completeOutstandingRequest = angular.noop;
  self.$$incOutstandingRequestCount = angular.noop;


  // register url polling fn

  self.onUrlChange = function(listener) {
    self.pollFns.push(
      function() {
        if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState) {
          self.$$lastUrl = self.$$url;
          self.$$lastState = self.$$state;
          listener(self.$$url, self.$$state);
        }
      }
    );

    return listener;
  };

  self.$$applicationDestroyed = angular.noop;
  self.$$checkUrlChange = angular.noop;

  self.deferredFns = [];
  self.deferredNextId = 0;

  self.defer = function(fn, delay) {
    delay = delay || 0;
    self.deferredFns.push({time:(self.defer.now + delay), fn:fn, id: self.deferredNextId});
    self.deferredFns.sort(function(a, b) { return a.time - b.time;});
    return self.deferredNextId++;
  };


  /**
   * @name $browser#defer.now
   *
   * @description
   * Current milliseconds mock time.
   */
  self.defer.now = 0;


  self.defer.cancel = function(deferId) {
    var fnIndex;

    angular.forEach(self.deferredFns, function(fn, index) {
      if (fn.id === deferId) fnIndex = index;
    });

    if (angular.isDefined(fnIndex)) {
      self.deferredFns.splice(fnIndex, 1);
      return true;
    }

    return false;
  };


  /**
   * @name $browser#defer.flush
   *
   * @description
   * Flushes all pending requests and executes the defer callbacks.
   *
   * @param {number=} number of milliseconds to flush. See {@link #defer.now}
   */
  self.defer.flush = function(delay) {
    if (angular.isDefined(delay)) {
      self.defer.now += delay;
    } else {
      if (self.deferredFns.length) {
        self.defer.now = self.deferredFns[self.deferredFns.length - 1].time;
      } else {
        throw new Error('No deferred tasks to be flushed');
      }
    }

    while (self.deferredFns.length && self.deferredFns[0].time <= self.defer.now) {
      self.deferredFns.shift().fn();
    }
  };

  self.$$baseHref = '/';
  self.baseHref = function() {
    return this.$$baseHref;
  };
};
angular.mock.$Browser.prototype = {

/**
  * @name $browser#poll
  *
  * @description
  * run all fns in pollFns
  */
  poll: function poll() {
    angular.forEach(this.pollFns, function(pollFn) {
      pollFn();
    });
  },

  url: function(url, replace, state) {
    if (angular.isUndefined(state)) {
      state = null;
    }
    if (url) {
      this.$$url = url;
      // Native pushState serializes & copies the object; simulate it.
      this.$$state = angular.copy(state);
      return this;
    }

    return this.$$url;
  },

  state: function() {
    return this.$$state;
  },

  notifyWhenNoOutstandingRequests: function(fn) {
    fn();
  }
};


/**
 * @ngdoc provider
 * @name $exceptionHandlerProvider
 *
 * @description
 * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
 * passed to the `$exceptionHandler`.
 */

/**
 * @ngdoc service
 * @name $exceptionHandler
 *
 * @description
 * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
 * to it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
 * information.
 *
 *
 * ```js
 *   describe('$exceptionHandlerProvider', function() {
 *
 *     it('should capture log messages and exceptions', function() {
 *
 *       module(function($exceptionHandlerProvider) {
 *         $exceptionHandlerProvider.mode('log');
 *       });
 *
 *       inject(function($log, $exceptionHandler, $timeout) {
 *         $timeout(function() { $log.log(1); });
 *         $timeout(function() { $log.log(2); throw 'banana peel'; });
 *         $timeout(function() { $log.log(3); });
 *         expect($exceptionHandler.errors).toEqual([]);
 *         expect($log.assertEmpty());
 *         $timeout.flush();
 *         expect($exceptionHandler.errors).toEqual(['banana peel']);
 *         expect($log.log.logs).toEqual([[1], [2], [3]]);
 *       });
 *     });
 *   });
 * ```
 */

angular.mock.$ExceptionHandlerProvider = function() {
  var handler;

  /**
   * @ngdoc method
   * @name $exceptionHandlerProvider#mode
   *
   * @description
   * Sets the logging mode.
   *
   * @param {string} mode Mode of operation, defaults to `rethrow`.
   *
   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
   *            mode stores an array of errors in `$exceptionHandler.errors`, to allow later
   *            assertion of them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
   *            {@link ngMock.$log#reset reset()}
   *   - `rethrow`: If any errors are passed to the handler in tests, it typically means that there
   *                is a bug in the application or test, so this mock will make these tests fail.
   *                For any implementations that expect exceptions to be thrown, the `rethrow` mode
   *                will also maintain a log of thrown errors.
   */
  this.mode = function(mode) {

    switch (mode) {
      case 'log':
      case 'rethrow':
        var errors = [];
        handler = function(e) {
          if (arguments.length == 1) {
            errors.push(e);
          } else {
            errors.push([].slice.call(arguments, 0));
          }
          if (mode === "rethrow") {
            throw e;
          }
        };
        handler.errors = errors;
        break;
      default:
        throw new Error("Unknown mode '" + mode + "', only 'log'/'rethrow' modes are allowed!");
    }
  };

  this.$get = function() {
    return handler;
  };

  this.mode('rethrow');
};


/**
 * @ngdoc service
 * @name $log
 *
 * @description
 * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
 * (one array per logging level). These arrays are exposed as `logs` property of each of the
 * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
 *
 */
angular.mock.$LogProvider = function() {
  var debug = true;

  function concat(array1, array2, index) {
    return array1.concat(Array.prototype.slice.call(array2, index));
  }

  this.debugEnabled = function(flag) {
    if (angular.isDefined(flag)) {
      debug = flag;
      return this;
    } else {
      return debug;
    }
  };

  this.$get = function() {
    var $log = {
      log: function() { $log.log.logs.push(concat([], arguments, 0)); },
      warn: function() { $log.warn.logs.push(concat([], arguments, 0)); },
      info: function() { $log.info.logs.push(concat([], arguments, 0)); },
      error: function() { $log.error.logs.push(concat([], arguments, 0)); },
      debug: function() {
        if (debug) {
          $log.debug.logs.push(concat([], arguments, 0));
        }
      }
    };

    /**
     * @ngdoc method
     * @name $log#reset
     *
     * @description
     * Reset all of the logging arrays to empty.
     */
    $log.reset = function() {
      /**
       * @ngdoc property
       * @name $log#log.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#log `log()`}.
       *
       * @example
       * ```js
       * $log.log('Some Log');
       * var first = $log.log.logs.unshift();
       * ```
       */
      $log.log.logs = [];
      /**
       * @ngdoc property
       * @name $log#info.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#info `info()`}.
       *
       * @example
       * ```js
       * $log.info('Some Info');
       * var first = $log.info.logs.unshift();
       * ```
       */
      $log.info.logs = [];
      /**
       * @ngdoc property
       * @name $log#warn.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#warn `warn()`}.
       *
       * @example
       * ```js
       * $log.warn('Some Warning');
       * var first = $log.warn.logs.unshift();
       * ```
       */
      $log.warn.logs = [];
      /**
       * @ngdoc property
       * @name $log#error.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#error `error()`}.
       *
       * @example
       * ```js
       * $log.error('Some Error');
       * var first = $log.error.logs.unshift();
       * ```
       */
      $log.error.logs = [];
        /**
       * @ngdoc property
       * @name $log#debug.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#debug `debug()`}.
       *
       * @example
       * ```js
       * $log.debug('Some Error');
       * var first = $log.debug.logs.unshift();
       * ```
       */
      $log.debug.logs = [];
    };

    /**
     * @ngdoc method
     * @name $log#assertEmpty
     *
     * @description
     * Assert that all of the logging methods have no logged messages. If any messages are present,
     * an exception is thrown.
     */
    $log.assertEmpty = function() {
      var errors = [];
      angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
        angular.forEach($log[logLevel].logs, function(log) {
          angular.forEach(log, function(logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
                        (logItem.stack || ''));
          });
        });
      });
      if (errors.length) {
        errors.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or " +
          "an expected log message was not checked and removed:");
        errors.push('');
        throw new Error(errors.join('\n---------\n'));
      }
    };

    $log.reset();
    return $log;
  };
};


/**
 * @ngdoc service
 * @name $interval
 *
 * @description
 * Mock implementation of the $interval service.
 *
 * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
 * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
 * time.
 *
 * @param {function()} fn A function that should be called repeatedly.
 * @param {number} delay Number of milliseconds between each function call.
 * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
 *   indefinitely.
 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
 * @param {...*=} Pass additional parameters to the executed function.
 * @returns {promise} A promise which will be notified on each iteration.
 */
angular.mock.$IntervalProvider = function() {
  this.$get = ['$browser', '$rootScope', '$q', '$$q',
       function($browser,   $rootScope,   $q,   $$q) {
    var repeatFns = [],
        nextRepeatId = 0,
        now = 0;

    var $interval = function(fn, delay, count, invokeApply) {
      var hasParams = arguments.length > 4,
          args = hasParams ? Array.prototype.slice.call(arguments, 4) : [],
          iteration = 0,
          skipApply = (angular.isDefined(invokeApply) && !invokeApply),
          deferred = (skipApply ? $$q : $q).defer(),
          promise = deferred.promise;

      count = (angular.isDefined(count)) ? count : 0;
      promise.then(null, null, (!hasParams) ? fn : function() {
        fn.apply(null, args);
      });

      promise.$$intervalId = nextRepeatId;

      function tick() {
        deferred.notify(iteration++);

        if (count > 0 && iteration >= count) {
          var fnIndex;
          deferred.resolve(iteration);

          angular.forEach(repeatFns, function(fn, index) {
            if (fn.id === promise.$$intervalId) fnIndex = index;
          });

          if (angular.isDefined(fnIndex)) {
            repeatFns.splice(fnIndex, 1);
          }
        }

        if (skipApply) {
          $browser.defer.flush();
        } else {
          $rootScope.$apply();
        }
      }

      repeatFns.push({
        nextTime:(now + delay),
        delay: delay,
        fn: tick,
        id: nextRepeatId,
        deferred: deferred
      });
      repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});

      nextRepeatId++;
      return promise;
    };
    /**
     * @ngdoc method
     * @name $interval#cancel
     *
     * @description
     * Cancels a task associated with the `promise`.
     *
     * @param {promise} promise A promise from calling the `$interval` function.
     * @returns {boolean} Returns `true` if the task was successfully cancelled.
     */
    $interval.cancel = function(promise) {
      if (!promise) return false;
      var fnIndex;

      angular.forEach(repeatFns, function(fn, index) {
        if (fn.id === promise.$$intervalId) fnIndex = index;
      });

      if (angular.isDefined(fnIndex)) {
        repeatFns[fnIndex].deferred.reject('canceled');
        repeatFns.splice(fnIndex, 1);
        return true;
      }

      return false;
    };

    /**
     * @ngdoc method
     * @name $interval#flush
     * @description
     *
     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
     *
     * @param {number=} millis maximum timeout amount to flush up until.
     *
     * @return {number} The amount of time moved forward.
     */
    $interval.flush = function(millis) {
      now += millis;
      while (repeatFns.length && repeatFns[0].nextTime <= now) {
        var task = repeatFns[0];
        task.fn();
        task.nextTime += task.delay;
        repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});
      }
      return millis;
    };

    return $interval;
  }];
};


/* jshint -W101 */
/* The R_ISO8061_STR regex is never going to fit into the 100 char limit!
 * This directive should go inside the anonymous function but a bug in JSHint means that it would
 * not be enacted early enough to prevent the warning.
 */
var R_ISO8061_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

function jsonStringToDate(string) {
  var match;
  if (match = string.match(R_ISO8061_STR)) {
    var date = new Date(0),
        tzHour = 0,
        tzMin  = 0;
    if (match[9]) {
      tzHour = toInt(match[9] + match[10]);
      tzMin = toInt(match[9] + match[11]);
    }
    date.setUTCFullYear(toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
    date.setUTCHours(toInt(match[4] || 0) - tzHour,
                     toInt(match[5] || 0) - tzMin,
                     toInt(match[6] || 0),
                     toInt(match[7] || 0));
    return date;
  }
  return string;
}

function toInt(str) {
  return parseInt(str, 10);
}

function padNumber(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while (num.length < digits) num = '0' + num;
  if (trim) {
    num = num.substr(num.length - digits);
  }
  return neg + num;
}


/**
 * @ngdoc type
 * @name angular.mock.TzDate
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
 *
 * Mock of the Date type which has its timezone specified via constructor arg.
 *
 * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
 * offset, so that we can test code that depends on local timezone settings without dependency on
 * the time zone settings of the machine where the code is running.
 *
 * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
 * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
 *
 * @example
 * !!!! WARNING !!!!!
 * This is not a complete Date object so only methods that were implemented can be called safely.
 * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
 *
 * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
 * incomplete we might be missing some non-standard methods. This can result in errors like:
 * "Date.prototype.foo called on incompatible Object".
 *
 * ```js
 * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
 * newYearInBratislava.getTimezoneOffset() => -60;
 * newYearInBratislava.getFullYear() => 2010;
 * newYearInBratislava.getMonth() => 0;
 * newYearInBratislava.getDate() => 1;
 * newYearInBratislava.getHours() => 0;
 * newYearInBratislava.getMinutes() => 0;
 * newYearInBratislava.getSeconds() => 0;
 * ```
 *
 */
angular.mock.TzDate = function(offset, timestamp) {
  var self = new Date(0);
  if (angular.isString(timestamp)) {
    var tsStr = timestamp;

    self.origDate = jsonStringToDate(timestamp);

    timestamp = self.origDate.getTime();
    if (isNaN(timestamp)) {
      throw {
        name: "Illegal Argument",
        message: "Arg '" + tsStr + "' passed into TzDate constructor is not a valid date string"
      };
    }
  } else {
    self.origDate = new Date(timestamp);
  }

  var localOffset = new Date(timestamp).getTimezoneOffset();
  self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
  self.date = new Date(timestamp + self.offsetDiff);

  self.getTime = function() {
    return self.date.getTime() - self.offsetDiff;
  };

  self.toLocaleDateString = function() {
    return self.date.toLocaleDateString();
  };

  self.getFullYear = function() {
    return self.date.getFullYear();
  };

  self.getMonth = function() {
    return self.date.getMonth();
  };

  self.getDate = function() {
    return self.date.getDate();
  };

  self.getHours = function() {
    return self.date.getHours();
  };

  self.getMinutes = function() {
    return self.date.getMinutes();
  };

  self.getSeconds = function() {
    return self.date.getSeconds();
  };

  self.getMilliseconds = function() {
    return self.date.getMilliseconds();
  };

  self.getTimezoneOffset = function() {
    return offset * 60;
  };

  self.getUTCFullYear = function() {
    return self.origDate.getUTCFullYear();
  };

  self.getUTCMonth = function() {
    return self.origDate.getUTCMonth();
  };

  self.getUTCDate = function() {
    return self.origDate.getUTCDate();
  };

  self.getUTCHours = function() {
    return self.origDate.getUTCHours();
  };

  self.getUTCMinutes = function() {
    return self.origDate.getUTCMinutes();
  };

  self.getUTCSeconds = function() {
    return self.origDate.getUTCSeconds();
  };

  self.getUTCMilliseconds = function() {
    return self.origDate.getUTCMilliseconds();
  };

  self.getDay = function() {
    return self.date.getDay();
  };

  // provide this method only on browsers that already have it
  if (self.toISOString) {
    self.toISOString = function() {
      return padNumber(self.origDate.getUTCFullYear(), 4) + '-' +
            padNumber(self.origDate.getUTCMonth() + 1, 2) + '-' +
            padNumber(self.origDate.getUTCDate(), 2) + 'T' +
            padNumber(self.origDate.getUTCHours(), 2) + ':' +
            padNumber(self.origDate.getUTCMinutes(), 2) + ':' +
            padNumber(self.origDate.getUTCSeconds(), 2) + '.' +
            padNumber(self.origDate.getUTCMilliseconds(), 3) + 'Z';
    };
  }

  //hide all methods not implemented in this mock that the Date prototype exposes
  var unimplementedMethods = ['getUTCDay',
      'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
      'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
      'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
      'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];

  angular.forEach(unimplementedMethods, function(methodName) {
    self[methodName] = function() {
      throw new Error("Method '" + methodName + "' is not implemented in the TzDate mock");
    };
  });

  return self;
};

//make "tzDateInstance instanceof Date" return true
angular.mock.TzDate.prototype = Date.prototype;
/* jshint +W101 */

angular.mock.animate = angular.module('ngAnimateMock', ['ng'])

  .config(['$provide', function($provide) {

    $provide.factory('$$forceReflow', function() {
      function reflowFn() {
        reflowFn.totalReflows++;
      }
      reflowFn.totalReflows = 0;
      return reflowFn;
    });

    $provide.factory('$$animateAsyncRun', function() {
      var queue = [];
      var queueFn = function() {
        return function(fn) {
          queue.push(fn);
        };
      };
      queueFn.flush = function() {
        if (queue.length === 0) return false;

        for (var i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue = [];

        return true;
      };
      return queueFn;
    });

    $provide.decorator('$animate', ['$delegate', '$timeout', '$browser', '$$rAF',
                                    '$$forceReflow', '$$animateAsyncRun', '$rootScope',
                            function($delegate,   $timeout,   $browser,   $$rAF,
                                     $$forceReflow,   $$animateAsyncRun,  $rootScope) {
      var animate = {
        queue: [],
        cancel: $delegate.cancel,
        on: $delegate.on,
        off: $delegate.off,
        pin: $delegate.pin,
        get reflows() {
          return $$forceReflow.totalReflows;
        },
        enabled: $delegate.enabled,
        flush: function() {
          $rootScope.$digest();

          var doNextRun, somethingFlushed = false;
          do {
            doNextRun = false;

            if ($$rAF.queue.length) {
              $$rAF.flush();
              doNextRun = somethingFlushed = true;
            }

            if ($$animateAsyncRun.flush()) {
              doNextRun = somethingFlushed = true;
            }
          } while (doNextRun);

          if (!somethingFlushed) {
            throw new Error('No pending animations ready to be closed or flushed');
          }

          $rootScope.$digest();
        }
      };

      angular.forEach(
        ['animate','enter','leave','move','addClass','removeClass','setClass'], function(method) {
        animate[method] = function() {
          animate.queue.push({
            event: method,
            element: arguments[0],
            options: arguments[arguments.length - 1],
            args: arguments
          });
          return $delegate[method].apply($delegate, arguments);
        };
      });

      return animate;
    }]);

  }]);


/**
 * @ngdoc function
 * @name angular.mock.dump
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available function.
 *
 * Method for serializing common angular objects (scope, elements, etc..) into strings, useful for
 * debugging.
 *
 * This method is also available on window, where it can be used to display objects on debug
 * console.
 *
 * @param {*} object - any object to turn into string.
 * @return {string} a serialized string of the argument
 */
angular.mock.dump = function(object) {
  return serialize(object);

  function serialize(object) {
    var out;

    if (angular.isElement(object)) {
      object = angular.element(object);
      out = angular.element('<div></div>');
      angular.forEach(object, function(element) {
        out.append(angular.element(element).clone());
      });
      out = out.html();
    } else if (angular.isArray(object)) {
      out = [];
      angular.forEach(object, function(o) {
        out.push(serialize(o));
      });
      out = '[ ' + out.join(', ') + ' ]';
    } else if (angular.isObject(object)) {
      if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
        out = serializeScope(object);
      } else if (object instanceof Error) {
        out = object.stack || ('' + object.name + ': ' + object.message);
      } else {
        // TODO(i): this prevents methods being logged,
        // we should have a better way to serialize objects
        out = angular.toJson(object, true);
      }
    } else {
      out = String(object);
    }

    return out;
  }

  function serializeScope(scope, offset) {
    offset = offset ||  '  ';
    var log = [offset + 'Scope(' + scope.$id + '): {'];
    for (var key in scope) {
      if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
        log.push('  ' + key + ': ' + angular.toJson(scope[key]));
      }
    }
    var child = scope.$$childHead;
    while (child) {
      log.push(serializeScope(child, offset + '  '));
      child = child.$$nextSibling;
    }
    log.push('}');
    return log.join('\n' + offset);
  }
};

/**
 * @ngdoc service
 * @name $httpBackend
 * @description
 * Fake HTTP backend implementation suitable for unit testing applications that use the
 * {@link ng.$http $http service}.
 *
 * *Note*: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
 * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
 *
 * During unit testing, we want our unit tests to run quickly and have no external dependencies so
 * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
 * to verify whether a certain request has been sent or not, or alternatively just let the
 * application make requests, respond with pre-trained responses and assert that the end result is
 * what we expect it to be.
 *
 * This mock implementation can be used to respond with static or dynamic responses via the
 * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
 *
 * When an Angular application needs some data from a server, it calls the $http service, which
 * sends the request to a real server using $httpBackend service. With dependency injection, it is
 * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
 * the requests and respond with some testing data without sending a request to a real server.
 *
 * There are two ways to specify what test data should be returned as http responses by the mock
 * backend when the code under test makes http requests:
 *
 * - `$httpBackend.expect` - specifies a request expectation
 * - `$httpBackend.when` - specifies a backend definition
 *
 *
 * # Request Expectations vs Backend Definitions
 *
 * Request expectations provide a way to make assertions about requests made by the application and
 * to define responses for those requests. The test will fail if the expected requests are not made
 * or they are made in the wrong order.
 *
 * Backend definitions allow you to define a fake backend for your application which doesn't assert
 * if a particular request was made or not, it just returns a trained response if a request is made.
 * The test will pass whether or not the request gets made during testing.
 *
 *
 * <table class="table">
 *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
 *   <tr>
 *     <th>Syntax</th>
 *     <td>.expect(...).respond(...)</td>
 *     <td>.when(...).respond(...)</td>
 *   </tr>
 *   <tr>
 *     <th>Typical usage</th>
 *     <td>strict unit tests</td>
 *     <td>loose (black-box) unit testing</td>
 *   </tr>
 *   <tr>
 *     <th>Fulfills multiple requests</th>
 *     <td>NO</td>
 *     <td>YES</td>
 *   </tr>
 *   <tr>
 *     <th>Order of requests matters</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Request required</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Response required</th>
 *     <td>optional (see below)</td>
 *     <td>YES</td>
 *   </tr>
 * </table>
 *
 * In cases where both backend definitions and request expectations are specified during unit
 * testing, the request expectations are evaluated first.
 *
 * If a request expectation has no response specified, the algorithm will search your backend
 * definitions for an appropriate response.
 *
 * If a request didn't match any expectation or if the expectation doesn't have the response
 * defined, the backend definitions are evaluated in sequential order to see if any of them match
 * the request. The response from the first matched definition is returned.
 *
 *
 * # Flushing HTTP requests
 *
 * The $httpBackend used in production always responds to requests asynchronously. If we preserved
 * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
 * to follow and to maintain. But neither can the testing mock respond synchronously; that would
 * change the execution of the code under test. For this reason, the mock $httpBackend has a
 * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
 * the async api of the backend, while allowing the test to execute synchronously.
 *
 *
 * # Unit testing with mock $httpBackend
 * The following code shows how to setup and use the mock backend when unit testing a controller.
 * First we create the controller under test:
 *
  ```js
  // The module code
  angular
    .module('MyApp', [])
    .controller('MyController', MyController);

  // The controller code
  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').success(function(data, status, headers) {
      authToken = headers('A-Token');
      $scope.user = data;
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).success(function(response) {
        $scope.status = '';
      }).error(function() {
        $scope.status = 'Failed...';
      });
    };
  }
  ```
 *
 * Now we setup the mock backend and create the test specs:
 *
  ```js
    // testing controller
    describe('MyController', function() {
       var $httpBackend, $rootScope, createController, authRequestHandler;

       // Set up the module
       beforeEach(module('MyApp'));

       beforeEach(inject(function($injector) {
         // Set up the mock http service responses
         $httpBackend = $injector.get('$httpBackend');
         // backend definition common for all tests
         authRequestHandler = $httpBackend.when('GET', '/auth.py')
                                .respond({userId: 'userX'}, {'A-Token': 'xxx'});

         // Get hold of a scope (i.e. the root scope)
         $rootScope = $injector.get('$rootScope');
         // The $controller service is used to create instances of controllers
         var $controller = $injector.get('$controller');

         createController = function() {
           return $controller('MyController', {'$scope' : $rootScope });
         };
       }));


       afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });


       it('should fetch authentication token', function() {
         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
       });


       it('should fail authentication', function() {

         // Notice how you can change the response even after it was set
         authRequestHandler.respond(401, '');

         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
         expect($rootScope.status).toBe('Failed...');
       });


       it('should send msg to server', function() {
         var controller = createController();
         $httpBackend.flush();

         // now you don’t care about the authentication, but
         // the controller will still send the request and
         // $httpBackend will respond without you having to
         // specify the expectation and response for this request

         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
         $rootScope.saveMessage('message content');
         expect($rootScope.status).toBe('Saving...');
         $httpBackend.flush();
         expect($rootScope.status).toBe('');
       });


       it('should send auth header', function() {
         var controller = createController();
         $httpBackend.flush();

         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
           // check if the header was sent, if it wasn't the expectation won't
           // match the request and the test will fail
           return headers['Authorization'] == 'xxx';
         }).respond(201, '');

         $rootScope.saveMessage('whatever');
         $httpBackend.flush();
       });
    });
   ```
 */
angular.mock.$HttpBackendProvider = function() {
  this.$get = ['$rootScope', '$timeout', createHttpBackendMock];
};

/**
 * General factory function for $httpBackend mock.
 * Returns instance for unit testing (when no arguments specified):
 *   - passing through is disabled
 *   - auto flushing is disabled
 *
 * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
 *   - passing through (delegating request to real backend) is enabled
 *   - auto flushing is enabled
 *
 * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
 * @param {Object=} $browser Auto-flushing enabled if specified
 * @return {Object} Instance of $httpBackend mock
 */
function createHttpBackendMock($rootScope, $timeout, $delegate, $browser) {
  var definitions = [],
      expectations = [],
      responses = [],
      responsesPush = angular.bind(responses, responses.push),
      copy = angular.copy;

  function createResponse(status, data, headers, statusText) {
    if (angular.isFunction(status)) return status;

    return function() {
      return angular.isNumber(status)
          ? [status, data, headers, statusText]
          : [200, status, data, headers];
    };
  }

  // TODO(vojta): change params to: method, url, data, headers, callback
  function $httpBackend(method, url, data, callback, headers, timeout, withCredentials) {
    var xhr = new MockXhr(),
        expectation = expectations[0],
        wasExpected = false;

    function prettyPrint(data) {
      return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp)
          ? data
          : angular.toJson(data);
    }

    function wrapResponse(wrapped) {
      if (!$browser && timeout) {
        timeout.then ? timeout.then(handleTimeout) : $timeout(handleTimeout, timeout);
      }

      return handleResponse;

      function handleResponse() {
        var response = wrapped.response(method, url, data, headers);
        xhr.$$respHeaders = response[2];
        callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
                 copy(response[3] || ''));
      }

      function handleTimeout() {
        for (var i = 0, ii = responses.length; i < ii; i++) {
          if (responses[i] === handleResponse) {
            responses.splice(i, 1);
            callback(-1, undefined, '');
            break;
          }
        }
      }
    }

    if (expectation && expectation.match(method, url)) {
      if (!expectation.matchData(data)) {
        throw new Error('Expected ' + expectation + ' with different data\n' +
            'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);
      }

      if (!expectation.matchHeaders(headers)) {
        throw new Error('Expected ' + expectation + ' with different headers\n' +
                        'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' +
                        prettyPrint(headers));
      }

      expectations.shift();

      if (expectation.response) {
        responses.push(wrapResponse(expectation));
        return;
      }
      wasExpected = true;
    }

    var i = -1, definition;
    while ((definition = definitions[++i])) {
      if (definition.match(method, url, data, headers || {})) {
        if (definition.response) {
          // if $browser specified, we do auto flush all requests
          ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
        } else if (definition.passThrough) {
          $delegate(method, url, data, callback, headers, timeout, withCredentials);
        } else throw new Error('No response defined !');
        return;
      }
    }
    throw wasExpected ?
        new Error('No response defined !') :
        new Error('Unexpected request: ' + method + ' ' + url + '\n' +
                  (expectation ? 'Expected ' + expectation : 'No more request expected'));
  }

  /**
   * @ngdoc method
   * @name $httpBackend#when
   * @description
   * Creates a new backend definition.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   *
   *  - respond –
   *      `{function([status,] data[, headers, statusText])
   *      | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string). The respond method returns the
   *    `requestHandler` object for possible overrides.
   */
  $httpBackend.when = function(method, url, data, headers) {
    var definition = new MockHttpExpectation(method, url, data, headers),
        chain = {
          respond: function(status, data, headers, statusText) {
            definition.passThrough = undefined;
            definition.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    if ($browser) {
      chain.passThrough = function() {
        definition.response = undefined;
        definition.passThrough = true;
        return chain;
      };
    }

    definitions.push(definition);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#whenGET
   * @description
   * Creates a new backend definition for GET requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenHEAD
   * @description
   * Creates a new backend definition for HEAD requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenDELETE
   * @description
   * Creates a new backend definition for DELETE requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPOST
   * @description
   * Creates a new backend definition for POST requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPUT
   * @description
   * Creates a new backend definition for PUT requests.  For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenJSONP
   * @description
   * Creates a new backend definition for JSONP requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */
  createShortMethods('when');


  /**
   * @ngdoc method
   * @name $httpBackend#expect
   * @description
   * Creates a new request expectation.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *  request is handled. You can save this object for later use and invoke `respond` again in
   *  order to change how a matched request is handled.
   *
   *  - respond –
   *    `{function([status,] data[, headers, statusText])
   *    | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string). The respond method returns the
   *    `requestHandler` object for possible overrides.
   */
  $httpBackend.expect = function(method, url, data, headers) {
    var expectation = new MockHttpExpectation(method, url, data, headers),
        chain = {
          respond: function(status, data, headers, statusText) {
            expectation.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    expectations.push(expectation);
    return chain;
  };


  /**
   * @ngdoc method
   * @name $httpBackend#expectGET
   * @description
   * Creates a new request expectation for GET requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #expect for more info.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectHEAD
   * @description
   * Creates a new request expectation for HEAD requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectDELETE
   * @description
   * Creates a new request expectation for DELETE requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPOST
   * @description
   * Creates a new request expectation for POST requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPUT
   * @description
   * Creates a new request expectation for PUT requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPATCH
   * @description
   * Creates a new request expectation for PATCH requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectJSONP
   * @description
   * Creates a new request expectation for JSONP requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives an url
   *   and returns true if the url matches the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */
  createShortMethods('expect');


  /**
   * @ngdoc method
   * @name $httpBackend#flush
   * @description
   * Flushes all pending requests using the trained responses.
   *
   * @param {number=} count Number of responses to flush (in the order they arrived). If undefined,
   *   all pending requests will be flushed. If there are no pending requests when the flush method
   *   is called an exception is thrown (as this typically a sign of programming error).
   */
  $httpBackend.flush = function(count, digest) {
    if (digest !== false) $rootScope.$digest();
    if (!responses.length) throw new Error('No pending request to flush !');

    if (angular.isDefined(count) && count !== null) {
      while (count--) {
        if (!responses.length) throw new Error('No more pending request to flush !');
        responses.shift()();
      }
    } else {
      while (responses.length) {
        responses.shift()();
      }
    }
    $httpBackend.verifyNoOutstandingExpectation(digest);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingExpectation
   * @description
   * Verifies that all of the requests defined via the `expect` api were made. If any of the
   * requests were not made, verifyNoOutstandingExpectation throws an exception.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingExpectation);
   * ```
   */
  $httpBackend.verifyNoOutstandingExpectation = function(digest) {
    if (digest !== false) $rootScope.$digest();
    if (expectations.length) {
      throw new Error('Unsatisfied requests: ' + expectations.join(', '));
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingRequest
   * @description
   * Verifies that there are no outstanding requests that need to be flushed.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingRequest);
   * ```
   */
  $httpBackend.verifyNoOutstandingRequest = function() {
    if (responses.length) {
      throw new Error('Unflushed requests: ' + responses.length);
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#resetExpectations
   * @description
   * Resets all request expectations, but preserves all backend definitions. Typically, you would
   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
   * $httpBackend mock.
   */
  $httpBackend.resetExpectations = function() {
    expectations.length = 0;
    responses.length = 0;
  };

  return $httpBackend;


  function createShortMethods(prefix) {
    angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method) {
     $httpBackend[prefix + method] = function(url, headers) {
       return $httpBackend[prefix](method, url, undefined, headers);
     };
    });

    angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
      $httpBackend[prefix + method] = function(url, data, headers) {
        return $httpBackend[prefix](method, url, data, headers);
      };
    });
  }
}

function MockHttpExpectation(method, url, data, headers) {

  this.data = data;
  this.headers = headers;

  this.match = function(m, u, d, h) {
    if (method != m) return false;
    if (!this.matchUrl(u)) return false;
    if (angular.isDefined(d) && !this.matchData(d)) return false;
    if (angular.isDefined(h) && !this.matchHeaders(h)) return false;
    return true;
  };

  this.matchUrl = function(u) {
    if (!url) return true;
    if (angular.isFunction(url.test)) return url.test(u);
    if (angular.isFunction(url)) return url(u);
    return url == u;
  };

  this.matchHeaders = function(h) {
    if (angular.isUndefined(headers)) return true;
    if (angular.isFunction(headers)) return headers(h);
    return angular.equals(headers, h);
  };

  this.matchData = function(d) {
    if (angular.isUndefined(data)) return true;
    if (data && angular.isFunction(data.test)) return data.test(d);
    if (data && angular.isFunction(data)) return data(d);
    if (data && !angular.isString(data)) {
      return angular.equals(angular.fromJson(angular.toJson(data)), angular.fromJson(d));
    }
    return data == d;
  };

  this.toString = function() {
    return method + ' ' + url;
  };
}

function createMockXhr() {
  return new MockXhr();
}

function MockXhr() {

  // hack for testing $http, $httpBackend
  MockXhr.$$lastInstance = this;

  this.open = function(method, url, async) {
    this.$$method = method;
    this.$$url = url;
    this.$$async = async;
    this.$$reqHeaders = {};
    this.$$respHeaders = {};
  };

  this.send = function(data) {
    this.$$data = data;
  };

  this.setRequestHeader = function(key, value) {
    this.$$reqHeaders[key] = value;
  };

  this.getResponseHeader = function(name) {
    // the lookup must be case insensitive,
    // that's why we try two quick lookups first and full scan last
    var header = this.$$respHeaders[name];
    if (header) return header;

    name = angular.lowercase(name);
    header = this.$$respHeaders[name];
    if (header) return header;

    header = undefined;
    angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
      if (!header && angular.lowercase(headerName) == name) header = headerVal;
    });
    return header;
  };

  this.getAllResponseHeaders = function() {
    var lines = [];

    angular.forEach(this.$$respHeaders, function(value, key) {
      lines.push(key + ': ' + value);
    });
    return lines.join('\n');
  };

  this.abort = angular.noop;
}


/**
 * @ngdoc service
 * @name $timeout
 * @description
 *
 * This service is just a simple decorator for {@link ng.$timeout $timeout} service
 * that adds a "flush" and "verifyNoPendingTasks" methods.
 */

angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser) {

  /**
   * @ngdoc method
   * @name $timeout#flush
   * @description
   *
   * Flushes the queue of pending tasks.
   *
   * @param {number=} delay maximum timeout amount to flush up until
   */
  $delegate.flush = function(delay) {
    $browser.defer.flush(delay);
  };

  /**
   * @ngdoc method
   * @name $timeout#verifyNoPendingTasks
   * @description
   *
   * Verifies that there are no pending tasks that need to be flushed.
   */
  $delegate.verifyNoPendingTasks = function() {
    if ($browser.deferredFns.length) {
      throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' +
          formatPendingTasksAsString($browser.deferredFns));
    }
  };

  function formatPendingTasksAsString(tasks) {
    var result = [];
    angular.forEach(tasks, function(task) {
      result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
    });

    return result.join(', ');
  }

  return $delegate;
}];

angular.mock.$RAFDecorator = ['$delegate', function($delegate) {
  var rafFn = function(fn) {
    var index = rafFn.queue.length;
    rafFn.queue.push(fn);
    return function() {
      rafFn.queue.splice(index, 1);
    };
  };

  rafFn.queue = [];
  rafFn.supported = $delegate.supported;

  rafFn.flush = function() {
    if (rafFn.queue.length === 0) {
      throw new Error('No rAF callbacks present');
    }

    var length = rafFn.queue.length;
    for (var i = 0; i < length; i++) {
      rafFn.queue[i]();
    }

    rafFn.queue = rafFn.queue.slice(i);
  };

  return rafFn;
}];

/**
 *
 */
angular.mock.$RootElementProvider = function() {
  this.$get = function() {
    return angular.element('<div ng-app></div>');
  };
};

/**
 * @ngdoc service
 * @name $controller
 * @description
 * A decorator for {@link ng.$controller} with additional `bindings` parameter, useful when testing
 * controllers of directives that use {@link $compile#-bindtocontroller- `bindToController`}.
 *
 *
 * ## Example
 *
 * ```js
 *
 * // Directive definition ...
 *
 * myMod.directive('myDirective', {
 *   controller: 'MyDirectiveController',
 *   bindToController: {
 *     name: '@'
 *   }
 * });
 *
 *
 * // Controller definition ...
 *
 * myMod.controller('MyDirectiveController', ['log', function($log) {
 *   $log.info(this.name);
 * })];
 *
 *
 * // In a test ...
 *
 * describe('myDirectiveController', function() {
 *   it('should write the bound name to the log', inject(function($controller, $log) {
 *     var ctrl = $controller('MyDirectiveController', { /* no locals &#42;/ }, { name: 'Clark Kent' });
 *     expect(ctrl.name).toEqual('Clark Kent');
 *     expect($log.info.logs).toEqual(['Clark Kent']);
 *   });
 * });
 *
 * ```
 *
 * @param {Function|string} constructor If called with a function then it's considered to be the
 *    controller constructor function. Otherwise it's considered to be a string which is used
 *    to retrieve the controller constructor using the following steps:
 *
 *    * check if a controller with given name is registered via `$controllerProvider`
 *    * check if evaluating the string on the current scope returns a constructor
 *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
 *      `window` object (not recommended)
 *
 *    The string can use the `controller as property` syntax, where the controller instance is published
 *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
 *    to work correctly.
 *
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
 *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
 * @return {Object} Instance of given controller.
 */
angular.mock.$ControllerDecorator = ['$delegate', function($delegate) {
  return function(expression, locals, later, ident) {
    if (later && typeof later === 'object') {
      var create = $delegate(expression, locals, true, ident);
      angular.extend(create.instance, later);
      return create();
    }
    return $delegate(expression, locals, later, ident);
  };
}];


/**
 * @ngdoc module
 * @name ngMock
 * @packageName angular-mocks
 * @description
 *
 * # ngMock
 *
 * The `ngMock` module provides support to inject and mock Angular services into unit tests.
 * In addition, ngMock also extends various core ng services such that they can be
 * inspected and controlled in a synchronous manner within test code.
 *
 *
 * <div doc-module-components="ngMock"></div>
 *
 */
angular.module('ngMock', ['ng']).provider({
  $browser: angular.mock.$BrowserProvider,
  $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
  $log: angular.mock.$LogProvider,
  $interval: angular.mock.$IntervalProvider,
  $httpBackend: angular.mock.$HttpBackendProvider,
  $rootElement: angular.mock.$RootElementProvider
}).config(['$provide', function($provide) {
  $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
  $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
  $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
  $provide.decorator('$controller', angular.mock.$ControllerDecorator);
}]);

/**
 * @ngdoc module
 * @name ngMockE2E
 * @module ngMockE2E
 * @packageName angular-mocks
 * @description
 *
 * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
 * Currently there is only one mock present in this module -
 * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
 */
angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}]);

/**
 * @ngdoc service
 * @name $httpBackend
 * @module ngMockE2E
 * @description
 * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
 * applications that use the {@link ng.$http $http service}.
 *
 * *Note*: For fake http backend implementation suitable for unit testing please see
 * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
 *
 * This implementation can be used to respond with static or dynamic responses via the `when` api
 * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
 * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
 * templates from a webserver).
 *
 * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
 * is being developed with the real backend api replaced with a mock, it is often desirable for
 * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
 * templates or static files from the webserver). To configure the backend with this behavior
 * use the `passThrough` request handler of `when` instead of `respond`.
 *
 * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
 * testing. For this reason the e2e $httpBackend flushes mocked out requests
 * automatically, closely simulating the behavior of the XMLHttpRequest object.
 *
 * To setup the application to run with this http backend, you have to create a module that depends
 * on the `ngMockE2E` and your application modules and defines the fake backend:
 *
 * ```js
 *   myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
 *   myAppDev.run(function($httpBackend) {
 *     phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *     $httpBackend.whenGET(/^\/templates\//).passThrough();
 *     //...
 *   });
 * ```
 *
 * Afterwards, bootstrap your app with this new module.
 */

/**
 * @ngdoc method
 * @name $httpBackend#when
 * @module ngMockE2E
 * @description
 * Creates a new backend definition.
 *
 * @param {string} method HTTP method.
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
 *   object and returns true if the headers match the current definition.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 *
 *  - respond –
 *    `{function([status,] data[, headers, statusText])
 *    | function(function(method, url, data, headers)}`
 *    – The respond method takes a set of static data to be returned or a function that can return
 *    an array containing response status (number), response data (string), response headers
 *    (Object), and the text for the status (string).
 *  - passThrough – `{function()}` – Any request matching a backend definition with
 *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
 *    to the server.)
 *  - Both methods return the `requestHandler` object for possible overrides.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenGET
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for GET requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenHEAD
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for HEAD requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenDELETE
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for DELETE requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPOST
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for POST requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPUT
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PUT requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPATCH
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PATCH requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenJSONP
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for JSONP requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
angular.mock.e2e = {};
angular.mock.e2e.$httpBackendDecorator =
  ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];


/**
 * @ngdoc type
 * @name $rootScope.Scope
 * @module ngMock
 * @description
 * {@link ng.$rootScope.Scope Scope} type decorated with helper methods useful for testing. These
 * methods are automatically available on any {@link ng.$rootScope.Scope Scope} instance when
 * `ngMock` module is loaded.
 *
 * In addition to all the regular `Scope` methods, the following helper methods are available:
 */
angular.mock.$RootScopeDecorator = ['$delegate', function($delegate) {

  var $rootScopePrototype = Object.getPrototypeOf($delegate);

  $rootScopePrototype.$countChildScopes = countChildScopes;
  $rootScopePrototype.$countWatchers = countWatchers;

  return $delegate;

  // ------------------------------------------------------------------------------------------ //

  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countChildScopes
   * @module ngMock
   * @description
   * Counts all the direct and indirect child scopes of the current scope.
   *
   * The current scope is excluded from the count. The count includes all isolate child scopes.
   *
   * @returns {number} Total number of child scopes.
   */
  function countChildScopes() {
    // jshint validthis: true
    var count = 0; // exclude the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += 1;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }


  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countWatchers
   * @module ngMock
   * @description
   * Counts all the watchers of direct and indirect child scopes of the current scope.
   *
   * The watchers of the current scope are included in the count and so are all the watchers of
   * isolate child scopes.
   *
   * @returns {number} Total number of watchers.
   */
  function countWatchers() {
    // jshint validthis: true
    var count = this.$$watchers ? this.$$watchers.length : 0; // include the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }
}];


if (window.jasmine || window.mocha) {

  var currentSpec = null,
      annotatedFunctions = [],
      isSpecRunning = function() {
        return !!currentSpec;
      };

  angular.mock.$$annotate = angular.injector.$$annotate;
  angular.injector.$$annotate = function(fn) {
    if (typeof fn === 'function' && !fn.$inject) {
      annotatedFunctions.push(fn);
    }
    return angular.mock.$$annotate.apply(this, arguments);
  };


  (window.beforeEach || window.setup)(function() {
    annotatedFunctions = [];
    currentSpec = this;
  });

  (window.afterEach || window.teardown)(function() {
    var injector = currentSpec.$injector;

    annotatedFunctions.forEach(function(fn) {
      delete fn.$inject;
    });

    angular.forEach(currentSpec.$modules, function(module) {
      if (module && module.$$hashKey) {
        module.$$hashKey = undefined;
      }
    });

    currentSpec.$injector = null;
    currentSpec.$modules = null;
    currentSpec = null;

    if (injector) {
      injector.get('$rootElement').off();
    }

    // clean up jquery's fragment cache
    angular.forEach(angular.element.fragments, function(val, key) {
      delete angular.element.fragments[key];
    });

    MockXhr.$$lastInstance = null;

    angular.forEach(angular.callbacks, function(val, key) {
      delete angular.callbacks[key];
    });
    angular.callbacks.counter = 0;
  });

  /**
   * @ngdoc function
   * @name angular.mock.module
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function registers a module configuration code. It collects the configuration information
   * which will be used when the injector is created by {@link angular.mock.inject inject}.
   *
   * See {@link angular.mock.inject inject} for usage example
   *
   * @param {...(string|Function|Object)} fns any number of modules which are represented as string
   *        aliases or as anonymous module initialization functions. The modules are used to
   *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
   *        object literal is passed they will be registered as values in the module, the key being
   *        the module name and the value being what is returned.
   */
  window.module = angular.mock.module = function() {
    var moduleFns = Array.prototype.slice.call(arguments, 0);
    return isSpecRunning() ? workFn() : workFn;
    /////////////////////
    function workFn() {
      if (currentSpec.$injector) {
        throw new Error('Injector already created, can not register a module!');
      } else {
        var modules = currentSpec.$modules || (currentSpec.$modules = []);
        angular.forEach(moduleFns, function(module) {
          if (angular.isObject(module) && !angular.isArray(module)) {
            modules.push(function($provide) {
              angular.forEach(module, function(value, key) {
                $provide.value(key, value);
              });
            });
          } else {
            modules.push(module);
          }
        });
      }
    }
  };

  /**
   * @ngdoc function
   * @name angular.mock.inject
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * The inject function wraps a function into an injectable function. The inject() creates new
   * instance of {@link auto.$injector $injector} per test, which is then used for
   * resolving references.
   *
   *
   * ## Resolving References (Underscore Wrapping)
   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
   * that is declared in the scope of the `describe()` block. Since we would, most likely, want
   * the variable to have the same name of the reference we have a problem, since the parameter
   * to the `inject()` function would hide the outer variable.
   *
   * To help with this, the injected parameters can, optionally, be enclosed with underscores.
   * These are ignored by the injector when the reference name is resolved.
   *
   * For example, the parameter `_myService_` would be resolved as the reference `myService`.
   * Since it is available in the function body as _myService_, we can then assign it to a variable
   * defined in an outer scope.
   *
   * ```
   * // Defined out reference variable outside
   * var myService;
   *
   * // Wrap the parameter in underscores
   * beforeEach( inject( function(_myService_){
   *   myService = _myService_;
   * }));
   *
   * // Use myService in a series of tests.
   * it('makes use of myService', function() {
   *   myService.doStuff();
   * });
   *
   * ```
   *
   * See also {@link angular.mock.module angular.mock.module}
   *
   * ## Example
   * Example of what a typical jasmine tests looks like with the inject method.
   * ```js
   *
   *   angular.module('myApplicationModule', [])
   *       .value('mode', 'app')
   *       .value('version', 'v1.0.1');
   *
   *
   *   describe('MyApp', function() {
   *
   *     // You need to load modules that you want to test,
   *     // it loads only the "ng" module by default.
   *     beforeEach(module('myApplicationModule'));
   *
   *
   *     // inject() is used to inject arguments of all given functions
   *     it('should provide a version', inject(function(mode, version) {
   *       expect(version).toEqual('v1.0.1');
   *       expect(mode).toEqual('app');
   *     }));
   *
   *
   *     // The inject and module method can also be used inside of the it or beforeEach
   *     it('should override a version and test the new version is injected', function() {
   *       // module() takes functions or strings (module aliases)
   *       module(function($provide) {
   *         $provide.value('version', 'overridden'); // override version here
   *       });
   *
   *       inject(function(version) {
   *         expect(version).toEqual('overridden');
   *       });
   *     });
   *   });
   *
   * ```
   *
   * @param {...Function} fns any number of functions which will be injected using the injector.
   */



  var ErrorAddingDeclarationLocationStack = function(e, errorForStack) {
    this.message = e.message;
    this.name = e.name;
    if (e.line) this.line = e.line;
    if (e.sourceId) this.sourceId = e.sourceId;
    if (e.stack && errorForStack)
      this.stack = e.stack + '\n' + errorForStack.stack;
    if (e.stackArray) this.stackArray = e.stackArray;
  };
  ErrorAddingDeclarationLocationStack.prototype.toString = Error.prototype.toString;

  window.inject = angular.mock.inject = function() {
    var blockFns = Array.prototype.slice.call(arguments, 0);
    var errorForStack = new Error('Declaration Location');
    return isSpecRunning() ? workFn.call(currentSpec) : workFn;
    /////////////////////
    function workFn() {
      var modules = currentSpec.$modules || [];
      var strictDi = !!currentSpec.$injectorStrict;
      modules.unshift('ngMock');
      modules.unshift('ng');
      var injector = currentSpec.$injector;
      if (!injector) {
        if (strictDi) {
          // If strictDi is enabled, annotate the providerInjector blocks
          angular.forEach(modules, function(moduleFn) {
            if (typeof moduleFn === "function") {
              angular.injector.$$annotate(moduleFn);
            }
          });
        }
        injector = currentSpec.$injector = angular.injector(modules, strictDi);
        currentSpec.$injectorStrict = strictDi;
      }
      for (var i = 0, ii = blockFns.length; i < ii; i++) {
        if (currentSpec.$injectorStrict) {
          // If the injector is strict / strictDi, and the spec wants to inject using automatic
          // annotation, then annotate the function here.
          injector.annotate(blockFns[i]);
        }
        try {
          /* jshint -W040 *//* Jasmine explicitly provides a `this` object when calling functions */
          injector.invoke(blockFns[i] || angular.noop, this);
          /* jshint +W040 */
        } catch (e) {
          if (e.stack && errorForStack) {
            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
          }
          throw e;
        } finally {
          errorForStack = null;
        }
      }
    }
  };


  angular.mock.inject.strictDi = function(value) {
    value = arguments.length ? !!value : true;
    return isSpecRunning() ? workFn() : workFn;

    function workFn() {
      if (value !== currentSpec.$injectorStrict) {
        if (currentSpec.$injector) {
          throw new Error('Injector already created, can not modify strict annotations');
        } else {
          currentSpec.$injectorStrict = value;
        }
      }
    }
  };
}


})(window, window.angular);

(function() {
  var slice = [].slice;

  describe('Data service', function() {
    var $q, $rootScope, $state, Collection, _dataServiceProvider, dataService, indexedDBService, injected, restService;
    _dataServiceProvider = null;
    beforeEach(module('bbData', function(dataServiceProvider, $provide) {
      var State;
      _dataServiceProvider = dataServiceProvider;
      $provide.constant('SPECIFICATION', {
        asd: {
          id: 'asdid'
        },
        bsd: {
          paths: []
        }
      });
      return $provide.constant('$state', new (State = (function() {
        function State() {}

        State.prototype.reload = jasmine.createSpy('reload');

        return State;

      })()));
    }));
    dataService = $q = $rootScope = $state = restService = indexedDBService = Collection = void 0;
    injected = function($injector) {
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      $state = $injector.get('$state');
      indexedDBService = $injector.get('indexedDBService');
      restService = $injector.get('restService');
      return dataService = $injector.invoke(_dataServiceProvider.$get);
    };
    beforeEach(inject(injected));
    it('should be defined', function() {
      return expect(dataService).toBeDefined();
    });
    it('`s cache should be true', function() {
      return expect(dataService.cache).toBeTruthy();
    });
    it('should generate functions for every endpoint in the specification', function() {
      expect(dataService.getAsd).toBeDefined();
      expect(angular.isFunction(dataService.getAsd)).toBeTruthy();
      expect(dataService.getBsd).not.toBeDefined();
      expect(angular.isFunction(dataService.getBsd)).toBeFalsy();
      spyOn(dataService, 'get');
      dataService.getAsd(1);
      return expect(dataService.get).toHaveBeenCalledWith('asd', 1);
    });
    describe('clearCache()', function() {
      return it('should clear the database, then reload the page', function() {
        spyOn(indexedDBService, 'clear').and.returnValue($q.resolve());
        expect(indexedDBService.clear).not.toHaveBeenCalled();
        dataService.clearCache();
        expect(indexedDBService.clear).toHaveBeenCalled();
        expect($state.reload).not.toHaveBeenCalled();
        $rootScope.$apply();
        return expect($state.reload).toHaveBeenCalled();
      });
    });
    describe('get(args)', function() {
      return it('should create a new Collection and return a promise', function() {
        var c, cb, original;
        original = dataService.createCollection;
        c = null;
        spyOn(dataService, 'createCollection').and.callFake(function() {
          var args;
          args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          c = original.apply(null, args);
          spyOn(c, 'subscribe').and.returnValue($q.resolve(c));
          return c;
        });
        cb = jasmine.createSpy('callback');
        expect(dataService.createCollection).not.toHaveBeenCalled();
        dataService.get('asd').then(cb);
        expect(dataService.createCollection).toHaveBeenCalledWith('asd', {
          subscribe: false
        });
        expect(cb).not.toHaveBeenCalled();
        $rootScope.$apply();
        return expect(cb).toHaveBeenCalledWith(c);
      });
    });
    describe('processArguments(args)', function() {
      it('should return the restPath and the query (empty query)', function() {
        var query, ref, restPath;
        ref = dataService.processArguments(['asd', '1']), restPath = ref[0], query = ref[1];
        expect(restPath).toBe('asd/1');
        return expect(query).toEqual({});
      });
      return it('should return the restPath and the query (not empty query)', function() {
        var query, ref, restPath;
        ref = dataService.processArguments([
          'asd', '1', {
            parameter: 1
          }
        ]), restPath = ref[0], query = ref[1];
        expect(restPath).toBe('asd/1');
        return expect(query).toEqual({
          parameter: 1
        });
      });
    });
    describe('control(url, method, params)', function() {
      it('should make a POST call', function() {
        var cb, method, params, url;
        spyOn(restService, 'post').and.returnValue($q.resolve());
        cb = jasmine.createSpy('cb');
        expect(restService.post).not.toHaveBeenCalled();
        url = 'forceschedulers/force';
        method = 'force';
        params = {
          parameter: 1
        };
        dataService.control(url, method, params).then(cb);
        expect(restService.post).toHaveBeenCalledWith(url, {
          id: jasmine.any(Number),
          jsonrpc: '2.0',
          method: method,
          params: params
        });
        expect(cb).not.toHaveBeenCalled();
        $rootScope.$apply();
        return expect(cb).toHaveBeenCalled();
      });
      return it('should change the id on each call', function() {
        var id1, id2, method, url;
        spyOn(restService, 'post');
        url = 'forceschedulers/force';
        method = 'force';
        dataService.control(url, method);
        dataService.control(url, method);
        id1 = restService.post.calls.argsFor(0)[1].id;
        id2 = restService.post.calls.argsFor(1)[1].id;
        return expect(id1).not.toEqual(id2);
      });
    });
    return describe('open(scope)', function() {
      it('should return a class with close, closeOnDestroy and getXXX functions', function() {
        var dataAccessor, scope;
        scope = $rootScope.$new();
        dataAccessor = dataService.open(scope);
        expect(angular.isFunction(dataAccessor.close)).toBeTruthy();
        return expect(angular.isFunction(dataAccessor.closeOnDestroy)).toBeTruthy();
      });
      it('should generate functions for every endpoint in the specification', function() {
        var dataAccessor;
        dataAccessor = dataService.open();
        expect(dataAccessor.getAsd).toBeDefined();
        expect(angular.isFunction(dataAccessor.getAsd)).toBeTruthy();
        expect(dataAccessor.getBsd).not.toBeDefined();
        expect(angular.isFunction(dataAccessor.getBsd)).toBeFalsy();
        spyOn(dataService, 'get').and.callThrough();
        dataAccessor.getAsd(1);
        dataAccessor.getAsd(2, {
          param: 3
        });
        dataAccessor.getAsd(4, {
          subscribe: false
        });
        expect(dataService.get).toHaveBeenCalledWith('asd', 1, {
          subscribe: true
        });
        expect(dataService.get).toHaveBeenCalledWith('asd', 2, {
          param: 3,
          subscribe: true
        });
        return expect(dataService.get).toHaveBeenCalledWith('asd', 4, {
          subscribe: false
        });
      });
      it('should unsubscribe on destroy event', function() {
        var dataAccessor, scope;
        scope = $rootScope.$new();
        spyOn(scope, '$on').and.callThrough();
        dataAccessor = dataService.open(scope);
        expect(scope.$on).toHaveBeenCalledWith('$destroy', jasmine.any(Function));
        spyOn(dataAccessor, 'close').and.callThrough();
        expect(dataAccessor.close).not.toHaveBeenCalled();
        scope.$destroy();
        return expect(dataAccessor.close).toHaveBeenCalled();
      });
      return it('should call unsubscribe on each element', function() {
        var dataAccessor, el1, el2, el3;
        dataAccessor = dataService.open();
        el1 = {
          unsubscribe: jasmine.createSpy('unsubscribe1')
        };
        el2 = {
          unsubscribe: jasmine.createSpy('unsubscribe2')
        };
        el3 = {};
        dataAccessor.collections.push(el1);
        dataAccessor.collections.push(el2);
        dataAccessor.collections.push(el3);
        expect(el1.unsubscribe).not.toHaveBeenCalled();
        expect(el2.unsubscribe).not.toHaveBeenCalled();
        dataAccessor.close();
        expect(el1.unsubscribe).toHaveBeenCalled();
        return expect(el2.unsubscribe).toHaveBeenCalled();
      });
    });
  });

}).call(this);

(function() {
  describe('Data utils service', function() {
    var dataUtilsService, injected;
    beforeEach(module('bbData'));
    dataUtilsService = void 0;
    injected = function($injector) {
      return dataUtilsService = $injector.get('dataUtilsService');
    };
    beforeEach(inject(injected));
    it('should be defined', function() {
      return expect(dataUtilsService).toBeDefined();
    });
    describe('capitalize(string)', function() {
      return it('should capitalize the parameter string', function() {
        var result;
        result = dataUtilsService.capitalize('test');
        expect(result).toBe('Test');
        result = dataUtilsService.capitalize('t');
        return expect(result).toBe('T');
      });
    });
    describe('type(arg)', function() {
      return it('should return the type of the parameter endpoint', function() {
        var result;
        result = dataUtilsService.type('asd/1');
        expect(result).toBe('asd');
        result = dataUtilsService.type('asd/1/bnm');
        return expect(result).toBe('bnm');
      });
    });
    describe('singularType(arg)', function() {
      return it('should return the singular the type name of the parameter endpoint', function() {
        var result;
        result = dataUtilsService.singularType('tests/1');
        expect(result).toBe('test');
        result = dataUtilsService.singularType('tests');
        return expect(result).toBe('test');
      });
    });
    describe('socketPath(arg)', function() {
      return it('should return the WebSocket subscribe path of the parameter path', function() {
        var result;
        result = dataUtilsService.socketPath('asd/1/bnm');
        expect(result).toBe('asd/1/bnm/*/*');
        result = dataUtilsService.socketPath('asd/1');
        return expect(result).toBe('asd/1/*');
      });
    });
    describe('restPath(arg)', function() {
      return it('should return the rest path of the parameter WebSocket subscribe path', function() {
        var result;
        result = dataUtilsService.restPath('asd/1/bnm/*/*');
        expect(result).toBe('asd/1/bnm');
        result = dataUtilsService.restPath('asd/1/*');
        return expect(result).toBe('asd/1');
      });
    });
    describe('endpointPath(arg)', function() {
      return it('should return the endpoint path of the parameter rest or WebSocket path', function() {
        var result;
        result = dataUtilsService.endpointPath('asd/1/bnm/*/*');
        expect(result).toBe('asd/1/bnm');
        result = dataUtilsService.endpointPath('asd/1/*');
        return expect(result).toBe('asd');
      });
    });
    describe('copyOrSplit(arrayOrString)', function() {
      it('should copy an array', function() {
        var array, result;
        array = [1, 2, 3];
        result = dataUtilsService.copyOrSplit(array);
        expect(result).not.toBe(array);
        return expect(result).toEqual(array);
      });
      return it('should split a string', function() {
        var result, string;
        string = 'asd/123/bnm';
        result = dataUtilsService.copyOrSplit(string);
        return expect(result).toEqual(['asd', '123', 'bnm']);
      });
    });
    describe('unWrap(data, path)', function() {
      return it('should return the array of the type based on the path', function() {
        var data, result;
        data = {
          asd: [
            {
              'data': 'data'
            }
          ],
          meta: {}
        };
        result = dataUtilsService.unWrap(data, 'bnm/1/asd');
        expect(result).toBe(data.asd);
        result = dataUtilsService.unWrap(data, 'bnm/1/asd/2');
        return expect(result).toBe(data.asd);
      });
    });
    describe('parse(object)', function() {
      return it('should parse fields from JSON', function() {
        var copy, parsed, test;
        test = {
          a: 1,
          b: 'asd3',
          c: angular.toJson(['a', 1, 2]),
          d: angular.toJson({
            asd: [],
            bsd: {}
          })
        };
        copy = angular.copy(test);
        copy.c = angular.toJson(copy.c);
        copy.d = angular.toJson(copy.d);
        parsed = dataUtilsService.parse(test);
        return expect(parsed).toEqual(test);
      });
    });
    describe('numberOrString(string)', function() {
      it('should convert a string to a number if possible', function() {
        var result;
        result = dataUtilsService.numberOrString('12');
        return expect(result).toBe(12);
      });
      return it('should return the string if it is not a number', function() {
        var result;
        result = dataUtilsService.numberOrString('w3as');
        return expect(result).toBe('w3as');
      });
    });
    return describe('emailInString(string)', function() {
      return it('should return an email from a string', function() {
        var email;
        email = dataUtilsService.emailInString('foo <bar@foo.com>');
        return expect(email).toBe('bar@foo.com');
      });
    });
  });

}).call(this);

(function() {
  describe('IndexedDB service', function() {
    var $rootScope, db, dbMock, indexedDBService, injected, testArray;
    beforeEach(module('bbData'));
    beforeEach(module(function($provide) {
      var specification;
      specification = {
        FIELDTYPES: {
          IDENTIFIER: 'i',
          NUMBER: 'n'
        },
        typeA: {
          id: 'idA',
          paths: ['typeB', 'typeB/i:idB', 'typeB/i:idB/typeC', 'typeB/i:idB/typeC/i:stringC', 'typeB/i:idB/typeC/n:numberC', 'typeC']
        },
        typeB: {
          id: 'idB',
          paths: ['typeC', 'typeC/n:idC', 'typeC/i:stringC']
        },
        typeC: {
          id: 'idC',
          identifier: 'stringC',
          paths: []
        }
      };
      return $provide.constant('SPECIFICATION', specification);
    }));
    indexedDBService = testArray = $rootScope = db = dbMock = void 0;
    injected = function($injector) {
      var fn, promise;
      indexedDBService = $injector.get('indexedDBService');
      $rootScope = $injector.get('$rootScope');
      fn = null;
      promise = {
        then: function(fn) {
          fn();
          return promise;
        },
        "catch": function(fn) {
          fn('error');
          return promise;
        },
        "finally": function(fn) {
          fn();
          return promise;
        }
      };
      dbMock = {
        open: jasmine.createSpy('open').and.returnValue(promise),
        "delete": jasmine.createSpy('delete').and.returnValue(promise)
      };
      return testArray = [
        {
          builderid: 1,
          buildid: 3,
          buildrequestid: 1,
          complete: false,
          complete_at: null,
          started_at: 1417802797
        }, {
          builderid: 2,
          buildid: 1,
          buildrequestid: 1,
          complete: true,
          complete_at: 1417803429,
          started_at: 1417803026
        }, {
          builderid: 1,
          buildid: 2,
          buildrequestid: 1,
          complete: true,
          complete_at: 1417803038,
          started_at: 1417803025
        }
      ];
    };
    beforeEach(inject(injected));
    it('should be defined', function() {
      return expect(indexedDBService).toBeDefined();
    });
    describe('open()', function() {
      return it('should open the db and return a promise', function() {
        var callback;
        db = indexedDBService.db;
        indexedDBService.db = dbMock;
        callback = jasmine.createSpy('cb');
        indexedDBService.open().then(callback);
        expect(callback).not.toHaveBeenCalled();
        $rootScope.$apply();
        expect(callback).toHaveBeenCalled();
        return indexedDBService.db = db;
      });
    });
    describe('clear()', function() {
      return it('should delete and reopen the database and return a promise', function() {
        var callback;
        spyOn(indexedDBService, 'open').and.callThrough();
        db = indexedDBService.db;
        indexedDBService.db = dbMock;
        callback = jasmine.createSpy('cb');
        expect(indexedDBService.open).not.toHaveBeenCalled();
        indexedDBService.clear().then(callback);
        expect(callback).not.toHaveBeenCalled();
        $rootScope.$apply();
        expect(indexedDBService.open).toHaveBeenCalled();
        expect(callback).toHaveBeenCalled();
        return indexedDBService.db = db;
      });
    });
    describe('filter(array, filters)', function() {
      it('should filter the array (one filter)', function() {
        var result;
        result = indexedDBService.filter(testArray, {
          complete: false
        });
        expect(result.length).toBe(1);
        return expect(result).toContain(testArray[0]);
      });
      it('should filter the array (more than one filters)', function() {
        var result;
        result = indexedDBService.filter(testArray, {
          complete: true,
          buildrequestid: 1
        });
        expect(result.length).toBe(2);
        expect(result).toContain(testArray[1]);
        return expect(result).toContain(testArray[2]);
      });
      it('should filter the array (eq - equal)', function() {
        var result;
        result = indexedDBService.filter(testArray, {
          'complete__eq': true
        });
        expect(result.length).toBe(2);
        expect(result).toContain(testArray[1]);
        return expect(result).toContain(testArray[2]);
      });
      it('should filter the array (ne - not equal)', function() {
        var result;
        result = indexedDBService.filter(testArray, {
          'complete__ne': true
        });
        expect(result.length).toBe(1);
        return expect(result).toContain(testArray[0]);
      });
      it('should filter the array (lt - less than)', function() {
        var result;
        result = indexedDBService.filter(testArray, {
          'buildid__lt': 3
        });
        expect(result.length).toBe(2);
        expect(result).toContain(testArray[1]);
        return expect(result).toContain(testArray[2]);
      });
      it('should filter the array (le - less than or equal to)', function() {
        var result;
        result = indexedDBService.filter(testArray, {
          'buildid__le': 3
        });
        return expect(result.length).toBe(3);
      });
      it('should filter the array (gt - greater than)', function() {
        var result;
        result = indexedDBService.filter(testArray, {
          'started_at__gt': 1417803025
        });
        expect(result.length).toBe(1);
        return expect(result).toContain(testArray[1]);
      });
      it('should filter the array (ge - greater than or equal to)', function() {
        var result;
        result = indexedDBService.filter(testArray, {
          'started_at__ge': 1417803025
        });
        expect(result.length).toBe(2);
        expect(result).toContain(testArray[1]);
        return expect(result).toContain(testArray[2]);
      });
      return it('should convert on/off, true/false, yes/no to boolean', function() {
        var result, resultFalse, resultTrue;
        resultTrue = indexedDBService.filter(testArray, {
          complete: true
        });
        resultFalse = indexedDBService.filter(testArray, {
          complete: false
        });
        result = indexedDBService.filter(testArray, {
          complete: 'on'
        });
        expect(result).toEqual(resultTrue);
        result = indexedDBService.filter(testArray, {
          complete: 'true'
        });
        expect(result).toEqual(resultTrue);
        result = indexedDBService.filter(testArray, {
          complete: 'yes'
        });
        expect(result).toEqual(resultTrue);
        result = indexedDBService.filter(testArray, {
          complete: 'off'
        });
        expect(result).toEqual(resultFalse);
        result = indexedDBService.filter(testArray, {
          complete: 'false'
        });
        expect(result).toEqual(resultFalse);
        result = indexedDBService.filter(testArray, {
          complete: 'no'
        });
        return expect(result).toEqual(resultFalse);
      });
    });
    describe('sort(array, order)', function() {
      it('should sort the array (one parameter)', function() {
        var result;
        result = indexedDBService.sort(testArray, 'buildid');
        expect(result[0]).toEqual(testArray[1]);
        expect(result[1]).toEqual(testArray[2]);
        return expect(result[2]).toEqual(testArray[0]);
      });
      it('should sort the array (one parameter, - reverse)', function() {
        var result;
        result = indexedDBService.sort(testArray, '-buildid');
        expect(result[0]).toEqual(testArray[0]);
        expect(result[1]).toEqual(testArray[2]);
        return expect(result[2]).toEqual(testArray[1]);
      });
      return it('should sort the array (more parameter)', function() {
        var result;
        result = indexedDBService.sort(testArray, ['builderid', '-buildid']);
        expect(result[0]).toEqual(testArray[0]);
        expect(result[1]).toEqual(testArray[2]);
        return expect(result[2]).toEqual(testArray[1]);
      });
    });
    describe('paginate(array, offset, limit)', function() {
      it('should slice the array (only offset)', function() {
        var result;
        result = indexedDBService.paginate(testArray, 1);
        expect(result.length).toBe(2);
        expect(result[0]).toEqual(testArray[1]);
        return expect(result[1]).toEqual(testArray[2]);
      });
      it('should slice the array (only limit)', function() {
        var result;
        result = indexedDBService.paginate(testArray, null, 1);
        expect(result.length).toBe(1);
        return expect(result[0]).toEqual(testArray[0]);
      });
      it('should slice the array (offset, limit)', function() {
        var result;
        result = indexedDBService.paginate(testArray, 1, 1);
        expect(result.length).toBe(1);
        return expect(result[0]).toEqual(testArray[1]);
      });
      it('should return an empty array when the offset >= array.length', function() {
        var result;
        result = indexedDBService.paginate(testArray, 3);
        expect(result.length).toBe(0);
        result = indexedDBService.paginate(testArray, 4);
        return expect(result.length).toBe(0);
      });
      return it('should return the array when the limit >= array.length', function() {
        var result;
        result = indexedDBService.paginate(testArray, 2, 3);
        expect(result.length).toBe(1);
        return expect(result[0]).toEqual(testArray[2]);
      });
    });
    describe('fields(array, fields)', function() {
      it('should return an array with elements having only certain fields (one field)', function() {
        var i, len, r, result, results;
        result = indexedDBService.fields(testArray, 'buildid');
        expect(result.length).toBe(testArray.length);
        results = [];
        for (i = 0, len = result.length; i < len; i++) {
          r = result[i];
          results.push(expect(Object.keys(r)).toEqual(['buildid']));
        }
        return results;
      });
      return it('should return an array with elements having only certain fields (more fields)', function() {
        var i, len, r, result, results;
        result = indexedDBService.fields(testArray, ['buildid', 'buildrequestid']);
        expect(result.length).toBe(testArray.length);
        results = [];
        for (i = 0, len = result.length; i < len; i++) {
          r = result[i];
          results.push(expect(Object.keys(r)).toEqual(['buildid', 'buildrequestid']));
        }
        return results;
      });
    });
    describe('processUrl(url)', function() {
      it('should return [root, query, id] (empty query + id)', function() {
        indexedDBService.processUrl('typeA/11').then(function(arg) {
          var id, query, tableName;
          tableName = arg[0], query = arg[1], id = arg[2];
          expect(tableName).toBe('typeA');
          expect(query).toEqual({});
          return expect(id).toBe(11);
        });
        indexedDBService.processUrl('typeA/11/typeB/stringB').then(function(arg) {
          var id, query, tableName;
          tableName = arg[0], query = arg[1], id = arg[2];
          expect(tableName).toBe('typeB');
          expect(query).toEqual({});
          return expect(id).toBe('stringB');
        });
        indexedDBService.processUrl('typeB/11/typeC/12').then(function(arg) {
          var id, query, tableName;
          tableName = arg[0], query = arg[1], id = arg[2];
          expect(tableName).toBe('typeC');
          expect(query).toEqual({});
          return expect(id).toBe(12);
        });
        return $rootScope.$apply();
      });
      it('should return [root, query, id] (empty query + no id)', function() {
        indexedDBService.processUrl('typeC').then(function(arg) {
          var id, query, tableName;
          tableName = arg[0], query = arg[1], id = arg[2];
          expect(tableName).toBe('typeC');
          expect(query).toEqual({});
          return expect(id).toBeNull();
        });
        return $rootScope.$apply();
      });
      it('should return [root, query, id] (query including number or string field)', function() {
        indexedDBService.processUrl('typeA/11/typeB/stringID/typeC/1').then(function(arg) {
          var id, query, tableName;
          tableName = arg[0], query = arg[1], id = arg[2];
          expect(tableName).toBe('typeC');
          expect(query).toEqual({
            idB: 'stringID',
            numberC: 1
          });
          return expect(id).toBeNull();
        });
        indexedDBService.processUrl('typeB/11/typeC/stringID').then(function(arg) {
          var id, query, tableName;
          tableName = arg[0], query = arg[1], id = arg[2];
          expect(tableName).toBe('typeC');
          expect(query).toEqual({
            idB: 11,
            stringC: 'stringID'
          });
          return expect(id).toBeNull();
        });
        indexedDBService.processUrl('typeC/stringID').then(function(arg) {
          var id, query, tableName;
          tableName = arg[0], query = arg[1], id = arg[2];
          expect(tableName).toBe('typeC');
          expect(query).toEqual({
            stringC: 'stringID'
          });
          return expect(id).toBeNull();
        });
        indexedDBService.processUrl('typeB/stringID/typeC').then(function(arg) {
          var id, query, tableName;
          tableName = arg[0], query = arg[1], id = arg[2];
          expect(tableName).toBe('typeC');
          expect(query).toEqual({
            idB: 'stringID'
          });
          return expect(id).toBeNull();
        });
        return $rootScope.$apply();
      });
      return it('should trow and error if there is no match for a certain url', function() {
        var fn;
        fn = function() {
          return indexedDBService.processUrl('typeA/11/typeB/12');
        };
        return expect(fn).toThrowError();
      });
    });
    return describe('processSpecification(specification)', function() {
      return it('should return the indexedDB stores', function() {
        var result, specification;
        specification = {
          test1: {
            id: 'id1',
            fields: ['id1', 'field1', 'field2']
          },
          test2: {
            id: null,
            fields: ['fieldA', 'fieldB']
          }
        };
        result = indexedDBService.processSpecification(specification);
        expect(result.test1).toBe('&id1,field1,field2');
        return expect(result.test2).toBe('++id,fieldA,fieldB');
      });
    });
  });

}).call(this);

(function() {
  describe('Rest service', function() {
    var $httpBackend, injected, restService;
    beforeEach(module('bbData'));
    beforeEach(function() {
      return module(function($provide) {
        return $provide.constant('API', '/api/');
      });
    });
    restService = $httpBackend = void 0;
    injected = function($injector) {
      restService = $injector.get('restService');
      return $httpBackend = $injector.get('$httpBackend');
    };
    beforeEach(inject(injected));
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      return $httpBackend.verifyNoOutstandingRequest();
    });
    it('should be defined', function() {
      return expect(restService).toBeDefined();
    });
    it('should make an ajax GET call to /api/endpoint', function() {
      var gotResponse, response;
      response = {
        a: 'A'
      };
      $httpBackend.whenGET('/api/endpoint').respond(response);
      gotResponse = null;
      restService.get('endpoint').then(function(r) {
        return gotResponse = r;
      });
      expect(gotResponse).toBeNull();
      $httpBackend.flush();
      return expect(gotResponse).toEqual(response);
    });
    it('should make an ajax GET call to /api/endpoint with parameters', function() {
      var params;
      params = {
        key: 'value'
      };
      $httpBackend.whenGET('/api/endpoint?key=value').respond(200);
      restService.get('endpoint', params);
      return $httpBackend.flush();
    });
    it('should reject the promise on error', function() {
      var error, gotResponse;
      error = 'Internal server error';
      $httpBackend.expectGET('/api/endpoint').respond(500, error);
      gotResponse = null;
      restService.get('endpoint').then(function(response) {
        return gotResponse = response;
      }, function(reason) {
        return gotResponse = reason;
      });
      $httpBackend.flush();
      return expect(gotResponse).toBe(error);
    });
    it('should make an ajax POST call to /api/endpoint', function() {
      var data, gotResponse, response;
      response = {};
      data = {
        b: 'B'
      };
      $httpBackend.expectPOST('/api/endpoint', data).respond(response);
      gotResponse = null;
      restService.post('endpoint', data).then(function(r) {
        return gotResponse = r;
      });
      $httpBackend.flush();
      return expect(gotResponse).toEqual(response);
    });
    return it('should reject the promise when the response is not valid JSON', function() {
      var data, gotResponse, response;
      response = 'aaa';
      data = {
        b: 'B'
      };
      $httpBackend.expectPOST('/api/endpoint', data).respond(response);
      gotResponse = null;
      restService.post('endpoint', data).then(function(response) {
        return gotResponse = response;
      }, function(reason) {
        return gotResponse = reason;
      });
      $httpBackend.flush();
      expect(gotResponse).not.toBeNull();
      return expect(gotResponse).not.toEqual(response);
    });
  });

}).call(this);

(function() {
  describe('Socket service', function() {
    var $location, $rootScope, injected, socket, socketService, webSocketBackend;
    beforeEach(module('bbData'));
    $rootScope = $location = socketService = socket = webSocketBackend = void 0;
    injected = function($injector) {
      $rootScope = $injector.get('$rootScope');
      $location = $injector.get('$location');
      socketService = $injector.get('socketService');
      webSocketBackend = $injector.get('webSocketBackendService');
      socket = webSocketBackend.getWebSocket();
      spyOn(socket, 'send').and.callThrough();
      return spyOn(socketService, 'getWebSocket').and.callThrough();
    };
    beforeEach(inject(injected));
    it('should be defined', function() {
      return expect(socketService).toBeDefined();
    });
    it('should call the onMessage function when a message is an update message', function() {
      var update, updateMessage;
      socketService.open();
      socket.readyState = socket.OPEN;
      socketService.onMessage = jasmine.createSpy('onMessage');
      update = {
        k: 'key',
        m: 'message'
      };
      updateMessage = angular.toJson(update);
      webSocketBackend.send(updateMessage);
      expect(socketService.onMessage).not.toHaveBeenCalled();
      $rootScope.$apply(function() {
        return webSocketBackend.flush();
      });
      return expect(socketService.onMessage).toHaveBeenCalledWith(update.k, update.m);
    });
    it('should call the onClose function when the connection closes', function() {
      socketService.open();
      socketService.onClose = jasmine.createSpy('onClose');
      expect(socketService.onClose).not.toHaveBeenCalled();
      socketService.close();
      return expect(socketService.onClose).toHaveBeenCalled();
    });
    it('should add an _id to every message', function() {
      var argument;
      socketService.open();
      socket.readyState = socket.OPEN;
      expect(socket.send).not.toHaveBeenCalled();
      socketService.send({});
      expect(socket.send).toHaveBeenCalledWith(jasmine.any(String));
      argument = socket.send.calls.argsFor(0)[0];
      return expect(angular.fromJson(argument)._id).toBeDefined();
    });
    it('should send messages waiting in the queue when the connection is open', function() {
      var msg1, msg2, msg3;
      socketService.open();
      socket.readyState = 0;
      msg1 = {
        a: 1
      };
      msg2 = {
        b: 2
      };
      msg3 = {
        c: 3
      };
      socketService.send(msg1);
      socketService.send(msg2);
      expect(socket.send).not.toHaveBeenCalled();
      socket.onopen();
      expect(socket.send).toHaveBeenCalled();
      expect(webSocketBackend.receiveQueue).toContain(angular.toJson(msg1));
      expect(webSocketBackend.receiveQueue).toContain(angular.toJson(msg2));
      return expect(webSocketBackend.receiveQueue).not.toContain(angular.toJson(msg3));
    });
    it('should resolve the promise when a response is received with status code of 200', function() {
      var argument, handler, id, promise, response;
      socketService.open();
      socket.readyState = socket.OPEN;
      promise = socketService.send({
        cmd: 'command'
      });
      handler = jasmine.createSpy('handler');
      promise.then(handler);
      expect(handler).not.toHaveBeenCalled();
      argument = socket.send.calls.argsFor(0)[0];
      id = angular.fromJson(argument)._id;
      response = angular.toJson({
        _id: id,
        code: 200
      });
      webSocketBackend.send(response);
      $rootScope.$apply(function() {
        return webSocketBackend.flush();
      });
      return expect(handler).toHaveBeenCalled();
    });
    it('should reject the promise when a response is received with a status code of not 200', function() {
      var argument, errorHandler, handler, id, promise, response;
      socketService.open();
      socket.readyState = socket.OPEN;
      promise = socketService.send({
        cmd: 'command'
      });
      handler = jasmine.createSpy('handler');
      errorHandler = jasmine.createSpy('errorHandler');
      promise.then(handler, errorHandler);
      expect(handler).not.toHaveBeenCalled();
      expect(errorHandler).not.toHaveBeenCalled();
      argument = socket.send.calls.argsFor(0)[0];
      id = angular.fromJson(argument)._id;
      response = angular.toJson({
        _id: id,
        code: 400
      });
      webSocketBackend.send(response);
      $rootScope.$apply(function() {
        return webSocketBackend.flush();
      });
      expect(handler).not.toHaveBeenCalled();
      return expect(errorHandler).toHaveBeenCalled();
    });
    describe('open()', function() {
      return it('should call getWebSocket', function() {
        expect(socketService.getWebSocket).not.toHaveBeenCalled();
        socketService.open();
        return expect(socketService.getWebSocket).toHaveBeenCalled();
      });
    });
    describe('close()', function() {
      return it('should call socket.close', function() {
        socketService.open();
        spyOn(socket, 'close').and.callThrough();
        expect(socket.close).not.toHaveBeenCalled();
        socketService.close();
        return expect(socket.close).toHaveBeenCalled();
      });
    });
    describe('flush()', function() {
      return it('should send the messages waiting in the queue', function() {
        var i, j, len, len1, m, messages, results;
        socketService.open();
        messages = [
          {
            a: 1
          }, {
            b: 2
          }, {
            c: 3
          }
        ];
        for (i = 0, len = messages.length; i < len; i++) {
          m = messages[i];
          m = angular.toJson(m);
          socketService.queue.push(m);
        }
        expect(socket.send).not.toHaveBeenCalled();
        socketService.flush();
        results = [];
        for (j = 0, len1 = messages.length; j < len1; j++) {
          m = messages[j];
          m = angular.toJson(m);
          results.push(expect(socket.send).toHaveBeenCalledWith(m));
        }
        return results;
      });
    });
    describe('nextId()', function() {
      return it('should return different ids', function() {
        var id1, id2;
        id1 = socketService.nextId();
        id2 = socketService.nextId();
        return expect(id1).not.toEqual(id2);
      });
    });
    return describe('getUrl()', function() {
      it('should return the WebSocket url based on the host and port (localhost)', function() {
        var host, port, url;
        host = 'localhost';
        port = 8080;
        spyOn($location, 'host').and.returnValue(host);
        spyOn($location, 'port').and.returnValue(port);
        spyOn(socketService, 'getRootPath').and.returnValue('/');
        url = socketService.getUrl();
        return expect(url).toBe('ws://localhost:8080/ws');
      });
      it('should return the WebSocket url based on the host and port', function() {
        var host, port, url;
        host = 'buildbot.test';
        port = 80;
        spyOn($location, 'host').and.returnValue(host);
        spyOn($location, 'port').and.returnValue(port);
        spyOn(socketService, 'getRootPath').and.returnValue('/');
        url = socketService.getUrl();
        return expect(url).toBe('ws://buildbot.test/ws');
      });
      it('should return the WebSocket url based on the host and port and protocol', function() {
        var host, port, protocol, url;
        host = 'buildbot.test';
        port = 443;
        protocol = 'https';
        spyOn($location, 'host').and.returnValue(host);
        spyOn($location, 'port').and.returnValue(port);
        spyOn($location, 'protocol').and.returnValue(protocol);
        spyOn(socketService, 'getRootPath').and.returnValue('/');
        url = socketService.getUrl();
        return expect(url).toBe('wss://buildbot.test/ws');
      });
      return it('should return the WebSocket url based on the host and port and protocol and basedir', function() {
        var host, path, port, protocol, url;
        host = 'buildbot.test';
        port = 443;
        protocol = 'https';
        path = '/travis/';
        spyOn($location, 'host').and.returnValue(host);
        spyOn($location, 'port').and.returnValue(port);
        spyOn($location, 'protocol').and.returnValue(protocol);
        spyOn(socketService, 'getRootPath').and.returnValue(path);
        url = socketService.getUrl();
        return expect(url).toBe('wss://buildbot.test/travis/ws');
      });
    });
  });

}).call(this);

(function() {
  describe('Tabex service', function() {
    var $q, $rootScope, $timeout, $window, ClientMock, clientMock, indexedDBService, injected, restService, socketService, tabexService;
    beforeEach(module('bbData'));
    ClientMock = (function() {
      var CHANNELS;

      function ClientMock() {}

      ClientMock.prototype.channels = {};

      CHANNELS = {
        MASTER: '!sys.master',
        REFRESH: '!sys.channels.refresh'
      };

      ClientMock.prototype.callMasterHandler = function(isMaster) {
        var data;
        data = {
          master_id: 1,
          node_id: isMaster ? 1 : 2
        };
        return this.emit(CHANNELS.MASTER, data, true);
      };

      ClientMock.prototype.on = function(c, l) {
        var base;
        if ((base = this.channels)[c] == null) {
          base[c] = [];
        }
        this.channels[c].push(l);
        return this.emit(CHANNELS.REFRESH, {
          channels: Object.keys(this.channels)
        }, true);
      };

      ClientMock.prototype.off = function(c, l) {
        var idx;
        if (angular.isArray(this.channels[c])) {
          idx = this.channels[c].indexOf(l);
          if (idx > -1) {
            return this.channels[c].split(idx, 1);
          }
        }
      };

      ClientMock.prototype.emit = function(c, m, self) {
        var i, l, len, ref, results;
        if (self == null) {
          self = false;
        }
        if (angular.isArray(this.channels[c]) && self) {
          ref = this.channels[c];
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            l = ref[i];
            if (angular.isFunction(l)) {
              results.push(l(m));
            } else {
              results.push(void 0);
            }
          }
          return results;
        }
      };

      return ClientMock;

    })();
    tabexService = socketService = indexedDBService = restService = void 0;
    $window = $q = $rootScope = $timeout = void 0;
    clientMock = new ClientMock();
    injected = function($injector) {
      $window = $injector.get('$window');
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      $timeout = $injector.get('$timeout');
      spyOn($window.tabex, 'client').and.returnValue(clientMock);
      tabexService = $injector.get('tabexService');
      socketService = $injector.get('socketService');
      indexedDBService = $injector.get('indexedDBService');
      return restService = $injector.get('restService');
    };
    beforeEach(inject(injected));
    afterEach(function() {
      return clientMock.channels = {};
    });
    it('should be defined', function() {
      return expect(tabexService).toBeDefined();
    });
    it('should have event constants', function() {
      expect(tabexService.EVENTS).toBeDefined();
      expect(tabexService.EVENTS.READY).toBeDefined();
      expect(tabexService.EVENTS.UPDATE).toBeDefined();
      return expect(tabexService.EVENTS.NEW).toBeDefined();
    });
    it('should handle the socketService.onMessage event', function() {
      expect(angular.isFunction(socketService.onMessage)).toBeTruthy();
      return expect(socketService.onMessage).toBe(tabexService.messageHandler);
    });
    it('should handle the socketService.onClose event', function() {
      expect(angular.isFunction(socketService.onClose)).toBeTruthy();
      return expect(socketService.onClose).toBe(tabexService.closeHandler);
    });
    it('should call the activatePaths function before unload', function() {
      spyOn(tabexService, 'activatePaths');
      expect(tabexService.activatePaths).not.toHaveBeenCalled();
      $window.onbeforeunload();
      return expect(tabexService.activatePaths).toHaveBeenCalled();
    });
    describe('masterHandler(data)', function() {
      it('should handle the tabex master event', function() {
        spyOn(tabexService, 'masterHandler');
        expect(tabexService.masterHandler).not.toHaveBeenCalled();
        return clientMock.callMasterHandler();
      });
      it('should resolve the initialRoleDeferred', function() {
        var roleIsResolved;
        roleIsResolved = jasmine.createSpy('roleIsResolved');
        tabexService.initialRole.then(function() {
          return roleIsResolved();
        });
        expect(roleIsResolved).not.toHaveBeenCalled();
        $rootScope.$apply(function() {
          return clientMock.callMasterHandler();
        });
        return expect(roleIsResolved).toHaveBeenCalled();
      });
      it('should assign the role on master event (slave)', function() {
        expect(tabexService.role).toBeUndefined();
        clientMock.callMasterHandler();
        expect(tabexService.role).toBeDefined();
        return expect(tabexService.role).toBe(tabexService._ROLES.SLAVE);
      });
      return it('should assign the role on master event (slave)', function() {
        expect(tabexService.role).toBeUndefined();
        clientMock.callMasterHandler(true);
        expect(tabexService.role).toBeDefined();
        return expect(tabexService.role).toBe(tabexService._ROLES.MASTER);
      });
    });
    describe('refreshHandler(data)', function() {
      it('should handle the tabex refresh event', function() {
        spyOn(tabexService, 'refreshHandler');
        expect(tabexService.refreshHandler).not.toHaveBeenCalled();
        return tabexService.client.on('channel1', function() {});
      });
      it('should call the master refresh handler if the role is master', function() {
        spyOn(tabexService, 'masterRefreshHandler');
        expect(tabexService.masterRefreshHandler).not.toHaveBeenCalled();
        tabexService.client.on('channel1', function() {});
        expect(tabexService.masterRefreshHandler).not.toHaveBeenCalled();
        $rootScope.$apply(function() {
          return clientMock.callMasterHandler(true);
        });
        return expect(tabexService.masterRefreshHandler).toHaveBeenCalled();
      });
      it('should only call the master refresh handler once (debounce)', function() {
        spyOn(tabexService, 'masterRefreshHandler');
        $rootScope.$apply(function() {
          return clientMock.callMasterHandler(true);
        });
        tabexService.client.on('channel1', function() {});
        tabexService.client.on('channel2', function() {});
        tabexService.client.on('channel3', function() {});
        return expect(tabexService.masterRefreshHandler.calls.count()).toBe(1);
      });
      it('should send startConsuming messages', function() {
        spyOn(socketService, 'send');
        spyOn(tabexService, 'activatePaths').and.returnValue($q.resolve());
        tabexService.debounceTimeout = 0;
        expect(socketService.send).not.toHaveBeenCalled();
        $rootScope.$apply(function() {
          return clientMock.callMasterHandler(true);
        });
        tabexService.on('path1/*/*', {
          subscribe: true
        }, function() {});
        tabexService.on('path1/1/*', {
          subscribe: true
        }, function() {});
        tabexService.on('path2/*/*', {
          subscribe: true
        }, function() {});
        $timeout.flush();
        expect(socketService.send).toHaveBeenCalledWith({
          cmd: 'startConsuming',
          path: 'path1/*/*'
        });
        expect(socketService.send).toHaveBeenCalledWith({
          cmd: 'startConsuming',
          path: 'path2/*/*'
        });
        return expect(socketService.send).not.toHaveBeenCalledWith({
          cmd: 'startConsuming',
          path: 'path1/1/*'
        });
      });
      it('should add the path to trackedPath', function() {});
      it('should call the loadAll function', function() {
        spyOn(tabexService, 'loadAll');
        spyOn(tabexService, 'activatePaths').and.returnValue($q.resolve());
        spyOn(tabexService, 'startConsumingAll').and.returnValue($q.resolve());
        tabexService.debounceTimeout = 0;
        expect(tabexService.loadAll).not.toHaveBeenCalled();
        $rootScope.$apply(function() {
          return clientMock.callMasterHandler(true);
        });
        $timeout.flush();
        return expect(tabexService.loadAll).toHaveBeenCalled();
      });
      return it('should add queries to the trackedPath', function() {});
    });
    describe('messageHandler(key, message)', function() {
      it('should update the object in the indexedDB', function() {
        var message;
        indexedDBService.db = {
          'bsd': {
            put: function() {}
          }
        };
        spyOn(indexedDBService.db['bsd'], 'put').and.returnValue($q.resolve());
        expect(indexedDBService.db['bsd'].put).not.toHaveBeenCalled();
        message = {
          bsd: 1
        };
        socketService.onMessage('asd/1/bsd/2/new', message);
        return expect(indexedDBService.db['bsd'].put).toHaveBeenCalledWith(message);
      });
      return it('should emit update events for matching paths', function() {
        indexedDBService.db = {
          asd: {
            put: function() {
              return $q.resolve();
            }
          },
          bsd: {
            put: function() {
              return $q.resolve();
            }
          }
        };
        spyOn(tabexService, 'activatePaths').and.returnValue($q.resolve());
        spyOn(tabexService, 'startConsumingAll').and.returnValue($q.resolve());
        spyOn(tabexService, 'loadAll').and.callFake(function() {});
        tabexService.debounceTimeout = 0;
        $rootScope.$apply(function() {
          return clientMock.callMasterHandler(true);
        });
        tabexService.on('asd/*/*', {
          subscribe: true
        }, function() {});
        tabexService.on('asd/1/*', {
          subscribe: true
        }, function() {});
        tabexService.on('bsd/*/*', {
          subscribe: true
        }, function() {});
        $timeout.flush();
        spyOn(tabexService, 'emit');
        expect(tabexService.emit).not.toHaveBeenCalled();
        $rootScope.$apply(function() {
          return tabexService.messageHandler('asd/1/completed', {});
        });
        expect(tabexService.emit).toHaveBeenCalledWith('asd/*/*', {}, tabexService.EVENTS.UPDATE);
        expect(tabexService.emit).toHaveBeenCalledWith('asd/1/*', {}, tabexService.EVENTS.UPDATE);
        expect(tabexService.emit).not.toHaveBeenCalledWith('bsd/*/*', {}, tabexService.EVENTS.UPDATE);
        $rootScope.$apply(function() {
          return tabexService.messageHandler('bsd/2/new', {});
        });
        return expect(tabexService.emit).toHaveBeenCalledWith('bsd/*/*', {}, tabexService.EVENTS.NEW);
      });
    });
    describe('closeHandler()', function() {
      return it('should send the startConsuming messages', function() {
        spyOn(tabexService, 'startConsuming');
        clientMock.callMasterHandler(true);
        tabexService.trackedPaths = {
          'path/*/*': [{}]
        };
        expect(tabexService.startConsuming).not.toHaveBeenCalled();
        socketService.socket.onclose();
        return expect(tabexService.startConsuming).toHaveBeenCalledWith('path/*/*');
      });
    });
    describe('loadAll()', function() {
      return it('should load all untracked paths', function() {
        var p, paths, q, qs, results;
        spyOn(indexedDBService.db.paths, 'toArray').and.returnValue($q.resolve([]));
        spyOn(tabexService, 'load');
        paths = {
          'asd/*/*': [
            {
              bsd: 1
            }, {}
          ]
        };
        tabexService.loadAll(paths);
        $rootScope.$apply();
        results = [];
        for (p in paths) {
          qs = paths[p];
          results.push((function() {
            var i, len, results1;
            results1 = [];
            for (i = 0, len = qs.length; i < len; i++) {
              q = qs[i];
              results1.push(expect(tabexService.load).toHaveBeenCalledWith(p, q, []));
            }
            return results1;
          })());
        }
        return results;
      });
    });
    describe('load(path, query, dbPaths)', function() {
      it('should load not cached data', function() {
        var path, query;
        spyOn(tabexService, 'emit');
        spyOn(restService, 'get').and.returnValue($q.resolve({
          asd: {}
        }));
        spyOn(tabexService, 'getSpecification').and.returnValue({
          "static": false
        });
        spyOn(indexedDBService.db, 'transaction').and.returnValue($q.resolve());
        path = 'asd/*/*';
        query = {};
        tabexService.load(path, query);
        expect(tabexService.emit).not.toHaveBeenCalled();
        $rootScope.$apply();
        return expect(tabexService.emit).toHaveBeenCalledWith(path, query, tabexService.EVENTS.READY);
      });
      it('should not load cached data', function() {
        var now, path, query;
        spyOn(tabexService, 'emit');
        expect(tabexService.emit).not.toHaveBeenCalled();
        spyOn(tabexService, 'getSpecification').and.returnValue({
          "static": false
        });
        path = '';
        query = {};
        now = new Date();
        tabexService.load(path, query, [
          {
            path: path,
            query: angular.toJson(query),
            lastActive: now
          }
        ]);
        $rootScope.$apply();
        return expect(tabexService.emit).toHaveBeenCalledWith(path, query, tabexService.EVENTS.READY);
      });
      return it('should not load cached data', function() {
        var now, path, query;
        spyOn(tabexService, 'emit');
        expect(tabexService.emit).not.toHaveBeenCalled();
        spyOn(tabexService, 'getSpecification').and.returnValue({
          "static": true
        });
        path = '';
        query = {};
        now = new Date();
        tabexService.load(path, query, [
          {
            path: path,
            query: angular.toJson(query),
            lastActive: new Date(0)
          }
        ]);
        $rootScope.$apply();
        return expect(tabexService.emit).toHaveBeenCalledWith(path, query, tabexService.EVENTS.READY);
      });
    });
    return describe('startConsumingAll(paths)', function() {
      return it('should call startConsuming for all not tracked paths', function() {
        var ready;
        spyOn(tabexService, 'startConsuming').and.returnValue($q.resolve());
        tabexService.trackedPaths = {
          'asd': [{}]
        };
        ready = jasmine.createSpy('ready');
        expect(tabexService.startConsuming).not.toHaveBeenCalled();
        tabexService.startConsumingAll(['bsd', 'asd']).then(ready);
        tabexService.startConsumingAll({
          csd: [{}]
        });
        expect(tabexService.startConsuming).toHaveBeenCalledWith('bsd');
        expect(tabexService.startConsuming).toHaveBeenCalledWith('csd');
        expect(tabexService.startConsuming).not.toHaveBeenCalledWith('asd');
        expect(ready).not.toHaveBeenCalled();
        $rootScope.$apply();
        return expect(ready).toHaveBeenCalled();
      });
    });
  });

}).call(this);

(function() {
  describe('Collection', function() {
    var $q, $rootScope, Collection, c, indexedDBService, injected, tabexService;
    beforeEach(module('bbData'));
    beforeEach(module(function($provide) {
      return $provide.constant('SPECIFICATION', {
        asd: {
          id: 'asdid'
        }
      });
    }));
    Collection = $q = $rootScope = tabexService = indexedDBService = c = void 0;
    injected = function($injector) {
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      Collection = $injector.get('Collection');
      tabexService = $injector.get('tabexService');
      indexedDBService = $injector.get('indexedDBService');
      return c = new Collection('asd');
    };
    beforeEach(inject(injected));
    it('should be defined', function() {
      expect(Collection).toBeDefined();
      return expect(c).toBeDefined();
    });
    describe('subscribe()', function() {
      return it('should subscribe on tabex events', function() {
        var ready;
        spyOn(tabexService, 'on').and.returnValue(null);
        spyOn(indexedDBService, 'get').and.returnValue($q.resolve([]));
        expect(tabexService.on).not.toHaveBeenCalled();
        ready = jasmine.createSpy('ready');
        c.subscribe().then(ready);
        expect(tabexService.on).toHaveBeenCalledWith('asd/*/*', {}, c.listener);
        c.listener(tabexService.EVENTS.READY);
        expect(ready).not.toHaveBeenCalled();
        $rootScope.$apply();
        return expect(ready).toHaveBeenCalled();
      });
    });
    describe('unsubscribe()', function() {
      it('should unsubscribe from tabex events', function() {
        spyOn(tabexService, 'off').and.returnValue(null);
        expect(tabexService.off).not.toHaveBeenCalled();
        c.unsubscribe();
        return expect(tabexService.off).toHaveBeenCalledWith('asd/*/*', {}, c.listener);
      });
      return it('should call unsubscribe on every child that has an unsubscribe function', function() {
        var obj;
        obj = {
          unsubscribe: jasmine.createSpy('unsubscribe')
        };
        c.push(obj);
        expect(obj.unsubscribe).not.toHaveBeenCalled();
        c.unsubscribe();
        return expect(obj.unsubscribe).toHaveBeenCalled();
      });
    });
    describe('listener(event)', function() {
      it('should read the data from indexedDB', function() {
        spyOn(indexedDBService, 'get').and.returnValue($q.resolve());
        expect(indexedDBService.get).not.toHaveBeenCalled();
        c.listener(tabexService.EVENTS.READY);
        return expect(indexedDBService.get).toHaveBeenCalledWith('asd', {});
      });
      it('should call the ready handler on ready event', function() {
        var data;
        data = [
          {
            data: 1
          }
        ];
        spyOn(indexedDBService, 'get').and.returnValue($q.resolve(data));
        spyOn(c, 'readyHandler');
        c.listener(tabexService.EVENTS.READY);
        expect(c.readyHandler).not.toHaveBeenCalled();
        $rootScope.$apply();
        return expect(c.readyHandler).toHaveBeenCalledWith(data);
      });
      it('should not call the ready handler when it is already filled with data', function() {
        var data;
        data = [
          {
            data: 1
          }
        ];
        spyOn(indexedDBService, 'get').and.returnValue($q.resolve(data));
        spyOn(c, 'readyHandler');
        expect(c.readyHandler).not.toHaveBeenCalled();
        c.listener(tabexService.EVENTS.READY);
        $rootScope.$apply();
        c.listener(tabexService.EVENTS.READY);
        return expect(c.readyHandler.calls.count()).toBe(1);
      });
      it('should call the update handler on update event', function() {
        var data;
        data = [
          {
            data: 1
          }
        ];
        spyOn(indexedDBService, 'get').and.returnValue($q.resolve(data));
        spyOn(c, 'updateHandler');
        c.listener(tabexService.EVENTS.UPDATE);
        expect(c.updateHandler).not.toHaveBeenCalled();
        $rootScope.$apply();
        return expect(c.updateHandler).toHaveBeenCalledWith(data);
      });
      it('should call the new handler on new event', function() {
        var data;
        data = [
          {
            data: 1
          }
        ];
        spyOn(indexedDBService, 'get').and.returnValue($q.resolve(data));
        spyOn(c, 'newHandler');
        c.listener(tabexService.EVENTS.NEW);
        expect(c.newHandler).not.toHaveBeenCalled();
        $rootScope.$apply();
        return expect(c.newHandler).toHaveBeenCalledWith(data);
      });
      return it('should remove the subscribe field from the query', function() {
        var query;
        query = {
          subscribe: false
        };
        c = new Collection('asd', query);
        spyOn(indexedDBService, 'get').and.returnValue($q.resolve());
        c.listener(tabexService.EVENTS.READY);
        expect(indexedDBService.get).toHaveBeenCalledWith('asd', {});
        return expect(c.getQuery()).toEqual(query);
      });
    });
    describe('readyHandler(data)', function() {
      return it('should fill up the collection', function() {
        var data;
        data = [
          {
            data: 1
          }, {
            data: 2
          }
        ];
        spyOn(indexedDBService, 'get').and.returnValue($q.resolve(data));
        c.listener(tabexService.EVENTS.READY);
        expect(c.length).not.toBe(data.length);
        $rootScope.$apply();
        return expect(c.length).toBe(data.length);
      });
    });
    return describe('updateHandler(data)', function() {
      return it('should update the data where the id matches', function() {
        var data;
        data = [
          {
            id: 1,
            data: 'a'
          }, {
            id: 2,
            data: 'b'
          }
        ];
        spyOn(indexedDBService, 'get').and.callFake(function() {
          return $q.resolve(data);
        });
        c.listener(tabexService.EVENTS.READY);
        $rootScope.$apply();
        c.forEach(function(e) {
          return data.forEach(function(i) {
            if (e.id === i.id) {
              return expect(e.data).toEqual(i.data);
            }
          });
        });
        data = {
          id: 1,
          data: 'c'
        };
        c.listener(tabexService.EVENTS.UPDATE);
        $rootScope.$apply();
        return c.forEach(function(e) {
          if (e.id === data.id) {
            return expect(e.data).toEqual(data.data);
          }
        });
      });
    });
  });

}).call(this);

(function() {
  describe('Wrapper', function() {
    var $q, $rootScope, Wrapper, data, dataService, i, indexedDBService, injected, tabexService;
    beforeEach(module('bbData'));
    beforeEach(module(function($provide) {
      return $provide.constant('SPECIFICATION', {
        a: {
          id: 'aid',
          identifier: 'aidentifier',
          paths: ['b', 'b/n:bid']
        }
      });
    }));
    Wrapper = $q = $rootScope = tabexService = indexedDBService = dataService = data = i = void 0;
    injected = function($injector) {
      $q = $injector.get('$q');
      $rootScope = $injector.get('$rootScope');
      Wrapper = $injector.get('Wrapper');
      tabexService = $injector.get('tabexService');
      indexedDBService = $injector.get('indexedDBService');
      dataService = $injector.get('dataService');
      data = {
        aid: 12,
        aidentifier: 'n12'
      };
      return i = new Wrapper(data, 'a');
    };
    beforeEach(inject(injected));
    it('should be defined', function() {
      expect(Wrapper).toBeDefined();
      return expect(i).toBeDefined();
    });
    it('should add the data to the object passed in to the constructor', function() {
      var k, l, len, results, v;
      results = [];
      for (v = l = 0, len = data.length; l < len; v = ++l) {
        k = data[v];
        results.push(expect(i[k]).toEqual(v));
      }
      return results;
    });
    it('should generate functions for every type in the specification', function() {
      expect(i.loadA).toBeDefined();
      return expect(angular.isFunction(i.loadA)).toBeTruthy();
    });
    describe('get(args)', function() {
      return it('should call dataService.get', function() {
        var j;
        spyOn(dataService, 'get');
        expect(dataService.get).not.toHaveBeenCalled();
        i.get('b');
        expect(dataService.get).toHaveBeenCalledWith('a', 12, 'b');
        j = new Wrapper(data, 'a', true);
        j.get('b', {
          param: 1
        });
        expect(dataService.get).toHaveBeenCalledWith('a', 12, 'b', {
          param: 1,
          subscribe: true
        });
        j.get('b', 11, {
          subscribe: false
        });
        return expect(dataService.get).toHaveBeenCalledWith('a', 12, 'b', 11, {
          subscribe: false
        });
      });
    });
    describe('getId()', function() {
      return it('should return the id value', function() {
        return expect(i.getId()).toEqual(data.aid);
      });
    });
    describe('getIdentifier()', function() {
      return it('should return the identifier value', function() {
        return expect(i.getIdentifier()).toEqual(data.aidentifier);
      });
    });
    describe('classId()', function() {
      return it('should return the id name', function() {
        return expect(i.classId()).toEqual('aid');
      });
    });
    describe('classIdentifier()', function() {
      return it('should return the identifier name', function() {
        return expect(i.classIdentifier()).toEqual('aidentifier');
      });
    });
    return describe('unsubscribe()', function() {
      return it('call unsubscribe on each object', function() {
        i.obj = {
          unsubscribe: jasmine.createSpy('unsubscribe')
        };
        expect(i.obj.unsubscribe).not.toHaveBeenCalled();
        i.unsubscribe();
        return expect(i.obj.unsubscribe).toHaveBeenCalled();
      });
    });
  });

}).call(this);
