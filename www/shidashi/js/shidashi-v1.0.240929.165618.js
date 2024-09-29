var RAVEPipeline;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :
  0;
})(this, (function (exports, $, Popper) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

    _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Private TransitionEnd Helpers
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default["default"](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default["default"](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default["default"].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default["default"].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * Public Util API
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default["default"](element).css('transition-duration');
      var transitionDelay = $__default["default"](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default["default"](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default["default"] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default["default"].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * Constants
   */

  var NAME$a = 'alert';
  var VERSION$a = '4.6.1';
  var DATA_KEY$a = 'bs.alert';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$a = $__default["default"].fn[NAME$a];
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_SHOW$7 = 'show';
  var EVENT_CLOSE = "close" + EVENT_KEY$a;
  var EVENT_CLOSED = "closed" + EVENT_KEY$a;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$a + DATA_API_KEY$7;
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  /**
   * Class definition
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$a);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default["default"](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default["default"].Event(EVENT_CLOSE);
      $__default["default"](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default["default"](element).removeClass(CLASS_NAME_SHOW$7);

      if (!$__default["default"](element).hasClass(CLASS_NAME_FADE$5)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default["default"](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default["default"](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$a);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY$a, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }]);

    return Alert;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$a] = Alert._jQueryInterface;
  $__default["default"].fn[NAME$a].Constructor = Alert;

  $__default["default"].fn[NAME$a].noConflict = function () {
    $__default["default"].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Alert._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$9 = 'button';
  var VERSION$9 = '4.6.1';
  var DATA_KEY$9 = 'bs.button';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default["default"].fn[NAME$9];
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$9 + DATA_API_KEY$6;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$9 + DATA_API_KEY$6 + " " + ("blur" + EVENT_KEY$9 + DATA_API_KEY$6);
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$9 + DATA_API_KEY$6;
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_BUTTON = '.btn';
  /**
   * Class definition
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default["default"](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE$3)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE$2);

              if (activeElement) {
                $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$3);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE$3);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default["default"](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE$3));
        }

        if (triggerChangeEvent) {
          $__default["default"](this._element).toggleClass(CLASS_NAME_ACTIVE$3);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$9);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$9, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Button;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default["default"](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default["default"](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default["default"](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default["default"](event.target).closest(SELECTOR_BUTTON)[0];
    $__default["default"](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default["default"](window).on(EVENT_LOAD_DATA_API$2, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE$3);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE$3);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$4));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE$3);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE$3);
      }
    }
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$9] = Button._jQueryInterface;
  $__default["default"].fn[NAME$9].Constructor = Button;

  $__default["default"].fn[NAME$9].noConflict = function () {
    $__default["default"].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Button._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$8 = 'carousel';
  var VERSION$8 = '4.6.1';
  var DATA_KEY$8 = 'bs.carousel';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default["default"].fn[NAME$8];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$8;
  var EVENT_SLID = "slid" + EVENT_KEY$8;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$8;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$8;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$8;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$8;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$8;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$8;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$8;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$8;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$8 + DATA_API_KEY$5;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$8 + DATA_API_KEY$5;
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var Default$7 = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType$7 = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * Class definition
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default["default"](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default["default"](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default["default"](this._element).off(EVENT_KEY$8);
      $__default["default"].removeData(this._element, DATA_KEY$8);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, config);
      Util.typeCheckConfig(NAME$8, config, DefaultType$7);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default["default"](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default["default"](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        _this3.touchDeltaX = event.originalEvent.touches && event.originalEvent.touches.length > 1 ? 0 : event.originalEvent.touches[0].clientX - _this3.touchStartX;
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default["default"](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default["default"](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default["default"](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default["default"](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default["default"](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default["default"](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default["default"].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default["default"](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default["default"](indicators).removeClass(CLASS_NAME_ACTIVE$2);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default["default"](nextIndicator).addClass(CLASS_NAME_ACTIVE$2);
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      if (!element) {
        return;
      }

      var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default["default"](nextElement).hasClass(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;
      var slidEvent = $__default["default"].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default["default"](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default["default"](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default["default"](activeElement).addClass(directionalClassName);
        $__default["default"](nextElement).addClass(directionalClassName);
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default["default"](activeElement).one(Util.TRANSITION_END, function () {
          $__default["default"](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$2);
          $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default["default"](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2);
        $__default["default"](nextElement).addClass(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        $__default["default"](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$8);

        var _config = _extends({}, Default$7, $__default["default"](this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default["default"](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default["default"](selector)[0];

      if (!target || !$__default["default"](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default["default"](target).data(), $__default["default"](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default["default"](target), config);

      if (slideIndex) {
        $__default["default"](target).data(DATA_KEY$8).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Carousel;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default["default"](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default["default"](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$8] = Carousel._jQueryInterface;
  $__default["default"].fn[NAME$8].Constructor = Carousel;

  $__default["default"].fn[NAME$8].noConflict = function () {
    $__default["default"].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return Carousel._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$7 = 'collapse';
  var VERSION$7 = '4.6.1';
  var DATA_KEY$7 = 'bs.collapse';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$7 = $__default["default"].fn[NAME$7];
  var CLASS_NAME_SHOW$6 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var EVENT_SHOW$4 = "show" + EVENT_KEY$7;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$7;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$7;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$7;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$7 + DATA_API_KEY$4;
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="collapse"]';
  var Default$6 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$6 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  /**
   * Class definition
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$3));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default["default"](actives).not(this._selector).data(DATA_KEY$7);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default["default"].Event(EVENT_SHOW$4);
      $__default["default"](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default["default"](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default["default"](actives).data(DATA_KEY$7, null);
        }
      }

      var dimension = this._getDimension();

      $__default["default"](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default["default"](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default["default"](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default["default"](_this._element).trigger(EVENT_SHOWN$4);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
        return;
      }

      var startEvent = $__default["default"].Event(EVENT_HIDE$4);
      $__default["default"](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default["default"](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default["default"]([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$6)) {
              $__default["default"](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default["default"](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN$4);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$7);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default["default"](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default["default"](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default["default"](element).hasClass(CLASS_NAME_SHOW$6);

      if (triggerArray.length) {
        $__default["default"](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$7);

        var _config = _extends({}, Default$6, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return Collapse;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default["default"](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default["default"](selectors).each(function () {
      var $target = $__default["default"](this);
      var data = $target.data(DATA_KEY$7);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$7] = Collapse._jQueryInterface;
  $__default["default"].fn[NAME$7].Constructor = Collapse;

  $__default["default"].fn[NAME$7].noConflict = function () {
    $__default["default"].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Collapse._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$6 = 'dropdown';
  var VERSION$6 = '4.6.1';
  var DATA_KEY$6 = 'bs.dropdown';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$6 = $__default["default"].fn[NAME$6];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE$1);
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_SHOW$5 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$6;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$6;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$6;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$6;
  var EVENT_CLICK = "click" + EVENT_KEY$6;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$6 + DATA_API_KEY$3;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$6 + DATA_API_KEY$3;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$6 + DATA_API_KEY$3;
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$5 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$5 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * Class definition
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var isActive = $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default["default"].Event(EVENT_SHOW$3, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default["default"](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (!this._inNavbar && usePopper) {
        // Check for Popper dependency
        if (typeof Popper__default["default"] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default["default"](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default["default"](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default["default"](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default["default"](document.body).children().on('mouseover', null, $__default["default"].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
      $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_SHOWN$3, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || !$__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default["default"](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
      $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$6);
      $__default["default"](this._element).off(EVENT_KEY$6);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default["default"](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default["default"](this._element).data(), config);
      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default["default"](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default["default"](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element));
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$6);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default["default"](this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default["default"](toggles[i]).data(DATA_KEY$6);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default["default"](parent).hasClass(CLASS_NAME_SHOW$5)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default["default"].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);
        $__default["default"](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default["default"](document.body).children().off('mouseover', null, $__default["default"].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default["default"](dropdownMenu).removeClass(CLASS_NAME_SHOW$5);
        $__default["default"](parent).removeClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE$1 && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default["default"](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default["default"](this).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default["default"](parent).hasClass(CLASS_NAME_SHOW$5);

      if (!isActive && event.which === ESCAPE_KEYCODE$1) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE$1 || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE$1) {
          $__default["default"](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default["default"](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default["default"](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Dropdown;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$2 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default["default"](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$2, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$6] = Dropdown._jQueryInterface;
  $__default["default"].fn[NAME$6].Constructor = Dropdown;

  $__default["default"].fn[NAME$6].noConflict = function () {
    $__default["default"].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Dropdown._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.6.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default["default"].fn[NAME$5];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$5 + DATA_API_KEY$2;
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  var Default$4 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$4 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  /**
   * Class definition
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      var showEvent = $__default["default"].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
        this._isTransitioning = true;
      }

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function (event) {
        return _this.hide(event);
      });
      $__default["default"](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default["default"](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default["default"](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE$2);
      $__default["default"](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default["default"](document).off(EVENT_FOCUSIN);
      $__default["default"](this._element).removeClass(CLASS_NAME_SHOW$4);
      $__default["default"](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default["default"](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default["default"](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default["default"](document).off(EVENT_FOCUSIN);
      $__default["default"].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$4, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      var hideEventPrevented = $__default["default"].Event(EVENT_HIDE_PREVENTED);
      $__default["default"](this._element).trigger(hideEventPrevented);

      if (hideEventPrevented.isDefaultPrevented()) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
      $__default["default"](this._element).off(Util.TRANSITION_END);
      $__default["default"](this._element).one(Util.TRANSITION_END, function () {
        _this3._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          $__default["default"](_this3._element).one(Util.TRANSITION_END, function () {
            _this3._element.style.overflowY = '';
          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
        }
      }).emulateTransitionEnd(modalTransitionDuration);

      this._element.focus();
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default["default"](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default["default"](this._element).addClass(CLASS_NAME_SHOW$4);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default["default"].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default["default"](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default["default"](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default["default"](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default["default"](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default["default"](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default["default"](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default["default"](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default["default"](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default["default"](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default["default"](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default["default"](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4) ? CLASS_NAME_FADE$4 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default["default"](this._backdrop).appendTo(document.body);
        $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default["default"](this._backdrop).addClass(CLASS_NAME_SHOW$4);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default["default"](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default["default"](this._backdrop).removeClass(CLASS_NAME_SHOW$4);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default["default"](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default["default"](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default["default"](element).css('padding-right');
          $__default["default"](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default["default"](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default["default"](element).css('margin-right');
          $__default["default"](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default["default"](document.body).css('padding-right');
        $__default["default"](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default["default"](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default["default"](fixedContent).each(function (index, element) {
        var padding = $__default["default"](element).data('padding-right');
        $__default["default"](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default["default"](elements).each(function (index, element) {
        var margin = $__default["default"](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default["default"](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default["default"](document.body).data('padding-right');
      $__default["default"](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$4, $__default["default"](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default["default"](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }]);

    return Modal;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default["default"](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default["default"](target).data(), $__default["default"](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default["default"](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default["default"](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default["default"](target), config, this);
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$5] = Modal._jQueryInterface;
  $__default["default"].fn[NAME$5].Constructor = Modal;

  $__default["default"].fn[NAME$5].noConflict = function () {
    $__default["default"].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes); // eslint-disable-next-line unicorn/prefer-spread

      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * Constants
   */

  var NAME$4 = 'tooltip';
  var VERSION$4 = '4.6.1';
  var DATA_KEY$4 = 'bs.tooltip';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var JQUERY_NO_CONFLICT$4 = $__default["default"].fn[NAME$4];
  var CLASS_PREFIX$1 = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    INSERTED: "inserted" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    FOCUSIN: "focusin" + EVENT_KEY$4,
    FOCUSOUT: "focusout" + EVENT_KEY$4,
    MOUSEENTER: "mouseenter" + EVENT_KEY$4,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$4
  };
  /**
   * Class definition
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper__default["default"] === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      } // Private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default["default"](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default["default"](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default["default"](this.getTipElement()).hasClass(CLASS_NAME_SHOW$3)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default["default"].removeData(this.element, this.constructor.DATA_KEY);
      $__default["default"](this.element).off(this.constructor.EVENT_KEY);
      $__default["default"](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default["default"](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default["default"](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default["default"].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default["default"](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default["default"].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default["default"](tip).addClass(CLASS_NAME_FADE$3);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default["default"](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default["default"].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default["default"](tip).appendTo(container);
        }

        $__default["default"](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default["default"](this.element, tip, this._getPopperConfig(attachment));
        $__default["default"](tip).addClass(CLASS_NAME_SHOW$3);
        $__default["default"](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default["default"](document.body).children().on('mouseover', null, $__default["default"].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default["default"](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default["default"](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default["default"].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default["default"](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default["default"](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default["default"](tip).removeClass(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default["default"](document.body).children().off('mouseover', null, $__default["default"].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default["default"](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default["default"](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default["default"](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default["default"](tip).removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$3);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default["default"](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default["default"](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element));
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default["default"](this.config.container);
      }

      return $__default["default"](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default["default"](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default["default"](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default["default"](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default["default"](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default["default"](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default["default"](context.getTipElement()).hasClass(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default["default"](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default["default"](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default["default"](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default["default"](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default["default"](tip).removeClass(CLASS_NAME_FADE$3);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY$4);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$4;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$4;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$4;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$3;
      }
    }]);

    return Tooltip;
  }();
  /**
   * jQuery
   */


  $__default["default"].fn[NAME$4] = Tooltip._jQueryInterface;
  $__default["default"].fn[NAME$4].Constructor = Tooltip;

  $__default["default"].fn[NAME$4].noConflict = function () {
    $__default["default"].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Tooltip._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$3 = 'popover';
  var VERSION$3 = '4.6.1';
  var DATA_KEY$3 = 'bs.popover';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var JQUERY_NO_CONFLICT$3 = $__default["default"].fn[NAME$3];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$2 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';

  var Default$2 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$2 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var Event = {
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    INSERTED: "inserted" + EVENT_KEY$3,
    CLICK: "click" + EVENT_KEY$3,
    FOCUSIN: "focusin" + EVENT_KEY$3,
    FOCUSOUT: "focusout" + EVENT_KEY$3,
    MOUSEENTER: "mouseenter" + EVENT_KEY$3,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$3
  };
  /**
   * Class definition
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default["default"](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default["default"](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$2);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default["default"](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$3);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default["default"](this).data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      get: // Getters
      function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$3;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$3;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$3;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * jQuery
   */


  $__default["default"].fn[NAME$3] = Popover._jQueryInterface;
  $__default["default"].fn[NAME$3].Constructor = Popover;

  $__default["default"].fn[NAME$3].noConflict = function () {
    $__default["default"].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Popover._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$2 = 'scrollspy';
  var VERSION$2 = '4.6.1';
  var DATA_KEY$2 = 'bs.scrollspy';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default["default"].fn[NAME$2];
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$2;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$1;
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  /**
   * Class definition
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default["default"](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default["default"](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$2);
      $__default["default"](this._scrollElement).off(EVENT_KEY$2);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default["default"](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$2);
          $__default["default"](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default["default"]([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN$1).find(SELECTOR_DROPDOWN_TOGGLE$1).addClass(CLASS_NAME_ACTIVE$1);
        $link.addClass(CLASS_NAME_ACTIVE$1);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$1); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$1); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$1);
      }

      $__default["default"](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$1);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$1);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$2);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default["default"](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](window).on(EVENT_LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default["default"](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$2] = ScrollSpy._jQueryInterface;
  $__default["default"].fn[NAME$2].Constructor = ScrollSpy;

  $__default["default"].fn[NAME$2].noConflict = function () {
    $__default["default"].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME$1 = 'tab';
  var VERSION$1 = '4.6.1';
  var DATA_KEY$1 = 'bs.tab';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default["default"].fn[NAME$1];
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$1 = 'show';
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$1;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$1;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$1;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$1;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY$1 + DATA_API_KEY;
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * Class definition
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default["default"](this._element).hasClass(CLASS_NAME_ACTIVE) || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default["default"](this._element).closest(SELECTOR_NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = $__default["default"].makeArray($__default["default"](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE$1, {
        relatedTarget: this._element
      });
      var showEvent = $__default["default"].Event(EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (previous) {
        $__default["default"](previous).trigger(hideEvent);
      }

      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default["default"].Event(EVENT_HIDDEN$1, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default["default"].Event(EVENT_SHOWN$1, {
          relatedTarget: previous
        });
        $__default["default"](previous).trigger(hiddenEvent);
        $__default["default"](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default["default"](container).find(SELECTOR_ACTIVE_UL) : $__default["default"](container).children(SELECTOR_ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default["default"](active).hasClass(CLASS_NAME_FADE$1);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default["default"](active).removeClass(CLASS_NAME_SHOW$1).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default["default"](active).removeClass(CLASS_NAME_ACTIVE);
        var dropdownChild = $__default["default"](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default["default"](dropdownChild).removeClass(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default["default"](element).addClass(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      var parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && $__default["default"](parent).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default["default"](element).closest(SELECTOR_DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE));
          $__default["default"](dropdownToggleList).addClass(CLASS_NAME_ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default["default"](this);
        var data = $this.data(DATA_KEY$1);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$1, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Tab;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default["default"](this), 'show');
  });
  /**
   * jQuery
   */

  $__default["default"].fn[NAME$1] = Tab._jQueryInterface;
  $__default["default"].fn[NAME$1].Constructor = Tab;

  $__default["default"].fn[NAME$1].noConflict = function () {
    $__default["default"].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Tab._jQueryInterface;
  };

  /**
   * Constants
   */

  var NAME = 'toast';
  var VERSION = '4.6.1';
  var DATA_KEY = 'bs.toast';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $__default["default"].fn[NAME];
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var SELECTOR_DATA_DISMISS = '[data-dismiss="toast"]';
  var Default = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  /**
   * Class definition
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default["default"].Event(EVENT_SHOW);
      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW);

        $__default["default"](_this._element).trigger(EVENT_SHOWN);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE);
      $__default["default"](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      $__default["default"](this._element).off(EVENT_CLICK_DISMISS);
      $__default["default"].removeData(this._element, DATA_KEY);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, $__default["default"](this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default["default"](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default["default"](_this3._element).trigger(EVENT_HIDDEN);
      };

      this._element.classList.remove(CLASS_NAME_SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default["default"](this);
        var data = $element.data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Toast;
  }();
  /**
   * jQuery
   */


  $__default["default"].fn[NAME] = Toast._jQueryInterface;
  $__default["default"].fn[NAME].Constructor = Toast;

  $__default["default"].fn[NAME].noConflict = function () {
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bootstrap.js.map


/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_623__) {

"use strict";

// EXPORTS
__nested_webpack_require_623__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __nested_webpack_require_623__(279);
var tiny_emitter_default = /*#__PURE__*/__nested_webpack_require_623__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __nested_webpack_require_623__(370);
var listen_default = /*#__PURE__*/__nested_webpack_require_623__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __nested_webpack_require_623__(817);
var select_default = /*#__PURE__*/__nested_webpack_require_623__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */

var fakeCopyAction = function fakeCopyAction(value, options) {
  var fakeElement = createFakeElement(value);
  options.container.appendChild(fakeElement);
  var selectedText = select_default()(fakeElement);
  command('copy');
  fakeElement.remove();
  return selectedText;
};
/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */


var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    selectedText = fakeCopyAction(target, options);
  } else if (target instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(target === null || target === void 0 ? void 0 : target.type)) {
    // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    selectedText = fakeCopyAction(target.value, options);
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_15749__) {

var closest = __nested_webpack_require_15749__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_19113__) {

var is = __nested_webpack_require_19113__(879);
var delegate = __nested_webpack_require_19113__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_24495__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24495__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_24495__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_24495__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_24495__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_24495__.o(definition, key) && !__nested_webpack_require_24495__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_24495__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_24495__(686);
/******/ })()
.default;
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/overlayscrollbars/styles/overlayscrollbars.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/overlayscrollbars/styles/overlayscrollbars.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! \n * OverlayScrollbars\n * Version: 2.1.1\n * \n * Copyright (c) Rene Haas | KingSora.\n * https://github.com/KingSora\n * \n * Released under the MIT license.\n */\n.os-size-observer,\n.os-size-observer-listener {\n  direction: inherit;\n  pointer-events: none;\n  overflow: hidden;\n  visibility: hidden;\n  box-sizing: border-box;\n}\n\n.os-size-observer,\n.os-size-observer-listener,\n.os-size-observer-listener-item,\n.os-size-observer-listener-item-final {\n  writing-mode: horizontal-tb;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.os-size-observer {\n  z-index: -1;\n  contain: strict;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding: inherit;\n  border: inherit;\n  box-sizing: inherit;\n  margin: -133px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: scale(0.1);\n}\n.os-size-observer::before {\n  content: \"\";\n  flex: none;\n  box-sizing: inherit;\n  padding: 10px;\n  width: 10px;\n  height: 10px;\n}\n\n.os-size-observer-appear {\n  animation: os-size-observer-appear-animation 1ms forwards;\n}\n\n.os-size-observer-listener {\n  box-sizing: border-box;\n  position: relative;\n  flex: auto;\n  padding: inherit;\n  border: inherit;\n  margin: -133px;\n  transform: scale(10);\n}\n.os-size-observer-listener.ltr {\n  margin-right: -266px;\n  margin-left: 0;\n}\n.os-size-observer-listener.rtl {\n  margin-left: -266px;\n  margin-right: 0;\n}\n.os-size-observer-listener:empty::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n}\n.os-size-observer-listener:empty::before, .os-size-observer-listener > .os-size-observer-listener-item {\n  display: block;\n  position: relative;\n  padding: inherit;\n  border: inherit;\n  box-sizing: content-box;\n  flex: auto;\n}\n\n.os-size-observer-listener-scroll {\n  box-sizing: border-box;\n  display: flex;\n}\n\n.os-size-observer-listener-item {\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  direction: ltr;\n  flex: none;\n}\n\n.os-size-observer-listener-item-final {\n  transition: none;\n}\n\n@keyframes os-size-observer-appear-animation {\n  from {\n    cursor: auto;\n  }\n  to {\n    cursor: none;\n  }\n}\n.os-trinsic-observer {\n  flex: none;\n  box-sizing: border-box;\n  position: relative;\n  max-width: 0px;\n  max-height: 1px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  overflow: hidden;\n  z-index: -1;\n  height: 0;\n  top: calc(100% + 1px);\n  contain: strict;\n}\n.os-trinsic-observer:not(:empty) {\n  height: calc(100% + 1px);\n  top: -1px;\n}\n.os-trinsic-observer:not(:empty) > .os-size-observer {\n  width: 1000%;\n  height: 1000%;\n  min-height: 1px;\n  min-width: 1px;\n}\n\n/**\n * environment setup \n */\n.os-environment {\n  --os-custom-prop: -1;\n  position: fixed;\n  opacity: 0;\n  visibility: hidden;\n  overflow: scroll;\n  height: 200px;\n  width: 200px;\n  z-index: var(--os-custom-prop);\n}\n.os-environment div {\n  width: 200%;\n  height: 200%;\n  margin: 10px 0;\n}\n.os-environment.os-environment-flexbox-glue {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  height: auto;\n  width: auto;\n  min-height: 200px;\n  min-width: 200px;\n}\n.os-environment.os-environment-flexbox-glue div {\n  flex: auto;\n  width: auto;\n  height: auto;\n  max-height: 100%;\n  max-width: 100%;\n  margin: 0;\n}\n.os-environment.os-environment-flexbox-glue-max {\n  max-height: 200px;\n}\n.os-environment.os-environment-flexbox-glue-max div {\n  overflow: visible;\n}\n.os-environment.os-environment-flexbox-glue-max div::before {\n  content: \"\";\n  display: block;\n  height: 999px;\n  width: 999px;\n}\n\n/**\n * hide native scrollbars\n */\n.os-environment,\n.os-viewport {\n  -ms-overflow-style: scrollbar !important;\n}\n\n[data-overlayscrollbars-initialize],\n[data-overlayscrollbars~=scrollbarHidden],\n.os-viewport-scrollbar-hidden.os-environment,\n.os-viewport-scrollbar-hidden.os-viewport {\n  scrollbar-width: none !important;\n}\n\n[data-overlayscrollbars-initialize]::-webkit-scrollbar,\n[data-overlayscrollbars-initialize]::-webkit-scrollbar-corner,\n[data-overlayscrollbars~=scrollbarHidden]::-webkit-scrollbar,\n[data-overlayscrollbars~=scrollbarHidden]::-webkit-scrollbar-corner,\n.os-viewport-scrollbar-hidden.os-environment::-webkit-scrollbar,\n.os-viewport-scrollbar-hidden.os-environment::-webkit-scrollbar-corner,\n.os-viewport-scrollbar-hidden.os-viewport::-webkit-scrollbar,\n.os-viewport-scrollbar-hidden.os-viewport::-webkit-scrollbar-corner {\n  -webkit-appearance: none !important;\n          appearance: none !important;\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n/**\n * elements wont suddenly crop after initialization is done\n */\n[data-overlayscrollbars-initialize] {\n  overflow: auto;\n}\n\n/**\n * applied to body \n */\nhtml[data-overlayscrollbars],\nhtml.os-viewport-scrollbar-hidden,\nhtml.os-viewport-scrollbar-hidden > body {\n  box-sizing: border-box;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\nhtml[data-overlayscrollbars] > body {\n  overflow: visible;\n}\n\n/**\n * structure setup \n */\n[data-overlayscrollbars~=host] {\n  position: relative;\n}\n\n[data-overlayscrollbars~=host],\n.os-padding {\n  display: flex;\n  flex-direction: row !important;\n  flex-wrap: nowrap !important;\n}\n\n.os-padding,\n.os-viewport {\n  box-sizing: inherit;\n  position: relative;\n  flex: auto !important;\n  height: auto;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  border: none;\n  z-index: 0;\n}\n\n.os-viewport {\n  --os-vaw: 0;\n  --os-vah: 0;\n}\n.os-viewport.os-viewport-arrange::before {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n  min-width: 1px;\n  min-height: 1px;\n  width: var(--os-vaw);\n  height: var(--os-vah);\n}\n\n[data-overlayscrollbars~=host],\n[data-overlayscrollbars~=viewport] {\n  overflow: hidden;\n}\n\n[data-overlayscrollbars~=overflowVisible] {\n  overflow: visible;\n}\n\n[data-overlayscrollbars-overflow-x=hidden] {\n  overflow-x: hidden;\n}\n\n[data-overlayscrollbars-overflow-x=scroll] {\n  overflow-x: scroll;\n}\n\n[data-overlayscrollbars-overflow-x=hidden] {\n  overflow-y: hidden;\n}\n\n[data-overlayscrollbars-overflow-y=scroll] {\n  overflow-y: scroll;\n}\n\n.os-padding,\n.os-viewport {\n  overflow: hidden;\n}\n\n.os-overflow-visible {\n  overflow: visible;\n}\n\n.os-content {\n  box-sizing: inherit;\n}\n\n/**\n * optional & experimental grid mode\n */\n[data-overlayscrollbars-grid],\n[data-overlayscrollbars-grid] .os-padding {\n  display: grid;\n  grid-template: 1fr/1fr;\n}\n\n[data-overlayscrollbars-grid] > .os-padding,\n[data-overlayscrollbars-grid] > .os-viewport,\n[data-overlayscrollbars-grid] > .os-padding > .os-viewport {\n  height: auto !important;\n  width: auto !important;\n}\n\n.os-scrollbar {\n  contain: size layout;\n  contain: size layout style;\n  transition: opacity 0.15s, visibility 0.15s, top 0.15s, right 0.15s, bottom 0.15s, left 0.15s;\n  pointer-events: none;\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n}\n\nbody > .os-scrollbar {\n  position: fixed;\n  z-index: 99999;\n}\n\n.os-scrollbar-transitionless {\n  transition: none;\n}\n\n.os-scrollbar-track {\n  position: relative;\n  direction: ltr !important;\n  padding: 0 !important;\n  border: none !important;\n}\n\n.os-scrollbar-handle {\n  position: absolute;\n}\n\n.os-scrollbar-track,\n.os-scrollbar-handle {\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n}\n\n.os-scrollbar.os-scrollbar-track-interactive .os-scrollbar-track,\n.os-scrollbar.os-scrollbar-handle-interactive .os-scrollbar-handle {\n  pointer-events: auto;\n  touch-action: none;\n}\n\n.os-scrollbar-horizontal {\n  bottom: 0;\n  left: 0;\n}\n\n.os-scrollbar-vertical {\n  top: 0;\n  right: 0;\n}\n\n.os-scrollbar-rtl.os-scrollbar-horizontal {\n  right: 0;\n}\n\n.os-scrollbar-rtl.os-scrollbar-vertical {\n  right: auto;\n  left: 0;\n}\n\n.os-scrollbar-visible,\n.os-scrollbar-interaction.os-scrollbar-visible {\n  opacity: 1;\n  visibility: visible;\n}\n\n.os-scrollbar-auto-hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.os-scrollbar-unusable,\n.os-scrollbar-unusable *,\n.os-scrollbar-wheel,\n.os-scrollbar-wheel * {\n  pointer-events: none !important;\n}\n\n.os-scrollbar-unusable .os-scrollbar-handle {\n  opacity: 0 !important;\n}\n\n.os-scrollbar-horizontal .os-scrollbar-handle {\n  bottom: 0;\n}\n\n.os-scrollbar-vertical .os-scrollbar-handle {\n  right: 0;\n}\n\n.os-scrollbar-rtl.os-scrollbar-vertical .os-scrollbar-handle {\n  right: auto;\n  left: 0;\n}\n\n.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless,\n.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless.os-scrollbar-rtl {\n  left: 0;\n  right: 0;\n}\n\n.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless,\n.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless.os-scrollbar-rtl {\n  top: 0;\n  bottom: 0;\n}\n\n.os-scrollbar {\n  --os-size: 0;\n  --os-padding-perpendicular: 0;\n  --os-padding-axis: 0;\n  --os-track-border-radius: 0;\n  --os-track-bg: none;\n  --os-track-bg-hover: none;\n  --os-track-bg-active: none;\n  --os-track-border: none;\n  --os-track-border-hover: none;\n  --os-track-border-active: none;\n  --os-handle-border-radius: 0;\n  --os-handle-bg: none;\n  --os-handle-bg-hover: none;\n  --os-handle-bg-active: none;\n  --os-handle-border: none;\n  --os-handle-border-hover: none;\n  --os-handle-border-active: none;\n  --os-handle-min-size: 33px;\n  --os-handle-max-size: none;\n  --os-handle-perpendicular-size: 100%;\n  --os-handle-perpendicular-size-hover: 100%;\n  --os-handle-perpendicular-size-active: 100%;\n  --os-handle-interactive-area-offset: 0;\n}\n\n.os-scrollbar .os-scrollbar-track {\n  border: var(--os-track-border);\n  border-radius: var(--os-track-border-radius);\n  background: var(--os-track-bg);\n  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s;\n}\n.os-scrollbar .os-scrollbar-track:hover {\n  border: var(--os-track-border-hover);\n  background: var(--os-track-bg-hover);\n}\n.os-scrollbar .os-scrollbar-track:active {\n  border: var(--os-track-border-active);\n  background: var(--os-track-bg-active);\n}\n.os-scrollbar .os-scrollbar-handle {\n  border: var(--os-handle-border);\n  border-radius: var(--os-handle-border-radius);\n  background: var(--os-handle-bg);\n}\n.os-scrollbar .os-scrollbar-handle:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n}\n.os-scrollbar .os-scrollbar-handle:hover {\n  border: var(--os-handle-border-hover);\n  background: var(--os-handle-bg-hover);\n}\n.os-scrollbar .os-scrollbar-handle:active {\n  border: var(--os-handle-border-active);\n  background: var(--os-handle-bg-active);\n}\n\n.os-scrollbar-horizontal {\n  padding: var(--os-padding-perpendicular) var(--os-padding-axis);\n  right: var(--os-size);\n  height: var(--os-size);\n}\n.os-scrollbar-horizontal.os-scrollbar-rtl {\n  left: var(--os-size);\n  right: 0;\n}\n.os-scrollbar-horizontal .os-scrollbar-handle {\n  min-width: var(--os-handle-min-size);\n  max-width: var(--os-handle-max-size);\n  height: var(--os-handle-perpendicular-size);\n  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, height 0.15s;\n}\n.os-scrollbar-horizontal .os-scrollbar-handle:before {\n  top: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);\n  bottom: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-horizontal:hover .os-scrollbar-handle {\n  height: var(--os-handle-perpendicular-size-hover);\n}\n.os-scrollbar-horizontal:active .os-scrollbar-handle {\n  height: var(--os-handle-perpendicular-size-active);\n}\n\n.os-scrollbar-vertical {\n  padding: var(--os-padding-axis) var(--os-padding-perpendicular);\n  bottom: var(--os-size);\n  width: var(--os-size);\n}\n.os-scrollbar-vertical .os-scrollbar-handle {\n  min-height: var(--os-handle-min-size);\n  max-height: var(--os-handle-max-size);\n  width: var(--os-handle-perpendicular-size);\n  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, width 0.15s;\n}\n.os-scrollbar-vertical .os-scrollbar-handle:before {\n  left: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);\n  right: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before {\n  right: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);\n  left: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-vertical:hover .os-scrollbar-handle {\n  width: var(--os-handle-perpendicular-size-hover);\n}\n.os-scrollbar-vertical:active .os-scrollbar-handle {\n  width: var(--os-handle-perpendicular-size-active);\n}\n\n/* NONE THEME: */\n[data-overlayscrollbars~=updating] > .os-scrollbar,\n.os-theme-none.os-scrollbar {\n  display: none !important;\n}\n\n/* DARK & LIGHT THEME: */\n.os-theme-dark,\n.os-theme-light {\n  box-sizing: border-box;\n  --os-size: 10px;\n  --os-padding-perpendicular: 2px;\n  --os-padding-axis: 2px;\n  --os-track-border-radius: 10px;\n  --os-handle-interactive-area-offset: 4px;\n  --os-handle-border-radius: 10px;\n}\n\n.os-theme-dark {\n  --os-handle-bg: rgba(0, 0, 0, 0.44);\n  --os-handle-bg-hover: rgba(0, 0, 0, 0.55);\n  --os-handle-bg-active: rgba(0, 0, 0, 0.66);\n}\n\n.os-theme-light {\n  --os-handle-bg: rgba(255, 255, 255, 0.44);\n  --os-handle-bg-hover: rgba(255, 255, 255, 0.55);\n  --os-handle-bg-active: rgba(255, 255, 255, 0.66);\n}\n\n.os-no-css-vars.os-theme-dark.os-scrollbar .os-scrollbar-handle, .os-no-css-vars.os-theme-light.os-scrollbar .os-scrollbar-handle {\n  border-radius: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar .os-scrollbar-track, .os-no-css-vars.os-theme-light.os-scrollbar .os-scrollbar-track {\n  border-radius: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar .os-scrollbar-handle, .os-no-css-vars.os-theme-light.os-scrollbar .os-scrollbar-handle {\n  border-radius: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-horizontal, .os-no-css-vars.os-theme-light.os-scrollbar-horizontal {\n  padding: 2px 2px;\n  right: 10px;\n  height: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-horizontal.os-scrollbar-rtl, .os-no-css-vars.os-theme-light.os-scrollbar-horizontal.os-scrollbar-rtl {\n  left: 10px;\n  right: 0;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-horizontal .os-scrollbar-handle, .os-no-css-vars.os-theme-light.os-scrollbar-horizontal .os-scrollbar-handle {\n  min-width: 33px;\n  max-width: none;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-horizontal .os-scrollbar-handle:before, .os-no-css-vars.os-theme-light.os-scrollbar-horizontal .os-scrollbar-handle:before {\n  top: calc((\n                2px + 4px\n              ) * -1);\n  bottom: calc(2px * -1);\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-vertical, .os-no-css-vars.os-theme-light.os-scrollbar-vertical {\n  padding: 2px 2px;\n  bottom: 10px;\n  width: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-vertical .os-scrollbar-handle, .os-no-css-vars.os-theme-light.os-scrollbar-vertical .os-scrollbar-handle {\n  min-height: 33px;\n  max-height: none;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-vertical .os-scrollbar-handle:before, .os-no-css-vars.os-theme-light.os-scrollbar-vertical .os-scrollbar-handle:before {\n  left: calc((\n                2px + 4px\n              ) * -1);\n  right: calc(2px * -1);\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before, .os-no-css-vars.os-theme-light.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before {\n  right: calc((\n              2px + 4px\n            ) * -1);\n  left: calc(2px * -1);\n}\n.os-no-css-vars.os-theme-dark .os-scrollbar-handle {\n  background: rgba(0, 0, 0, 0.44);\n}\n.os-no-css-vars.os-theme-dark:hover .os-scrollbar-handle {\n  background: rgba(0, 0, 0, 0.55);\n}\n.os-no-css-vars.os-theme-dark:active .os-scrollbar-handle {\n  background: rgba(0, 0, 0, 0.66);\n}\n.os-no-css-vars.os-theme-light .os-scrollbar-handle {\n  background: rgba(255, 255, 255, 0.44);\n}\n.os-no-css-vars.os-theme-light:hover .os-scrollbar-handle {\n  background: rgba(255, 255, 255, 0.55);\n}\n.os-no-css-vars.os-theme-light:active .os-scrollbar-handle {\n  background: rgba(255, 255, 255, 0.66);\n}", "",{"version":3,"sources":["webpack://./node_modules/overlayscrollbars/styles/overlayscrollbars.css"],"names":[],"mappings":"AAAA;;;;;;;;EAQE;AACF;;EAEE,kBAAkB;EAClB,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;;;;EAIE,2BAA2B;EAC3B,kBAAkB;EAClB,OAAO;EACP,MAAM;AACR;;AAEA;EACE,WAAW;EACX,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yDAAyD;AAC3D;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,oBAAoB;AACtB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,WAAW;EACX,WAAW;EACX,YAAY;AACd;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,QAAQ;EACR,SAAS;EACT,gBAAgB;EAChB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;AACF;AACA;EACE,UAAU;EACV,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,UAAU;EACV,SAAS;EACT,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,SAAS;EACT,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,SAAS;AACX;AACA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,cAAc;AAChB;;AAEA;;EAEE;AACF;EACE,oBAAoB;EACpB,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,SAAS;AACX;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,YAAY;AACd;;AAEA;;EAEE;AACF;;EAEE,wCAAwC;AAC1C;;AAEA;;;;EAIE,gCAAgC;AAClC;;AAEA;;;;;;;;EAQE,mCAAmC;UAC3B,2BAA2B;EACnC,wBAAwB;EACxB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;EAEE;AACF;EACE,cAAc;AAChB;;AAEA;;EAEE;AACF;;;EAGE,sBAAsB;EACtB,SAAS;EACT,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE;AACF;EACE,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;;EAEE,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,UAAU;EACV,SAAS;EACT,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,WAAW;AACb;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;EACX,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE;AACF;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;EAGE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,0BAA0B;EAC1B,6FAA6F;EAC7F,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,oBAAoB;EACpB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,OAAO;AACT;;AAEA;EACE,MAAM;EACN,QAAQ;AACV;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,OAAO;AACT;;AAEA;;EAEE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;;;;EAIE,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,OAAO;AACT;;AAEA;;EAEE,OAAO;EACP,QAAQ;AACV;;AAEA;;EAEE,MAAM;EACN,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,oBAAoB;EACpB,2BAA2B;EAC3B,mBAAmB;EACnB,yBAAyB;EACzB,0BAA0B;EAC1B,uBAAuB;EACvB,6BAA6B;EAC7B,8BAA8B;EAC9B,4BAA4B;EAC5B,oBAAoB;EACpB,0BAA0B;EAC1B,2BAA2B;EAC3B,wBAAwB;EACxB,8BAA8B;EAC9B,+BAA+B;EAC/B,0BAA0B;EAC1B,0BAA0B;EAC1B,oCAAoC;EACpC,0CAA0C;EAC1C,2CAA2C;EAC3C,sCAAsC;AACxC;;AAEA;EACE,8BAA8B;EAC9B,4CAA4C;EAC5C,8BAA8B;EAC9B,qEAAqE;AACvE;AACA;EACE,oCAAoC;EACpC,oCAAoC;AACtC;AACA;EACE,qCAAqC;EACrC,qCAAqC;AACvC;AACA;EACE,+BAA+B;EAC/B,6CAA6C;EAC7C,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,MAAM;EACN,SAAS;EACT,cAAc;AAChB;AACA;EACE,qCAAqC;EACrC,qCAAqC;AACvC;AACA;EACE,sCAAsC;EACtC,sCAAsC;AACxC;;AAEA;EACE,+DAA+D;EAC/D,qBAAqB;EACrB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,QAAQ;AACV;AACA;EACE,oCAAoC;EACpC,oCAAoC;EACpC,2CAA2C;EAC3C,mFAAmF;AACrF;AACA;EACE,4FAA4F;EAC5F,kDAAkD;AACpD;AACA;EACE,iDAAiD;AACnD;AACA;EACE,kDAAkD;AACpD;;AAEA;EACE,+DAA+D;EAC/D,sBAAsB;EACtB,qBAAqB;AACvB;AACA;EACE,qCAAqC;EACrC,qCAAqC;EACrC,0CAA0C;EAC1C,kFAAkF;AACpF;AACA;EACE,6FAA6F;EAC7F,iDAAiD;AACnD;AACA;EACE,8FAA8F;EAC9F,gDAAgD;AAClD;AACA;EACE,gDAAgD;AAClD;AACA;EACE,iDAAiD;AACnD;;AAEA,gBAAgB;AAChB;;EAEE,wBAAwB;AAC1B;;AAEA,wBAAwB;AACxB;;EAEE,sBAAsB;EACtB,eAAe;EACf,+BAA+B;EAC/B,sBAAsB;EACtB,8BAA8B;EAC9B,wCAAwC;EACxC,+BAA+B;AACjC;;AAEA;EACE,mCAAmC;EACnC,yCAAyC;EACzC,0CAA0C;AAC5C;;AAEA;EACE,yCAAyC;EACzC,+CAA+C;EAC/C,gDAAgD;AAClD;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;AACA;EACE,UAAU;EACV,QAAQ;AACV;AACA;EACE,eAAe;EACf,eAAe;AACjB;AACA;EACE;;qBAEmB;EACnB,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE;;qBAEmB;EACnB,qBAAqB;AACvB;AACA;EACE;;mBAEiB;EACjB,oBAAoB;AACtB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;AACvC","sourcesContent":["/*! \n * OverlayScrollbars\n * Version: 2.1.1\n * \n * Copyright (c) Rene Haas | KingSora.\n * https://github.com/KingSora\n * \n * Released under the MIT license.\n */\n.os-size-observer,\n.os-size-observer-listener {\n  direction: inherit;\n  pointer-events: none;\n  overflow: hidden;\n  visibility: hidden;\n  box-sizing: border-box;\n}\n\n.os-size-observer,\n.os-size-observer-listener,\n.os-size-observer-listener-item,\n.os-size-observer-listener-item-final {\n  writing-mode: horizontal-tb;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.os-size-observer {\n  z-index: -1;\n  contain: strict;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding: inherit;\n  border: inherit;\n  box-sizing: inherit;\n  margin: -133px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: scale(0.1);\n}\n.os-size-observer::before {\n  content: \"\";\n  flex: none;\n  box-sizing: inherit;\n  padding: 10px;\n  width: 10px;\n  height: 10px;\n}\n\n.os-size-observer-appear {\n  animation: os-size-observer-appear-animation 1ms forwards;\n}\n\n.os-size-observer-listener {\n  box-sizing: border-box;\n  position: relative;\n  flex: auto;\n  padding: inherit;\n  border: inherit;\n  margin: -133px;\n  transform: scale(10);\n}\n.os-size-observer-listener.ltr {\n  margin-right: -266px;\n  margin-left: 0;\n}\n.os-size-observer-listener.rtl {\n  margin-left: -266px;\n  margin-right: 0;\n}\n.os-size-observer-listener:empty::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n}\n.os-size-observer-listener:empty::before, .os-size-observer-listener > .os-size-observer-listener-item {\n  display: block;\n  position: relative;\n  padding: inherit;\n  border: inherit;\n  box-sizing: content-box;\n  flex: auto;\n}\n\n.os-size-observer-listener-scroll {\n  box-sizing: border-box;\n  display: flex;\n}\n\n.os-size-observer-listener-item {\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  direction: ltr;\n  flex: none;\n}\n\n.os-size-observer-listener-item-final {\n  transition: none;\n}\n\n@keyframes os-size-observer-appear-animation {\n  from {\n    cursor: auto;\n  }\n  to {\n    cursor: none;\n  }\n}\n.os-trinsic-observer {\n  flex: none;\n  box-sizing: border-box;\n  position: relative;\n  max-width: 0px;\n  max-height: 1px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  overflow: hidden;\n  z-index: -1;\n  height: 0;\n  top: calc(100% + 1px);\n  contain: strict;\n}\n.os-trinsic-observer:not(:empty) {\n  height: calc(100% + 1px);\n  top: -1px;\n}\n.os-trinsic-observer:not(:empty) > .os-size-observer {\n  width: 1000%;\n  height: 1000%;\n  min-height: 1px;\n  min-width: 1px;\n}\n\n/**\n * environment setup \n */\n.os-environment {\n  --os-custom-prop: -1;\n  position: fixed;\n  opacity: 0;\n  visibility: hidden;\n  overflow: scroll;\n  height: 200px;\n  width: 200px;\n  z-index: var(--os-custom-prop);\n}\n.os-environment div {\n  width: 200%;\n  height: 200%;\n  margin: 10px 0;\n}\n.os-environment.os-environment-flexbox-glue {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  height: auto;\n  width: auto;\n  min-height: 200px;\n  min-width: 200px;\n}\n.os-environment.os-environment-flexbox-glue div {\n  flex: auto;\n  width: auto;\n  height: auto;\n  max-height: 100%;\n  max-width: 100%;\n  margin: 0;\n}\n.os-environment.os-environment-flexbox-glue-max {\n  max-height: 200px;\n}\n.os-environment.os-environment-flexbox-glue-max div {\n  overflow: visible;\n}\n.os-environment.os-environment-flexbox-glue-max div::before {\n  content: \"\";\n  display: block;\n  height: 999px;\n  width: 999px;\n}\n\n/**\n * hide native scrollbars\n */\n.os-environment,\n.os-viewport {\n  -ms-overflow-style: scrollbar !important;\n}\n\n[data-overlayscrollbars-initialize],\n[data-overlayscrollbars~=scrollbarHidden],\n.os-viewport-scrollbar-hidden.os-environment,\n.os-viewport-scrollbar-hidden.os-viewport {\n  scrollbar-width: none !important;\n}\n\n[data-overlayscrollbars-initialize]::-webkit-scrollbar,\n[data-overlayscrollbars-initialize]::-webkit-scrollbar-corner,\n[data-overlayscrollbars~=scrollbarHidden]::-webkit-scrollbar,\n[data-overlayscrollbars~=scrollbarHidden]::-webkit-scrollbar-corner,\n.os-viewport-scrollbar-hidden.os-environment::-webkit-scrollbar,\n.os-viewport-scrollbar-hidden.os-environment::-webkit-scrollbar-corner,\n.os-viewport-scrollbar-hidden.os-viewport::-webkit-scrollbar,\n.os-viewport-scrollbar-hidden.os-viewport::-webkit-scrollbar-corner {\n  -webkit-appearance: none !important;\n          appearance: none !important;\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n/**\n * elements wont suddenly crop after initialization is done\n */\n[data-overlayscrollbars-initialize] {\n  overflow: auto;\n}\n\n/**\n * applied to body \n */\nhtml[data-overlayscrollbars],\nhtml.os-viewport-scrollbar-hidden,\nhtml.os-viewport-scrollbar-hidden > body {\n  box-sizing: border-box;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\nhtml[data-overlayscrollbars] > body {\n  overflow: visible;\n}\n\n/**\n * structure setup \n */\n[data-overlayscrollbars~=host] {\n  position: relative;\n}\n\n[data-overlayscrollbars~=host],\n.os-padding {\n  display: flex;\n  flex-direction: row !important;\n  flex-wrap: nowrap !important;\n}\n\n.os-padding,\n.os-viewport {\n  box-sizing: inherit;\n  position: relative;\n  flex: auto !important;\n  height: auto;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  border: none;\n  z-index: 0;\n}\n\n.os-viewport {\n  --os-vaw: 0;\n  --os-vah: 0;\n}\n.os-viewport.os-viewport-arrange::before {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  z-index: -1;\n  min-width: 1px;\n  min-height: 1px;\n  width: var(--os-vaw);\n  height: var(--os-vah);\n}\n\n[data-overlayscrollbars~=host],\n[data-overlayscrollbars~=viewport] {\n  overflow: hidden;\n}\n\n[data-overlayscrollbars~=overflowVisible] {\n  overflow: visible;\n}\n\n[data-overlayscrollbars-overflow-x=hidden] {\n  overflow-x: hidden;\n}\n\n[data-overlayscrollbars-overflow-x=scroll] {\n  overflow-x: scroll;\n}\n\n[data-overlayscrollbars-overflow-x=hidden] {\n  overflow-y: hidden;\n}\n\n[data-overlayscrollbars-overflow-y=scroll] {\n  overflow-y: scroll;\n}\n\n.os-padding,\n.os-viewport {\n  overflow: hidden;\n}\n\n.os-overflow-visible {\n  overflow: visible;\n}\n\n.os-content {\n  box-sizing: inherit;\n}\n\n/**\n * optional & experimental grid mode\n */\n[data-overlayscrollbars-grid],\n[data-overlayscrollbars-grid] .os-padding {\n  display: grid;\n  grid-template: 1fr/1fr;\n}\n\n[data-overlayscrollbars-grid] > .os-padding,\n[data-overlayscrollbars-grid] > .os-viewport,\n[data-overlayscrollbars-grid] > .os-padding > .os-viewport {\n  height: auto !important;\n  width: auto !important;\n}\n\n.os-scrollbar {\n  contain: size layout;\n  contain: size layout style;\n  transition: opacity 0.15s, visibility 0.15s, top 0.15s, right 0.15s, bottom 0.15s, left 0.15s;\n  pointer-events: none;\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n}\n\nbody > .os-scrollbar {\n  position: fixed;\n  z-index: 99999;\n}\n\n.os-scrollbar-transitionless {\n  transition: none;\n}\n\n.os-scrollbar-track {\n  position: relative;\n  direction: ltr !important;\n  padding: 0 !important;\n  border: none !important;\n}\n\n.os-scrollbar-handle {\n  position: absolute;\n}\n\n.os-scrollbar-track,\n.os-scrollbar-handle {\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n}\n\n.os-scrollbar.os-scrollbar-track-interactive .os-scrollbar-track,\n.os-scrollbar.os-scrollbar-handle-interactive .os-scrollbar-handle {\n  pointer-events: auto;\n  touch-action: none;\n}\n\n.os-scrollbar-horizontal {\n  bottom: 0;\n  left: 0;\n}\n\n.os-scrollbar-vertical {\n  top: 0;\n  right: 0;\n}\n\n.os-scrollbar-rtl.os-scrollbar-horizontal {\n  right: 0;\n}\n\n.os-scrollbar-rtl.os-scrollbar-vertical {\n  right: auto;\n  left: 0;\n}\n\n.os-scrollbar-visible,\n.os-scrollbar-interaction.os-scrollbar-visible {\n  opacity: 1;\n  visibility: visible;\n}\n\n.os-scrollbar-auto-hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.os-scrollbar-unusable,\n.os-scrollbar-unusable *,\n.os-scrollbar-wheel,\n.os-scrollbar-wheel * {\n  pointer-events: none !important;\n}\n\n.os-scrollbar-unusable .os-scrollbar-handle {\n  opacity: 0 !important;\n}\n\n.os-scrollbar-horizontal .os-scrollbar-handle {\n  bottom: 0;\n}\n\n.os-scrollbar-vertical .os-scrollbar-handle {\n  right: 0;\n}\n\n.os-scrollbar-rtl.os-scrollbar-vertical .os-scrollbar-handle {\n  right: auto;\n  left: 0;\n}\n\n.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless,\n.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless.os-scrollbar-rtl {\n  left: 0;\n  right: 0;\n}\n\n.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless,\n.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless.os-scrollbar-rtl {\n  top: 0;\n  bottom: 0;\n}\n\n.os-scrollbar {\n  --os-size: 0;\n  --os-padding-perpendicular: 0;\n  --os-padding-axis: 0;\n  --os-track-border-radius: 0;\n  --os-track-bg: none;\n  --os-track-bg-hover: none;\n  --os-track-bg-active: none;\n  --os-track-border: none;\n  --os-track-border-hover: none;\n  --os-track-border-active: none;\n  --os-handle-border-radius: 0;\n  --os-handle-bg: none;\n  --os-handle-bg-hover: none;\n  --os-handle-bg-active: none;\n  --os-handle-border: none;\n  --os-handle-border-hover: none;\n  --os-handle-border-active: none;\n  --os-handle-min-size: 33px;\n  --os-handle-max-size: none;\n  --os-handle-perpendicular-size: 100%;\n  --os-handle-perpendicular-size-hover: 100%;\n  --os-handle-perpendicular-size-active: 100%;\n  --os-handle-interactive-area-offset: 0;\n}\n\n.os-scrollbar .os-scrollbar-track {\n  border: var(--os-track-border);\n  border-radius: var(--os-track-border-radius);\n  background: var(--os-track-bg);\n  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s;\n}\n.os-scrollbar .os-scrollbar-track:hover {\n  border: var(--os-track-border-hover);\n  background: var(--os-track-bg-hover);\n}\n.os-scrollbar .os-scrollbar-track:active {\n  border: var(--os-track-border-active);\n  background: var(--os-track-bg-active);\n}\n.os-scrollbar .os-scrollbar-handle {\n  border: var(--os-handle-border);\n  border-radius: var(--os-handle-border-radius);\n  background: var(--os-handle-bg);\n}\n.os-scrollbar .os-scrollbar-handle:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: block;\n}\n.os-scrollbar .os-scrollbar-handle:hover {\n  border: var(--os-handle-border-hover);\n  background: var(--os-handle-bg-hover);\n}\n.os-scrollbar .os-scrollbar-handle:active {\n  border: var(--os-handle-border-active);\n  background: var(--os-handle-bg-active);\n}\n\n.os-scrollbar-horizontal {\n  padding: var(--os-padding-perpendicular) var(--os-padding-axis);\n  right: var(--os-size);\n  height: var(--os-size);\n}\n.os-scrollbar-horizontal.os-scrollbar-rtl {\n  left: var(--os-size);\n  right: 0;\n}\n.os-scrollbar-horizontal .os-scrollbar-handle {\n  min-width: var(--os-handle-min-size);\n  max-width: var(--os-handle-max-size);\n  height: var(--os-handle-perpendicular-size);\n  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, height 0.15s;\n}\n.os-scrollbar-horizontal .os-scrollbar-handle:before {\n  top: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);\n  bottom: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-horizontal:hover .os-scrollbar-handle {\n  height: var(--os-handle-perpendicular-size-hover);\n}\n.os-scrollbar-horizontal:active .os-scrollbar-handle {\n  height: var(--os-handle-perpendicular-size-active);\n}\n\n.os-scrollbar-vertical {\n  padding: var(--os-padding-axis) var(--os-padding-perpendicular);\n  bottom: var(--os-size);\n  width: var(--os-size);\n}\n.os-scrollbar-vertical .os-scrollbar-handle {\n  min-height: var(--os-handle-min-size);\n  max-height: var(--os-handle-max-size);\n  width: var(--os-handle-perpendicular-size);\n  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, width 0.15s;\n}\n.os-scrollbar-vertical .os-scrollbar-handle:before {\n  left: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);\n  right: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before {\n  right: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);\n  left: calc(var(--os-padding-perpendicular) * -1);\n}\n.os-scrollbar-vertical:hover .os-scrollbar-handle {\n  width: var(--os-handle-perpendicular-size-hover);\n}\n.os-scrollbar-vertical:active .os-scrollbar-handle {\n  width: var(--os-handle-perpendicular-size-active);\n}\n\n/* NONE THEME: */\n[data-overlayscrollbars~=updating] > .os-scrollbar,\n.os-theme-none.os-scrollbar {\n  display: none !important;\n}\n\n/* DARK & LIGHT THEME: */\n.os-theme-dark,\n.os-theme-light {\n  box-sizing: border-box;\n  --os-size: 10px;\n  --os-padding-perpendicular: 2px;\n  --os-padding-axis: 2px;\n  --os-track-border-radius: 10px;\n  --os-handle-interactive-area-offset: 4px;\n  --os-handle-border-radius: 10px;\n}\n\n.os-theme-dark {\n  --os-handle-bg: rgba(0, 0, 0, 0.44);\n  --os-handle-bg-hover: rgba(0, 0, 0, 0.55);\n  --os-handle-bg-active: rgba(0, 0, 0, 0.66);\n}\n\n.os-theme-light {\n  --os-handle-bg: rgba(255, 255, 255, 0.44);\n  --os-handle-bg-hover: rgba(255, 255, 255, 0.55);\n  --os-handle-bg-active: rgba(255, 255, 255, 0.66);\n}\n\n.os-no-css-vars.os-theme-dark.os-scrollbar .os-scrollbar-handle, .os-no-css-vars.os-theme-light.os-scrollbar .os-scrollbar-handle {\n  border-radius: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar .os-scrollbar-track, .os-no-css-vars.os-theme-light.os-scrollbar .os-scrollbar-track {\n  border-radius: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar .os-scrollbar-handle, .os-no-css-vars.os-theme-light.os-scrollbar .os-scrollbar-handle {\n  border-radius: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-horizontal, .os-no-css-vars.os-theme-light.os-scrollbar-horizontal {\n  padding: 2px 2px;\n  right: 10px;\n  height: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-horizontal.os-scrollbar-rtl, .os-no-css-vars.os-theme-light.os-scrollbar-horizontal.os-scrollbar-rtl {\n  left: 10px;\n  right: 0;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-horizontal .os-scrollbar-handle, .os-no-css-vars.os-theme-light.os-scrollbar-horizontal .os-scrollbar-handle {\n  min-width: 33px;\n  max-width: none;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-horizontal .os-scrollbar-handle:before, .os-no-css-vars.os-theme-light.os-scrollbar-horizontal .os-scrollbar-handle:before {\n  top: calc((\n                2px + 4px\n              ) * -1);\n  bottom: calc(2px * -1);\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-vertical, .os-no-css-vars.os-theme-light.os-scrollbar-vertical {\n  padding: 2px 2px;\n  bottom: 10px;\n  width: 10px;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-vertical .os-scrollbar-handle, .os-no-css-vars.os-theme-light.os-scrollbar-vertical .os-scrollbar-handle {\n  min-height: 33px;\n  max-height: none;\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-vertical .os-scrollbar-handle:before, .os-no-css-vars.os-theme-light.os-scrollbar-vertical .os-scrollbar-handle:before {\n  left: calc((\n                2px + 4px\n              ) * -1);\n  right: calc(2px * -1);\n}\n.os-no-css-vars.os-theme-dark.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before, .os-no-css-vars.os-theme-light.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before {\n  right: calc((\n              2px + 4px\n            ) * -1);\n  left: calc(2px * -1);\n}\n.os-no-css-vars.os-theme-dark .os-scrollbar-handle {\n  background: rgba(0, 0, 0, 0.44);\n}\n.os-no-css-vars.os-theme-dark:hover .os-scrollbar-handle {\n  background: rgba(0, 0, 0, 0.55);\n}\n.os-no-css-vars.os-theme-dark:active .os-scrollbar-handle {\n  background: rgba(0, 0, 0, 0.66);\n}\n.os-no-css-vars.os-theme-light .os-scrollbar-handle {\n  background: rgba(255, 255, 255, 0.44);\n}\n.os-no-css-vars.os-theme-light:hover .os-scrollbar-handle {\n  background: rgba(255, 255, 255, 0.55);\n}\n.os-no-css-vars.os-theme-light:active .os-scrollbar-handle {\n  background: rgba(255, 255, 255, 0.66);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/shidashi.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/shidashi.scss ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : __webpack_require__.g).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popper);
//# sourceMappingURL=popper.js.map


/***/ }),

/***/ "./node_modules/overlayscrollbars/styles/overlayscrollbars.css":
/*!*********************************************************************!*\
  !*** ./node_modules/overlayscrollbars/styles/overlayscrollbars.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_overlayscrollbars_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./overlayscrollbars.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/overlayscrollbars/styles/overlayscrollbars.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_overlayscrollbars_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_overlayscrollbars_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_overlayscrollbars_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_overlayscrollbars_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scss/shidashi.scss":
/*!********************************!*\
  !*** ./src/scss/shidashi.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_shidashi_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js!./shidashi.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/shidashi.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_shidashi_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_shidashi_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_shidashi_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_shidashi_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/AdminLTE/AdminLTE.js":
/*!*************************************!*\
  !*** ./src/js/AdminLTE/AdminLTE.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardRefresh": () => (/* reexport safe */ _CardRefresh__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CardWidget": () => (/* reexport safe */ _CardWidget__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ControlSidebar": () => (/* reexport safe */ _ControlSidebar__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "DirectChat": () => (/* reexport safe */ _DirectChat__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Dropdown": () => (/* reexport safe */ _Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "ExpandableTable": () => (/* reexport safe */ _ExpandableTable__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Fullscreen": () => (/* reexport safe */ _Fullscreen__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "IFrame": () => (/* reexport safe */ _IFrame__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Layout": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "NavbarSearch": () => (/* reexport safe */ _NavbarSearch__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "PushMenu": () => (/* reexport safe */ _PushMenu__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "SidebarSearch": () => (/* reexport safe */ _SidebarSearch__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "Toasts": () => (/* reexport safe */ _Toasts__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "TodoList": () => (/* reexport safe */ _TodoList__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "Treeview": () => (/* reexport safe */ _Treeview__WEBPACK_IMPORTED_MODULE_14__["default"])
/* harmony export */ });
/* harmony import */ var _CardRefresh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardRefresh */ "./src/js/AdminLTE/CardRefresh.js");
/* harmony import */ var _CardWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardWidget */ "./src/js/AdminLTE/CardWidget.js");
/* harmony import */ var _ControlSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControlSidebar */ "./src/js/AdminLTE/ControlSidebar.js");
/* harmony import */ var _DirectChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DirectChat */ "./src/js/AdminLTE/DirectChat.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dropdown */ "./src/js/AdminLTE/Dropdown.js");
/* harmony import */ var _ExpandableTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExpandableTable */ "./src/js/AdminLTE/ExpandableTable.js");
/* harmony import */ var _Fullscreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fullscreen */ "./src/js/AdminLTE/Fullscreen.js");
/* harmony import */ var _IFrame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IFrame */ "./src/js/AdminLTE/IFrame.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Layout */ "./src/js/AdminLTE/Layout.js");
/* harmony import */ var _PushMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PushMenu */ "./src/js/AdminLTE/PushMenu.js");
/* harmony import */ var _SidebarSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarSearch */ "./src/js/AdminLTE/SidebarSearch.js");
/* harmony import */ var _NavbarSearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavbarSearch */ "./src/js/AdminLTE/NavbarSearch.js");
/* harmony import */ var _Toasts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Toasts */ "./src/js/AdminLTE/Toasts.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TodoList */ "./src/js/AdminLTE/TodoList.js");
/* harmony import */ var _Treeview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Treeview */ "./src/js/AdminLTE/Treeview.js");



















/***/ }),

/***/ "./src/js/AdminLTE/CardRefresh.js":
/*!****************************************!*\
  !*** ./src/js/AdminLTE/CardRefresh.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE CardRefresh.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'CardRefresh'
const DATA_KEY = 'lte.cardrefresh'
const EVENT_KEY = `.${DATA_KEY}`
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const EVENT_LOADED = `loaded${EVENT_KEY}`
const EVENT_OVERLAY_ADDED = `overlay.added${EVENT_KEY}`
const EVENT_OVERLAY_REMOVED = `overlay.removed${EVENT_KEY}`

const CLASS_NAME_CARD = 'card'

const SELECTOR_CARD = `.${CLASS_NAME_CARD}`
const SELECTOR_DATA_REFRESH = '[data-card-widget="card-refresh"]'

const Default = {
  source: '',
  sourceSelector: '',
  params: {},
  trigger: SELECTOR_DATA_REFRESH,
  content: '.card-body',
  loadInContent: true,
  loadOnInit: true,
  loadErrorTemplate: true,
  responseType: '',
  overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
  errorTemplate: '<span class="text-danger"></span>',
  onLoadStart() {},
  onLoadDone(response) {
    return response
  },
  onLoadFail(_jqXHR, _textStatus, _errorThrown) {}
}

class CardRefresh {
  constructor(element, settings) {
    this._element = element
    this._parent = element.parents(SELECTOR_CARD).first()
    this._settings = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, settings)
    this._overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._settings.overlayTemplate)

    if (element.hasClass(CLASS_NAME_CARD)) {
      this._parent = element
    }

    if (this._settings.source === '') {
      throw new Error('Source url was not defined. Please specify a url in your CardRefresh source option.')
    }
  }

  load() {
    this._addOverlay()
    this._settings.onLoadStart.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this))

    jquery__WEBPACK_IMPORTED_MODULE_0___default().get(this._settings.source, this._settings.params, response => {
      if (this._settings.loadInContent) {
        if (this._settings.sourceSelector !== '') {
          response = jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).find(this._settings.sourceSelector).html()
        }

        this._parent.find(this._settings.content).html(response)
      }

      this._settings.onLoadDone.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), response)
      this._removeOverlay()
    }, this._settings.responseType !== '' && this._settings.responseType)
    .fail((jqXHR, textStatus, errorThrown) => {
      this._removeOverlay()

      if (this._settings.loadErrorTemplate) {
        const msg = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._settings.errorTemplate).text(errorThrown)
        this._parent.find(this._settings.content).empty().append(msg)
      }

      this._settings.onLoadFail.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), jqXHR, textStatus, errorThrown)
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_LOADED))
  }

  _addOverlay() {
    this._parent.append(this._overlay)
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_OVERLAY_ADDED))
  }

  _removeOverlay() {
    this._parent.find(this._overlay).remove()
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_OVERLAY_REMOVED))
  }

  // Private

  _init() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(this._settings.trigger).on('click', () => {
      this.load()
    })

    if (this._settings.loadOnInit) {
      this.load()
    }
  }

  // Static

  static _jQueryInterface(config) {
    let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)
    const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data())

    if (!data) {
      data = new CardRefresh(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _options)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, typeof config === 'string' ? data : config)
    }

    if (typeof config === 'string' && /load/.test(config)) {
      data[config]()
    } else {
      data._init(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this))
    }
  }
}

/**
 * Data API
 * ====================================================
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_REFRESH, function (event) {
  if (event) {
    event.preventDefault()
  }

  CardRefresh._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'load')
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_REFRESH).each(function () {
    CardRefresh._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this))
  })
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = CardRefresh._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = CardRefresh
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return CardRefresh._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardRefresh);


/***/ }),

/***/ "./src/js/AdminLTE/CardWidget.js":
/*!***************************************!*\
  !*** ./src/js/AdminLTE/CardWidget.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE CardWidget.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'CardWidget'
const DATA_KEY = 'lte.cardwidget'
const EVENT_KEY = `.${DATA_KEY}`
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const EVENT_EXPANDED = `expanded${EVENT_KEY}`
const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`
const EVENT_MAXIMIZED = `maximized${EVENT_KEY}`
const EVENT_MINIMIZED = `minimized${EVENT_KEY}`
const EVENT_REMOVED = `removed${EVENT_KEY}`

const CLASS_NAME_CARD = 'card'
const CLASS_NAME_COLLAPSED = 'collapsed-card'
const CLASS_NAME_COLLAPSING = 'collapsing-card'
const CLASS_NAME_EXPANDING = 'expanding-card'
const CLASS_NAME_WAS_COLLAPSED = 'was-collapsed'
const CLASS_NAME_MAXIMIZED = 'maximized-card'

const SELECTOR_DATA_REMOVE = '[data-card-widget="remove"]'
const SELECTOR_DATA_COLLAPSE = '[data-card-widget="collapse"]'
const SELECTOR_DATA_MAXIMIZE = '[data-card-widget="maximize"]'
const SELECTOR_CARD = `.${CLASS_NAME_CARD}`
const SELECTOR_CARD_HEADER = '.card-header'
const SELECTOR_CARD_BODY = '.card-body'
const SELECTOR_CARD_FOOTER = '.card-footer'

const Default = {
  animationSpeed: 'normal',
  collapseTrigger: SELECTOR_DATA_COLLAPSE,
  removeTrigger: SELECTOR_DATA_REMOVE,
  maximizeTrigger: SELECTOR_DATA_MAXIMIZE,
  collapseIcon: 'fa-minus',
  expandIcon: 'fa-plus',
  maximizeIcon: 'fa-expand',
  minimizeIcon: 'fa-compress'
}

class CardWidget {
  constructor(element, settings) {
    this._element = element
    this._parent = element.parents(SELECTOR_CARD).first()

    if (element.hasClass(CLASS_NAME_CARD)) {
      this._parent = element
    }

    this._settings = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, settings)
  }

  collapse() {
    this._parent.addClass(CLASS_NAME_COLLAPSING).children(`${SELECTOR_CARD_BODY}, ${SELECTOR_CARD_FOOTER}`)
      .slideUp(this._settings.animationSpeed, () => {
        this._parent.addClass(CLASS_NAME_COLLAPSED).removeClass(CLASS_NAME_COLLAPSING)
      })

    this._parent.find(`> ${SELECTOR_CARD_HEADER} ${this._settings.collapseTrigger} .${this._settings.collapseIcon}`)
      .addClass(this._settings.expandIcon)
      .removeClass(this._settings.collapseIcon)

    this._element.trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_COLLAPSED), this._parent)
  }

  expand() {
    this._parent.addClass(CLASS_NAME_EXPANDING).children(`${SELECTOR_CARD_BODY}, ${SELECTOR_CARD_FOOTER}`)
      .slideDown(this._settings.animationSpeed, () => {
        this._parent.removeClass(CLASS_NAME_COLLAPSED).removeClass(CLASS_NAME_EXPANDING)
      })

    this._parent.find(`> ${SELECTOR_CARD_HEADER} ${this._settings.collapseTrigger} .${this._settings.expandIcon}`)
      .addClass(this._settings.collapseIcon)
      .removeClass(this._settings.expandIcon)

    this._element.trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_EXPANDED), this._parent)
  }

  remove() {
    this._parent.slideUp()
    this._element.trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_REMOVED), this._parent)
  }

  toggle() {
    if (this._parent.hasClass(CLASS_NAME_COLLAPSED)) {
      this.expand()
      return
    }

    this.collapse()
  }

  maximize() {
    this._parent.find(`${this._settings.maximizeTrigger} .${this._settings.maximizeIcon}`)
      .addClass(this._settings.minimizeIcon)
      .removeClass(this._settings.maximizeIcon)
    this._parent.css({
      height: this._parent.height(),
      width: this._parent.width(),
      transition: 'all .15s'
    }).delay(150).queue(function () {
      const $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)

      $element.addClass(CLASS_NAME_MAXIMIZED)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass(CLASS_NAME_MAXIMIZED)
      if ($element.hasClass(CLASS_NAME_COLLAPSED)) {
        $element.addClass(CLASS_NAME_WAS_COLLAPSED)
      }

      $element.dequeue()
    })

    this._element.trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_MAXIMIZED), this._parent)
  }

  minimize() {
    this._parent.find(`${this._settings.maximizeTrigger} .${this._settings.minimizeIcon}`)
      .addClass(this._settings.maximizeIcon)
      .removeClass(this._settings.minimizeIcon)
    this._parent.css('cssText', `height: ${this._parent[0].style.height} !important; width: ${this._parent[0].style.width} !important; transition: all .15s;`
    ).delay(10).queue(function () {
      const $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)

      $element.removeClass(CLASS_NAME_MAXIMIZED)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass(CLASS_NAME_MAXIMIZED)
      $element.css({
        height: 'inherit',
        width: 'inherit'
      })
      if ($element.hasClass(CLASS_NAME_WAS_COLLAPSED)) {
        $element.removeClass(CLASS_NAME_WAS_COLLAPSED)
      }

      $element.dequeue()
    })

    this._element.trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_MINIMIZED), this._parent)
  }

  toggleMaximize() {
    if (this._parent.hasClass(CLASS_NAME_MAXIMIZED)) {
      this.minimize()
      return
    }

    this.maximize()
  }

  // Private

  _init(card) {
    this._parent = card

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(this._settings.collapseTrigger).click(() => {
      this.toggle()
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(this._settings.maximizeTrigger).click(() => {
      this.toggleMaximize()
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(this._settings.removeTrigger).click(() => {
      this.remove()
    })
  }

  // Static

  static _jQueryInterface(config) {
    let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)
    const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data())

    if (!data) {
      data = new CardWidget(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _options)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, typeof config === 'string' ? data : config)
    }

    if (typeof config === 'string' && /collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(config)) {
      data[config]()
    } else if (typeof config === 'object') {
      data._init(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this))
    }
  }
}

/**
 * Data API
 * ====================================================
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_COLLAPSE, function (event) {
  if (event) {
    event.preventDefault()
  }

  CardWidget._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle')
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_REMOVE, function (event) {
  if (event) {
    event.preventDefault()
  }

  CardWidget._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'remove')
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_MAXIMIZE, function (event) {
  if (event) {
    event.preventDefault()
  }

  CardWidget._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggleMaximize')
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = CardWidget._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = CardWidget
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return CardWidget._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardWidget);


/***/ }),

/***/ "./src/js/AdminLTE/ControlSidebar.js":
/*!*******************************************!*\
  !*** ./src/js/AdminLTE/ControlSidebar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE ControlSidebar.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'ControlSidebar'
const DATA_KEY = 'lte.controlsidebar'
const EVENT_KEY = `.${DATA_KEY}`
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`
const EVENT_COLLAPSED_DONE = `collapsed-done${EVENT_KEY}`
const EVENT_EXPANDED = `expanded${EVENT_KEY}`

const SELECTOR_CONTROL_SIDEBAR = '.control-sidebar'
const SELECTOR_CONTROL_SIDEBAR_CONTENT = '.control-sidebar-content'
const SELECTOR_DATA_TOGGLE = '[data-widget="control-sidebar"]'
const SELECTOR_HEADER = '.main-header'
const SELECTOR_FOOTER = '.main-footer'

const CLASS_NAME_CONTROL_SIDEBAR_ANIMATE = 'control-sidebar-animate'
const CLASS_NAME_CONTROL_SIDEBAR_OPEN = 'control-sidebar-open'
const CLASS_NAME_CONTROL_SIDEBAR_SLIDE = 'control-sidebar-slide-open'
const CLASS_NAME_LAYOUT_FIXED = 'layout-fixed'
const CLASS_NAME_NAVBAR_FIXED = 'layout-navbar-fixed'
const CLASS_NAME_NAVBAR_SM_FIXED = 'layout-sm-navbar-fixed'
const CLASS_NAME_NAVBAR_MD_FIXED = 'layout-md-navbar-fixed'
const CLASS_NAME_NAVBAR_LG_FIXED = 'layout-lg-navbar-fixed'
const CLASS_NAME_NAVBAR_XL_FIXED = 'layout-xl-navbar-fixed'
const CLASS_NAME_FOOTER_FIXED = 'layout-footer-fixed'
const CLASS_NAME_FOOTER_SM_FIXED = 'layout-sm-footer-fixed'
const CLASS_NAME_FOOTER_MD_FIXED = 'layout-md-footer-fixed'
const CLASS_NAME_FOOTER_LG_FIXED = 'layout-lg-footer-fixed'
const CLASS_NAME_FOOTER_XL_FIXED = 'layout-xl-footer-fixed'

const Default = {
  controlsidebarSlide: true,
  scrollbarTheme: 'os-theme-light',
  scrollbarAutoHide: 'l',
  target: SELECTOR_CONTROL_SIDEBAR,
  animationSpeed: 300
}

/**
 * Class Definition
 * ====================================================
 */

class ControlSidebar {
  constructor(element, config) {
    this._element = element
    this._config = config
  }

  // Public

  collapse() {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    const $html = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')

    // Show the control sidebar
    if (this._config.controlsidebarSlide) {
      $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE)
      $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTROL_SIDEBAR).hide()
        $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE)
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).dequeue()
      })
    } else {
      $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN)
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_COLLAPSED))

    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_COLLAPSED_DONE))
    }, this._config.animationSpeed)
  }

  show(toggle = false) {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    const $html = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')

    if (toggle) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTROL_SIDEBAR).hide()
    }

    // Collapse the control sidebar
    if (this._config.controlsidebarSlide) {
      $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._config.target).show().delay(10).queue(function () {
        $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
          $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE)
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).dequeue()
        })
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).dequeue()
      })
    } else {
      $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN)
    }

    this._fixHeight()
    this._fixScrollHeight()

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_EXPANDED))
  }

  toggle() {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    const { target } = this._config

    const notVisible = !jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).is(':visible')
    const shouldClose = ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) ||
      $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE))
    const shouldToggle = notVisible && ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) ||
      $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE))

    if (notVisible || shouldToggle) {
      // Open the control sidebar
      this.show(notVisible)
    } else if (shouldClose) {
      // Close the control sidebar
      this.collapse()
    }
  }

  // Private

  _init() {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    const shouldNotHideAll = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) ||
        $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE)

    if (shouldNotHideAll) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTROL_SIDEBAR).not(this._config.target).hide()
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._config.target).css('display', 'block')
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTROL_SIDEBAR).hide()
    }

    this._fixHeight()
    this._fixScrollHeight()

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(() => {
      this._fixHeight()
      this._fixScrollHeight()
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(() => {
      const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
      const shouldFixHeight = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) ||
          $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE)

      if (shouldFixHeight) {
        this._fixScrollHeight()
      }
    })
  }

  _isNavbarFixed() {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    return (
      $body.hasClass(CLASS_NAME_NAVBAR_FIXED) ||
        $body.hasClass(CLASS_NAME_NAVBAR_SM_FIXED) ||
        $body.hasClass(CLASS_NAME_NAVBAR_MD_FIXED) ||
        $body.hasClass(CLASS_NAME_NAVBAR_LG_FIXED) ||
        $body.hasClass(CLASS_NAME_NAVBAR_XL_FIXED)
    )
  }

  _isFooterFixed() {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    return (
      $body.hasClass(CLASS_NAME_FOOTER_FIXED) ||
        $body.hasClass(CLASS_NAME_FOOTER_SM_FIXED) ||
        $body.hasClass(CLASS_NAME_FOOTER_MD_FIXED) ||
        $body.hasClass(CLASS_NAME_FOOTER_LG_FIXED) ||
        $body.hasClass(CLASS_NAME_FOOTER_XL_FIXED)
    )
  }

  _fixScrollHeight() {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    const $controlSidebar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._config.target)

    if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
      return
    }

    const heights = {
      scroll: jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height(),
      window: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height(),
      header: jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_HEADER).outerHeight(),
      footer: jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_FOOTER).outerHeight()
    }
    const positions = {
      bottom: Math.abs((heights.window + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop()) - heights.scroll),
      top: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop()
    }

    const navbarFixed = this._isNavbarFixed() && jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_HEADER).css('position') === 'fixed'

    const footerFixed = this._isFooterFixed() && jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_FOOTER).css('position') === 'fixed'

    const $controlsidebarContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${this._config.target}, ${this._config.target} ${SELECTOR_CONTROL_SIDEBAR_CONTENT}`)

    if (positions.top === 0 && positions.bottom === 0) {
      $controlSidebar.css({
        bottom: heights.footer,
        top: heights.header
      })
      $controlsidebarContent.css('height', heights.window - (heights.header + heights.footer))
    } else if (positions.bottom <= heights.footer) {
      if (footerFixed === false) {
        const top = heights.header - positions.top
        $controlSidebar.css('bottom', heights.footer - positions.bottom).css('top', top >= 0 ? top : 0)
        $controlsidebarContent.css('height', heights.window - (heights.footer - positions.bottom))
      } else {
        $controlSidebar.css('bottom', heights.footer)
      }
    } else if (positions.top <= heights.header) {
      if (navbarFixed === false) {
        $controlSidebar.css('top', heights.header - positions.top)
        $controlsidebarContent.css('height', heights.window - (heights.header - positions.top))
      } else {
        $controlSidebar.css('top', heights.header)
      }
    } else if (navbarFixed === false) {
      $controlSidebar.css('top', 0)
      $controlsidebarContent.css('height', heights.window)
    } else {
      $controlSidebar.css('top', heights.header)
    }

    if (footerFixed && navbarFixed) {
      $controlsidebarContent.css('height', '100%')
      $controlSidebar.css('height', '')
    } else if (footerFixed || navbarFixed) {
      $controlsidebarContent.css('height', '100%')
      $controlsidebarContent.css('height', '')
    }
  }

  _fixHeight() {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    const $controlSidebar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${this._config.target} ${SELECTOR_CONTROL_SIDEBAR_CONTENT}`)

    if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
      $controlSidebar.attr('style', '')
      return
    }

    const heights = {
      window: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height(),
      header: jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_HEADER).outerHeight(),
      footer: jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_FOOTER).outerHeight()
    }

    let sidebarHeight = heights.window - heights.header

    if (this._isFooterFixed() && jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_FOOTER).css('position') === 'fixed') {
      sidebarHeight = heights.window - heights.header - heights.footer
    }

    $controlSidebar.css('height', sidebarHeight)

    if (typeof (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.overlayScrollbars) !== 'undefined') {
      $controlSidebar.overlayScrollbars({
        className: this._config.scrollbarTheme,
        sizeAutoCapable: true,
        scrollbars: {
          autoHide: this._config.scrollbarAutoHide,
          clickScrolling: true
        }
      })
    }
  }

  // Static

  static _jQueryInterface(operation) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)
      const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data())

      if (!data) {
        data = new ControlSidebar(this, _options)
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data)
      }

      if (data[operation] === 'undefined') {
        throw new Error(`${operation} is not a function`)
      }

      data[operation]()
    })
  }
}

/**
 *
 * Data Api implementation
 * ====================================================
 */
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_TOGGLE, function (event) {
  event.preventDefault()

  ControlSidebar._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle')
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {
  ControlSidebar._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_TOGGLE), '_init')
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = ControlSidebar._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = ControlSidebar
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return ControlSidebar._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlSidebar);


/***/ }),

/***/ "./src/js/AdminLTE/DirectChat.js":
/*!***************************************!*\
  !*** ./src/js/AdminLTE/DirectChat.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE DirectChat.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'DirectChat'
const DATA_KEY = 'lte.directchat'
const EVENT_KEY = `.${DATA_KEY}`
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const EVENT_TOGGLED = `toggled${EVENT_KEY}`

const SELECTOR_DATA_TOGGLE = '[data-widget="chat-pane-toggle"]'
const SELECTOR_DIRECT_CHAT = '.direct-chat'

const CLASS_NAME_DIRECT_CHAT_OPEN = 'direct-chat-contacts-open'

/**
 * Class Definition
 * ====================================================
 */

class DirectChat {
  constructor(element) {
    this._element = element
  }

  toggle() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).parents(SELECTOR_DIRECT_CHAT).first().toggleClass(CLASS_NAME_DIRECT_CHAT_OPEN)
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_TOGGLED))
  }

  // Static

  static _jQueryInterface(config) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)

      if (!data) {
        data = new DirectChat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this))
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data)
      }

      data[config]()
    })
  }
}

/**
 *
 * Data Api implementation
 * ====================================================
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_TOGGLE, function (event) {
  if (event) {
    event.preventDefault()
  }

  DirectChat._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle')
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = DirectChat._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = DirectChat
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return DirectChat._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectChat);


/***/ }),

/***/ "./src/js/AdminLTE/Dropdown.js":
/*!*************************************!*\
  !*** ./src/js/AdminLTE/Dropdown.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE Dropdown.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'Dropdown'
const DATA_KEY = 'lte.dropdown'
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const SELECTOR_NAVBAR = '.navbar'
const SELECTOR_DROPDOWN_MENU = '.dropdown-menu'
const SELECTOR_DROPDOWN_MENU_ACTIVE = '.dropdown-menu.show'
const SELECTOR_DROPDOWN_TOGGLE = '[data-toggle="dropdown"]'

const CLASS_NAME_DROPDOWN_RIGHT = 'dropdown-menu-right'
const CLASS_NAME_DROPDOWN_SUBMENU = 'dropdown-submenu'

// TODO: this is unused; should be removed along with the extend?
const Default = {}

/**
 * Class Definition
 * ====================================================
 */

class Dropdown {
  constructor(element, config) {
    this._config = config
    this._element = element
  }

  // Public

  toggleSubmenu() {
    this._element.siblings().show().toggleClass('show')

    if (!this._element.next().hasClass('show')) {
      this._element.parents(SELECTOR_DROPDOWN_MENU).first().find('.show').removeClass('show').hide()
    }

    this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', () => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-submenu .show').removeClass('show').hide()
    })
  }

  fixPosition() {
    const $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DROPDOWN_MENU_ACTIVE)

    if ($element.length === 0) {
      return
    }

    if ($element.hasClass(CLASS_NAME_DROPDOWN_RIGHT)) {
      $element.css({
        left: 'inherit',
        right: 0
      })
    } else {
      $element.css({
        left: 0,
        right: 'inherit'
      })
    }

    const offset = $element.offset()
    const width = $element.width()
    const visiblePart = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() - offset.left

    if (offset.left < 0) {
      $element.css({
        left: 'inherit',
        right: offset.left - 5
      })
    } else if (visiblePart < width) {
      $element.css({
        left: 'inherit',
        right: 0
      })
    }
  }

  // Static

  static _jQueryInterface(config) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)
      const _config = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data())

      if (!data) {
        data = new Dropdown(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _config)
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data)
      }

      if (config === 'toggleSubmenu' || config === 'fixPosition') {
        data[config]()
      }
    })
  }
}

/**
 * Data API
 * ====================================================
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_DROPDOWN_MENU} ${SELECTOR_DROPDOWN_TOGGLE}`).on('click', function (event) {
  event.preventDefault()
  event.stopPropagation()

  Dropdown._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggleSubmenu')
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_NAVBAR} ${SELECTOR_DROPDOWN_TOGGLE}`).on('click', event => {
  event.preventDefault()

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parent().hasClass(CLASS_NAME_DROPDOWN_SUBMENU)) {
    return
  }

  setTimeout(function () {
    Dropdown._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'fixPosition')
  }, 1)
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = Dropdown._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = Dropdown
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return Dropdown._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);


/***/ }),

/***/ "./src/js/AdminLTE/ExpandableTable.js":
/*!********************************************!*\
  !*** ./src/js/AdminLTE/ExpandableTable.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE ExpandableTable.js
 * License MIT
 * --------------------------------------------
 */



/**
  * Constants
  * ====================================================
  */

const NAME = 'ExpandableTable'
const DATA_KEY = 'lte.expandableTable'
const EVENT_KEY = `.${DATA_KEY}`
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const EVENT_EXPANDED = `expanded${EVENT_KEY}`
const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`

const SELECTOR_TABLE = '.expandable-table'
const SELECTOR_EXPANDABLE_BODY = '.expandable-body'
const SELECTOR_DATA_TOGGLE = '[data-widget="expandable-table"]'
const SELECTOR_ARIA_ATTR = 'aria-expanded'

/**
  * Class Definition
  * ====================================================
  */
class ExpandableTable {
  constructor(element, options) {
    this._options = options
    this._element = element
  }

  // Public

  init() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_TOGGLE).each((_, $header) => {
      const $type = jquery__WEBPACK_IMPORTED_MODULE_0___default()($header).attr(SELECTOR_ARIA_ATTR)
      const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()($header).next(SELECTOR_EXPANDABLE_BODY).children().first().children()
      if ($type === 'true') {
        $body.show()
      } else if ($type === 'false') {
        $body.hide()
        $body.parent().parent().addClass('d-none')
      }
    })
  }

  toggleRow() {
    let $element = this._element

    if ($element[0].nodeName !== 'TR') {
      $element = $element.parent()
      if ($element[0].nodeName !== 'TR') {
        $element = $element.parent()
      }
    }

    const time = 500
    const $type = $element.attr(SELECTOR_ARIA_ATTR)
    const $body = $element.next(SELECTOR_EXPANDABLE_BODY).children().first().children()

    $body.stop()
    if ($type === 'true') {
      $body.slideUp(time, () => {
        $element.next(SELECTOR_EXPANDABLE_BODY).addClass('d-none')
      })
      $element.attr(SELECTOR_ARIA_ATTR, 'false')
      $element.trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_COLLAPSED))
    } else if ($type === 'false') {
      $element.next(SELECTOR_EXPANDABLE_BODY).removeClass('d-none')
      $body.slideDown(time)
      $element.attr(SELECTOR_ARIA_ATTR, 'true')
      $element.trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_EXPANDED))
    }
  }

  // Static

  static _jQueryInterface(operation) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)

      if (!data) {
        data = new ExpandableTable(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this))
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data)
      }

      if (typeof operation === 'string' && /init|toggleRow/.test(operation)) {
        data[operation]()
      }
    })
  }
}

/**
  * Data API
  * ====================================================
  */
jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TABLE).ready(function () {
  ExpandableTable._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'init')
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_TOGGLE, function () {
  ExpandableTable._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggleRow')
})

/**
  * jQuery API
  * ====================================================
  */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = ExpandableTable._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = ExpandableTable
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return ExpandableTable._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpandableTable);


/***/ }),

/***/ "./src/js/AdminLTE/Fullscreen.js":
/*!***************************************!*\
  !*** ./src/js/AdminLTE/Fullscreen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE Fullscreen.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'Fullscreen'
const DATA_KEY = 'lte.fullscreen'
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const SELECTOR_DATA_WIDGET = '[data-widget="fullscreen"]'
const SELECTOR_ICON = `${SELECTOR_DATA_WIDGET} i`

const EVENT_FULLSCREEN_CHANGE = 'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange'

const Default = {
  minimizeIcon: 'fa-compress-arrows-alt',
  maximizeIcon: 'fa-expand-arrows-alt'
}

/**
 * Class Definition
 * ====================================================
 */

class Fullscreen {
  constructor(_element, _options) {
    this.element = _element
    this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, _options)
  }

  // Public

  toggle() {
    if (document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement) {
      this.windowed()
    } else {
      this.fullscreen()
    }
  }

  toggleIcon() {
    if (document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_ICON).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon)
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_ICON).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon)
    }
  }

  fullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen()
    }
  }

  windowed() {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }

  // Static

  static _jQueryInterface(config) {
    let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)

    if (!data) {
      data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data()
    }

    const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, typeof config === 'object' ? config : data)
    const plugin = new Fullscreen(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _options)

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, typeof config === 'object' ? config : data)

    if (typeof config === 'string' && /toggle|toggleIcon|fullscreen|windowed/.test(config)) {
      plugin[config]()
    } else {
      plugin.init()
    }
  }
}

/**
  * Data API
  * ====================================================
  */
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_WIDGET, function () {
  Fullscreen._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle')
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(EVENT_FULLSCREEN_CHANGE, () => {
  Fullscreen._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET), 'toggleIcon')
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = Fullscreen._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = Fullscreen
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return Fullscreen._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fullscreen);


/***/ }),

/***/ "./src/js/AdminLTE/IFrame.js":
/*!***********************************!*\
  !*** ./src/js/AdminLTE/IFrame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE IFrame.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'IFrame'
const DATA_KEY = 'lte.iframe'
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const SELECTOR_DATA_TOGGLE = '[data-widget="iframe"]'
const SELECTOR_DATA_TOGGLE_CLOSE = '[data-widget="iframe-close"]'
const SELECTOR_DATA_TOGGLE_SCROLL_LEFT = '[data-widget="iframe-scrollleft"]'
const SELECTOR_DATA_TOGGLE_SCROLL_RIGHT = '[data-widget="iframe-scrollright"]'
const SELECTOR_DATA_TOGGLE_FULLSCREEN = '[data-widget="iframe-fullscreen"]'
const SELECTOR_CONTENT_WRAPPER = '.content-wrapper'
const SELECTOR_CONTENT_IFRAME = `${SELECTOR_CONTENT_WRAPPER} iframe`
const SELECTOR_TAB_NAV = `${SELECTOR_CONTENT_WRAPPER}.iframe-mode .nav`
const SELECTOR_TAB_NAVBAR_NAV = `${SELECTOR_CONTENT_WRAPPER}.iframe-mode .navbar-nav`
const SELECTOR_TAB_NAVBAR_NAV_ITEM = `${SELECTOR_TAB_NAVBAR_NAV} .nav-item`
const SELECTOR_TAB_NAVBAR_NAV_LINK = `${SELECTOR_TAB_NAVBAR_NAV} .nav-link`
const SELECTOR_TAB_CONTENT = `${SELECTOR_CONTENT_WRAPPER}.iframe-mode .tab-content`
const SELECTOR_TAB_EMPTY = `${SELECTOR_TAB_CONTENT} .tab-empty`
const SELECTOR_TAB_LOADING = `${SELECTOR_TAB_CONTENT} .tab-loading`
const SELECTOR_TAB_PANE = `${SELECTOR_TAB_CONTENT} .tab-pane`
const SELECTOR_SIDEBAR_MENU_ITEM = '.main-sidebar .nav-item > a.nav-link'
const SELECTOR_SIDEBAR_SEARCH_ITEM = '.sidebar-search-results .list-group-item'
const SELECTOR_HEADER_MENU_ITEM = '.main-header .nav-item a.nav-link'
const SELECTOR_HEADER_DROPDOWN_ITEM = '.main-header a.dropdown-item'
const CLASS_NAME_IFRAME_MODE = 'iframe-mode'
const CLASS_NAME_FULLSCREEN_MODE = 'iframe-mode-fullscreen'

const Default = {
  onTabClick(item) {
    return item
  },
  onTabChanged(item) {
    return item
  },
  onTabCreated(item) {
    return item
  },
  autoIframeMode: true,
  autoItemActive: true,
  autoShowNewTab: true,
  autoDarkMode: false,
  allowDuplicates: false,
  allowReload: true,
  loadingScreen: true,
  useNavbarItems: true,
  scrollOffset: 40,
  scrollBehaviorSwap: false,
  iconMaximize: 'fa-expand',
  iconMinimize: 'fa-compress'
}

/**
 * Class Definition
 * ====================================================
 */

class IFrame {
  constructor(element, config) {
    this._config = config
    this._element = element
    this._init()

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).data("adminLTEIframeHandler", this);
  }

  // Public

  onTabClick(item) {
    this._config.onTabClick(item)
  }

  onTabChanged(item) {
    this._config.onTabChanged(item)
  }

  onTabCreated(item) {
    this._config.onTabCreated(item)
  }

  createTab(title, link, uniqueName, autoOpen) {
    let tabId = `panel-${uniqueName}`
    let navId = `tab-${uniqueName}`

    if (this._config.allowDuplicates) {
      tabId += `-${Math.floor(Math.random() * 1000)}`
      navId += `-${Math.floor(Math.random() * 1000)}`
    }

    const newNavItem = `<li class="nav-item" role="presentation"><a href="#" class="btn-iframe-close" data-widget="iframe-close" data-type="only-this"><i class="fas fa-times"></i></a><a class="nav-link" data-toggle="row" id="${navId}" href="#${tabId}" role="tab" aria-controls="${tabId}" aria-selected="false">${title}</a></li>`
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_NAVBAR_NAV).append(unescape(escape(newNavItem)))

    const newTabItem = `<div class="tab-pane fade" id="${tabId}" role="tabpanel" aria-labelledby="${navId}"><iframe src="${link}"></iframe></div>`
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_CONTENT).append(unescape(escape(newTabItem)))

    if (autoOpen) {
      if (this._config.loadingScreen) {
        const $loadingScreen = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_LOADING)
        $loadingScreen.fadeIn()
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${tabId} iframe`).ready(() => {
          if (typeof this._config.loadingScreen === 'number') {
            this.switchTab(`#${navId}`)
            setTimeout(() => {
              $loadingScreen.fadeOut()
            }, this._config.loadingScreen)
          } else {
            this.switchTab(`#${navId}`)
            $loadingScreen.fadeOut()
          }
        })
      } else {
        this.switchTab(`#${navId}`)
      }
    }

    this.onTabCreated(jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${navId}`))
  }

  openTabSidebar(item, autoOpen = this._config.autoShowNewTab) {
    let $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).clone()
    if ($item.attr('href') === undefined) {
      $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).parent('a').clone()
    }

    $item.find('.right, .search-path').remove()
    let title = $item.find('p').text()
    if (title === '') {
      title = $item.text()
    }

    const link = $item.attr('href')
    if (link === '#' || link === '' || link === undefined) {
      return
    }

    const uniqueName = unescape(link).replace('./', '').replace(/["#&'./:=?[\]]/gi, '-').replace(/(--)/gi, '')
    const navId = `tab-${uniqueName}`

    if (!this._config.allowDuplicates && jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${navId}`).length > 0) {
      return this.switchTab(`#${navId}`, this._config.allowReload)
    }

    if ((!this._config.allowDuplicates && jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${navId}`).length === 0) || this._config.allowDuplicates) {
      this.createTab(title, link, uniqueName, autoOpen)
    }
  }

  switchTab(item, reload = false) {
    const $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item)
    const tabId = $item.attr('href')

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_EMPTY).hide()

    if (reload) {
      const $loadingScreen = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_LOADING)
      if (this._config.loadingScreen) {
        $loadingScreen.show(0, () => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${tabId} iframe`).attr('src', jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${tabId} iframe`).attr('src')).ready(() => {
            if (this._config.loadingScreen) {
              if (typeof this._config.loadingScreen === 'number') {
                setTimeout(() => {
                  $loadingScreen.fadeOut()
                }, this._config.loadingScreen)
              } else {
                $loadingScreen.fadeOut()
              }
            }
          })
        })
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${tabId} iframe`).attr('src', jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${tabId} iframe`).attr('src'))
      }
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_NAVBAR_NAV} .active`).tab('dispose').removeClass('active')

    this._fixHeight()

    $item.tab('show')
    $item.parents('li').addClass('active')
    this.onTabChanged($item)

    if (this._config.autoItemActive) {
      this._setItemActive(jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${tabId} iframe`).attr('src'))
    }
  }

  removeActiveTab(type, element) {
    if (type == 'all') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_NAVBAR_NAV_ITEM).remove()
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_PANE).remove()
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_EMPTY).show()
    } else if (type == 'all-other') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_NAVBAR_NAV_ITEM}:not(.active)`).remove()
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_PANE}:not(.active)`).remove()
    } else if (type == 'only-this') {
      const $navClose = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)
      const $navItem = $navClose.parent('.nav-item')
      const $navItemParent = $navItem.parent()
      const navItemIndex = $navItem.index()
      const tabId = $navClose.siblings('.nav-link').attr('aria-controls')
      $navItem.remove()
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${tabId}`).remove()
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_CONTENT).children().length == jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}`).length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_EMPTY).show()
      } else {
        const prevNavItemIndex = navItemIndex - 1
        this.switchTab($navItemParent.children().eq(prevNavItemIndex).find('a.nav-link'))
      }
    } else {
      const $navItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_NAVBAR_NAV_ITEM}.active`)
      const $navItemParent = $navItem.parent()
      const navItemIndex = $navItem.index()
      $navItem.remove()
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_PANE}.active`).remove()
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_CONTENT).children().length == jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}`).length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_EMPTY).show()
      } else {
        const prevNavItemIndex = navItemIndex - 1
        this.switchTab($navItemParent.children().eq(prevNavItemIndex).find('a.nav-link'))
      }
    }
  }

  toggleFullscreen() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_DATA_TOGGLE_FULLSCREEN} i`).removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass(CLASS_NAME_FULLSCREEN_MODE)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}`).height('100%')
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTENT_WRAPPER).height('100%')
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTENT_IFRAME).height('100%')
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_DATA_TOGGLE_FULLSCREEN} i`).removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass(CLASS_NAME_FULLSCREEN_MODE)
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('resize')
    this._fixHeight(true)
  }

  // Private

  _init() {
    const usingDefTab = (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_CONTENT).children().length > 2)

    this._setupListeners()
    this._fixHeight(true)

    if (usingDefTab) {
      const $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_PANE}`).first()
      // eslint-disable-next-line no-console
      console.log($el)
      const uniqueName = $el.attr('id').replace('panel-', '')
      const navId = `#tab-${uniqueName}`

      this.switchTab(navId, true)
    }
  }

  _initFrameElement() {
    if (window.frameElement && this._config.autoIframeMode) {
      const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
      $body.addClass(CLASS_NAME_IFRAME_MODE)

      if (this._config.autoDarkMode) {
        $body.addClass('dark-mode')
      }
    }
  }

  _navScroll(offset) {
    const leftPos = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_NAVBAR_NAV).scrollLeft()
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_NAVBAR_NAV).animate({ scrollLeft: (leftPos + offset) }, 250, 'linear')
  }

  _setupListeners() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', () => {
      setTimeout(() => {
        this._fixHeight()
      }, 1)
    })
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTENT_WRAPPER).hasClass(CLASS_NAME_IFRAME_MODE)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', `${SELECTOR_SIDEBAR_MENU_ITEM}, ${SELECTOR_SIDEBAR_SEARCH_ITEM}`, e => {
        e.preventDefault()
        this.openTabSidebar(e.target)
      })
      if (this._config.useNavbarItems) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', `${SELECTOR_HEADER_MENU_ITEM}, ${SELECTOR_HEADER_DROPDOWN_ITEM}`, e => {
          e.preventDefault()
          this.openTabSidebar(e.target)
        })
      }
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_TAB_NAVBAR_NAV_LINK, e => {
      e.preventDefault()
      this.onTabClick(e.target)
      this.switchTab(e.target)
    })
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_TAB_NAVBAR_NAV_LINK, e => {
      e.preventDefault()
      this.onTabClick(e.target)
      this.switchTab(e.target)
    })
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_TOGGLE_CLOSE, e => {
      e.preventDefault()
      let { target } = e

      if (target.nodeName == 'I') {
        target = e.target.offsetParent
      }

      this.removeActiveTab(target.attributes['data-type'] ? target.attributes['data-type'].nodeValue : null, target)
    })
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_DATA_TOGGLE_FULLSCREEN, e => {
      e.preventDefault()
      this.toggleFullscreen()
    })
    let mousedown = false
    let mousedownInterval = null
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_LEFT, e => {
      e.preventDefault()
      clearInterval(mousedownInterval)

      let { scrollOffset } = this._config

      if (!this._config.scrollBehaviorSwap) {
        scrollOffset = -scrollOffset
      }

      mousedown = true
      this._navScroll(scrollOffset)

      mousedownInterval = setInterval(() => {
        this._navScroll(scrollOffset)
      }, 250)
    })
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_RIGHT, e => {
      e.preventDefault()
      clearInterval(mousedownInterval)

      let { scrollOffset } = this._config

      if (this._config.scrollBehaviorSwap) {
        scrollOffset = -scrollOffset
      }

      mousedown = true
      this._navScroll(scrollOffset)

      mousedownInterval = setInterval(() => {
        this._navScroll(scrollOffset)
      }, 250)
    })
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('mouseup', () => {
      if (mousedown) {
        mousedown = false
        clearInterval(mousedownInterval)
        mousedownInterval = null
      }
    })
  }

  _setItemActive(href) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_SIDEBAR_MENU_ITEM}, ${SELECTOR_HEADER_DROPDOWN_ITEM}`).removeClass('active')
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_HEADER_MENU_ITEM).parent().removeClass('active')

    const $headerMenuItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_HEADER_MENU_ITEM}[href$="${href}"]`)
    const $headerDropdownItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_HEADER_DROPDOWN_ITEM}[href$="${href}"]`)
    const $sidebarMenuItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_SIDEBAR_MENU_ITEM}[href$="${href}"]`)

    $headerMenuItem.each((i, e) => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).parent().addClass('active')
    })
    $headerDropdownItem.each((i, e) => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).addClass('active')
    })
    $sidebarMenuItem.each((i, e) => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).addClass('active')
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).parents('.nav-treeview').prevAll('.nav-link').addClass('active')
    })
  }

  _fixHeight(tabEmpty = false) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
      const windowHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()
      const navbarHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_NAV).outerHeight()
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}, ${SELECTOR_CONTENT_IFRAME}`).height(windowHeight - navbarHeight)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTENT_WRAPPER).height(windowHeight)
    } else {
      const contentWrapperHeight = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTENT_WRAPPER).css('height'))
      const navbarHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TAB_NAV).outerHeight()
      if (tabEmpty == true) {
        setTimeout(() => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_TAB_EMPTY}, ${SELECTOR_TAB_LOADING}`).height(contentWrapperHeight - navbarHeight)
        }, 50)
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTENT_IFRAME).height(contentWrapperHeight - navbarHeight)
      }
    }
  }

  // Static

  static _jQueryInterface(config) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_TOGGLE).length > 0) {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)

      if (!data) {
        data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data()
      }

      const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, typeof config === 'object' ? config : data)
      localStorage.setItem('AdminLTE:IFrame:Options', JSON.stringify(_options))

      const plugin = new IFrame(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _options)

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, typeof config === 'object' ? config : data)

      if (typeof config === 'string' && /createTab|openTabSidebar|switchTab|removeActiveTab/.test(config)) {
        plugin[config]()
      }
    } else {
      new IFrame(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), JSON.parse(localStorage.getItem('AdminLTE:IFrame:Options')))._initFrameElement()
    }
  }
}

/**
 * Data API
 * ====================================================
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', () => {
  IFrame._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_TOGGLE))
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = IFrame._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = IFrame
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return IFrame._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IFrame);


/***/ }),

/***/ "./src/js/AdminLTE/Layout.js":
/*!***********************************!*\
  !*** ./src/js/AdminLTE/Layout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE Layout.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'Layout'
const DATA_KEY = 'lte.layout'
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const SELECTOR_HEADER = '.main-header'
const SELECTOR_MAIN_SIDEBAR = '.main-sidebar'
const SELECTOR_SIDEBAR = '.main-sidebar .sidebar'
const SELECTOR_CONTENT = '.content-wrapper'
const SELECTOR_CONTROL_SIDEBAR_CONTENT = '.control-sidebar-content'
const SELECTOR_CONTROL_SIDEBAR_BTN = '[data-widget="control-sidebar"]'
const SELECTOR_FOOTER = '.main-footer'
const SELECTOR_PUSHMENU_BTN = '[data-widget="pushmenu"]'
const SELECTOR_LOGIN_BOX = '.login-box'
const SELECTOR_REGISTER_BOX = '.register-box'
const SELECTOR_PRELOADER = '.preloader'

const CLASS_NAME_SIDEBAR_COLLAPSED = 'sidebar-collapse'
const CLASS_NAME_SIDEBAR_FOCUSED = 'sidebar-focused'
const CLASS_NAME_LAYOUT_FIXED = 'layout-fixed'
const CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN = 'control-sidebar-slide-open'
const CLASS_NAME_CONTROL_SIDEBAR_OPEN = 'control-sidebar-open'
const CLASS_NAME_IFRAME_MODE = 'iframe-mode'

const Default = {
  scrollbarTheme: 'os-theme-light',
  scrollbarAutoHide: 'l',
  panelAutoHeight: true,
  panelAutoHeightMode: 'min-height',
  preloadDuration: 200,
  loginRegisterAutoHeight: true
}

/**
 * Class Definition
 * ====================================================
 */

class Layout {
  constructor(element, config) {
    this._config = config
    this._element = element
  }

  // Public

  fixLayoutHeight(extra = null) {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    let controlSidebar = 0

    if ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || extra === 'control_sidebar') {
      controlSidebar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTROL_SIDEBAR_CONTENT).outerHeight()
    }

    const heights = {
      window: jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height(),
      header: jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_HEADER).length > 0 ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_HEADER).outerHeight() : 0,
      footer: jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_FOOTER).length > 0 ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_FOOTER).outerHeight() : 0,
      sidebar: jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SIDEBAR).length > 0 ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SIDEBAR).height() : 0,
      controlSidebar
    }

    const max = this._max(heights)
    let offset = this._config.panelAutoHeight

    if (offset === true) {
      offset = 0
    }

    const $contentSelector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTENT)

    if (offset !== false) {
      if (max === heights.controlSidebar) {
        $contentSelector.css(this._config.panelAutoHeightMode, (max + offset))
      } else if (max === heights.window) {
        $contentSelector.css(this._config.panelAutoHeightMode, (max + offset) - heights.header - heights.footer)
      } else {
        $contentSelector.css(this._config.panelAutoHeightMode, (max + offset) - heights.header)
      }

      if (this._isFooterFixed()) {
        $contentSelector.css(this._config.panelAutoHeightMode, parseFloat($contentSelector.css(this._config.panelAutoHeightMode)) + heights.footer)
      }
    }

    if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
      return
    }

    if (typeof (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.overlayScrollbars) !== 'undefined') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SIDEBAR).overlayScrollbars({
        className: this._config.scrollbarTheme,
        sizeAutoCapable: true,
        scrollbars: {
          autoHide: this._config.scrollbarAutoHide,
          clickScrolling: true
        }
      })
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SIDEBAR).css('overflow-y', 'auto')
    }
  }

  fixLoginRegisterHeight() {
    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    const $selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_LOGIN_BOX}, ${SELECTOR_REGISTER_BOX}`)

    if ($body.hasClass(CLASS_NAME_IFRAME_MODE)) {
      $body.css('height', '100%')
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wrapper').css('height', '100%')
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').css('height', '100%')
    } else if ($selector.length === 0) {
      $body.css('height', 'auto')
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').css('height', 'auto')
    } else {
      const boxHeight = $selector.height()

      if ($body.css(this._config.panelAutoHeightMode) !== boxHeight) {
        $body.css(this._config.panelAutoHeightMode, boxHeight)
      }
    }
  }

  // Private

  _init() {
    // Activate layout height watcher
    this.fixLayoutHeight()

    if (this._config.loginRegisterAutoHeight === true) {
      this.fixLoginRegisterHeight()
    } else if (this._config.loginRegisterAutoHeight === parseInt(this._config.loginRegisterAutoHeight, 10)) {
      setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight)
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SIDEBAR)
      .on('collapsed.lte.treeview expanded.lte.treeview', () => {
        this.fixLayoutHeight()
      })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_MAIN_SIDEBAR)
      .on('mouseenter mouseleave', () => {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED)) {
          this.fixLayoutHeight()
        }
      })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_PUSHMENU_BTN)
      .on('collapsed.lte.pushmenu shown.lte.pushmenu', () => {
        setTimeout(() => {
          this.fixLayoutHeight()
        }, 300)
      })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_CONTROL_SIDEBAR_BTN)
      .on('collapsed.lte.controlsidebar', () => {
        this.fixLayoutHeight()
      })
      .on('expanded.lte.controlsidebar', () => {
        this.fixLayoutHeight('control_sidebar')
      })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(() => {
      this.fixLayoutHeight()
    })

    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body.hold-transition').removeClass('hold-transition')
    }, 50)

    setTimeout(() => {
      const $preloader = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_PRELOADER)
      if ($preloader) {
        $preloader.css('height', 0)
        setTimeout(() => {
          $preloader.children().hide()
        }, 200)
      }
    }, this._config.preloadDuration)
  }

  _max(numbers) {
    // Calculate the maximum number in a list
    let max = 0

    Object.keys(numbers).forEach(key => {
      if (numbers[key] > max) {
        max = numbers[key]
      }
    })

    return max
  }

  _isFooterFixed() {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_FOOTER).css('position') === 'fixed'
  }

  // Static

  static _jQueryInterface(config = '') {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)
      const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data())

      if (!data) {
        data = new Layout(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _options)
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data)
      }

      if (config === 'init' || config === '') {
        data._init()
      } else if (config === 'fixLayoutHeight' || config === 'fixLoginRegisterHeight') {
        data[config]()
      }
    })
  }
}

/**
 * Data API
 * ====================================================
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', () => {
  Layout._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()('body'))
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_SIDEBAR} a`)
  .on('focusin', () => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_MAIN_SIDEBAR).addClass(CLASS_NAME_SIDEBAR_FOCUSED)
  })
  .on('focusout', () => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_MAIN_SIDEBAR).removeClass(CLASS_NAME_SIDEBAR_FOCUSED)
  })

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = Layout._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = Layout
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return Layout._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ "./src/js/AdminLTE/NavbarSearch.js":
/*!*****************************************!*\
  !*** ./src/js/AdminLTE/NavbarSearch.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE NavbarSearch.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'NavbarSearch'
const DATA_KEY = 'lte.navbar-search'
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const SELECTOR_TOGGLE_BUTTON = '[data-widget="navbar-search"]'
const SELECTOR_SEARCH_BLOCK = '.navbar-search-block'
const SELECTOR_SEARCH_INPUT = '.form-control'

const CLASS_NAME_OPEN = 'navbar-search-open'

const Default = {
  resetOnClose: true,
  target: SELECTOR_SEARCH_BLOCK
}

/**
 * Class Definition
 * ====================================================
 */

class NavbarSearch {
  constructor(_element, _options) {
    this._element = _element
    this._config = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, _options)
  }

  // Public

  open() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._config.target).css('display', 'flex').hide().fadeIn().addClass(CLASS_NAME_OPEN)
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${this._config.target} ${SELECTOR_SEARCH_INPUT}`).focus()
  }

  close() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._config.target).fadeOut().removeClass(CLASS_NAME_OPEN)

    if (this._config.resetOnClose) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${this._config.target} ${SELECTOR_SEARCH_INPUT}`).val('')
    }
  }

  toggle() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._config.target).hasClass(CLASS_NAME_OPEN)) {
      this.close()
    } else {
      this.open()
    }
  }

  // Static

  static _jQueryInterface(options) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)
      const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data())

      if (!data) {
        data = new NavbarSearch(this, _options)
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data)
      }

      if (!/toggle|close|open/.test(options)) {
        throw new Error(`Undefined method ${options}`)
      }

      data[options]()
    })
  }
}

/**
 * Data API
 * ====================================================
 */
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_TOGGLE_BUTTON, event => {
  event.preventDefault()

  let button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget)

  if (button.data('widget') !== 'navbar-search') {
    button = button.closest(SELECTOR_TOGGLE_BUTTON)
  }

  NavbarSearch._jQueryInterface.call(button, 'toggle')
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = NavbarSearch._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = NavbarSearch
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return NavbarSearch._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarSearch);


/***/ }),

/***/ "./src/js/AdminLTE/PushMenu.js":
/*!*************************************!*\
  !*** ./src/js/AdminLTE/PushMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE PushMenu.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'PushMenu'
const DATA_KEY = 'lte.pushmenu'
const EVENT_KEY = `.${DATA_KEY}`
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`
const EVENT_COLLAPSED_DONE = `collapsed-done${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`

const SELECTOR_TOGGLE_BUTTON = '[data-widget="pushmenu"]'
const SELECTOR_BODY = 'body'
const SELECTOR_OVERLAY = '#sidebar-overlay'
const SELECTOR_WRAPPER = '.wrapper'

const CLASS_NAME_COLLAPSED = 'sidebar-collapse'
const CLASS_NAME_OPEN = 'sidebar-open'
const CLASS_NAME_IS_OPENING = 'sidebar-is-opening'
const CLASS_NAME_CLOSED = 'sidebar-closed'

const Default = {
  autoCollapseSize: 992,
  enableRemember: false,
  noTransitionAfterReload: true,
  animationSpeed: 300
}

/**
 * Class Definition
 * ====================================================
 */

class PushMenu {
  constructor(element, options) {
    this._element = element
    this._options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, options)

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_OVERLAY).length === 0) {
      this._addOverlay()
    }

    this._init()
  }

  // Public

  expand() {
    const $bodySelector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_BODY)

    if (this._options.autoCollapseSize && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= this._options.autoCollapseSize) {
      $bodySelector.addClass(CLASS_NAME_OPEN)
    }

    $bodySelector.addClass(CLASS_NAME_IS_OPENING).removeClass(`${CLASS_NAME_COLLAPSED} ${CLASS_NAME_CLOSED}`).delay(50).queue(function () {
      $bodySelector.removeClass(CLASS_NAME_IS_OPENING)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).dequeue()
    })

    if (this._options.enableRemember) {
      localStorage.setItem(`remember${EVENT_KEY}`, CLASS_NAME_OPEN)
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_SHOWN))
  }

  collapse() {
    const $bodySelector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_BODY)

    if (this._options.autoCollapseSize && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= this._options.autoCollapseSize) {
      $bodySelector.removeClass(CLASS_NAME_OPEN).addClass(CLASS_NAME_CLOSED)
    }

    $bodySelector.addClass(CLASS_NAME_COLLAPSED)

    if (this._options.enableRemember) {
      localStorage.setItem(`remember${EVENT_KEY}`, CLASS_NAME_COLLAPSED)
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_COLLAPSED))

    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_COLLAPSED_DONE))
    }, this._options.animationSpeed)
  }

  toggle() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_BODY).hasClass(CLASS_NAME_COLLAPSED)) {
      this.expand()
    } else {
      this.collapse()
    }
  }

  autoCollapse(resize = false) {
    if (!this._options.autoCollapseSize) {
      return
    }

    const $bodySelector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_BODY)

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= this._options.autoCollapseSize) {
      if (!$bodySelector.hasClass(CLASS_NAME_OPEN)) {
        this.collapse()
      }
    } else if (resize === true) {
      if ($bodySelector.hasClass(CLASS_NAME_OPEN)) {
        $bodySelector.removeClass(CLASS_NAME_OPEN)
      } else if ($bodySelector.hasClass(CLASS_NAME_CLOSED)) {
        this.expand()
      }
    }
  }

  remember() {
    if (!this._options.enableRemember) {
      return
    }

    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')
    const toggleState = localStorage.getItem(`remember${EVENT_KEY}`)

    if (toggleState === CLASS_NAME_COLLAPSED) {
      if (this._options.noTransitionAfterReload) {
        $body.addClass('hold-transition').addClass(CLASS_NAME_COLLAPSED).delay(50).queue(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('hold-transition')
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).dequeue()
        })
      } else {
        $body.addClass(CLASS_NAME_COLLAPSED)
      }
    } else if (this._options.noTransitionAfterReload) {
      $body.addClass('hold-transition').removeClass(CLASS_NAME_COLLAPSED).delay(50).queue(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('hold-transition')
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).dequeue()
      })
    } else {
      $body.removeClass(CLASS_NAME_COLLAPSED)
    }
  }

  // Private

  _init() {
    this.remember()
    this.autoCollapse()

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(() => {
      this.autoCollapse(true)
    })
  }

  _addOverlay() {
    const overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />', {
      id: 'sidebar-overlay'
    })

    overlay.on('click', () => {
      this.collapse()
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_WRAPPER).append(overlay)
  }

  // Static

  static _jQueryInterface(operation) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)
      const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data())

      if (!data) {
        data = new PushMenu(this, _options)
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data)
      }

      if (typeof operation === 'string' && /collapse|expand|toggle/.test(operation)) {
        data[operation]()
      }
    })
  }
}

/**
 * Data API
 * ====================================================
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_TOGGLE_BUTTON, event => {
  event.preventDefault()

  let button = event.currentTarget

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).data('widget') !== 'pushmenu') {
    button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).closest(SELECTOR_TOGGLE_BUTTON)
  }

  PushMenu._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(button), 'toggle')
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', () => {
  PushMenu._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_TOGGLE_BUTTON))
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = PushMenu._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = PushMenu
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return PushMenu._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PushMenu);


/***/ }),

/***/ "./src/js/AdminLTE/SidebarSearch.js":
/*!******************************************!*\
  !*** ./src/js/AdminLTE/SidebarSearch.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE SidebarSearch.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'SidebarSearch'
const DATA_KEY = 'lte.sidebar-search'
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const CLASS_NAME_OPEN = 'sidebar-search-open'
const CLASS_NAME_ICON_SEARCH = 'fa-search'
const CLASS_NAME_ICON_CLOSE = 'fa-times'
const CLASS_NAME_HEADER = 'nav-header'
const CLASS_NAME_SEARCH_RESULTS = 'sidebar-search-results'
const CLASS_NAME_LIST_GROUP = 'list-group'

const SELECTOR_DATA_WIDGET = '[data-widget="sidebar-search"]'
const SELECTOR_SIDEBAR = '.main-sidebar .nav-sidebar'
const SELECTOR_NAV_LINK = '.nav-link'
const SELECTOR_NAV_TREEVIEW = '.nav-treeview'
const SELECTOR_SEARCH_INPUT = `${SELECTOR_DATA_WIDGET} .form-control`
const SELECTOR_SEARCH_BUTTON = `${SELECTOR_DATA_WIDGET} .btn`
const SELECTOR_SEARCH_ICON = `${SELECTOR_SEARCH_BUTTON} i`
const SELECTOR_SEARCH_LIST_GROUP = `.${CLASS_NAME_LIST_GROUP}`
const SELECTOR_SEARCH_RESULTS = `.${CLASS_NAME_SEARCH_RESULTS}`
const SELECTOR_SEARCH_RESULTS_GROUP = `${SELECTOR_SEARCH_RESULTS} .${CLASS_NAME_LIST_GROUP}`

const Default = {
  arrowSign: '->',
  minLength: 3,
  maxResults: 7,
  highlightName: true,
  highlightPath: false,
  highlightClass: 'text-light',
  notFoundText: 'No element found!'
}

const SearchItems = []

/**
 * Class Definition
 * ====================================================
 */

class SidebarSearch {
  constructor(_element, _options) {
    this.element = _element
    this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, _options)
    this.items = []
  }

  // Public

  init() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET).length === 0) {
      return
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET).next(SELECTOR_SEARCH_RESULTS).length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET).after(
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />', { class: CLASS_NAME_SEARCH_RESULTS })
      )
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_RESULTS).children(SELECTOR_SEARCH_LIST_GROUP).length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_RESULTS).append(
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />', { class: CLASS_NAME_LIST_GROUP })
      )
    }

    this._addNotFound()

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SIDEBAR).children().each((i, child) => {
      this._parseItem(child)
    })
  }

  search() {
    const searchValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_INPUT).val().toLowerCase()
    if (searchValue.length < this.options.minLength) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_RESULTS_GROUP).empty()
      this._addNotFound()
      this.close()
      return
    }

    const searchResults = SearchItems.filter(item => (item.name).toLowerCase().includes(searchValue))
    const endResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()(searchResults.slice(0, this.options.maxResults))
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_RESULTS_GROUP).empty()

    if (endResults.length === 0) {
      this._addNotFound()
    } else {
      endResults.each((i, result) => {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_RESULTS_GROUP).append(this._renderItem(escape(result.name), encodeURI(result.link), result.path))
      })
    }

    this.open()
  }

  open() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET).parent().addClass(CLASS_NAME_OPEN)
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_SEARCH).addClass(CLASS_NAME_ICON_CLOSE)
  }

  close() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET).parent().removeClass(CLASS_NAME_OPEN)
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_CLOSE).addClass(CLASS_NAME_ICON_SEARCH)
  }

  toggle() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET).parent().hasClass(CLASS_NAME_OPEN)) {
      this.close()
    } else {
      this.open()
    }
  }

  // Private

  _parseItem(item, path = []) {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).hasClass(CLASS_NAME_HEADER)) {
      return
    }

    const itemObject = {}
    const navLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).clone().find(`> ${SELECTOR_NAV_LINK}`)
    const navTreeview = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).clone().find(`> ${SELECTOR_NAV_TREEVIEW}`)

    const link = navLink.attr('href')
    const name = navLink.find('p').children().remove().end().text()

    itemObject.name = this._trimText(name)
    itemObject.link = link
    itemObject.path = path

    if (navTreeview.length === 0) {
      SearchItems.push(itemObject)
    } else {
      const newPath = itemObject.path.concat([itemObject.name])
      navTreeview.children().each((i, child) => {
        this._parseItem(child, newPath)
      })
    }
  }

  _trimText(text) {
    return (0,jquery__WEBPACK_IMPORTED_MODULE_0__.trim)(text.replace(/(\r\n|\n|\r)/gm, ' '))
  }

  _renderItem(name, link, path) {
    path = path.join(` ${this.options.arrowSign} `)
    name = unescape(name)
    link = decodeURI(link)

    if (this.options.highlightName || this.options.highlightPath) {
      const searchValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_INPUT).val().toLowerCase()
      const regExp = new RegExp(searchValue, 'gi')

      if (this.options.highlightName) {
        name = name.replace(
          regExp,
          str => {
            return `<strong class="${this.options.highlightClass}">${str}</strong>`
          }
        )
      }

      if (this.options.highlightPath) {
        path = path.replace(
          regExp,
          str => {
            return `<strong class="${this.options.highlightClass}">${str}</strong>`
          }
        )
      }
    }

    const groupItemElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a/>', {
      href: decodeURIComponent(link),
      class: 'list-group-item'
    })
    const searchTitleElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div/>', {
      class: 'search-title'
    }).html(name)
    const searchPathElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div/>', {
      class: 'search-path'
    }).html(path)

    groupItemElement.append(searchTitleElement).append(searchPathElement)

    return groupItemElement
  }

  _addNotFound() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_RESULTS_GROUP).append(this._renderItem(this.options.notFoundText, '#', []))
  }

  // Static

  static _jQueryInterface(config) {
    let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)

    if (!data) {
      data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data()
    }

    const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, typeof config === 'object' ? config : data)
    const plugin = new SidebarSearch(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _options)

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, typeof config === 'object' ? config : data)

    if (typeof config === 'string' && /init|toggle|close|open|search/.test(config)) {
      plugin[config]()
    } else {
      plugin.init()
    }
  }
}

/**
 * Data API
 * ====================================================
 */
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', SELECTOR_SEARCH_BUTTON, event => {
  event.preventDefault()

  SidebarSearch._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET), 'toggle')
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keyup', SELECTOR_SEARCH_INPUT, event => {
  if (event.keyCode == 38) {
    event.preventDefault()
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_RESULTS_GROUP).children().last().focus()
    return
  }

  if (event.keyCode == 40) {
    event.preventDefault()
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_SEARCH_RESULTS_GROUP).children().first().focus()
    return
  }

  setTimeout(() => {
    SidebarSearch._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET), 'search')
  }, 100)
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keydown', SELECTOR_SEARCH_RESULTS_GROUP, event => {
  const $focused = jquery__WEBPACK_IMPORTED_MODULE_0___default()(':focus')

  if (event.keyCode == 38) {
    event.preventDefault()

    if ($focused.is(':first-child')) {
      $focused.siblings().last().focus()
    } else {
      $focused.prev().focus()
    }
  }

  if (event.keyCode == 40) {
    event.preventDefault()

    if ($focused.is(':last-child')) {
      $focused.siblings().first().focus()
    } else {
      $focused.next().focus()
    }
  }
})

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', () => {
  SidebarSearch._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET), 'init')
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = SidebarSearch._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = SidebarSearch
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return SidebarSearch._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarSearch);


/***/ }),

/***/ "./src/js/AdminLTE/Toasts.js":
/*!***********************************!*\
  !*** ./src/js/AdminLTE/Toasts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE Toasts.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'Toasts'
const DATA_KEY = 'lte.toasts'
const EVENT_KEY = `.${DATA_KEY}`
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const EVENT_INIT = `init${EVENT_KEY}`
const EVENT_CREATED = `created${EVENT_KEY}`
const EVENT_REMOVED = `removed${EVENT_KEY}`

const SELECTOR_CONTAINER_TOP_RIGHT = '#toastsContainerTopRight'
const SELECTOR_CONTAINER_TOP_LEFT = '#toastsContainerTopLeft'
const SELECTOR_CONTAINER_BOTTOM_RIGHT = '#toastsContainerBottomRight'
const SELECTOR_CONTAINER_BOTTOM_LEFT = '#toastsContainerBottomLeft'

const CLASS_NAME_TOP_RIGHT = 'toasts-top-right'
const CLASS_NAME_TOP_LEFT = 'toasts-top-left'
const CLASS_NAME_BOTTOM_RIGHT = 'toasts-bottom-right'
const CLASS_NAME_BOTTOM_LEFT = 'toasts-bottom-left'

const POSITION_TOP_RIGHT = 'topRight'
const POSITION_TOP_LEFT = 'topLeft'
const POSITION_BOTTOM_RIGHT = 'bottomRight'
const POSITION_BOTTOM_LEFT = 'bottomLeft'

const Default = {
  position: POSITION_TOP_RIGHT,
  fixed: true,
  autohide: false,
  autoremove: true,
  delay: 1000,
  fade: true,
  icon: null,
  image: null,
  imageAlt: null,
  imageHeight: '25px',
  title: null,
  subtitle: null,
  close: true,
  body: null,
  class: null
}

/**
 * Class Definition
 * ====================================================
 */
class Toasts {
  constructor(element, config) {
    this._config = config
    this._prepareContainer()

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_INIT))
  }

  // Public

  create() {
    const toast = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>')

    toast.data('autohide', this._config.autohide)
    toast.data('animation', this._config.fade)

    if (this._config.class) {
      toast.addClass(this._config.class)
    }

    if (this._config.delay && this._config.delay != 500) {
      toast.data('delay', this._config.delay)
    }

    const toastHeader = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="toast-header">')

    if (this._config.image != null) {
      const toastImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').addClass('rounded mr-2').attr('src', this._config.image).attr('alt', this._config.imageAlt)

      if (this._config.imageHeight != null) {
        toastImage.height(this._config.imageHeight).width('auto')
      }

      toastHeader.append(toastImage)
    }

    if (this._config.icon != null) {
      toastHeader.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i />').addClass('mr-2').addClass(this._config.icon))
    }

    if (this._config.title != null) {
      toastHeader.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<strong />').addClass('mr-auto').html(this._config.title))
    }

    if (this._config.subtitle != null) {
      toastHeader.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<small />').html(this._config.subtitle))
    }

    if (this._config.close == true) {
      const toastClose = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close').attr('aria-label', 'Close').append('<span aria-hidden="true">&times;</span>')

      if (this._config.title == null) {
        toastClose.toggleClass('ml-2 ml-auto')
      }

      toastHeader.append(toastClose)
    }

    toast.append(toastHeader)

    if (this._config.body != null) {
      toast.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="toast-body" />').html(this._config.body))
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._getContainerId()).prepend(toast)

    const $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')

    $body.trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_CREATED))
    toast.toast('show')

    if (this._config.autoremove) {
      toast.on('hidden.bs.toast', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).delay(200).remove()
        $body.trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_REMOVED))
      })
    }
  }

  // Static

  _getContainerId() {
    if (this._config.position == POSITION_TOP_RIGHT) {
      return SELECTOR_CONTAINER_TOP_RIGHT
    }

    if (this._config.position == POSITION_TOP_LEFT) {
      return SELECTOR_CONTAINER_TOP_LEFT
    }

    if (this._config.position == POSITION_BOTTOM_RIGHT) {
      return SELECTOR_CONTAINER_BOTTOM_RIGHT
    }

    if (this._config.position == POSITION_BOTTOM_LEFT) {
      return SELECTOR_CONTAINER_BOTTOM_LEFT
    }
  }

  _prepareContainer() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._getContainerId()).length === 0) {
      const container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').attr('id', this._getContainerId().replace('#', ''))
      if (this._config.position == POSITION_TOP_RIGHT) {
        container.addClass(CLASS_NAME_TOP_RIGHT)
      } else if (this._config.position == POSITION_TOP_LEFT) {
        container.addClass(CLASS_NAME_TOP_LEFT)
      } else if (this._config.position == POSITION_BOTTOM_RIGHT) {
        container.addClass(CLASS_NAME_BOTTOM_RIGHT)
      } else if (this._config.position == POSITION_BOTTOM_LEFT) {
        container.addClass(CLASS_NAME_BOTTOM_LEFT)
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append(container)
    }

    if (this._config.fixed) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._getContainerId()).addClass('fixed')
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._getContainerId()).removeClass('fixed')
    }
  }

  // Static

  static _jQueryInterface(option, config) {
    return this.each(function () {
      const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, config)
      const toast = new Toasts(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _options)

      if (option === 'create') {
        toast[option]()
      }
    })
  }
}

/**
 * jQuery API
 * ====================================================
 */

(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = Toasts._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = Toasts
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return Toasts._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toasts);


/***/ }),

/***/ "./src/js/AdminLTE/TodoList.js":
/*!*************************************!*\
  !*** ./src/js/AdminLTE/TodoList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE TodoList.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'TodoList'
const DATA_KEY = 'lte.todolist'
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const SELECTOR_DATA_TOGGLE = '[data-widget="todo-list"]'
const CLASS_NAME_TODO_LIST_DONE = 'done'

const Default = {
  onCheck(item) {
    return item
  },
  onUnCheck(item) {
    return item
  }
}

/**
 * Class Definition
 * ====================================================
 */

class TodoList {
  constructor(element, config) {
    this._config = config
    this._element = element

    this._init()
  }

  // Public

  toggle(item) {
    item.parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE)
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).prop('checked')) {
      this.unCheck(jquery__WEBPACK_IMPORTED_MODULE_0___default()(item))
      return
    }

    this.check(item)
  }

  check(item) {
    this._config.onCheck.call(item)
  }

  unCheck(item) {
    this._config.onUnCheck.call(item)
  }

  // Private

  _init() {
    const $toggleSelector = this._element

    $toggleSelector.find('input:checkbox:checked').parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE)
    $toggleSelector.on('change', 'input:checkbox', event => {
      this.toggle(jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target))
    })
  }

  // Static

  static _jQueryInterface(config) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)

      if (!data) {
        data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data()
      }

      const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, typeof config === 'object' ? config : data)
      const plugin = new TodoList(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _options)

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, typeof config === 'object' ? config : data)

      if (config === 'init') {
        plugin[config]()
      }
    })
  }
}

/**
 * Data API
 * ====================================================
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', () => {
  TodoList._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_TOGGLE))
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = TodoList._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = TodoList
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return TodoList._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ }),

/***/ "./src/js/AdminLTE/Treeview.js":
/*!*************************************!*\
  !*** ./src/js/AdminLTE/Treeview.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------
 * AdminLTE Treeview.js
 * License MIT
 * --------------------------------------------
 */



/**
 * Constants
 * ====================================================
 */

const NAME = 'Treeview'
const DATA_KEY = 'lte.treeview'
const EVENT_KEY = `.${DATA_KEY}`
const JQUERY_NO_CONFLICT = (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME]

const EVENT_EXPANDED = `expanded${EVENT_KEY}`
const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}`

const SELECTOR_LI = '.nav-item'
const SELECTOR_LINK = '.nav-link'
const SELECTOR_TREEVIEW_MENU = '.nav-treeview'
const SELECTOR_OPEN = '.menu-open'
const SELECTOR_DATA_WIDGET = '[data-widget="treeview"]'

const CLASS_NAME_OPEN = 'menu-open'
const CLASS_NAME_IS_OPENING = 'menu-is-opening'
const CLASS_NAME_SIDEBAR_COLLAPSED = 'sidebar-collapse'

const Default = {
  trigger: `${SELECTOR_DATA_WIDGET} ${SELECTOR_LINK}`,
  animationSpeed: 300,
  accordion: true,
  expandSidebar: false,
  sidebarButtonSelector: '[data-widget="pushmenu"]'
}

/**
 * Class Definition
 * ====================================================
 */
class Treeview {
  constructor(element, config) {
    this._config = config
    this._element = element
  }

  // Public

  init() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`${SELECTOR_LI}${SELECTOR_OPEN} ${SELECTOR_TREEVIEW_MENU}${SELECTOR_OPEN}`).css('display', 'block')
    this._setupListeners()
  }

  expand(treeviewMenu, parentLi) {
    const expandedEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_EXPANDED)

    if (this._config.accordion) {
      const openMenuLi = parentLi.siblings(SELECTOR_OPEN).first()
      const openTreeview = openMenuLi.find(SELECTOR_TREEVIEW_MENU).first()
      this.collapse(openTreeview, openMenuLi)
    }

    parentLi.addClass(CLASS_NAME_IS_OPENING)
    treeviewMenu.stop().slideDown(this._config.animationSpeed, () => {
      parentLi.addClass(CLASS_NAME_OPEN)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(expandedEvent)
    })

    if (this._config.expandSidebar) {
      this._expandSidebar()
    }
  }

  collapse(treeviewMenu, parentLi) {
    const collapsedEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(EVENT_COLLAPSED)

    parentLi.removeClass(`${CLASS_NAME_IS_OPENING} ${CLASS_NAME_OPEN}`)
    treeviewMenu.stop().slideUp(this._config.animationSpeed, () => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(collapsedEvent)
      treeviewMenu.find(`${SELECTOR_OPEN} > ${SELECTOR_TREEVIEW_MENU}`).slideUp()
      treeviewMenu.find(SELECTOR_OPEN).removeClass(`${CLASS_NAME_IS_OPENING} ${CLASS_NAME_OPEN}`)
    })
  }

  toggle(event) {
    const $relativeTarget = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget)
    const $parent = $relativeTarget.parent()

    let treeviewMenu = $parent.find(`> ${SELECTOR_TREEVIEW_MENU}`)

    if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
      if (!$parent.is(SELECTOR_LI)) {
        treeviewMenu = $parent.parent().find(`> ${SELECTOR_TREEVIEW_MENU}`)
      }

      if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
        return
      }
    }

    event.preventDefault()

    const parentLi = $relativeTarget.parents(SELECTOR_LI).first()
    const isOpen = parentLi.hasClass(CLASS_NAME_OPEN)

    if (isOpen) {
      this.collapse(jquery__WEBPACK_IMPORTED_MODULE_0___default()(treeviewMenu), parentLi)
    } else {
      this.expand(jquery__WEBPACK_IMPORTED_MODULE_0___default()(treeviewMenu), parentLi)
    }
  }

  // Private

  _setupListeners() {
    const elementId = this._element.attr('id') !== undefined ? `#${this._element.attr('id')}` : ''
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', `${elementId}${this._config.trigger}`, event => {
      this.toggle(event)
    })
  }

  _expandSidebar() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._config.sidebarButtonSelector).PushMenu('expand')
    }
  }

  // Static

  static _jQueryInterface(config) {
    return this.each(function () {
      let data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY)
      const _options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, Default, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data())

      if (!data) {
        data = new Treeview(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), _options)
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data)
      }

      if (config === 'init') {
        data[config]()
      }
    })
  }
}

/**
 * Data API
 * ====================================================
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(EVENT_LOAD_DATA_API, () => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(SELECTOR_DATA_WIDGET).each(function () {
    Treeview._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'init')
  })
})

/**
 * jQuery API
 * ====================================================
 */

;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = Treeview._jQueryInterface
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].Constructor = Treeview
;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME].noConflict = function () {
  ;(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn)[NAME] = JQUERY_NO_CONFLICT
  return Treeview._jQueryInterface
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Treeview);


/***/ }),

/***/ "./src/js/class-shidashi.js":
/*!**********************************!*\
  !*** ./src/js/class-shidashi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shidashi": () => (/* binding */ Shidashi)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! overlayscrollbars */ "./node_modules/overlayscrollbars/overlayscrollbars.mjs");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);



overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__.OverlayScrollbars.plugin([
  overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__.SizeObserverPlugin,
  overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__.ScrollbarsHidingPlugin,
  overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__.ClickScrollPlugin
]);



const default_scroll_opt = {
  /*
  autoUpdate           : null,
  autoUpdateInterval   : 330,
  sizeAutoCapable      : true,
  scrollbars : {
    visibility       : "auto",
    autoHide         : "move",
    autoHideDelay    : 800,
    dragScrolling    : true,
    clickScrolling   : true,
    touchSupport     : true,
  },
  textarea : {
    dynWidth       : false,
    dynHeight      : true,
    inheritedAttrs : ["style", "class"]
  }*/
  paddingAbsolute             : true,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents     : [['img', 'load']],
    debounce          : [0, 330],
    attributes        : null,
    ignoreMutation    : null,
  },
  scrollbars: {
    theme             : 'os-theme-dark',
    visibility        : 'auto',
    autoHide          : 'move',
    autoHideDelay     : 800,
    dragScroll        : true,
    clickScroll       : true,
    pointers          : ['mouse', 'touch', 'pen'],
  },
};

class Shidashi {

  constructor (Shiny){
    // Insert build version here
    this.build = { version: '1.0', date: '2024-09-29 16:56:18 EDT' };
    this._keep_alive = true;
    this._moduleId = undefined;
    this._raveId = undefined;
    this._active_module = undefined;
    this._shiny_inactive = false;
    this._shiny_callstacks = [];
    this._shiny = Shiny;
    this.shiny_connected = false;
    this.$window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    this.$document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
    this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()("body");
    this.$aside = jquery__WEBPACK_IMPORTED_MODULE_0___default()("aside");
    this.$navIfarme = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".navbar-nav-iframe");
    this.$iframeWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".content-wrapper.iframe-mode");

    this._dummy = document.createElement("div");
    this._dummy2 = document.createElement("div");
    this._dummyLink = document.createElement("a");
    this._dummyLink.setAttribute("target", "_blank");

//shidashi.$body.append("aaaaa")
    this._localStorage = window.localStorage;
    this._sessionStorage = window.sessionStorage;
    this._keyPrefix = "shidashi-session-";
    this._keyNotification = "shidashi-session";
    this._keyTheme = "shidashi-theme";
    this._listeners = {};
    this._storageDuration = 1000 * 60 * 60 * 24; // 1000 days
    this.sessionData = {};
    this._bodyClasses = [];
    this.variableBodyClasses = ["scroller-not-top", "navbar-hidden"];
    this.scroller = this.makeFancyScroll(
      "body:not(.overflow-hidden)",
      {
        overflow : {
            x : "hidden",
            y : "scroll"
        },
      },
      {
        scroll: ( instance, event ) => {
          this._mainScrollCallback( instance );
        }
      }
    );
  }

  _mainScrollCallback(scrollers) {
    /**
    // FIXME: Hide navbar when scrolled down to show more space. It's tricky
    let isTop, param;
    if(Array.isArray(scrollers)) {
      isTop = scrollers
        .map((scroller, ii) => {
          param = scroller.scroll();
          return(param.position.y);
        })
        .filter(v => {
          return(v == 0);
        })
        .length;
    } else {
      param = scrollers.scroll();
      isTop = param.position.y == 0;
    }

    if(isTop) {
      this.notifyParent(
        "removeClass", [
          "body",
          "scroller-not-top"
        ]
      );
      this.removeClass("body", "scroller-not-top");
    } else {
      this.notifyParent(
        "addClass", [
          "body",
          "scroller-not-top"
        ]
      );
      this.addClass("body", "scroller-not-top");
    }
    */
  }

  openURL(url, target = "_blank") {
    console.debug(`Opening ${url}`);
    this._dummyLink.setAttribute("target", target);
    this._dummyLink.setAttribute("href", url);
    this._dummyLink.click();
    this._dummyLink.innerHTML = "A new window with given link has been opened. If you haven't seen it, please click here. (This notification automatically closes in 10 seconds.)"
    this.createNotification({
      title: 'Opening the link',
      fixed: true,
      autoremove: true,
      autohide: true,
      delay: 10000,
      icon: "fas fa-link",
      subtitle: "Link created",
      close: true,
      body: this._dummyLink
    })
  }

  openIFrameTab(url, title, more = {}, target = "_blank") {
    if( !this.$body.hasClass("parent-frame") ) {
      if( window.parent === window ) {
        this.openURL( url, target );
      } else {
        this.notifyParent("openIFrameTab", [url, title, target, more]);
      }
      return;
    }
    const adminLTEIFrame = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content-wrapper').data('adminLTEIframeHandler');
    if( !adminLTEIFrame ) {
      return;
    }
    const $title = document.createElement("p");
    $title.text( title );

    const $link = document.createElement("a");
    $link.setAttribute("href", url);
    $link.setAttribute("target", target);
    $link.setAttribute("title", title);
    for(let k in more) {
      $link.setAttribute(k, more[k]);
    }
    $link.appendChild( $title );
    adminLTEIFrame.openTabSidebar($link);
  }

  launchStandaloneViewer(outputId) {
    const url = `?output_id=${ outputId }&rave_id=${ this._raveId }&module=standalone_viewer`;
    this.openURL(url);
  }

  ensureShiny(then){
    if(!this._shiny){
      this._shiny = window.Shiny;
    }
    if( typeof(then) === "function" ){
      this._shiny_callstacks.push(then);
    }
    if(document.readyState && document.readyState === "complete" &&
      this._shiny && this.shiny_connected) {

      while(this._shiny_callstacks.length > 0) {
        const f = this._shiny_callstacks.shift();
        try{
          f(this._shiny);
        }catch(e){
          console.warn(e);
        }
      }
    } else {
      console.debug(`Shiny is not connected, defering (${ this._shiny_callstacks.length }) requests...`);
    }
  }

  bindAll( el, ensure = true ) {
    const b = (shiny) => {
      shiny.bindAll( el );
      // also check tabsets
      const $tabLists = jquery__WEBPACK_IMPORTED_MODULE_0___default()( el ).find('.card-tabs [role="tablist"]')
      for( let ii = 0; ii < $tabLists.length; ii++ ) {
        const pa = $tabLists[ ii ];
        if(pa && pa.id) {
          const activeTab = pa.querySelector("li.nav-item > .nav-link.active");
          if( activeTab ) {
            shiny.setInputValue( pa.id, jquery__WEBPACK_IMPORTED_MODULE_0___default()(activeTab).text() );
          }
        }
      }

    };

    if( ensure || this._shiny ) {
      this.ensureShiny(b);
    }
  }
  unbindAll( el, ensure = true ) {
    const ub = (shiny) => {
      shiny.unbindAll( el );
    };
    if( ensure || this._shiny ) {
      this.ensureShiny( ub );
    }
  }

  // localStorage to save input data
  fromLocalStorage(key, defaultIfNotFound, ignoreDuration = false){
    try {
      const item = JSON.parse(this._localStorage.getItem(key));
      item.last_saved = new Date(item.last_saved);
      item._key = key;
      if( !ignoreDuration ){
        const now = new Date();
        if((now - item.last_saved) > this._storageDuration) {
          // item expired
          console.debug("Removing expired key: " + key);
          this._localStorage.removeItem(key);
        } else {
          return(item);
        }
      } else {
        return(item);
      }
    } catch (e) {
      console.debug("Removing corrupted key: " + key);
      this._localStorage.removeItem(key);
    }
    if(defaultIfNotFound === true){
      return({
        inputs : {},
        last_saved: new Date(),
        last_edit: this._private_id,
        inputs_changed: [],
        _key: key
      });
    } else {
      return (defaultIfNotFound);
    }

  }

  async cleanLocalStorage(maxEntries = 100) {
    // Clean the localStorage
    const items = [];
    for(let key in this._localStorage){
      if(key.startsWith(this._keyPrefix)){
        const item = this.fromLocalStorage(key);
        if(maxEntries && item){
          items.push( item );
        }
      }
    }

    if(items.length && items.length > maxEntries){
      items.sort((v1, v2) => { return(v1.last_saved > v2.last_saved); });
      items.splice(items.length - maxEntries);
      items.forEach((item) => {
        this._localStorage.removeItem(item._key);
      });
    }
  }

  _setSharedId(shared_id) {
    if(typeof(this._shared_id) !== "string" && typeof(shared_id) === "string"){
      this._shared_id = shared_id;
      this._storage_key = this._keyPrefix + this._shared_id;
    }
    return this._storage_key;
  }
  _setPrivateId(private_id) {
    if(typeof(this._private_id) !== "string"){
      if(typeof(private_id) === "string"){
        this._private_id = private_id;
      } else {
        this._private_id = Math.random().toString(16).substr(2, 8);
      }
    }
    return this._private_id;
  }

  broadcastSessionData(shared_id, private_id){
    const storage_key = this._setSharedId(shared_id);
    if(!storage_key){ return; }
    const private_id_ = this._setPrivateId(private_id);

    const keys_changed = Object.keys(this.sessionData);
    if(!keys_changed.length){
      return;
    }

    const now = new Date();

    // load up from localStorage
    const stored = this.fromLocalStorage(storage_key, true, true);
    stored.last_saved = now;
    stored.last_edit = private_id_;
    stored.inputs_changed = keys_changed;
    for(let k in this.sessionData){
      stored.inputs[k] = this.sessionData[k];
    }
    this._localStorage.setItem(storage_key, JSON.stringify(stored));
    this._localStorage.setItem(this._keyNotification, JSON.stringify({
      "storage_key" : storage_key,
      "private_id": private_id_,
      "last_saved": now
    }));

  }
  broadcastEvent(type, message = {}) {
    const event = new CustomEvent("shidashi-event-" + type, {
      "detail": message
    });
    this._dummy.dispatchEvent(event);
    // also send to shiny
    this.ensureShiny((shiny) => {
      if(typeof(shiny.setInputValue) !== "function"){ return; }
      shiny.setInputValue("@shidashi_event@", {
        type: type,
        message: message,
        shared_id: this._shared_id,
        private_id: this._private_id
      });
    });
  }
  registerListener(type, callback, replace = true) {
    const event_str = "shidashi-event-" + type;
    if(replace){
      const old_function = this._listeners[type];
      if(typeof(old_function) === "function"){
        this._dummy.removeEventListener(event_str, old_function);
      }
    }
    if(typeof(callback) === "function"){
      const cb_ = (evt) => {
        return(callback(evt.detail));
      };
      this._dummy.addEventListener(event_str, cb_);
      this._listeners[type] = cb_;
    }
  }

  _col2Hex(color){
    let col = color.trim();
    if(col.length < 4){ return("#000000"); }
    if(col[0] === "#"){
      if(col.length === 7){ return(col); }
      col = "#"+col[1]+col[1]+col[2]+col[2]+col[3]+col[3];
      return(col);
    }
    let parts = col.match(/rgb[a]{0,1}\((\d+),\s*(\d+),\s*(\d+)[\),]/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16);
      if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    col = '#' + parts.join('');
    return(col);
  }
  _reportTheme(mode){
    if(typeof(mode) !== "string"){
      const isDark = this.isDarkMode();
      mode = isDark ? "dark": "light";
    }
    const $card_body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".card, .info-box");
    let bgcolor = this._col2Hex(this.$body.css("background-color"));
    if($card_body.length){
      bgcolor = this._col2Hex(jquery__WEBPACK_IMPORTED_MODULE_0___default()($card_body[0]).css("background-color"));
    } else if (mode === "dark"){
      bgcolor = "#343a40";
    }
    this.broadcastEvent("theme.changed", {
      mode: mode,
      background: bgcolor,
      foreground: this._col2Hex(this.$body.css("color"))
    });
  }

  notifyIframes(method, args){
    if(this.$iframeWrapper.length){
      const $iframes = this.$iframeWrapper.find("iframe");
      $iframes.each((_, iframe) => {
        try {
          if(iframe.contentWindow.shidashi){
            iframe.contentWindow.shidashi[method](...args);
          }
        } catch (e) {}
      });
    }
  }

  notifyParent(method, args) {
    if(window.parent && window.parent !== window) {
      if( window.parent.shidashi ) {
        window.parent.shidashi[method](...args);
      }
    }
  }

  // status

  // theme-mode
  asLightMode(){
    this.$body.removeClass("dark-mode");
    //this.$aside.removeClass("sidebar-dark-primary")
    //  .addClass("sidebar-light-primary");
    this.$navIfarme.removeClass("navbar-dark")
      .addClass("navbar-light");
    if(this.$iframeWrapper.length){
      this._sessionStorage.setItem(
        this._keyTheme, "light"
      );
      const $iframes = this.$iframeWrapper.find("iframe");
      $iframes.each((_, iframe) => {
        if(iframe.contentWindow.shidashi){
          iframe.contentWindow.shidashi.asLightMode();
        }
      });
    }
    this._reportTheme("light");
  }

  asDarkMode(){

    this.$body.addClass("dark-mode");
    //this.$aside.removeClass("sidebar-light-primary")
    //  .addClass("sidebar-dark-primary");
    this.$navIfarme.removeClass("navbar-light")
      .addClass("navbar-dark");
    if(this.$iframeWrapper.length){
      this._sessionStorage.setItem(
        this._keyTheme, "dark"
      );
      const $iframes = this.$iframeWrapper.find("iframe");
      $iframes.each((_, iframe) => {
        if(iframe.contentWindow.shidashi){
          iframe.contentWindow.shidashi.asDarkMode();
        }
      });
    }
    this._reportTheme("dark");
  }

  resumeStatus(parentShidashi) {
    if(!parentShidashi) {
      return;
    }
    if(parentShidashi._active_module !== this._moduleId){
      return;
    }

    console.debug(`Resuming status - ${ this._moduleId }`);
    // body classes
    this.variableBodyClasses.forEach((cls) => {
      if( this._bodyClasses.contains(cls) ) {
        parentShidashi.addClass("body", cls);
      } else {
        parentShidashi.removeClass("body", cls);
      }
    });

  }

  // Trigger actions
  click(selector) {
    if(!selector || selector === ''){ return; }
    const el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);
    if(!el.length){ return; }
    el.click();
  }

  triggerResize(timeout) {
    if( timeout ){
      setTimeout(() => {
        this.triggerResize();
      }, timeout);
    } else {
      this.$window.trigger("resize");
      this.unbindAll( this._dummy2 );
    }

  }

  // tabset
  tabsetAdd(inputId, title, body, active = true){
    let el = document.getElementById(inputId);
    let elbody = document.getElementById(inputId + "Content");
    if(!el){ return("Cannot find tabset with given settings."); }
    if(!elbody){ return("Cannot find tabset with given settings."); }

    el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);

    // check if title existed
    const existing_items = el.children(".nav-item.nav-tab-header");
    if(existing_items.length){
      const existing_title = existing_items.children(".nav-link")
        .toArray()
        .map((v) => {return( jquery__WEBPACK_IMPORTED_MODULE_0___default()(v).text() );});
      if(existing_title.includes(title)){
        return("A tab with title '" + title + "' already exists.");
      }
    }

    // this._shiny.unbindAll(el);

    const tabId = Math.random().toString(16).substr(2, 8);

    // Create header
    const header_item = document.createElement("li");
    header_item.className = "nav-item nav-tab-header";
    const header_a = document.createElement("a");
    header_a.className = "nav-link";
    header_a.setAttribute("href", `#${ inputId }-${tabId}`);
    header_a.setAttribute("id", `${ inputId }-${tabId}-tab`);
    header_a.setAttribute("data-toggle", "tab");
    header_a.setAttribute("role", "tab");
    header_a.setAttribute("aria-controls", `${ inputId }-${tabId}`);
    header_a.setAttribute("aria-selected", "false");
    // header_a.innerText = title;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(header_a).text( title );

    header_item.appendChild(header_a);

    // add to header

    if(existing_items.length > 0){
      existing_items.last().after(header_item);
    }

    // body
    const body_el = document.createElement("div");
    body_el.className = "tab-pane fade";
    body_el.setAttribute("id", `${ inputId }-${tabId}`);
    body_el.setAttribute("role", "tabpanel");
    // body_el.setAttribute("tab-index", tabId);
    body_el.setAttribute("aria-labelledby", `${ inputId }-${tabId}-tab`);
    body_el.innerHTML = body;
    elbody.appendChild(body_el);


    this.bindAll( jquery__WEBPACK_IMPORTED_MODULE_0___default()(elbody) );

    if(active){
      return(this.tabsetActivate(inputId, title));
    }

    return(true);

  }

  tabsetRemove(inputId, title) {
    let el = document.getElementById(inputId);
    let elbody = document.getElementById(inputId + "Content");
    if(!el){ return("Cannot find tabset with given settings."); }
    if(!elbody){ return("Cannot find tabset with given settings."); }

    el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);

    // check if title existed
    const existing_items = el.children(".nav-item.nav-tab-header");
    if(!existing_items.length) {
      return("Tab with title '" + title + "' cannot be found.");
    }
    el = existing_items.children(".nav-link");
    let activate = false;
    let remove_idx = 0;
    const existing_title = el.toArray()
      .map((v, i) => {
        if( jquery__WEBPACK_IMPORTED_MODULE_0___default()(v).text() === title ) {
          // remove this tab
          remove_idx = i;
          const rem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el[i]);
          const tabid = rem.attr("aria-controls");
          const tab = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + tabid);
          const is_active = rem.attr("aria-selected");
          this.unbindAll( tab );
          rem.parent().remove();
          tab.remove();
          if(is_active === "true"){
            activate = true;
          }
        }
        return( jquery__WEBPACK_IMPORTED_MODULE_0___default()(v).text() );
      });
    if(!existing_title.includes(title)){
      return("A tab with title '" + title + "' cannot be found.");
    }
    if(activate && existing_items.length > 1){
      let active_tab;
      if(remove_idx - 1 >= 0){
        active_tab = existing_items[remove_idx - 1];
      } else {
        active_tab = existing_items[remove_idx + 1];
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(active_tab).children("a.nav-link").click();
    }
    return(true);
  }

  tabsetActivate(inputId, title) {
    let el = document.getElementById(inputId);
    let elbody = document.getElementById(inputId + "Content");
    if(!el){ return("Cannot find tabset with given settings."); }
    if(!elbody){ return("Cannot find tabset with given settings."); }

    el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
    const existing_items = el.children(".nav-item.nav-tab-header");
    if(!existing_items.length) {
      return("Tab with title '" + title + "' cannot be found.");
    }

    let activated = false;
    existing_items.each((_, item) => {
      const link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).children(".nav-link");
      if(link.text() === title){
        link.click();
        activated = true;
      } else {
        link.removeClass("active");
        link.attr("aria-selected", "false");
      }
    });

    if(!activated){
      return("Tab with title '" + title + "' cannot be found.");
    }
    return(true);
  }

  // card, card2, cardset...
  card(args){
    // method: expand, minimize, maximize, ...
    if( !args.method ){ return; }
    if( args.inputId ){
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".card#" + args.inputId).CardWidget(args.method);
    } else if (args.title){
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.card[data-title='${args.title}']`).CardWidget(args.method);
    } else if (args.selector) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.card${args.selector}`).CardWidget(args.method);
    }

  }

  toggleCard2(selector){
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).DirectChat("toggle");
  }

  accordion(args) {
    // method: expand, collapse, toggle
    let $accordionItem;
    if( args.inputId && args.title ){
      $accordionItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.card-accordion#${ args.inputId } .card-accordion-header[data-title='${args.title}']`);
    } else if (args.selector) {
      $accordionItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.card-accordion${args.selector}`);
    }
    if(!$accordionItem || !$accordionItem.length){ return; }

    if( args.method === "expand" ) {
      if( $accordionItem.hasClass("collapsed") ) {
        $accordionItem.click();
      }
    } else if ( args.method === "collapse" ) {
      if( !$accordionItem.hasClass("collapsed") ) {
        $accordionItem.click();
      }
    } else {
      $accordionItem.click();
    }
  }

  flipBox(inputId){
    let el = document.getElementById(inputId);
    if(el && el.classList.contains("flip-box")) {
      if( el.classList.contains("active") ){
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
    }
  }

  // html css operations
  addClass(selector, cls){
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).addClass(cls);
    if( selector.startsWith("body") ) {
      this._bodyClasses = this.$body[0].classList;
    }
  }
  removeClass(selector, cls){
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).removeClass(cls);
    if( selector.startsWith("body") ) {
      this._bodyClasses = this.$body[0].classList;
    }
  }

  setInnerHtml(selector, content) {
    const $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);
    if(!$el.length) { return; }

    this.unbindAll( $el, false );

    $el.html(content);

    this.bindAll( $el, false );
  }

  // notification
  createNotification(options) {
    // see https://adminlte.io/docs/3.1//javascript/toasts.html
    this.$document.Toasts('create', options);
  }

  clearNotification(selector) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector || ".toast").toast("hide");
  }

  // set progressOutput
  setProgress(inputId, value, max = 100, description = null){
    if(typeof(value) !== "number" || isNaN(value)){ return; }
    const el = document.getElementById(inputId);
    if(!el){ return; }

    let v = parseInt(value / max * 100);
    if(v < 0){ v = 0; }
    if(v > 100){ v = 100; }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find(".progress-bar").css("width", `${v}%`);
    if(typeof(description) === "string"){
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el)
        .find(".progress-description.progress-message")
        .text(description);
    }
  }

  // theme-mode
  isDarkMode() {
    return(this.$body.hasClass("dark-mode"));
  }

  // scroller
  makeFancyScroll(selector, options = {}, callbacks = {}) {
    // https://kingsora.github.io/OverlayScrollbars/#!documentation/options
    const dark_mode = this.isDarkMode();

    const className = options.className || (dark_mode ? "os-theme-thin-light" : "os-theme-thin-dark");

    options.className = className;

    const elems = document.querySelectorAll(selector);

    let instances = [];

    const scrollOptions = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(default_scroll_opt, options);

    elems.forEach( el => {
      const instance = (0,overlayscrollbars__WEBPACK_IMPORTED_MODULE_1__.OverlayScrollbars)({
        target: el,
      }, scrollOptions, callbacks);
      instances.push( instance );
    })
    // const instance = $(selector)
    //   .overlayScrollbars($.extend(default_scroll_opt, options))
    //   .overlayScrollbars();

    if( instances.length === 1 ) {
      instances = instances[0];
    }

    return(instances);
  }

  scrollTop(duration = 200) {
    if(this.scroller){
      // FIXME
      // this.scroller.scroll({ y : "0%" }, duration);
    }
  }

  // utils, shiny, ...
  async matchSelector(el, selector, next, strict = false) {
    const $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
    const $els = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);

    if(!$el.length || !$els.length){ return; }

    const el_ = $el[0];

    const els = $els.toArray();
    let item;
    for( let i in els ){
      item = els[i];
      if(item === el_ || (!strict && item.contains(el_))){
        if(typeof(next) === "function"){
          return(next(item));
        } else {
          return(true);
        }
      }
    }
    return;
  }

  shinyHandler(action, callback) {
    if(!this._shiny){
      if( window.Shiny ){
        this._shiny = window.Shiny;
      } else {
        console.error("Cannot find window.Shiny object. Is R-shiny running?");
        return false;
      }
    }
    this._shiny.addCustomMessageHandler("shidashi." + action, callback);
  }

  shinyOn( eventType, callback ) {
    if(!this._shiny){
      if( window.Shiny ){
        this._shiny = window.Shiny;
      } else {
        console.error("Cannot find window.Shiny object. Is R-shiny running?");
        return false;
      }
    }

    this.$document.on( eventType, ( event ) => {
      callback( event );
    })
  }

  shinySetInput(inputId, value, add_timestamp = true, children = false) {
    this.ensureShiny((shiny) => {
      if( add_timestamp ){
        value.timestamp = new Date();
      }
      value._active_module = this._active_module;
      value.parent_frame = this.$body.hasClass("parent-frame");
      shiny.setInputValue(inputId, value);

      console.debug(`[${this._private_id}] shiny input [${inputId}] <- ${ JSON.stringify(value) }`);

      if(children){

        if(this.$iframeWrapper.length){
          const $iframes = this.$iframeWrapper.find("iframe");

          const f = (shidashi) => {
            shidashi.ensureShiny((shiny) => {
              if( shiny.shinyapp.$socket ) {
                shiny.setInputValue(inputId, value);
              }
            });
          };

          $iframes.each((_, iframe) => {
            // maybe restricted due to CORS
            try {
              /* code */
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(iframe.contentDocument).ready(() => {
                if(iframe.contentWindow.shidashi){
                  f(iframe.contentWindow.shidashi);
                }
              });
            } catch (e) {}
          });
        }

      }

    });
  }

  shinyResetOutput(outputId, message = ""){
    const el = document.getElementById(outputId);
    if(el && el.parentElement){
      this.ensureShiny(() => {
        const $pa_el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el.parentElement);
        Object.keys(this._shiny.outputBindings.bindingNames).forEach((key) => {
          const binding = shidashi._shiny.outputBindings.bindingNames[key].binding;
          if(binding && typeof binding === "function") {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(binding.find($pa_el)).each((_, el2) => {
              if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el2)[0].id === el.id){

                binding.renderError(el, {
                  message: message,
                  type: "shiny-output-error-shiny.silent.error shiny-output-error-validation"
                });

              }
            });
          }

        });
      });
    }

  }

  // Finalize function when document is ready
  _finalize_initialization(){
    if(this._initialized){ return; }
    this._initialized = true;
    const _this = this;

    // set theme first
    const theme = this._sessionStorage.getItem(this._keyTheme);
    if( theme === "light" ){
      this.asLightMode();
    } else if( theme === "dark"){
      this.asDarkMode();
    }

    // scroll-top widget
    const gotop_el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".back-to-top,.ravedash-back-to-top");
    const gotop_btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".back-to-top .btn-go-top,.ravedash-back-to-top .btn-go-top");
    const root_btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".back-to-top .dropdown-toggle,.ravedash-back-to-top .dropdown-toggle");
    const menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".back-to-top .dropdown-menu,.ravedash-back-to-top .dropdown-menu");
    const anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".shidashi-anchor");

    // Scroll-top widgets
    anchors.each((_, item) => {
      const $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item);
      let item_id = $item.attr("id");
      if( typeof(item_id) !== "string" ){
        item_id = $item.text().replace(/[^a-zA-Z0-9_-]/gi, '-').replace(/(--)/gi, '');
        item_id = "shidashi-anchor-id-" + item_id;
        $item.attr("id", item_id);
      }
      const el = document.createElement("a");
      el.className = "dropdown-item";
      el.href = "#" + item_id;
      if(item.textContent) {
        el.innerText = item.textContent.trim();
      } else {
        el.innerText = item.innerText.trim();
      }
      menu.append( el );
    });
    root_btn.mouseenter(() => {
      if(root_btn.attr("aria-expanded") === "false"){
        root_btn.dropdown("toggle");
        menu.addClass("show");
        root_btn.attr("aria-expanded", "true");
      }
    });
    gotop_el.mouseleave(() => {
      if(root_btn.attr("aria-expanded") === "true"){
        root_btn.dropdown("toggle");
        menu.removeClass("show");
        root_btn.attr("aria-expanded", "false");
      }
    });

    gotop_btn.click(() => { this.scrollTop() });

    // --------------- Triggers resize -------------------------
    this.$document.on('expanded.lte.cardwidget', (evt) => {

      if(evt.target){
        const card = jquery__WEBPACK_IMPORTED_MODULE_0___default()(evt.target).parents(".card.start-collapsed");

        if(card.length > 0){

          setTimeout(() => {
            this.unbindAll( card );
            card.removeClass("start-collapsed");
            this.bindAll( card );
          }, 200);

        }
      }
      this.triggerResize(50);

    });
    this.$document.on('maximized.lte.cardwidget', () => {
      this.$body.addClass("card-expanded");
      this.triggerResize(50);
    });
    this.$document.on('minimized.lte.cardwidget', () => {
      this.$body.removeClass("card-expanded");
      this.triggerResize(50);
    });
    this.$document.on("loaded.lte.cardrefresh", () => {
      this.triggerResize(50);
    });

    this.$body.on("show.bs.tab", (evt) => {
      if(evt.type !== "show") { return; }
      const el = evt.target;
      const pa = el.parentNode.closest('.card-tabs [role="tablist"]');

      if(!pa || !pa.id) { return; }
      const tabname = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).text();

      this.ensureShiny(() => {
        this._shiny.setInputValue(pa.id, tabname);
      });
    })


    // -------------- Documentation ready hook !!! ------------
    this.$document.ready(() => {
      this.ensureShiny((shiny) => {

        // report active tab to shiny
        const $tabLists = jquery__WEBPACK_IMPORTED_MODULE_0___default()( '.card-tabs [role="tablist"]' );
        for( let ii = 0; ii < $tabLists.length; ii++ ) {
          const pa = $tabLists[ ii ];
          if(pa && pa.id) {
            const activeTab = pa.querySelector("li.nav-item > .nav-link.active");
            if( activeTab ) {
              shiny.setInputValue(pa.id, jquery__WEBPACK_IMPORTED_MODULE_0___default()(activeTab).text());
            }
          }
        }


      });
    });

    this._dummy2.addEventListener("shidashi-internal-event", (evt) => {
      window.eeevt = evt;
      if( !evt.detail || typeof evt.detail !== "object" || !evt.detail.type ) { return; }

      switch (evt.detail.type) {
        case "set this._raveId":
          const $output_widgets = jquery__WEBPACK_IMPORTED_MODULE_0___default()( '.ravedash-output-widget[data-type="standalone"]' );
          for( let ii = 0 ; ii < $output_widgets.length ; ii++ ) {
            const el = $output_widgets[ ii ];
            let outputId = el.getAttribute("data-target");
            if( typeof outputId === "string" ) {
              if( outputId.startsWith(this._moduleId + "-") ) {
                outputId = outputId.replace(this._moduleId + "-", "");
              }
              if( outputId.length > 0 ) {
                const url = `?output_id=${ outputId }&rave_id=${ this._raveId }&module=standalone_viewer`;
                el.setAttribute("href", url);
                el.setAttribute("target", "_blank");
              }
            }
          }
          break;
        default:
      }
    });

    // --------------- Notification system -----------
    this.$body.on('show.bs.toast', (evt)=>{
      this.bindAll( jquery__WEBPACK_IMPORTED_MODULE_0___default()(evt.target) );
    });
    this.$body.on('hide.bs.toast', (evt)=>{
      this.unbindAll( jquery__WEBPACK_IMPORTED_MODULE_0___default()(evt.target) );
    });

    // --------------- Fancy scroll ---------------
    this.makeFancyScroll(".fancy-scroll-y:not(.overflow-hidden,.screen-height), .overflow-y-auto", {
        overflow : {
            x : "hidden",
            y : "scroll"
        }
      });

    this.makeFancyScroll(
      ".screen-height.overflow-y-scroll",
      {
        overflow : {
            x : "hidden",
            y : "scroll"
        }
      },
      {
        scroll: ( instance, event ) => {
          this._mainScrollCallback( instance );
        }
      }
    );


    this.makeFancyScroll(
      ".resize-vertical",
      {
        resize: "vertical",
        overflow : {
            x : "hidden",
            y : "scroll"
        },
      },
      {
        updated: (() => {
          let sizeChanged = 0;
          return ( instance, args ) => {
            if( args && args.updateHints.sizeChanged ) {
              let sizeChanged_ = sizeChanged + 1;
              sizeChanged = sizeChanged_;
              setTimeout(() => {
                if( sizeChanged === sizeChanged_ ) {
                  sizeChanged = 0;
                  this.triggerResize();
                }
              }, 300);
            }
          };
        })()
      }
    );
    this.makeFancyScroll(
      ".fancy-scroll-x",
      {
        overflow : {
          x : "scroll",
          y : "hidden"
        }
      }
    );
    this.makeFancyScroll(
      ".fancy-scroll, .overflow-auto",
      {
        overflow : {
          x : "scroll",
          y : "scroll"
        }
      }
    );

    // register listener
    window.addEventListener('storage', (evt) => {
        if(evt.key !== this._keyNotification){ return; }

        const storage_key = this._storage_key;
        const private_id = this._private_id;

        if(!storage_key || !private_id){ return; }

        // When local storage changes
        try {
          const item = JSON.parse(this._localStorage.getItem(this._keyNotification));
          const last_saved = new Date(item.last_saved);
          if(new Date() - last_saved < this._storageDuration){
            if(item.storage_key === storage_key) {
              if(private_id !== item.private_id){
                this.ensureShiny((shiny) => {
                  shiny.onInputChange("@shidashi@", this._localStorage.getItem(storage_key));
                });
              }
            }
          }
        } catch (e) {}
      });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".theme-switch-wrapper .theme-switch input[type='checkbox']")
      .change((_) => {
        if(this.isDarkMode()){
          this.asLightMode();
        } else {
          this.asDarkMode();
        }
      });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".shidashi-button").click(function(_){
      let el = this;
      let action = el.getAttribute('shidashi-action');
      if(typeof action === "string"){
        action = JSON.parse(action);
        if( typeof action.method === "string" &&
            typeof _this[action.method] === "function" ){
          _this[action.method].apply(_this, action.args);
        }
      }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.rave-button').click(function(evt){
      let el = this;
      try {
        // If the rave-button is removed from classlist, then do nothing
        if( !el.classList.contains("rave-button") ) { return; }
      } catch (e) {}
      let action = el.getAttribute("rave-action");
      if(typeof action === "string"){
        try {
          action = JSON.parse(action);

          if( typeof action.type !== "string" ) {
            console.warn("Cannot parse RAVE-action: " + action);
            return;
          }
          // check if body has parent-frame class
          _this.shinySetInput("@rave_action@", {
            type: action.type,
            details: action,
            element_class: evt.target.className
          }, true, true);

        } catch (e) {
          console.warn("Cannot parse RAVE-action: " + action);
        }
      }
    });

    this.$document.on("click", (evt) => {

      this.matchSelector(
        evt.target,
        '.card-tools .btn-tool[data-card-widget="refresh"]',
        () => {
          this.triggerResize(50);
        }
      );


      this.matchSelector(
        evt.target,
        '.ravedash-output-widget[data-type="standalone"]',
        (el) => {
          if( el.getAttribute("href") === "#" ) {
            let outputId = el.getAttribute("data-target");
            if( outputId.startsWith(this._moduleId + "-") ) {
              outputId = outputId.replace(this._moduleId + "-", "");
            }
            this.launchStandaloneViewer(outputId);
          }
        }
      );

      this.matchSelector(
        evt.target,
        '.card-tools .btn-tool[data-card-widget="flip"]',
        (el) => {
          const $card = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents(".card");
          if(!$card.length){ return; }
          jquery__WEBPACK_IMPORTED_MODULE_0___default()($card[0]).find(".card-body .flip-box").toggleClass("active");
        }
      );

      this.matchSelector(
        evt.target,
        '.toggle-advance-options',
        (el) => {
          const $card = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).parents(".card");
          if(!$card.length){ return; }
          jquery__WEBPACK_IMPORTED_MODULE_0___default()($card[0]).find(".rave-optional").toggleClass("soft-hidden");
        }
      );

    });

    this.$document.on("dblclick", (evt) => {

      this.matchSelector(
        evt.target,
        '.flip-box',
        (item) => {
          const $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item);
          const action = $el.attr("data-toggle");
          if(action === "click"){
            $el.toggleClass("active");
          } else if (action === "click-front"){
            $el.addClass("active");
          }
        }
      );

    });

    this.$document.on("keydown", (evt) => {
      if(evt.key === "Enter" && (evt.ctrlKey || evt.metaKey)) {
        evt.preventDefault();
        this.shinySetInput("@rave_action@", {
          type: "run_analysis"
        }, true, true);
      }
    });

  }

  _register_shiny() {
    if(!this._shiny){
      if( window.Shiny ){
        this._shiny = window.Shiny;
      } else {
        console.error("Cannot find window.Shiny object. Is R-shiny running?");
        return false;
      }
    }
    if(this._shiny_registered) { return; }
    this._shiny_registered = true;

    this.shinyHandler("set_current_module", (params) => {
      this._moduleId = params.module_id;
      this._raveId = params.rave_id;
      this._dummy2.dispatchEvent(new CustomEvent("shidashi-internal-event", {
        "detail": {
          "type" : "set this._raveId",
          "value": params.rave_id
        }
      }))
    });

    this.shinyHandler("click", (params) => {
      this.click(params.selector);
    });
    this.shinyHandler("box_flip", (params) => {
      this.flipBox(params.inputId);
    });

    this.shinyHandler("card_tabset_insert", (params) => {
      const added = this.tabsetAdd( params.inputId, params.title,
                                    params.body, params.active );
      if(params.notify_on_failure === true && added !== true){
        this.createNotification({
          "autohide": true,
          "delay" : 2000,
          "title" : "Cannot create new tab",
          "body"  : added,
          "class" : "bg-warning"
        });
      }
    });
    this.shinyHandler("card_tabset_remove", (params) => {
      const removed = this.tabsetRemove( params.inputId, params.title );
      if(params.notify_on_failure === true && removed !== true){
        this.createNotification({
          "autohide": true,
          "delay" : 2000,
          "title" : "Cannot remove tab " + params.title,
          "body"  : removed,
          "class" : "bg-warning"
        });
      }
    });
    this.shinyHandler("card_tabset_activate", (params) => {
      const activated = this.tabsetActivate( params.inputId, params.title );
      if(params.notify_on_failure === true && activated !== true){
        this.createNotification({
          "autohide": true,
          "delay" : 2000,
          "title" : "Cannot activate tab " + params.title,
          "body"  : activated,
          "class" : "bg-warning"
        });
      }
    });

    this.shinyHandler("cardwidget", (params) => {
      this.card(params);
    });
    this.shinyHandler("card2widget", (params) => {
      this.toggleCard2(params.selector);
    });
    this.shinyHandler("accordion", (params) => {
      this.accordion(params);
    });

    this.shinyHandler("add_class", (params) => {
      this.addClass(params.selector, params.class);
    });
    this.shinyHandler("remove_class", (params) => {
      this.removeClass(params.selector, params.class);
    });
    this.shinyHandler("set_html", (params) => {
      this.setInnerHtml(params.selector, params.content);
    });

    this.shinyHandler("show_notification", (params) => {
      this.createNotification(params);
    });
    this.shinyHandler("clear_notification", (params) => {
      this.clearNotification(params.selector);
    });

    this.shinyHandler("set_progress", (params) => {
      this.setProgress(params.outputId, params.value,
        params.max || 100, params.description);
    });

    this.shinyHandler("make_scroll_fancy", (params) => {
      if(!params.selector || params.selector === ''){ return; }
      this.makeFancyScroll(
        params.selector,
        params.options || {}
      );
    });

    this.shinyHandler("cache_session_input", (params) => {
      this.sessionData = params.inputs;
      this.broadcastSessionData(params.shared_id, params.private_id);
    });

    this.shinyHandler("get_theme", (_) => {
      this._reportTheme();
    });

    this.shinyHandler("reset_output", (params) => {
      this.shinyResetOutput(params.outputId, params.message || "");
    });

    this.shinyHandler("hide_header", (params) => {
      this.addClass("body", "navbar-hidden");
      this.notifyParent("addClass", [
        "body", "navbar-hidden"
      ])
    });
    this.shinyHandler("show_header", (params) => {
      this.removeClass("body", "navbar-hidden");
      this.notifyParent("removeClass", [
        "body", "navbar-hidden"
      ])
    });

    this.shinyHandler("shutdown_session", (params) => {
      console.log("Shutting down RAVE...")
      window.close();
    });

    this.shinyHandler("open_url", (params) => {
      if(
        params && typeof params === "object" &&
        typeof params.url === "string" ) {

        const target = params.target || "_blank";
        this.openURL(params.url, "_blank");
      }

    });

    this.shinyHandler("open_iframe_tab", (params) => {
      if(
        params && typeof params === "object" &&
        typeof params.url === "string" ) {

        const title = params.title || "Untitled";
        const target = params.target || "_blank";
        const more = params.more || {};
        this.openIFrameTab(params.url, title, target, more);
      }

    });


    this.shinyOn("shiny:idle", (e) => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".toast.hide-on-shiny-idle").toast("hide");
    })




    // keep alive
    /*let alive_counter = 0;
    const keep_alive = () => {
      if( this._keep_alive ) {
        alive_counter++;
        this._shiny.setInputValue(".__shidashi_keep_alive_signal__.", alive_counter);
      }
      // send signal to R session every other 25 seconds
      setTimeout(keep_alive, 25000);
    };
    keep_alive();
    */

  }
}





/***/ }),

/***/ "./src/js/import-highlightjs.js":
/*!**************************************!*\
  !*** ./src/js/import-highlightjs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerHighlightJS": () => (/* binding */ registerHighlightJS)
/* harmony export */ });
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/es/core.js");
/* harmony import */ var highlight_js_lib_languages_matlab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/matlab */ "./node_modules/highlight.js/es/languages/matlab.js");
/* harmony import */ var highlight_js_lib_languages_python__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/python */ "./node_modules/highlight.js/es/languages/python.js");
/* harmony import */ var highlight_js_lib_languages_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/yaml */ "./node_modules/highlight.js/es/languages/yaml.js");
/* harmony import */ var highlight_js_lib_languages_r__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/r */ "./node_modules/highlight.js/es/languages/r.js");
/* harmony import */ var highlight_js_lib_languages_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/lib/languages/markdown */ "./node_modules/highlight.js/es/languages/markdown.js");







// import 'highlight.js/styles/github.css';


function registerHighlightJS () {
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('python', highlight_js_lib_languages_python__WEBPACK_IMPORTED_MODULE_2__["default"]);
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('py', highlight_js_lib_languages_python__WEBPACK_IMPORTED_MODULE_2__["default"]);
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('matlab', highlight_js_lib_languages_matlab__WEBPACK_IMPORTED_MODULE_1__["default"]);
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('r', highlight_js_lib_languages_r__WEBPACK_IMPORTED_MODULE_4__["default"]);
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('yaml', highlight_js_lib_languages_yaml__WEBPACK_IMPORTED_MODULE_3__["default"]);
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('markdown', highlight_js_lib_languages_markdown__WEBPACK_IMPORTED_MODULE_5__["default"]);
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('md', highlight_js_lib_languages_markdown__WEBPACK_IMPORTED_MODULE_5__["default"]);

  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].initHighlightingOnLoad();
  if (document.readyState && document.readyState === "complete") {
    window.setTimeout(function() { highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].initHighlighting(); }, 0);
  }
}





/***/ }),

/***/ "./src/js/shiny-clipboard.js":
/*!***********************************!*\
  !*** ./src/js/shiny-clipboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerClipboardOutput": () => (/* binding */ registerClipboardOutput)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);



function registerClipboardOutput(Shiny, shidashi) {
  const clipboardOutputBinding = new Shiny.OutputBinding();
  const clsName = "shidashi-clipboard-output";
  clipboardOutputBinding.name = "shidashi.clipboardOutputBinding";

  jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(clipboardOutputBinding, {
    find: function(scope) {
      const $scope = jquery__WEBPACK_IMPORTED_MODULE_0___default()(scope);
      const re = [];

      $scope.each((i, el) => {
        const $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
        if( $el.hasClass( clsName ) ) {
          re.push(el);
        } else {
          $el.find( `.${ clsName }` ).each( re.push );
        }
      })

      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(re);
    },
    renderValue: function(el, value) {
      let el_ = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      if(!el_.hasClass("clipboard-btn")){
        el_ = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find(".clipboard-btn");
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el_).attr("data-clipboard-text", value);
    },
    renderError: function(el, err) {
      let el_ = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      if(!el_.hasClass("clipboard-btn")){
        el_ = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find(".clipboard-btn");
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el_).attr("data-clipboard-text", "Error: " + err.message);
    }
  });

  Shiny.outputBindings.register(clipboardOutputBinding, "shidashi.clipboardOutputBinding");

  Shiny.bindAll(".shidashi-clipboard-output");

  // No need to re-register because they use delegation
  new (clipboard__WEBPACK_IMPORTED_MODULE_1___default())(".clipboard-btn").on('success', function(e) {
    shidashi.createNotification({
      title : "Copied to clipboard",
      delay: 1000,
      autohide: true,
      icon: "fa fas fa-copy",
      "class" : "bg-success",
      "body"  : e.text
    });
    e.clearSelection();
  });
}




/***/ }),

/***/ "./src/js/shiny-progress.js":
/*!**********************************!*\
  !*** ./src/js/shiny-progress.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerProgressOutput": () => (/* binding */ registerProgressOutput)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function registerProgressOutput(Shiny) {
  const progressOutputBinding = new Shiny.OutputBinding();
  const clsName = "shidashi-progress-output";
  progressOutputBinding.name = "shidashi.progressOutputBinding";

  jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(progressOutputBinding, {
    find: function(scope) {
      const $scope = jquery__WEBPACK_IMPORTED_MODULE_0___default()(scope);
      const re = [];

      $scope.each((i, el) => {
        const $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
        if( $el.hasClass( clsName ) ) {
          re.push(el);
        } else {
          $el.find( `.${ clsName }` ).each( re.push );
        }
      })

      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(re);
    },
    renderValue: function(el, value) {
      let v = parseInt(value.value);
      if(isNaN(v)){ return; }
      if(v < 0){ v = 0; }
      if(v > 100){ v = 100; }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find(".progress-bar").css("width", `${v}%`);
      if(typeof(value.description) === "string"){
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el)
          .find(".progress-description.progress-message")
          .text(value.description);
      }
    },
    renderError: function(el, err) {
      if(err.message === "argument is of length zero"){
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass("shidashi-progress-error");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find(".progress-bar").css("width", "0%");
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el)
          .addClass("shidashi-progress-error")
          .find(".progress-description.progress-error")
          .text(err.message);
      }
    },
    clearError: function(el) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass("shidashi-progress-error");
    }
  });
  Shiny.outputBindings.register(
    progressOutputBinding,
    "shidashi.progressOutputBinding");

  // BindAll outputs since the outputs are registered after shiny connection
  Shiny.bindAll(".shidashi-progress-output");
}




/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ }),

/***/ "./node_modules/highlight.js/lib/core.js":
/*!***********************************************!*\
  !*** ./node_modules/highlight.js/lib/core.js ***!
  \***********************************************/
/***/ ((module) => {

var deepFreezeEs6 = {exports: {}};

function deepFreeze(obj) {
    if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function () {
            throw new Error('map is read-only');
        };
    } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function () {
            throw new Error('set is read-only');
        };
    }

    // Freeze self
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach(function (name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop == 'object' && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });

    return obj;
}

deepFreezeEs6.exports = deepFreeze;
deepFreezeEs6.exports.default = deepFreeze;

var deepFreeze$1 = deepFreezeEs6.exports;

/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */
/** @typedef {import('highlight.js').CompiledMode} CompiledMode */
/** @implements CallbackResponse */

class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
    this.isMatchIgnored = false;
  }

  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit$1(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{kind?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  return !!node.kind;
};

/**
 *
 * @param {string} name
 * @param {{prefix:string}} options
 */
const expandScopeName = (name, { prefix }) => {
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...(pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`))
    ].join(" ");
  }
  return `${prefix}${name}`;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    let scope = node.kind;
    if (node.sublanguage) {
      scope = `language-${scope}`;
    } else {
      scope = expandScopeName(scope, { prefix: this.classPrefix });
    }
    this.span(scope);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */
/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */
/** @typedef {import('highlight.js').Emitter} Emitter */
/**  */

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} kind */
  openNode(kind) {
    /** @type Node */
    const node = { kind, children: [] };
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addKeyword(text, kind)
  - addText(text)
  - addSublanguage(emitter, subLanguageName)
  - finalize()
  - openNode(kind)
  - closeNode()
  - closeAllNodes()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   * @param {string} kind
   */
  addKeyword(text, kind) {
    if (text === "") { return; }

    this.openNode(kind);
    this.addText(text);
    this.closeNode();
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    node.kind = name;
    node.sublanguage = true;
    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function anyNumberOfTimes(re) {
  return concat('(?:', re, ')*');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(?:', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * @param { Array<string | RegExp | Object> } args
 * @returns {object}
 */
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];

  if (typeof opts === 'object' && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}

/** @typedef { {capture?: boolean} } RegexEitherOptions */

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
 * @returns {string}
 */
function either(...args) {
  /** @type { object & {capture?: boolean} }  */
  const opts = stripOptionsFromArgs(args);
  const joined = '('
    + (opts.capture ? "" : "?:")
    + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp | string} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

// **INTERNAL** Not intended for outside usage
// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {{joinWith: string}} opts
 * @returns {string}
 */
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;

  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = '';

    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        out += '\\' + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    return out;
  }).map(re => `(${re})`).join(joinWith);
}

/** @typedef {import('highlight.js').Mode} Mode */
/** @typedef {import('highlight.js').ModeCallback} ModeCallback */

// Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit$1({
    scope: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  scope: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  scope: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit$1(
    {
      scope: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push({
    scope: 'doctag',
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/, // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/ // allow capitalized words at beginning of sentences
  );
  // looking like plain text, more likely to be a comment
  mode.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---

      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827

      begin: concat(
        /[ ]+/, // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        '(',
        ENGLISH_WORD,
        /[.]?[:]?([.][ ]|[ ])/,
        '){3}') // look for 3 words in a row
    }
  );
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  scope: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  scope: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  scope: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const REGEXP_MODE = {
  // this outer rule makes sure we actually have a WHOLE regex and not simply
  // an expression such as:
  //
  //     3 / something
  //
  // (which will then blow up when regex's `illegal` sees the newline)
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    scope: 'regexp',
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  scope: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  scope: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: MATCH_NOTHING_RE,
    IDENT_RE: IDENT_RE,
    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
    NUMBER_RE: NUMBER_RE,
    C_NUMBER_RE: C_NUMBER_RE,
    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
    RE_STARTERS_RE: RE_STARTERS_RE,
    SHEBANG: SHEBANG,
    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
    APOS_STRING_MODE: APOS_STRING_MODE,
    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
    COMMENT: COMMENT,
    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
    NUMBER_MODE: NUMBER_MODE,
    C_NUMBER_MODE: C_NUMBER_MODE,
    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
    REGEXP_MODE: REGEXP_MODE,
    TITLE_MODE: TITLE_MODE,
    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
    METHOD_GUARD: METHOD_GUARD,
    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
});

/**
@typedef {import('highlight.js').CallbackResponse} CallbackResponse
@typedef {import('highlight.js').CompilerExt} CompilerExt
*/

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}

/**
 *
 * @type {CompilerExt}
 */
function scopeClassName(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.className !== undefined) {
    mode.scope = mode.className;
    delete mode.className;
  }
}

/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfHasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;

  // prevents double relevance, the keywords themselves provide
  // relevance, the mode doesn't need to double it
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 0;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// allow beforeMatch to act as a "qualifier" for the match
// the full match begin must be [beforeMatch][begin]
const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch) return;
  // starts conflicts with endsParent which we need to make sure the child
  // rule is not matched multiple times
  if (mode.starts) throw new Error("beforeMatch cannot be used with starts");

  const originalMode = Object.assign({}, mode);
  Object.keys(mode).forEach((key) => { delete mode[key]; });

  mode.keywords = originalMode.keywords;
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
  mode.starts = {
    relevance: 0,
    contains: [
      Object.assign(originalMode, { endsParent: true })
    ]
  };
  mode.relevance = 0;

  delete originalMode.beforeMatch;
};

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

const DEFAULT_KEYWORD_SCOPE = "keyword";

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
  /** @type KeywordDict */
  const compiledKeywords = Object.create(null);

  // input can be a string of keywords, an array of keywords, or a object with
  // named keys representing scopeName (which can then point to a string or array)
  if (typeof rawKeywords === 'string') {
    compileList(scopeName, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(scopeName) {
      // collapse all our objects back into the parent object
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName)
      );
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} scopeName
   * @param {Array<string>} keywordList
   */
  function compileList(scopeName, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @type {Record<string, boolean>}
 */
const seenDeprecations = {};

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  if (seenDeprecations[`${version}/${message}`]) return;

  console.log(`Deprecated as of ${version}. ${message}`);
  seenDeprecations[`${version}/${message}`] = true;
};

/* eslint-disable no-throw-literal */

/**
@typedef {import('highlight.js').CompiledMode} CompiledMode
*/

const MultiClassError = new Error();

/**
 * Renumbers labeled scope names to account for additional inner match
 * groups that otherwise would break everything.
 *
 * Lets say we 3 match scopes:
 *
 *   { 1 => ..., 2 => ..., 3 => ... }
 *
 * So what we need is a clean match like this:
 *
 *   (a)(b)(c) => [ "a", "b", "c" ]
 *
 * But this falls apart with inner match groups:
 *
 * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
 *
 * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
 * What needs to happen is the numbers are remapped:
 *
 *   { 1 => ..., 2 => ..., 5 => ... }
 *
 * We also need to know that the ONLY groups that should be output
 * are 1, 2, and 5.  This function handles this behavior.
 *
 * @param {CompiledMode} mode
 * @param {Array<RegExp | string>} regexes
 * @param {{key: "beginScope"|"endScope"}} opts
 */
function remapScopeNames(mode, regexes, { key }) {
  let offset = 0;
  const scopeNames = mode[key];
  /** @type Record<number,boolean> */
  const emit = {};
  /** @type Record<number,string> */
  const positions = {};

  for (let i = 1; i <= regexes.length; i++) {
    positions[i + offset] = scopeNames[i];
    emit[i + offset] = true;
    offset += countMatchGroups(regexes[i - 1]);
  }
  // we use _emit to keep track of which match groups are "top-level" to avoid double
  // output from inside match groups
  mode[key] = positions;
  mode[key]._emit = emit;
  mode[key]._multi = true;
}

/**
 * @param {CompiledMode} mode
 */
function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin)) return;

  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
    error("beginScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.begin, { key: "beginScope" });
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
}

/**
 * @param {CompiledMode} mode
 */
function endMultiClass(mode) {
  if (!Array.isArray(mode.end)) return;

  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.endScope !== "object" || mode.endScope === null) {
    error("endScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.end, { key: "endScope" });
  mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
}

/**
 * this exists only to allow `scope: {}` to be used beside `match:`
 * Otherwise `beginScope` would necessary and that would look weird

  {
    match: [ /def/, /\w+/ ]
    scope: { 1: "keyword" , 2: "title" }
  }

 * @param {CompiledMode} mode
 */
function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
    mode.beginScope = mode.scope;
    delete mode.scope;
  }
}

/**
 * @param {CompiledMode} mode
 */
function MultiClass(mode) {
  scopeSugar(mode);

  if (typeof mode.beginScope === "string") {
    mode.beginScope = { _wrap: mode.beginScope };
  }
  if (typeof mode.endScope === "string") {
    mode.endScope = { _wrap: mode.endScope };
  }

  beginMultiClass(mode);
  endMultiClass(mode);
}

/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
*/

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @returns {CompiledLanguage}
 */
function compileLanguage(language) {
  /**
   * Builds a regex with the case sensitivity of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm'
      + (language.case_insensitive ? 'i' : '')
      + (language.unicodeRegex ? 'u' : '')
      + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: '|' }), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.isCompiled) return cmode;

    [
      scopeClassName,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.isCompiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
      // we need a copy because keywords might be compiled multiple times
      // so we can't go deleting $pattern from the original on the first
      // pass
      mode.keywords = Object.assign({}, mode.keywords);
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }
    keywordPattern = keywordPattern || /\w+/;

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(cmode.begin);
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(cmode.end);
      cmode.terminatorEnd = source(cmode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit$1(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit$1(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit$1(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "11.5.1";

class HTMLInjectionError extends Error {
  constructor(reason, html) {
    super(reason);
    this.name = "HTMLInjectionError";
    this.html = html;
  }
}

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').CompiledScope} CompiledScope
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSApi} HLJSApi
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').PluginEvent} PluginEvent
@typedef {import('highlight.js').HLJSOptions} HLJSOptions
@typedef {import('highlight.js').LanguageFn} LanguageFn
@typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
@typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
@typedef {import('highlight.js/private').MatchType} MatchType
@typedef {import('highlight.js/private').KeywordData} KeywordData
@typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
@typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
@typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
@typedef {import('highlight.js').HighlightOptions} HighlightOptions
@typedef {import('highlight.js').HighlightResult} HighlightResult
*/


const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    cssSelector: 'pre code',
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrLanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrLanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
    } else {
      // old API
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrLanguageName;
      code = optionsOrCode;
    }

    // https://github.com/highlightjs/highlight.js/issues/3149
    // eslint-disable-next-line no-undefined
    if (ignoreIllegals === undefined) { ignoreIllegals = true; }

    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    const keywordHits = Object.create(null);

    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {string} matchText - the textual match
     * @returns {KeywordData | false}
     */
    function keywordData(mode, matchText) {
      return mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
        const data = keywordData(top, word);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          keywordHits[word] = (keywordHits[word] || 0) + 1;
          if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            // _ implied for relevance only, do not highlight
            // by applying a class name
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitter.addKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substr(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result._top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.addSublanguage(result._emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {CompiledScope} scope
     * @param {RegExpMatchArray} match
     */
    function emitMultiClass(scope, match) {
      let i = 1;
      const max = match.length - 1;
      while (i <= max) {
        if (!scope._emit[i]) { i++; continue; }
        const klass = language.classNameAliases[scope[i]] || scope[i];
        const text = match[i];
        if (klass) {
          emitter.addKeyword(text, klass);
        } else {
          modeBuffer = text;
          processKeywords();
          modeBuffer = "";
        }
        i++;
      }
    }

    /**
     * @param {CompiledMode} mode - new mode to start
     * @param {RegExpMatchArray} match
     */
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        // beginScope just wraps the begin match itself in a scope
        if (mode.beginScope._wrap) {
          emitter.addKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
          modeBuffer = "";
        } else if (mode.beginScope._multi) {
          // at this point modeBuffer should just be the match
          emitMultiClass(mode.beginScope, match);
          modeBuffer = "";
        }
      }

      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexes to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.isMatchIgnored) return doIgnore(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode, match);
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substr(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (top.endScope && top.endScope._wrap) {
        processBuffer();
        emitter.addKeyword(lexeme, top.endScope._wrap);
      } else if (top.endScope && top.endScope._multi) {
        processBuffer();
        emitMultiClass(top.endScope, match);
      } else if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.scope) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        startNewMode(endMode.starts, match);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error(`0 width match regex (${languageName})`);
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  An potential end match that was
      triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
      (this could be because a callback requests the match be ignored, etc)

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language);
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      top.matcher.considerAll();

      for (;;) {
        iterations++;
        if (resumeScanAtSamePosition) {
          // only regexes not matched previously will now be
          // considered for a potential match
          resumeScanAtSamePosition = false;
        } else {
          top.matcher.considerAll();
        }
        top.matcher.lastIndex = index;

        const match = top.matcher.exec(codeToHighlight);
        // console.log("match", match[0], match.rule && match.rule.begin)

        if (!match) break;

        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substr(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();

      return {
        language: languageName,
        value: result,
        relevance: relevance,
        illegal: false,
        _emitter: emitter,
        _top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index: index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options.__emitter(options)
    };
    result._emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - secondBest (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.secondBest = secondBest;

    return result;
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = (currentLang && aliases[currentLang]) || resultLang;

    element.classList.add("hljs");
    element.classList.add(`language-${language}`);
  }

  /**
   * Applies highlighting to a DOM node containing code.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightElement(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    fire("before:highlightElement",
      { el: element, language: language });

    // we should be all text, no child nodes (unescaped HTML) - this is possibly
    // an HTML injection attack - it's likely too late if this is already in
    // production (the code has likely already done its damage by the time
    // we're seeing it)... but we yell loudly about this so that hopefully it's
    // more likely to be caught in development before making it to production
    if (element.children.length > 0) {
      if (!options.ignoreUnescapedHTML) {
        console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
        console.warn("The element with unescaped HTML:");
        console.warn(element);
      }
      if (options.throwUnescapedHTML) {
        const err = new HTMLInjectionError(
          "One of your code blocks includes unescaped HTML.",
          element.innerHTML
        );
        throw err;
      }
    }

    node = element;
    const text = node.textContent;
    const result = language ? highlight(text, { language, ignoreIllegals: true }) : highlightAuto(text);

    element.innerHTML = result.value;
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relevance: result.relevance
    };
    if (result.secondBest) {
      element.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      };
    }

    fire("after:highlightElement", { el: element, result, text });
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    options = inherit(options, userOptions);
  }

  // TODO: remove v12, deprecated
  const initHighlighting = () => {
    highlightAll();
    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };

  // TODO: remove v12, deprecated
  function initHighlightingOnLoad() {
    highlightAll();
    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }

  let wantsHighlight = false;

  /**
   * auto-highlights all pre>code elements on the page
   */
  function highlightAll() {
    // if we are called too early in the loading process
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }

    const blocks = document.querySelectorAll(options.cssSelector);
    blocks.forEach(highlightElement);
  }

  function boot() {
    // if a highlight was requested before DOM was loaded, do now
    if (wantsHighlight) highlightAll();
  }

  // make sure we are in the browser environment
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias.toLowerCase()] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */
  function upgradePluginAPI(plugin) {
    // TODO: remove with v12
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
   * DEPRECATED
   * @param {HighlightedHTMLElement} el
   */
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");

    return highlightElement(el);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    highlightAll,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    autoDetection,
    inherit,
    addPlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  hljs.regex = {
    concat: concat,
    lookahead: lookahead,
    either: either,
    optional: optional,
    anyNumberOfTimes: anyNumberOfTimes
  };

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreeze$1(MODES[key]);
    }
  }

  // merge all the modes/regexes into our main object
  Object.assign(hljs, MODES);

  return hljs;
};

// export an "instance" of the highlighter
var highlight = HLJS({});

module.exports = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;


/***/ }),

/***/ "./node_modules/highlight.js/es/core.js":
/*!**********************************************!*\
  !*** ./node_modules/highlight.js/es/core.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightJS": () => (/* reexport default export from named module */ _lib_core_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/core.js */ "./node_modules/highlight.js/lib/core.js");
// https://nodejs.org/api/packages.html#packages_writing_dual_packages_while_avoiding_or_minimizing_hazards


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_core_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/highlight.js/es/languages/markdown.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/markdown.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ markdown)
/* harmony export */ });
/*
Language: Markdown
Requires: xml.js
Author: John Crepezzi <john.crepezzi@gmail.com>
Website: https://daringfireball.net/projects/markdown/
Category: common, markup
*/

function markdown(hljs) {
  const regex = hljs.regex;
  const INLINE_HTML = {
    begin: /<\/?[A-Za-z_]/,
    end: '>',
    subLanguage: 'xml',
    relevance: 0
  };
  const HORIZONTAL_RULE = {
    begin: '^[-\\*]{3,}',
    end: '$'
  };
  const CODE = {
    className: 'code',
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*' },
      { begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*' },
      // needed to allow markdown as a sublanguage to work
      {
        begin: '```',
        end: '```+[ ]*$'
      },
      {
        begin: '~~~',
        end: '~~~+[ ]*$'
      },
      { begin: '`.+?`' },
      {
        begin: '(?=^( {4}|\\t))',
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: '^( {4}|\\t)',
            end: '(\\n)$'
          }
        ],
        relevance: 0
      }
    ]
  };
  const LIST = {
    className: 'bullet',
    begin: '^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)',
    end: '\\s+',
    excludeEnd: true
  };
  const LINK_REFERENCE = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: true,
    contains: [
      {
        className: 'symbol',
        begin: /\[/,
        end: /\]/,
        excludeBegin: true,
        excludeEnd: true
      },
      {
        className: 'link',
        begin: /:\s*/,
        end: /$/,
        excludeBegin: true
      }
    ]
  };
  const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
  const LINK = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: regex.concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: true,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/ },
      {
        className: 'string',
        relevance: 0,
        begin: '\\[',
        end: '\\]',
        excludeBegin: true,
        returnEnd: true
      },
      {
        className: 'link',
        relevance: 0,
        begin: '\\]\\(',
        end: '\\)',
        excludeBegin: true,
        excludeEnd: true
      },
      {
        className: 'symbol',
        relevance: 0,
        begin: '\\]\\[',
        end: '\\]',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
  const BOLD = {
    className: 'strong',
    contains: [], // defined later
    variants: [
      {
        begin: /_{2}/,
        end: /_{2}/
      },
      {
        begin: /\*{2}/,
        end: /\*{2}/
      }
    ]
  };
  const ITALIC = {
    className: 'emphasis',
    contains: [], // defined later
    variants: [
      {
        begin: /\*(?!\*)/,
        end: /\*/
      },
      {
        begin: /_(?!_)/,
        end: /_/,
        relevance: 0
      }
    ]
  };

  // 3 level deep nesting is not allowed because it would create confusion
  // in cases like `***testing***` because where we don't know if the last
  // `***` is starting a new bold/italic or finishing the last one
  const BOLD_WITHOUT_ITALIC = hljs.inherit(BOLD, { contains: [] });
  const ITALIC_WITHOUT_BOLD = hljs.inherit(ITALIC, { contains: [] });
  BOLD.contains.push(ITALIC_WITHOUT_BOLD);
  ITALIC.contains.push(BOLD_WITHOUT_ITALIC);

  let CONTAINABLE = [
    INLINE_HTML,
    LINK
  ];

  [
    BOLD,
    ITALIC,
    BOLD_WITHOUT_ITALIC,
    ITALIC_WITHOUT_BOLD
  ].forEach(m => {
    m.contains = m.contains.concat(CONTAINABLE);
  });

  CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);

  const HEADER = {
    className: 'section',
    variants: [
      {
        begin: '^#{1,6}',
        end: '$',
        contains: CONTAINABLE
      },
      {
        begin: '(?=^.+?\\n[=-]{2,}$)',
        contains: [
          { begin: '^[=-]*$' },
          {
            begin: '^',
            end: "\\n",
            contains: CONTAINABLE
          }
        ]
      }
    ]
  };

  const BLOCKQUOTE = {
    className: 'quote',
    begin: '^>\\s+',
    contains: CONTAINABLE,
    end: '$'
  };

  return {
    name: 'Markdown',
    aliases: [
      'md',
      'mkdown',
      'mkd'
    ],
    contains: [
      HEADER,
      INLINE_HTML,
      LIST,
      BOLD,
      ITALIC,
      BLOCKQUOTE,
      CODE,
      HORIZONTAL_RULE,
      LINK,
      LINK_REFERENCE
    ]
  };
}




/***/ }),

/***/ "./node_modules/highlight.js/es/languages/matlab.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/matlab.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ matlab)
/* harmony export */ });
/*
Language: Matlab
Author: Denis Bardadym <bardadymchik@gmail.com>
Contributors: Eugene Nizhibitsky <nizhibitsky@ya.ru>, Egor Rogov <e.rogov@postgrespro.ru>
Website: https://www.mathworks.com/products/matlab.html
Category: scientific
*/

/*
  Formal syntax is not published, helpful link:
  https://github.com/kornilova-l/matlab-IntelliJ-plugin/blob/master/src/main/grammar/Matlab.bnf
*/
function matlab(hljs) {
  const TRANSPOSE_RE = '(\'|\\.\')+';
  const TRANSPOSE = {
    relevance: 0,
    contains: [ { begin: TRANSPOSE_RE } ]
  };

  return {
    name: 'Matlab',
    keywords: {
      keyword:
        'arguments break case catch classdef continue else elseif end enumeration events for function '
        + 'global if methods otherwise parfor persistent properties return spmd switch try while',
      built_in:
        'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan '
        + 'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot '
        + 'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog '
        + 'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal '
        + 'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli '
        + 'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma '
        + 'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms '
        + 'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones '
        + 'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length '
        + 'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril '
        + 'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute '
        + 'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i|0 inf nan '
        + 'isnan isinf isfinite j|0 why compan gallery hadamard hankel hilb invhilb magic pascal '
        + 'rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table '
        + 'readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun '
        + 'legend intersect ismember procrustes hold num2cell '
    },
    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
    contains: [
      {
        className: 'function',
        beginKeywords: 'function',
        end: '$',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            variants: [
              {
                begin: '\\(',
                end: '\\)'
              },
              {
                begin: '\\[',
                end: '\\]'
              }
            ]
          }
        ]
      },
      {
        className: 'built_in',
        begin: /true|false/,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        begin: '[a-zA-Z][a-zA-Z_0-9]*' + TRANSPOSE_RE,
        relevance: 0
      },
      {
        className: 'number',
        begin: hljs.C_NUMBER_RE,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        className: 'string',
        begin: '\'',
        end: '\'',
        contains: [ { begin: '\'\'' } ]
      },
      {
        begin: /\]|\}|\)/,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        className: 'string',
        begin: '"',
        end: '"',
        contains: [ { begin: '""' } ],
        starts: TRANSPOSE
      },
      hljs.COMMENT('^\\s*%\\{\\s*$', '^\\s*%\\}\\s*$'),
      hljs.COMMENT('%', '$')
    ]
  };
}




/***/ }),

/***/ "./node_modules/highlight.js/es/languages/python.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/python.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ python)
/* harmony export */ });
/*
Language: Python
Description: Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.
Website: https://www.python.org
Category: common
*/

function python(hljs) {
  const regex = hljs.regex;
  const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u;
  const RESERVED_WORDS = [
    'and',
    'as',
    'assert',
    'async',
    'await',
    'break',
    'class',
    'continue',
    'def',
    'del',
    'elif',
    'else',
    'except',
    'finally',
    'for',
    'from',
    'global',
    'if',
    'import',
    'in',
    'is',
    'lambda',
    'nonlocal|10',
    'not',
    'or',
    'pass',
    'raise',
    'return',
    'try',
    'while',
    'with',
    'yield'
  ];

  const BUILT_INS = [
    '__import__',
    'abs',
    'all',
    'any',
    'ascii',
    'bin',
    'bool',
    'breakpoint',
    'bytearray',
    'bytes',
    'callable',
    'chr',
    'classmethod',
    'compile',
    'complex',
    'delattr',
    'dict',
    'dir',
    'divmod',
    'enumerate',
    'eval',
    'exec',
    'filter',
    'float',
    'format',
    'frozenset',
    'getattr',
    'globals',
    'hasattr',
    'hash',
    'help',
    'hex',
    'id',
    'input',
    'int',
    'isinstance',
    'issubclass',
    'iter',
    'len',
    'list',
    'locals',
    'map',
    'max',
    'memoryview',
    'min',
    'next',
    'object',
    'oct',
    'open',
    'ord',
    'pow',
    'print',
    'property',
    'range',
    'repr',
    'reversed',
    'round',
    'set',
    'setattr',
    'slice',
    'sorted',
    'staticmethod',
    'str',
    'sum',
    'super',
    'tuple',
    'type',
    'vars',
    'zip'
  ];

  const LITERALS = [
    '__debug__',
    'Ellipsis',
    'False',
    'None',
    'NotImplemented',
    'True'
  ];

  // https://docs.python.org/3/library/typing.html
  // TODO: Could these be supplemented by a CamelCase matcher in certain
  // contexts, leaving these remaining only for relevance hinting?
  const TYPES = [
    "Any",
    "Callable",
    "Coroutine",
    "Dict",
    "List",
    "Literal",
    "Generic",
    "Optional",
    "Sequence",
    "Set",
    "Tuple",
    "Type",
    "Union"
  ];

  const KEYWORDS = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: RESERVED_WORDS,
    built_in: BUILT_INS,
    literal: LITERALS,
    type: TYPES
  };

  const PROMPT = {
    className: 'meta',
    begin: /^(>>>|\.\.\.) /
  };

  const SUBST = {
    className: 'subst',
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS,
    illegal: /#/
  };

  const LITERAL_BRACKET = {
    begin: /\{\{/,
    relevance: 0
  };

  const STRING = {
    className: 'string',
    contains: [ hljs.BACKSLASH_ESCAPE ],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };

  // https://docs.python.org/3.9/reference/lexical_analysis.html#numeric-literals
  const digitpart = '[0-9](_?[0-9])*';
  const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
  // Whitespace after a number (or any lexical token) is needed only if its absence
  // would change the tokenization
  // https://docs.python.org/3.9/reference/lexical_analysis.html#whitespace-between-tokens
  // We deviate slightly, requiring a word boundary or a keyword
  // to avoid accidentally recognizing *prefixes* (e.g., `0` in `0x41` or `08` or `0__1`)
  const lookahead = `\\b|${RESERVED_WORDS.join('|')}`;
  const NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
      },
      {
        begin: `(${pointfloat})[jJ]?`
      },

      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
      },

      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${digitpart})[jJ](?=${lookahead})`
      }
    ]
  };
  const COMMENT_TYPE = {
    className: "comment",
    begin: regex.lookahead(/# type:/),
    end: /$/,
    keywords: KEYWORDS,
    contains: [
      { // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: true
      }
    ]
  };
  const PARAMS = {
    className: 'params',
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: true
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          'self',
          PROMPT,
          NUMBER,
          STRING,
          hljs.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  SUBST.contains = [
    STRING,
    NUMBER,
    PROMPT
  ];

  return {
    name: 'Python',
    aliases: [
      'py',
      'gyp',
      'ipython'
    ],
    unicodeRegex: true,
    keywords: KEYWORDS,
    illegal: /(<\/|->|\?)|=>/,
    contains: [
      PROMPT,
      NUMBER,
      {
        // very common convention
        begin: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      STRING,
      COMMENT_TYPE,
      hljs.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/, /\s+/,
          IDENT_RE,
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [ PARAMS ]
      },
      {
        variants: [
          {
            match: [
              /\bclass/, /\s+/,
              IDENT_RE, /\s*/,
              /\(\s*/, IDENT_RE,/\s*\)/
            ],
          },
          {
            match: [
              /\bclass/, /\s+/,
              IDENT_RE
            ],
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited",
        }
      },
      {
        className: 'meta',
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          NUMBER,
          PARAMS,
          STRING
        ]
      }
    ]
  };
}




/***/ }),

/***/ "./node_modules/highlight.js/es/languages/r.js":
/*!*****************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/r.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/*
Language: R
Description: R is a free software environment for statistical computing and graphics.
Author: Joe Cheng <joe@rstudio.org>
Contributors: Konrad Rudolph <konrad.rudolph@gmail.com>
Website: https://www.r-project.org
Category: common,scientific
*/

/** @type LanguageFn */
function r(hljs) {
  const regex = hljs.regex;
  // Identifiers in R cannot start with `_`, but they can start with `.` if it
  // is not immediately followed by a digit.
  // R also supports quoted identifiers, which are near-arbitrary sequences
  // delimited by backticks (`…`), which may contain escape sequences. These are
  // handled in a separate mode. See `test/markup/r/names.txt` for examples.
  // FIXME: Support Unicode identifiers.
  const IDENT_RE = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;
  const NUMBER_TYPES_RE = regex.either(
    // Special case: only hexadecimal binary powers can contain fractions
    /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
    // Hexadecimal numbers without fraction and optional binary power
    /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
    // Decimal numbers
    /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
  );
  const OPERATORS_RE = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/;
  const PUNCTUATION_RE = regex.either(
    /[()]/,
    /[{}]/,
    /\[\[/,
    /[[\]]/,
    /\\/,
    /,/
  );

  return {
    name: 'R',

    keywords: {
      $pattern: IDENT_RE,
      keyword:
        'function if in break next repeat else for while',
      literal:
        'NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 '
        + 'NA_character_|10 NA_complex_|10',
      built_in:
        // Builtin constants
        'LETTERS letters month.abb month.name pi T F '
        // Primitive functions
        // These are all the functions in `base` that are implemented as a
        // `.Primitive`, minus those functions that are also keywords.
        + 'abs acos acosh all any anyNA Arg as.call as.character '
        + 'as.complex as.double as.environment as.integer as.logical '
        + 'as.null.default as.numeric as.raw asin asinh atan atanh attr '
        + 'attributes baseenv browser c call ceiling class Conj cos cosh '
        + 'cospi cummax cummin cumprod cumsum digamma dim dimnames '
        + 'emptyenv exp expression floor forceAndCall gamma gc.time '
        + 'globalenv Im interactive invisible is.array is.atomic is.call '
        + 'is.character is.complex is.double is.environment is.expression '
        + 'is.finite is.function is.infinite is.integer is.language '
        + 'is.list is.logical is.matrix is.na is.name is.nan is.null '
        + 'is.numeric is.object is.pairlist is.raw is.recursive is.single '
        + 'is.symbol lazyLoadDBfetch length lgamma list log max min '
        + 'missing Mod names nargs nzchar oldClass on.exit pos.to.env '
        + 'proc.time prod quote range Re rep retracemem return round '
        + 'seq_along seq_len seq.int sign signif sin sinh sinpi sqrt '
        + 'standardGeneric substitute sum switch tan tanh tanpi tracemem '
        + 'trigamma trunc unclass untracemem UseMethod xtfrm',
    },

    contains: [
      // Roxygen comments
      hljs.COMMENT(
        /#'/,
        /$/,
        { contains: [
          {
            // Handle `@examples` separately to cause all subsequent code
            // until the next `@`-tag on its own line to be kept as-is,
            // preventing highlighting. This code is example R code, so nested
            // doctags shouldn’t be treated as such. See
            // `test/markup/r/roxygen.txt` for an example.
            scope: 'doctag',
            match: /@examples/,
            starts: {
              end: regex.lookahead(regex.either(
                // end if another doc comment
                /\n^#'\s*(?=@[a-zA-Z]+)/,
                // or a line with no comment
                /\n^(?!#')/
              )),
              endsParent: true
            }
          },
          {
            // Handle `@param` to highlight the parameter name following
            // after.
            scope: 'doctag',
            begin: '@param',
            end: /$/,
            contains: [
              {
                scope: 'variable',
                variants: [
                  { match: IDENT_RE },
                  { match: /`(?:\\.|[^`\\])+`/ }
                ],
                endsParent: true
              }
            ]
          },
          {
            scope: 'doctag',
            match: /@[a-zA-Z]+/
          },
          {
            scope: 'keyword',
            match: /\\[a-zA-Z]+/
          }
        ] }
      ),

      hljs.HASH_COMMENT_MODE,

      {
        scope: 'string',
        contains: [ hljs.BACKSLASH_ESCAPE ],
        variants: [
          hljs.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\(/,
            end: /\)(-*)"/
          }),
          hljs.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\{/,
            end: /\}(-*)"/
          }),
          hljs.END_SAME_AS_BEGIN({
            begin: /[rR]"(-*)\[/,
            end: /\](-*)"/
          }),
          hljs.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\(/,
            end: /\)(-*)'/
          }),
          hljs.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\{/,
            end: /\}(-*)'/
          }),
          hljs.END_SAME_AS_BEGIN({
            begin: /[rR]'(-*)\[/,
            end: /\](-*)'/
          }),
          {
            begin: '"',
            end: '"',
            relevance: 0
          },
          {
            begin: "'",
            end: "'",
            relevance: 0
          }
        ],
      },

      // Matching numbers immediately following punctuation and operators is
      // tricky since we need to look at the character ahead of a number to
      // ensure the number is not part of an identifier, and we cannot use
      // negative look-behind assertions. So instead we explicitly handle all
      // possible combinations of (operator|punctuation), number.
      // TODO: replace with negative look-behind when available
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
      // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
      // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
      {
        relevance: 0,
        variants: [
          {
            scope: {
              1: 'operator',
              2: 'number'
            },
            match: [
              OPERATORS_RE,
              NUMBER_TYPES_RE
            ]
          },
          {
            scope: {
              1: 'operator',
              2: 'number'
            },
            match: [
              /%[^%]*%/,
              NUMBER_TYPES_RE
            ]
          },
          {
            scope: {
              1: 'punctuation',
              2: 'number'
            },
            match: [
              PUNCTUATION_RE,
              NUMBER_TYPES_RE
            ]
          },
          {
            scope: { 2: 'number' },
            match: [
              /[^a-zA-Z0-9._]|^/, // not part of an identifier, or start of document
              NUMBER_TYPES_RE
            ]
          }
        ]
      },

      // Operators/punctuation when they're not directly followed by numbers
      {
        // Relevance boost for the most common assignment form.
        scope: { 3: 'operator' },
        match: [
          IDENT_RE,
          /\s+/,
          /<-/,
          /\s+/
        ]
      },

      {
        scope: 'operator',
        relevance: 0,
        variants: [
          { match: OPERATORS_RE },
          { match: /%[^%]*%/ }
        ]
      },

      {
        scope: 'punctuation',
        relevance: 0,
        match: PUNCTUATION_RE
      },

      {
        // Escaped identifier
        begin: '`',
        end: '`',
        contains: [ { begin: /\\./ } ]
      }
    ]
  };
}




/***/ }),

/***/ "./node_modules/highlight.js/es/languages/yaml.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/es/languages/yaml.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ yaml)
/* harmony export */ });
/*
Language: YAML
Description: Yet Another Markdown Language
Author: Stefan Wienert <stwienert@gmail.com>
Contributors: Carl Baxter <carl@cbax.tech>
Requires: ruby.js
Website: https://yaml.org
Category: common, config
*/
function yaml(hljs) {
  const LITERALS = 'true false yes no null';

  // YAML spec allows non-reserved URI characters in tags.
  const URI_CHARACTERS = '[\\w#;/?:@&=+$,.~*\'()[\\]]+';

  // Define keys as starting with a word character
  // ...containing word chars, spaces, colons, forward-slashes, hyphens and periods
  // ...and ending with a colon followed immediately by a space, tab or newline.
  // The YAML spec allows for much more than this, but this covers most use-cases.
  const KEY = {
    className: 'attr',
    variants: [
      { begin: '\\w[\\w :\\/.-]*:(?=[ \t]|$)' },
      { // double quoted keys
        begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
      { // single quoted keys
        begin: '\'\\w[\\w :\\/.-]*\':(?=[ \t]|$)' }
    ]
  };

  const TEMPLATE_VARIABLES = {
    className: 'template-variable',
    variants: [
      { // jinja templates Ansible
        begin: /\{\{/,
        end: /\}\}/
      },
      { // Ruby i18n
        begin: /%\{/,
        end: /\}/
      }
    ]
  };
  const STRING = {
    className: 'string',
    relevance: 0,
    variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      { begin: /\S+/ }
    ],
    contains: [
      hljs.BACKSLASH_ESCAPE,
      TEMPLATE_VARIABLES
    ]
  };

  // Strings inside of value containers (objects) can't contain braces,
  // brackets, or commas
  const CONTAINER_STRING = hljs.inherit(STRING, { variants: [
    {
      begin: /'/,
      end: /'/
    },
    {
      begin: /"/,
      end: /"/
    },
    { begin: /[^\s,{}[\]]+/ }
  ] });

  const DATE_RE = '[0-9]{4}(-[0-9][0-9]){0,2}';
  const TIME_RE = '([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?';
  const FRACTION_RE = '(\\.[0-9]*)?';
  const ZONE_RE = '([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?';
  const TIMESTAMP = {
    className: 'number',
    begin: '\\b' + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + '\\b'
  };

  const VALUE_CONTAINER = {
    end: ',',
    endsWithParent: true,
    excludeEnd: true,
    keywords: LITERALS,
    relevance: 0
  };
  const OBJECT = {
    begin: /\{/,
    end: /\}/,
    contains: [ VALUE_CONTAINER ],
    illegal: '\\n',
    relevance: 0
  };
  const ARRAY = {
    begin: '\\[',
    end: '\\]',
    contains: [ VALUE_CONTAINER ],
    illegal: '\\n',
    relevance: 0
  };

  const MODES = [
    KEY,
    {
      className: 'meta',
      begin: '^---\\s*$',
      relevance: 10
    },
    { // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: 'string',
      begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*'
    },
    { // Ruby/Rails erb
      begin: '<%[%=-]?',
      end: '[%-]?%>',
      subLanguage: 'ruby',
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0
    },
    { // named tags
      className: 'type',
      begin: '!\\w+!' + URI_CHARACTERS
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    { // verbatim tags
      className: 'type',
      begin: '!<' + URI_CHARACTERS + ">"
    },
    { // primary tags
      className: 'type',
      begin: '!' + URI_CHARACTERS
    },
    { // secondary tags
      className: 'type',
      begin: '!!' + URI_CHARACTERS
    },
    { // fragment id &ref
      className: 'meta',
      begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$'
    },
    { // fragment reference *ref
      className: 'meta',
      begin: '\\*' + hljs.UNDERSCORE_IDENT_RE + '$'
    },
    { // array listing
      className: 'bullet',
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: '-(?=[ ]|$)',
      relevance: 0
    },
    hljs.HASH_COMMENT_MODE,
    {
      beginKeywords: LITERALS,
      keywords: { literal: LITERALS }
    },
    TIMESTAMP,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: 'number',
      begin: hljs.C_NUMBER_RE + '\\b',
      relevance: 0
    },
    OBJECT,
    ARRAY,
    STRING
  ];

  const VALUE_MODES = [ ...MODES ];
  VALUE_MODES.pop();
  VALUE_MODES.push(CONTAINER_STRING);
  VALUE_CONTAINER.contains = VALUE_MODES;

  return {
    name: 'YAML',
    case_insensitive: true,
    aliases: [ 'yml' ],
    contains: MODES
  };
}




/***/ }),

/***/ "./node_modules/overlayscrollbars/overlayscrollbars.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/overlayscrollbars/overlayscrollbars.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickScrollPlugin": () => (/* binding */ Tt),
/* harmony export */   "OverlayScrollbars": () => (/* binding */ OverlayScrollbars),
/* harmony export */   "ScrollbarsHidingPlugin": () => (/* binding */ Ot),
/* harmony export */   "SizeObserverPlugin": () => (/* binding */ yt)
/* harmony export */ });
/*!
 * OverlayScrollbars
 * Version: 2.1.1
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */

function each(t, n) {
  if (isArrayLike(t)) {
    for (let o = 0; o < t.length; o++) {
      if (false === n(t[o], o, t)) {
        break;
      }
    }
  } else if (t) {
    each(Object.keys(t), (o => n(t[o], o, t)));
  }
  return t;
}

function style(t, n) {
  const o = isString(n);
  const s = isArray(n) || o;
  if (s) {
    let s = o ? "" : {};
    if (t) {
      const e = window.getComputedStyle(t, null);
      s = o ? getCSSVal(t, e, n) : n.reduce(((n, o) => {
        n[o] = getCSSVal(t, e, o);
        return n;
      }), s);
    }
    return s;
  }
  t && each(keys(n), (o => setCSSVal(t, o, n[o])));
}

const createCache = (t, n) => {
  const {o: o, u: s, _: e} = t;
  let c = o;
  let r;
  const cacheUpdateContextual = (t, n) => {
    const o = c;
    const i = t;
    const l = n || (s ? !s(o, i) : o !== i);
    if (l || e) {
      c = i;
      r = o;
    }
    return [ c, l, r ];
  };
  const cacheUpdateIsolated = t => cacheUpdateContextual(n(c, r), t);
  const getCurrentCache = t => [ c, !!t, r ];
  return [ n ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache ];
};

const isClient = () => "undefined" !== typeof window;

const t = isClient() && Node.ELEMENT_NODE;

const {toString: n, hasOwnProperty: o} = Object.prototype;

const isUndefined = t => void 0 === t;

const isNull = t => null === t;

const type = t => isUndefined(t) || isNull(t) ? `${t}` : n.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase();

const isNumber = t => "number" === typeof t;

const isString = t => "string" === typeof t;

const isBoolean = t => "boolean" === typeof t;

const isFunction = t => "function" === typeof t;

const isArray = t => Array.isArray(t);

const isObject = t => "object" === typeof t && !isArray(t) && !isNull(t);

const isArrayLike = t => {
  const n = !!t && t.length;
  const o = isNumber(n) && n > -1 && n % 1 == 0;
  return isArray(t) || !isFunction(t) && o ? n > 0 && isObject(t) ? n - 1 in t : true : false;
};

const isPlainObject = t => {
  if (!t || !isObject(t) || "object" !== type(t)) {
    return false;
  }
  let n;
  const s = "constructor";
  const e = t[s];
  const c = e && e.prototype;
  const r = o.call(t, s);
  const i = c && o.call(c, "isPrototypeOf");
  if (e && !r && !i) {
    return false;
  }
  for (n in t) {}
  return isUndefined(n) || o.call(t, n);
};

const isHTMLElement = n => {
  const o = HTMLElement;
  return n ? o ? n instanceof o : n.nodeType === t : false;
};

const isElement = n => {
  const o = Element;
  return n ? o ? n instanceof o : n.nodeType === t : false;
};

const indexOf = (t, n, o) => t.indexOf(n, o);

const push = (t, n, o) => {
  !o && !isString(n) && isArrayLike(n) ? Array.prototype.push.apply(t, n) : t.push(n);
  return t;
};

const from = t => {
  const n = Array.from;
  const o = [];
  if (n && t) {
    return n(t);
  }
  if (t instanceof Set) {
    t.forEach((t => {
      push(o, t);
    }));
  } else {
    each(t, (t => {
      push(o, t);
    }));
  }
  return o;
};

const isEmptyArray = t => !!t && 0 === t.length;

const runEachAndClear = (t, n, o) => {
  const runFn = t => t && t.apply(void 0, n || []);
  each(t, runFn);
  !o && (t.length = 0);
};

const hasOwnProperty = (t, n) => Object.prototype.hasOwnProperty.call(t, n);

const keys = t => t ? Object.keys(t) : [];

const assignDeep = (t, n, o, s, e, c, r) => {
  const i = [ n, o, s, e, c, r ];
  if (("object" !== typeof t || isNull(t)) && !isFunction(t)) {
    t = {};
  }
  each(i, (n => {
    each(keys(n), (o => {
      const s = n[o];
      if (t === s) {
        return true;
      }
      const e = isArray(s);
      if (s && (isPlainObject(s) || e)) {
        const n = t[o];
        let c = n;
        if (e && !isArray(n)) {
          c = [];
        } else if (!e && !isPlainObject(n)) {
          c = {};
        }
        t[o] = assignDeep(c, s);
      } else {
        t[o] = s;
      }
    }));
  }));
  return t;
};

const isEmptyObject = t => {
  for (const n in t) {
    return false;
  }
  return true;
};

const getSetProp = (t, n, o, s) => {
  if (isUndefined(s)) {
    return o ? o[t] : n;
  }
  o && (isString(s) || isNumber(s)) && (o[t] = s);
};

const attr = (t, n, o) => {
  if (isUndefined(o)) {
    return t ? t.getAttribute(n) : null;
  }
  t && t.setAttribute(n, o);
};

const attrClass = (t, n, o, s) => {
  if (o) {
    const e = attr(t, n) || "";
    const c = new Set(e.split(" "));
    c[s ? "add" : "delete"](o);
    attr(t, n, from(c).join(" ").trim());
  }
};

const hasAttrClass = (t, n, o) => {
  const s = attr(t, n) || "";
  const e = new Set(s.split(" "));
  return e.has(o);
};

const removeAttr = (t, n) => {
  t && t.removeAttribute(n);
};

const scrollLeft = (t, n) => getSetProp("scrollLeft", 0, t, n);

const scrollTop = (t, n) => getSetProp("scrollTop", 0, t, n);

const s = isClient() && Element.prototype;

const find = (t, n) => {
  const o = [];
  const s = n ? isElement(n) ? n : null : document;
  return s ? push(o, s.querySelectorAll(t)) : o;
};

const findFirst = (t, n) => {
  const o = n ? isElement(n) ? n : null : document;
  return o ? o.querySelector(t) : null;
};

const is = (t, n) => {
  if (isElement(t)) {
    const o = s.matches || s.msMatchesSelector;
    return o.call(t, n);
  }
  return false;
};

const contents = t => t ? from(t.childNodes) : [];

const parent = t => t ? t.parentElement : null;

const closest = (t, n) => {
  if (isElement(t)) {
    const o = s.closest;
    if (o) {
      return o.call(t, n);
    }
    do {
      if (is(t, n)) {
        return t;
      }
      t = parent(t);
    } while (t);
  }
  return null;
};

const liesBetween = (t, n, o) => {
  const s = t && closest(t, n);
  const e = t && findFirst(o, s);
  const c = closest(e, n) === s;
  return s && e ? s === t || e === t || c && closest(closest(t, o), n) !== s : false;
};

const before = (t, n, o) => {
  if (o && t) {
    let s = n;
    let e;
    if (isArrayLike(o)) {
      e = document.createDocumentFragment();
      each(o, (t => {
        if (t === s) {
          s = t.previousSibling;
        }
        e.appendChild(t);
      }));
    } else {
      e = o;
    }
    if (n) {
      if (!s) {
        s = t.firstChild;
      } else if (s !== n) {
        s = s.nextSibling;
      }
    }
    t.insertBefore(e, s || null);
  }
};

const appendChildren = (t, n) => {
  before(t, null, n);
};

const insertBefore = (t, n) => {
  before(parent(t), t, n);
};

const insertAfter = (t, n) => {
  before(parent(t), t && t.nextSibling, n);
};

const removeElements = t => {
  if (isArrayLike(t)) {
    each(from(t), (t => removeElements(t)));
  } else if (t) {
    const n = parent(t);
    if (n) {
      n.removeChild(t);
    }
  }
};

const createDiv = t => {
  const n = document.createElement("div");
  if (t) {
    attr(n, "class", t);
  }
  return n;
};

const createDOM = t => {
  const n = createDiv();
  n.innerHTML = t.trim();
  return each(contents(n), (t => removeElements(t)));
};

const firstLetterToUpper = t => t.charAt(0).toUpperCase() + t.slice(1);

const getDummyStyle = () => createDiv().style;

const e = [ "-webkit-", "-moz-", "-o-", "-ms-" ];

const c = [ "WebKit", "Moz", "O", "MS", "webkit", "moz", "o", "ms" ];

const r = {};

const i = {};

const cssProperty = t => {
  let n = i[t];
  if (hasOwnProperty(i, t)) {
    return n;
  }
  const o = firstLetterToUpper(t);
  const s = getDummyStyle();
  each(e, (e => {
    const c = e.replace(/-/g, "");
    const r = [ t, e + t, c + o, firstLetterToUpper(c) + o ];
    return !(n = r.find((t => void 0 !== s[t])));
  }));
  return i[t] = n || "";
};

const jsAPI = t => {
  if (isClient()) {
    let n = r[t] || window[t];
    if (hasOwnProperty(r, t)) {
      return n;
    }
    each(c, (o => {
      n = n || window[o + firstLetterToUpper(t)];
      return !n;
    }));
    r[t] = n;
    return n;
  }
};

const l = jsAPI("MutationObserver");

const a = jsAPI("IntersectionObserver");

const u = jsAPI("ResizeObserver");

const d = jsAPI("cancelAnimationFrame");

const f = jsAPI("requestAnimationFrame");

const _ = isClient() && window.setTimeout;

const h = isClient() && window.clearTimeout;

const equal = (t, n, o, s) => {
  if (t && n) {
    let e = true;
    each(o, (o => {
      const c = s ? s(t[o]) : t[o];
      const r = s ? s(n[o]) : n[o];
      if (c !== r) {
        e = false;
      }
    }));
    return e;
  }
  return false;
};

const equalWH = (t, n) => equal(t, n, [ "w", "h" ]);

const equalXY = (t, n) => equal(t, n, [ "x", "y" ]);

const equalTRBL = (t, n) => equal(t, n, [ "t", "r", "b", "l" ]);

const equalBCRWH = (t, n, o) => equal(t, n, [ "width", "height" ], o && (t => Math.round(t)));

const noop = () => {};

const selfClearTimeout = t => {
  let n;
  const o = t ? _ : f;
  const s = t ? h : d;
  return [ e => {
    s(n);
    n = o(e, isFunction(t) ? t() : t);
  }, () => s(n) ];
};

const debounce = (t, n) => {
  let o;
  let s;
  let e;
  let c = noop;
  const {v: r, g: i, p: l} = n || {};
  const a = function invokeFunctionToDebounce(n) {
    c();
    h(o);
    o = s = void 0;
    c = noop;
    t.apply(this, n);
  };
  const mergeParms = t => l && s ? l(s, t) : t;
  const flush = () => {
    if (c !== noop) {
      a(mergeParms(e) || e);
    }
  };
  const u = function debouncedFn() {
    const t = from(arguments);
    const n = isFunction(r) ? r() : r;
    const l = isNumber(n) && n >= 0;
    if (l) {
      const r = isFunction(i) ? i() : i;
      const l = isNumber(r) && r >= 0;
      const u = n > 0 ? _ : f;
      const v = n > 0 ? h : d;
      const g = mergeParms(t);
      const w = g || t;
      const p = a.bind(0, w);
      c();
      const b = u(p, n);
      c = () => v(b);
      if (l && !o) {
        o = _(flush, r);
      }
      s = e = w;
    } else {
      a(t);
    }
  };
  u.m = flush;
  return u;
};

const {max: v} = Math;

const animationCurrentTime = () => performance.now();

const animateNumber = (t, n, o, s, e) => {
  let c = 0;
  const r = animationCurrentTime();
  const i = Math.max(0, o);
  const frame = o => {
    const l = animationCurrentTime();
    const a = l - r;
    const u = a >= i;
    const d = o ? 1 : 1 - (v(0, r + i - l) / i || 0);
    const _ = (n - t) * (isFunction(e) ? e(d, d * i, 0, 1, i) : d) + t;
    const h = u || 1 === d;
    s && s(_, d, h);
    c = h ? 0 : f((() => frame()));
  };
  frame();
  return t => {
    d(c);
    t && frame(t);
  };
};

const g = /[^\x20\t\r\n\f]+/g;

const classListAction = (t, n, o) => {
  const s = t && t.classList;
  let e;
  let c = 0;
  let r = false;
  if (s && n && isString(n)) {
    const t = n.match(g) || [];
    r = t.length > 0;
    while (e = t[c++]) {
      r = !!o(s, e) && r;
    }
  }
  return r;
};

const hasClass = (t, n) => classListAction(t, n, ((t, n) => t.contains(n)));

const removeClass = (t, n) => {
  classListAction(t, n, ((t, n) => t.remove(n)));
};

const addClass = (t, n) => {
  classListAction(t, n, ((t, n) => t.add(n)));
  return removeClass.bind(0, t, n);
};

const w = {
  opacity: 1,
  zindex: 1
};

const parseToZeroOrNumber = (t, n) => {
  const o = n ? parseFloat(t) : parseInt(t, 10);
  return o === o ? o : 0;
};

const adaptCSSVal = (t, n) => !w[t.toLowerCase()] && isNumber(n) ? `${n}px` : n;

const getCSSVal = (t, n, o) => null != n ? n[o] || n.getPropertyValue(o) : t.style[o];

const setCSSVal = (t, n, o) => {
  try {
    const {style: s} = t;
    if (!isUndefined(s[n])) {
      s[n] = adaptCSSVal(n, o);
    } else {
      s.setProperty(n, o);
    }
  } catch (s) {}
};

const directionIsRTL = t => "rtl" === style(t, "direction");

const topRightBottomLeft = (t, n, o) => {
  const s = n ? `${n}-` : "";
  const e = o ? `-${o}` : "";
  const c = `${s}top${e}`;
  const r = `${s}right${e}`;
  const i = `${s}bottom${e}`;
  const l = `${s}left${e}`;
  const a = style(t, [ c, r, i, l ]);
  return {
    t: parseToZeroOrNumber(a[c], true),
    r: parseToZeroOrNumber(a[r], true),
    b: parseToZeroOrNumber(a[i], true),
    l: parseToZeroOrNumber(a[l], true)
  };
};

const {round: p} = Math;

const b = {
  w: 0,
  h: 0
};

const windowSize = () => ({
  w: window.innerWidth,
  h: window.innerHeight
});

const offsetSize = t => t ? {
  w: t.offsetWidth,
  h: t.offsetHeight
} : b;

const clientSize = t => t ? {
  w: t.clientWidth,
  h: t.clientHeight
} : b;

const scrollSize = t => t ? {
  w: t.scrollWidth,
  h: t.scrollHeight
} : b;

const fractionalSize = t => {
  const n = parseFloat(style(t, "height")) || 0;
  const o = parseFloat(style(t, "width")) || 0;
  return {
    w: o - p(o),
    h: n - p(n)
  };
};

const getBoundingClientRect = t => t.getBoundingClientRect();

let m;

const supportPassiveEvents = () => {
  if (isUndefined(m)) {
    m = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get() {
          m = true;
        }
      }));
    } catch (t) {}
  }
  return m;
};

const splitEventNames = t => t.split(" ");

const off = (t, n, o, s) => {
  each(splitEventNames(n), (n => {
    t.removeEventListener(n, o, s);
  }));
};

const on = (t, n, o, s) => {
  var e;
  const c = supportPassiveEvents();
  const r = null != (e = c && s && s.S) ? e : c;
  const i = s && s.$ || false;
  const l = s && s.C || false;
  const a = [];
  const u = c ? {
    passive: r,
    capture: i
  } : i;
  each(splitEventNames(n), (n => {
    const s = l ? e => {
      t.removeEventListener(n, s, i);
      o && o(e);
    } : o;
    push(a, off.bind(null, t, n, s, i));
    t.addEventListener(n, s, u);
  }));
  return runEachAndClear.bind(0, a);
};

const stopPropagation = t => t.stopPropagation();

const preventDefault = t => t.preventDefault();

const y = {
  x: 0,
  y: 0
};

const absoluteCoordinates = t => {
  const n = t ? getBoundingClientRect(t) : 0;
  return n ? {
    x: n.left + window.pageYOffset,
    y: n.top + window.pageXOffset
  } : y;
};

const manageListener = (t, n) => {
  each(isArray(n) ? n : [ n ], t);
};

const createEventListenerHub = t => {
  const n = new Map;
  const removeEvent = (t, o) => {
    if (t) {
      const s = n.get(t);
      manageListener((t => {
        if (s) {
          s[t ? "delete" : "clear"](t);
        }
      }), o);
    } else {
      n.forEach((t => {
        t.clear();
      }));
      n.clear();
    }
  };
  const addEvent = (t, o) => {
    if (isString(t)) {
      const s = n.get(t) || new Set;
      n.set(t, s);
      manageListener((t => {
        isFunction(t) && s.add(t);
      }), o);
      return removeEvent.bind(0, t, o);
    }
    if (isBoolean(o) && o) {
      removeEvent();
    }
    const s = keys(t);
    const e = [];
    each(s, (n => {
      const o = t[n];
      o && push(e, addEvent(n, o));
    }));
    return runEachAndClear.bind(0, e);
  };
  const triggerEvent = (t, o) => {
    const s = n.get(t);
    each(from(s), (t => {
      if (o && !isEmptyArray(o)) {
        t.apply(0, o);
      } else {
        t();
      }
    }));
  };
  addEvent(t || {});
  return [ addEvent, removeEvent, triggerEvent ];
};

const opsStringify = t => JSON.stringify(t, ((t, n) => {
  if (isFunction(n)) {
    throw new Error;
  }
  return n;
}));

const S = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [ [ "img", "load" ] ],
    debounce: [ 0, 33 ],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    dragScroll: true,
    clickScroll: false,
    pointers: [ "mouse", "touch", "pen" ]
  }
};

const getOptionsDiff = (t, n) => {
  const o = {};
  const s = keys(n).concat(keys(t));
  each(s, (s => {
    const e = t[s];
    const c = n[s];
    if (isObject(e) && isObject(c)) {
      assignDeep(o[s] = {}, getOptionsDiff(e, c));
      if (isEmptyObject(o[s])) {
        delete o[s];
      }
    } else if (hasOwnProperty(n, s) && c !== e) {
      let t = true;
      if (isArray(e) || isArray(c)) {
        try {
          if (opsStringify(e) === opsStringify(c)) {
            t = false;
          }
        } catch (r) {}
      }
      if (t) {
        o[s] = c;
      }
    }
  }));
  return o;
};

const x = "os-environment";

const $ = `${x}-flexbox-glue`;

const C = `${$}-max`;

const O = "data-overlayscrollbars";

const z = "data-overlayscrollbars-initialize";

const T = `${O}-overflow-x`;

const E = `${O}-overflow-y`;

const I = "overflowVisible";

const A = "scrollbarHidden";

const L = "updating";

const H = "os-padding";

const P = "os-viewport";

const M = `${P}-arrange`;

const D = "os-content";

const R = `${P}-scrollbar-hidden`;

const k = `os-overflow-visible`;

const B = "os-size-observer";

const V = `${B}-appear`;

const Y = `${B}-listener`;

const j = `${Y}-scroll`;

const N = `${Y}-item`;

const q = `${N}-final`;

const F = "os-trinsic-observer";

const G = "os-no-css-vars";

const X = "os-theme-none";

const U = "os-scrollbar";

const W = `${U}-rtl`;

const Z = `${U}-horizontal`;

const J = `${U}-vertical`;

const K = `${U}-track`;

const Q = `${U}-handle`;

const tt = `${U}-visible`;

const nt = `${U}-cornerless`;

const ot = `${U}-transitionless`;

const st = `${U}-interaction`;

const et = `${U}-unusable`;

const ct = `${U}-auto-hidden`;

const rt = `${U}-wheel`;

const it = `${K}-interactive`;

const lt = `${Q}-interactive`;

const at = {};

const getPlugins = () => at;

const addPlugin = t => {
  const n = [];
  each(isArray(t) ? t : [ t ], (t => {
    const o = keys(t);
    each(o, (o => {
      push(n, at[o] = t[o]);
    }));
  }));
  return n;
};

const ut = {
  boolean: "__TPL_boolean_TYPE__",
  number: "__TPL_number_TYPE__",
  string: "__TPL_string_TYPE__",
  array: "__TPL_array_TYPE__",
  object: "__TPL_object_TYPE__",
  function: "__TPL_function_TYPE__",
  null: "__TPL_null_TYPE__"
};

const dt = ut.number;

const ft = ut.boolean;

const _t = [ ut.array, ut.null ];

const ht = "hidden scroll visible visible-hidden";

const vt = "visible hidden auto";

const gt = "never scroll leavemove";

({
  paddingAbsolute: ft,
  showNativeOverlaidScrollbars: ft,
  update: {
    elementEvents: _t,
    attributes: _t,
    debounce: [ ut.number, ut.array, ut.null ],
    ignoreMutation: [ ut.function, ut.null ]
  },
  overflow: {
    x: ht,
    y: ht
  },
  scrollbars: {
    theme: [ ut.string, ut.null ],
    visibility: vt,
    autoHide: gt,
    autoHideDelay: dt,
    dragScroll: ft,
    clickScroll: ft,
    pointers: [ ut.array, ut.null ]
  }
});

const wt = "__osOptionsValidationPlugin";

const pt = 3333333;

const bt = "scroll";

const mt = "__osSizeObserverPlugin";

const yt = /* @__PURE__ */ (() => ({
  [mt]: {
    O: (t, n, o) => {
      const s = createDOM(`<div class="${N}" dir="ltr"><div class="${N}"><div class="${q}"></div></div><div class="${N}"><div class="${q}" style="width: 200%; height: 200%"></div></div></div>`);
      appendChildren(t, s);
      addClass(t, j);
      const e = s[0];
      const c = e.lastChild;
      const r = e.firstChild;
      const i = null == r ? void 0 : r.firstChild;
      let l = offsetSize(e);
      let a = l;
      let u = false;
      let _;
      const reset = () => {
        scrollLeft(r, pt);
        scrollTop(r, pt);
        scrollLeft(c, pt);
        scrollTop(c, pt);
      };
      const onResized = t => {
        _ = 0;
        if (u) {
          l = a;
          n(true === t);
        }
      };
      const onScroll = t => {
        a = offsetSize(e);
        u = !t || !equalWH(a, l);
        if (t) {
          stopPropagation(t);
          if (u && !_) {
            d(_);
            _ = f(onResized);
          }
        } else {
          onResized(false === t);
        }
        reset();
      };
      const h = push([], [ on(r, bt, onScroll), on(c, bt, onScroll) ]);
      style(i, {
        width: pt,
        height: pt
      });
      f(reset);
      return [ o ? onScroll.bind(0, false) : reset, h ];
    }
  }
}))();

let St = 0;

const {round: xt, abs: $t} = Math;

const getWindowDPR = () => {
  const t = window.screen.deviceXDPI || 0;
  const n = window.screen.logicalXDPI || 1;
  return window.devicePixelRatio || t / n;
};

const diffBiggerThanOne = (t, n) => {
  const o = $t(t);
  const s = $t(n);
  return !(o === s || o + 1 === s || o - 1 === s);
};

const Ct = "__osScrollbarsHidingPlugin";

const Ot = /* @__PURE__ */ (() => ({
  [Ct]: {
    T: t => {
      const {I: n, A: o, L: s} = t;
      const e = !s && !n && (o.x || o.y);
      const c = e ? document.createElement("style") : false;
      if (c) {
        attr(c, "id", `${M}-${St}`);
        St++;
      }
      return c;
    },
    H: (t, n, o, s, e, c, r) => {
      const arrangeViewport = (n, c, r, i) => {
        if (t) {
          const {P: t} = e();
          const {M: l, D: a} = n;
          const {x: u, y: d} = a;
          const {x: f, y: _} = l;
          const h = i ? "paddingRight" : "paddingLeft";
          const v = t[h];
          const g = t.paddingTop;
          const w = c.w + r.w;
          const p = c.h + r.h;
          const b = {
            w: _ && d ? `${_ + w - v}px` : "",
            h: f && u ? `${f + p - g}px` : ""
          };
          if (s) {
            const {sheet: t} = s;
            if (t) {
              const {cssRules: n} = t;
              if (n) {
                if (!n.length) {
                  t.insertRule(`#${attr(s, "id")} + .${M}::before {}`, 0);
                }
                const o = n[0].style;
                o.width = b.w;
                o.height = b.h;
              }
            }
          } else {
            style(o, {
              "--os-vaw": b.w,
              "--os-vah": b.h
            });
          }
        }
        return t;
      };
      const undoViewportArrange = (s, i, l) => {
        if (t) {
          const a = l || c(s);
          const {P: u} = e();
          const {D: d} = a;
          const {x: f, y: _} = d;
          const h = {};
          const assignProps = t => each(t.split(" "), (t => {
            h[t] = u[t];
          }));
          if (f) {
            assignProps("marginBottom paddingTop paddingBottom");
          }
          if (_) {
            assignProps("marginLeft marginRight paddingLeft paddingRight");
          }
          const v = style(o, keys(h));
          removeClass(o, M);
          if (!n) {
            h.height = "";
          }
          style(o, h);
          return [ () => {
            r(a, i, t, v);
            style(o, v);
            addClass(o, M);
          }, a ];
        }
        return [ noop ];
      };
      return [ arrangeViewport, undoViewportArrange ];
    },
    R: () => {
      let t = {
        w: 0,
        h: 0
      };
      let n = 0;
      return (o, s, e) => {
        const c = windowSize();
        const r = {
          w: c.w - t.w,
          h: c.h - t.h
        };
        if (0 === r.w && 0 === r.h) {
          return;
        }
        const i = {
          w: $t(r.w),
          h: $t(r.h)
        };
        const l = {
          w: $t(xt(c.w / (t.w / 100))),
          h: $t(xt(c.h / (t.h / 100)))
        };
        const a = getWindowDPR();
        const u = i.w > 2 && i.h > 2;
        const d = !diffBiggerThanOne(l.w, l.h);
        const f = a !== n && a > 0;
        const _ = u && d && f;
        if (_) {
          const [t, n] = s();
          assignDeep(o.k, t);
          if (n) {
            e();
          }
        }
        t = c;
        n = a;
      };
    }
  }
}))();

const zt = "__osClickScrollPlugin";

const Tt = /* @__PURE__ */ (() => ({
  [zt]: {
    O: (t, n, o, s, e) => {
      let c = 0;
      let r = noop;
      const animateClickScroll = i => {
        r = animateNumber(i, i + s * Math.sign(o), 133, ((o, i, l) => {
          t(o);
          const a = n();
          const u = a + s;
          const d = e >= a && e <= u;
          if (l && !d) {
            if (c) {
              animateClickScroll(o);
            } else {
              const t = setTimeout((() => {
                animateClickScroll(o);
              }), 222);
              r = () => {
                clearTimeout(t);
              };
            }
            c++;
          }
        }));
      };
      animateClickScroll(0);
      return () => r();
    }
  }
}))();

let Et;

const getNativeScrollbarSize = (t, n, o, s) => {
  appendChildren(t, n);
  const e = clientSize(n);
  const c = offsetSize(n);
  const r = fractionalSize(o);
  s && removeElements(n);
  return {
    x: c.h - e.h + r.h,
    y: c.w - e.w + r.w
  };
};

const getNativeScrollbarsHiding = t => {
  let n = false;
  const o = addClass(t, R);
  try {
    n = "none" === style(t, cssProperty("scrollbar-width")) || "none" === window.getComputedStyle(t, "::-webkit-scrollbar").getPropertyValue("display");
  } catch (s) {}
  o();
  return n;
};

const getRtlScrollBehavior = (t, n) => {
  const o = "hidden";
  style(t, {
    overflowX: o,
    overflowY: o,
    direction: "rtl"
  });
  scrollLeft(t, 0);
  const s = absoluteCoordinates(t);
  const e = absoluteCoordinates(n);
  scrollLeft(t, -999);
  const c = absoluteCoordinates(n);
  return {
    i: s.x === e.x,
    n: e.x !== c.x
  };
};

const getFlexboxGlue = (t, n) => {
  const o = addClass(t, $);
  const s = getBoundingClientRect(t);
  const e = getBoundingClientRect(n);
  const c = equalBCRWH(e, s, true);
  const r = addClass(t, C);
  const i = getBoundingClientRect(t);
  const l = getBoundingClientRect(n);
  const a = equalBCRWH(l, i, true);
  o();
  r();
  return c && a;
};

const createEnvironment = () => {
  const {body: t} = document;
  const n = createDOM(`<div class="${x}"><div></div></div>`);
  const o = n[0];
  const s = o.firstChild;
  const [e, , c] = createEventListenerHub();
  const [r, i] = createCache({
    o: getNativeScrollbarSize(t, o, s),
    u: equalXY
  }, getNativeScrollbarSize.bind(0, t, o, s, true));
  const [l] = i();
  const a = getNativeScrollbarsHiding(o);
  const u = {
    x: 0 === l.x,
    y: 0 === l.y
  };
  const d = {
    elements: {
      host: null,
      padding: !a,
      viewport: t => a && t === t.ownerDocument.body && t,
      content: false
    },
    scrollbars: {
      slot: true
    },
    cancel: {
      nativeScrollbarsOverlaid: false,
      body: null
    }
  };
  const f = assignDeep({}, S);
  const _ = assignDeep.bind(0, {}, f);
  const h = assignDeep.bind(0, {}, d);
  const v = {
    k: l,
    A: u,
    I: a,
    L: "-1" === style(o, "zIndex"),
    B: getRtlScrollBehavior(o, s),
    V: getFlexboxGlue(o, s),
    Y: e.bind(0, "z"),
    j: e.bind(0, "r"),
    N: h,
    q: t => assignDeep(d, t) && h(),
    F: _,
    G: t => assignDeep(f, t) && _(),
    X: assignDeep({}, d),
    U: assignDeep({}, f)
  };
  const g = window.addEventListener;
  const w = debounce((t => c(t ? "z" : "r")), {
    v: 33,
    g: 99
  });
  removeAttr(o, "style");
  removeElements(o);
  g("resize", w.bind(0, false));
  if (!a && (!u.x || !u.y)) {
    let t;
    g("resize", (() => {
      const n = getPlugins()[Ct];
      t = t || n && n.R();
      t && t(v, r, w.bind(0, true));
    }));
  }
  return v;
};

const getEnvironment = () => {
  if (!Et) {
    Et = createEnvironment();
  }
  return Et;
};

const resolveInitialization = (t, n) => isFunction(n) ? n.apply(0, t) : n;

const staticInitializationElement = (t, n, o, s) => {
  const e = isUndefined(s) ? o : s;
  const c = resolveInitialization(t, e);
  return c || n.apply(0, t);
};

const dynamicInitializationElement = (t, n, o, s) => {
  const e = isUndefined(s) ? o : s;
  const c = resolveInitialization(t, e);
  return !!c && (isHTMLElement(c) ? c : n.apply(0, t));
};

const cancelInitialization = (t, n, o) => {
  const {nativeScrollbarsOverlaid: s, body: e} = o || {};
  const {A: c, I: r} = getEnvironment();
  const {nativeScrollbarsOverlaid: i, body: l} = n;
  const a = null != s ? s : i;
  const u = isUndefined(e) ? l : e;
  const d = (c.x || c.y) && a;
  const f = t && (isNull(u) ? !r : u);
  return !!d || !!f;
};

const It = new WeakMap;

const addInstance = (t, n) => {
  It.set(t, n);
};

const removeInstance = t => {
  It.delete(t);
};

const getInstance = t => It.get(t);

const getPropByPath = (t, n) => t ? n.split(".").reduce(((t, n) => t && hasOwnProperty(t, n) ? t[n] : void 0), t) : void 0;

const createOptionCheck = (t, n, o) => s => [ getPropByPath(t, s), o || void 0 !== getPropByPath(n, s) ];

const createState = t => {
  let n = t;
  return [ () => n, t => {
    n = assignDeep({}, n, t);
  } ];
};

const At = "tabindex";

const Lt = createDiv.bind(0, "");

const unwrap = t => {
  appendChildren(parent(t), contents(t));
  removeElements(t);
};

const createStructureSetupElements = t => {
  const n = getEnvironment();
  const {N: o, I: s} = n;
  const e = getPlugins()[Ct];
  const c = e && e.T;
  const {elements: r} = o();
  const {host: i, padding: l, viewport: a, content: u} = r;
  const d = isHTMLElement(t);
  const f = d ? {} : t;
  const {elements: _} = f;
  const {host: h, padding: v, viewport: g, content: w} = _ || {};
  const p = d ? t : f.target;
  const b = is(p, "textarea");
  const m = p.ownerDocument;
  const y = m.documentElement;
  const S = p === m.body;
  const x = m.defaultView;
  const $ = staticInitializationElement.bind(0, [ p ]);
  const C = dynamicInitializationElement.bind(0, [ p ]);
  const I = resolveInitialization.bind(0, [ p ]);
  const A = $.bind(0, Lt, a);
  const L = C.bind(0, Lt, u);
  const M = A(g);
  const k = M === p;
  const B = k && S;
  const V = !k && L(w);
  const Y = !k && isHTMLElement(M) && M === V;
  const j = Y && !!I(u);
  const N = j ? A() : M;
  const q = j ? V : L();
  const F = Y ? N : M;
  const G = B ? y : F;
  const X = b ? $(Lt, i, h) : p;
  const U = B ? G : X;
  const W = Y ? q : V;
  const Z = m.activeElement;
  const J = !k && x.top === x && Z === p;
  const K = {
    W: p,
    Z: U,
    J: G,
    K: !k && C(Lt, l, v),
    tt: W,
    nt: !k && !s && c && c(n),
    ot: B ? y : G,
    st: B ? m : G,
    et: x,
    ct: m,
    rt: b,
    it: S,
    lt: d,
    ut: k,
    dt: Y,
    ft: (t, n) => k ? hasAttrClass(G, O, n) : hasClass(G, t),
    _t: (t, n, o) => k ? attrClass(G, O, n, o) : (o ? addClass : removeClass)(G, t)
  };
  const Q = keys(K).reduce(((t, n) => {
    const o = K[n];
    return push(t, o && !parent(o) ? o : false);
  }), []);
  const elementIsGenerated = t => t ? indexOf(Q, t) > -1 : null;
  const {W: tt, Z: nt, K: ot, J: st, tt: et, nt: ct} = K;
  const rt = [ () => {
    removeAttr(nt, O);
    removeAttr(nt, z);
    removeAttr(tt, z);
    if (S) {
      removeAttr(y, O);
      removeAttr(y, z);
    }
  } ];
  const it = b && elementIsGenerated(nt);
  let lt = b ? tt : contents([ et, st, ot, nt, tt ].find((t => false === elementIsGenerated(t))));
  const at = B ? tt : et || st;
  const appendElements = () => {
    attr(nt, O, k ? "viewport" : "host");
    const t = addClass(ot, H);
    const n = addClass(st, !k && P);
    const o = addClass(et, D);
    const e = S && !k ? addClass(parent(p), R) : noop;
    if (it) {
      insertAfter(tt, nt);
      push(rt, (() => {
        insertAfter(nt, tt);
        removeElements(nt);
      }));
    }
    appendChildren(at, lt);
    appendChildren(nt, ot);
    appendChildren(ot || nt, !k && st);
    appendChildren(st, et);
    push(rt, (() => {
      e();
      removeAttr(st, T);
      removeAttr(st, E);
      if (elementIsGenerated(et)) {
        unwrap(et);
      }
      if (elementIsGenerated(st)) {
        unwrap(st);
      }
      if (elementIsGenerated(ot)) {
        unwrap(ot);
      }
      t();
      n();
      o();
    }));
    if (s && !k) {
      push(rt, removeClass.bind(0, st, R));
    }
    if (ct) {
      insertBefore(st, ct);
      push(rt, removeElements.bind(0, ct));
    }
    if (J) {
      const t = attr(st, At);
      attr(st, At, "-1");
      st.focus();
      const revertViewportTabIndex = () => t ? attr(st, At, t) : removeAttr(st, At);
      const n = on(m, "pointerdown keydown", (() => {
        revertViewportTabIndex();
        n();
      }));
      push(rt, [ revertViewportTabIndex, n ]);
    } else if (Z && Z.focus) {
      Z.focus();
    }
    lt = 0;
  };
  return [ K, appendElements, runEachAndClear.bind(0, rt) ];
};

const createTrinsicUpdateSegment = (t, n) => {
  const {tt: o} = t;
  const [s] = n;
  return t => {
    const {V: n} = getEnvironment();
    const {ht: e} = s();
    const {vt: c} = t;
    const r = (o || !n) && c;
    if (r) {
      style(o, {
        height: e ? "" : "100%"
      });
    }
    return {
      gt: r,
      wt: r
    };
  };
};

const createPaddingUpdateSegment = (t, n) => {
  const [o, s] = n;
  const {Z: e, K: c, J: r, ut: i} = t;
  const [l, a] = createCache({
    u: equalTRBL,
    o: topRightBottomLeft()
  }, topRightBottomLeft.bind(0, e, "padding", ""));
  return (t, n, e) => {
    let [u, d] = a(e);
    const {I: f, V: _} = getEnvironment();
    const {bt: h} = o();
    const {gt: v, wt: g, yt: w} = t;
    const [p, b] = n("paddingAbsolute");
    const m = !_ && g;
    if (v || d || m) {
      [u, d] = l(e);
    }
    const y = !i && (b || w || d);
    if (y) {
      const t = !p || !c && !f;
      const n = u.r + u.l;
      const o = u.t + u.b;
      const e = {
        marginRight: t && !h ? -n : 0,
        marginBottom: t ? -o : 0,
        marginLeft: t && h ? -n : 0,
        top: t ? -u.t : 0,
        right: t ? h ? -u.r : "auto" : 0,
        left: t ? h ? "auto" : -u.l : 0,
        width: t ? `calc(100% + ${n}px)` : ""
      };
      const i = {
        paddingTop: t ? u.t : 0,
        paddingRight: t ? u.r : 0,
        paddingBottom: t ? u.b : 0,
        paddingLeft: t ? u.l : 0
      };
      style(c || r, e);
      style(r, i);
      s({
        K: u,
        St: !t,
        P: c ? i : assignDeep({}, e, i)
      });
    }
    return {
      xt: y
    };
  };
};

const {max: Ht} = Math;

const Pt = Ht.bind(0, 0);

const Mt = "visible";

const Dt = "hidden";

const Rt = 42;

const kt = {
  u: equalWH,
  o: {
    w: 0,
    h: 0
  }
};

const Bt = {
  u: equalXY,
  o: {
    x: Dt,
    y: Dt
  }
};

const getOverflowAmount = (t, n) => {
  const o = window.devicePixelRatio % 1 !== 0 ? 1 : 0;
  const s = {
    w: Pt(t.w - n.w),
    h: Pt(t.h - n.h)
  };
  return {
    w: s.w > o ? s.w : 0,
    h: s.h > o ? s.h : 0
  };
};

const conditionalClass = (t, n, o) => o ? addClass(t, n) : removeClass(t, n);

const overflowIsVisible = t => 0 === t.indexOf(Mt);

const createOverflowUpdateSegment = (t, n) => {
  const [o, s] = n;
  const {Z: e, K: c, J: r, nt: i, ut: l, _t: a, it: u, et: d} = t;
  const {k: f, V: _, I: h, A: v} = getEnvironment();
  const g = getPlugins()[Ct];
  const w = !l && !h && (v.x || v.y);
  const p = u && l;
  const [b, m] = createCache(kt, fractionalSize.bind(0, r));
  const [y, S] = createCache(kt, scrollSize.bind(0, r));
  const [x, $] = createCache(kt);
  const [C, z] = createCache(kt);
  const [L] = createCache(Bt);
  const fixFlexboxGlue = (t, n) => {
    style(r, {
      height: ""
    });
    if (n) {
      const {St: n, K: s} = o();
      const {$t: c, M: i} = t;
      const l = fractionalSize(e);
      const a = clientSize(e);
      const u = "content-box" === style(r, "boxSizing");
      const d = n || u ? s.b + s.t : 0;
      const f = !(v.x && u);
      style(r, {
        height: a.h + l.h + (c.x && f ? i.x : 0) - d
      });
    }
  };
  const getViewportOverflowState = (t, n) => {
    const o = !h && !t ? Rt : 0;
    const getStatePerAxis = (t, s, e) => {
      const c = style(r, t);
      const i = n ? n[t] : c;
      const l = "scroll" === i;
      const a = s ? o : e;
      const u = l && !h ? a : 0;
      const d = s && !!o;
      return [ c, l, u, d ];
    };
    const [s, e, c, i] = getStatePerAxis("overflowX", v.x, f.x);
    const [l, a, u, d] = getStatePerAxis("overflowY", v.y, f.y);
    return {
      Ct: {
        x: s,
        y: l
      },
      $t: {
        x: e,
        y: a
      },
      M: {
        x: c,
        y: u
      },
      D: {
        x: i,
        y: d
      }
    };
  };
  const setViewportOverflowState = (t, n, o, s) => {
    const setAxisOverflowStyle = (t, n) => {
      const o = overflowIsVisible(t);
      const s = n && o && t.replace(`${Mt}-`, "") || "";
      return [ n && !o ? t : "", overflowIsVisible(s) ? "hidden" : s ];
    };
    const [e, c] = setAxisOverflowStyle(o.x, n.x);
    const [r, i] = setAxisOverflowStyle(o.y, n.y);
    s.overflowX = c && r ? c : e;
    s.overflowY = i && e ? i : r;
    return getViewportOverflowState(t, s);
  };
  const hideNativeScrollbars = (t, n, s, e) => {
    const {M: c, D: r} = t;
    const {x: i, y: l} = r;
    const {x: a, y: u} = c;
    const {P: d} = o();
    const f = n ? "marginLeft" : "marginRight";
    const _ = n ? "paddingLeft" : "paddingRight";
    const h = d[f];
    const v = d.marginBottom;
    const g = d[_];
    const w = d.paddingBottom;
    e.width = `calc(100% + ${u + -1 * h}px)`;
    e[f] = -u + h;
    e.marginBottom = -a + v;
    if (s) {
      e[_] = g + (l ? u : 0);
      e.paddingBottom = w + (i ? a : 0);
    }
  };
  const [H, P] = g ? g.H(w, _, r, i, o, getViewportOverflowState, hideNativeScrollbars) : [ () => w, () => [ noop ] ];
  return (t, n, i) => {
    const {gt: u, Ot: f, wt: g, xt: w, vt: M, yt: D} = t;
    const {ht: B, bt: V} = o();
    const [Y, j] = n("showNativeOverlaidScrollbars");
    const [N, q] = n("overflow");
    const F = Y && v.x && v.y;
    const G = !l && !_ && (u || g || f || j || M);
    const X = overflowIsVisible(N.x);
    const U = overflowIsVisible(N.y);
    const W = X || U;
    let Z = m(i);
    let J = S(i);
    let K = $(i);
    let Q = z(i);
    let tt;
    if (j && h) {
      a(R, A, !F);
    }
    if (G) {
      tt = getViewportOverflowState(F);
      fixFlexboxGlue(tt, B);
    }
    if (u || w || g || D || j) {
      if (W) {
        a(k, I, false);
      }
      const [t, n] = P(F, V, tt);
      const [o, s] = Z = b(i);
      const [e, c] = J = y(i);
      const l = clientSize(r);
      let u = e;
      let f = l;
      t();
      if ((c || s || j) && n && !F && H(n, e, o, V)) {
        f = clientSize(r);
        u = scrollSize(r);
      }
      const _ = {
        w: Pt(Ht(e.w, u.w) + o.w),
        h: Pt(Ht(e.h, u.h) + o.h)
      };
      const h = {
        w: Pt((p ? d.innerWidth : f.w + Pt(l.w - e.w)) + o.w),
        h: Pt((p ? d.innerHeight + o.h : f.h + Pt(l.h - e.h)) + o.h)
      };
      Q = C(h);
      K = x(getOverflowAmount(_, h), i);
    }
    const [nt, ot] = Q;
    const [st, et] = K;
    const [ct, rt] = J;
    const [it, lt] = Z;
    const at = {
      x: st.w > 0,
      y: st.h > 0
    };
    const ut = X && U && (at.x || at.y) || X && at.x && !at.y || U && at.y && !at.x;
    if (w || D || lt || rt || ot || et || q || j || G) {
      const t = {
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        width: "",
        overflowY: "",
        overflowX: ""
      };
      const n = setViewportOverflowState(F, at, N, t);
      const o = H(n, ct, it, V);
      if (!l) {
        hideNativeScrollbars(n, V, o, t);
      }
      if (G) {
        fixFlexboxGlue(n, B);
      }
      if (l) {
        attr(e, T, t.overflowX);
        attr(e, E, t.overflowY);
      } else {
        style(r, t);
      }
    }
    attrClass(e, O, I, ut);
    conditionalClass(c, k, ut);
    !l && conditionalClass(r, k, W);
    const [dt, ft] = L(getViewportOverflowState(F).Ct);
    s({
      Ct: dt,
      zt: {
        x: nt.w,
        y: nt.h
      },
      Tt: {
        x: st.w,
        y: st.h
      },
      Et: at
    });
    return {
      It: ft,
      At: ot,
      Lt: et
    };
  };
};

const prepareUpdateHints = (t, n, o) => {
  const s = {};
  const e = n || {};
  const c = keys(t).concat(keys(e));
  each(c, (n => {
    const c = t[n];
    const r = e[n];
    s[n] = !!(o || c || r);
  }));
  return s;
};

const createStructureSetupUpdate = (t, n) => {
  const {W: o, J: s, _t: e, ut: c} = t;
  const {I: r, A: i, V: l} = getEnvironment();
  const a = !r && (i.x || i.y);
  const u = [ createTrinsicUpdateSegment(t, n), createPaddingUpdateSegment(t, n), createOverflowUpdateSegment(t, n) ];
  return (t, n, r) => {
    const i = prepareUpdateHints(assignDeep({
      gt: false,
      xt: false,
      yt: false,
      vt: false,
      At: false,
      Lt: false,
      It: false,
      Ot: false,
      wt: false
    }, n), {}, r);
    const d = a || !l;
    const f = d && scrollLeft(s);
    const _ = d && scrollTop(s);
    e("", L, true);
    let h = i;
    each(u, (n => {
      h = prepareUpdateHints(h, n(h, t, !!r) || {}, r);
    }));
    scrollLeft(s, f);
    scrollTop(s, _);
    e("", L);
    if (!c) {
      scrollLeft(o, 0);
      scrollTop(o, 0);
    }
    return h;
  };
};

const createEventContentChange = (t, n, o) => {
  let s;
  let e = false;
  const destroy = () => {
    e = true;
  };
  const updateElements = c => {
    if (o) {
      const r = o.reduce(((n, o) => {
        if (o) {
          const [s, e] = o;
          const r = e && s && (c ? c(s) : find(s, t));
          if (r && r.length && e && isString(e)) {
            push(n, [ r, e.trim() ], true);
          }
        }
        return n;
      }), []);
      each(r, (o => each(o[0], (c => {
        const r = o[1];
        const i = s.get(c) || [];
        const l = t.contains(c);
        if (l) {
          const t = on(c, r, (o => {
            if (e) {
              t();
              s.delete(c);
            } else {
              n(o);
            }
          }));
          s.set(c, push(i, t));
        } else {
          runEachAndClear(i);
          s.delete(c);
        }
      }))));
    }
  };
  if (o) {
    s = new WeakMap;
    updateElements();
  }
  return [ destroy, updateElements ];
};

const createDOMObserver = (t, n, o, s) => {
  let e = false;
  const {Ht: c, Pt: r, Mt: i, Dt: a, Rt: u, kt: d} = s || {};
  const f = debounce((() => {
    if (e) {
      o(true);
    }
  }), {
    v: 33,
    g: 99
  });
  const [_, h] = createEventContentChange(t, f, i);
  const v = c || [];
  const g = r || [];
  const w = v.concat(g);
  const observerCallback = (e, c) => {
    const r = u || noop;
    const i = d || noop;
    const l = new Set;
    const f = new Set;
    let _ = false;
    let v = false;
    each(e, (o => {
      const {attributeName: e, target: c, type: u, oldValue: d, addedNodes: h, removedNodes: w} = o;
      const p = "attributes" === u;
      const b = "childList" === u;
      const m = t === c;
      const y = p && isString(e) ? attr(c, e) : 0;
      const S = 0 !== y && d !== y;
      const x = indexOf(g, e) > -1 && S;
      if (n && (b || !m)) {
        const n = !p;
        const u = p && S;
        const f = u && a && is(c, a);
        const _ = f ? !r(c, e, d, y) : n || u;
        const g = _ && !i(o, !!f, t, s);
        each(h, (t => l.add(t)));
        each(w, (t => l.add(t)));
        v = v || g;
      }
      if (!n && m && S && !r(c, e, d, y)) {
        f.add(e);
        _ = _ || x;
      }
    }));
    if (l.size > 0) {
      h((t => from(l).reduce(((n, o) => {
        push(n, find(t, o));
        return is(o, t) ? push(n, o) : n;
      }), [])));
    }
    if (n) {
      !c && v && o(false);
      return [ false ];
    }
    if (f.size > 0 || _) {
      const t = [ from(f), _ ];
      !c && o.apply(0, t);
      return t;
    }
  };
  const p = new l((t => observerCallback(t)));
  p.observe(t, {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: w,
    subtree: n,
    childList: n,
    characterData: n
  });
  e = true;
  return [ () => {
    if (e) {
      _();
      p.disconnect();
      e = false;
    }
  }, () => {
    if (e) {
      f.m();
      const t = p.takeRecords();
      return !isEmptyArray(t) && observerCallback(t, true);
    }
  } ];
};

const Vt = 3333333;

const domRectHasDimensions = t => t && (t.height || t.width);

const createSizeObserver = (t, n, o) => {
  const {Bt: s = false, Vt: e = false} = o || {};
  const c = getPlugins()[mt];
  const {B: r} = getEnvironment();
  const i = createDOM(`<div class="${B}"><div class="${Y}"></div></div>`);
  const l = i[0];
  const a = l.firstChild;
  const d = directionIsRTL.bind(0, t);
  const [f] = createCache({
    o: void 0,
    _: true,
    u: (t, n) => !(!t || !domRectHasDimensions(t) && domRectHasDimensions(n))
  });
  const onSizeChangedCallbackProxy = t => {
    const o = isArray(t) && t.length > 0 && isObject(t[0]);
    const e = !o && isBoolean(t[0]);
    let c = false;
    let i = false;
    let a = true;
    if (o) {
      const [n, , o] = f(t.pop().contentRect);
      const s = domRectHasDimensions(n);
      const e = domRectHasDimensions(o);
      c = !o || !s;
      i = !e && s;
      a = !c;
    } else if (e) {
      [, a] = t;
    } else {
      i = true === t;
    }
    if (s && a) {
      const n = e ? t[0] : directionIsRTL(l);
      scrollLeft(l, n ? r.n ? -Vt : r.i ? 0 : Vt : Vt);
      scrollTop(l, Vt);
    }
    if (!c) {
      n({
        gt: !e,
        Yt: e ? t : void 0,
        Vt: !!i
      });
    }
  };
  const _ = [];
  let h = e ? onSizeChangedCallbackProxy : false;
  return [ () => {
    runEachAndClear(_);
    removeElements(l);
  }, () => {
    if (u) {
      const t = new u(onSizeChangedCallbackProxy);
      t.observe(a);
      push(_, (() => {
        t.disconnect();
      }));
    } else if (c) {
      const [t, n] = c.O(a, onSizeChangedCallbackProxy, e);
      h = t;
      push(_, n);
    }
    if (s) {
      const [t] = createCache({
        o: void 0
      }, d);
      push(_, on(l, "scroll", (n => {
        const o = t();
        const [s, e, c] = o;
        if (e) {
          removeClass(a, "ltr rtl");
          if (s) {
            addClass(a, "rtl");
          } else {
            addClass(a, "ltr");
          }
          onSizeChangedCallbackProxy([ !!s, e, c ]);
        }
        stopPropagation(n);
      })));
    }
    if (h) {
      addClass(l, V);
      push(_, on(l, "animationstart", h, {
        C: !!u
      }));
    }
    if (u || c) {
      appendChildren(t, l);
    }
  } ];
};

const isHeightIntrinsic = t => 0 === t.h || t.isIntersecting || t.intersectionRatio > 0;

const createTrinsicObserver = (t, n) => {
  let o;
  const s = createDiv(F);
  const e = [];
  const [c] = createCache({
    o: false
  });
  const triggerOnTrinsicChangedCallback = (t, o) => {
    if (t) {
      const s = c(isHeightIntrinsic(t));
      const [, e] = s;
      if (e) {
        !o && n(s);
        return [ s ];
      }
    }
  };
  const intersectionObserverCallback = (t, n) => {
    if (t && t.length > 0) {
      return triggerOnTrinsicChangedCallback(t.pop(), n);
    }
  };
  return [ () => {
    runEachAndClear(e);
    removeElements(s);
  }, () => {
    if (a) {
      o = new a((t => intersectionObserverCallback(t)), {
        root: t
      });
      o.observe(s);
      push(e, (() => {
        o.disconnect();
      }));
    } else {
      const onSizeChanged = () => {
        const t = offsetSize(s);
        triggerOnTrinsicChangedCallback(t);
      };
      const [t, n] = createSizeObserver(s, onSizeChanged);
      push(e, t);
      n();
      onSizeChanged();
    }
    appendChildren(t, s);
  }, () => {
    if (o) {
      return intersectionObserverCallback(o.takeRecords(), true);
    }
  } ];
};

const Yt = `[${O}]`;

const jt = `.${P}`;

const Nt = [ "tabindex" ];

const qt = [ "wrap", "cols", "rows" ];

const Ft = [ "id", "class", "style", "open" ];

const createStructureSetupObservers = (t, n, o) => {
  let s;
  let e;
  let c;
  const {Z: r, J: i, tt: l, rt: a, ut: d, ft: f, _t: _} = t;
  const {V: h} = getEnvironment();
  const [v] = createCache({
    u: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, (() => {
    const t = f(k, I);
    const n = f(M, "");
    const o = n && scrollLeft(i);
    const s = n && scrollTop(i);
    _(k, I);
    _(M, "");
    _("", L, true);
    const e = scrollSize(l);
    const c = scrollSize(i);
    const r = fractionalSize(i);
    _(k, I, t);
    _(M, "", n);
    _("", L);
    scrollLeft(i, o);
    scrollTop(i, s);
    return {
      w: c.w + e.w + r.w,
      h: c.h + e.h + r.h
    };
  }));
  const g = a ? qt : Ft.concat(qt);
  const w = debounce(o, {
    v: () => s,
    g: () => e,
    p(t, n) {
      const [o] = t;
      const [s] = n;
      return [ keys(o).concat(keys(s)).reduce(((t, n) => {
        t[n] = o[n] || s[n];
        return t;
      }), {}) ];
    }
  });
  const updateViewportAttrsFromHost = t => {
    each(t || Nt, (t => {
      if (indexOf(Nt, t) > -1) {
        const n = attr(r, t);
        if (isString(n)) {
          attr(i, t, n);
        } else {
          removeAttr(i, t);
        }
      }
    }));
  };
  const onTrinsicChanged = (t, s) => {
    const [e, c] = t;
    const r = {
      vt: c
    };
    n({
      ht: e
    });
    !s && o(r);
    return r;
  };
  const onSizeChanged = ({gt: t, Yt: s, Vt: e}) => {
    const c = !t || e ? o : w;
    let r = false;
    if (s) {
      const [t, o] = s;
      r = o;
      n({
        bt: t
      });
    }
    c({
      gt: t,
      yt: r
    });
  };
  const onContentMutation = (t, n) => {
    const [, s] = v();
    const e = {
      wt: s
    };
    const c = t ? o : w;
    if (s) {
      !n && c(e);
    }
    return e;
  };
  const onHostMutation = (t, n, o) => {
    const s = {
      Ot: n
    };
    if (n) {
      !o && w(s);
    } else if (!d) {
      updateViewportAttrsFromHost(t);
    }
    return s;
  };
  const [p, b, m] = l || !h ? createTrinsicObserver(r, onTrinsicChanged) : [ noop, noop, noop ];
  const [y, S] = !d ? createSizeObserver(r, onSizeChanged, {
    Vt: true,
    Bt: true
  }) : [ noop, noop ];
  const [x, $] = createDOMObserver(r, false, onHostMutation, {
    Pt: Ft,
    Ht: Ft.concat(Nt)
  });
  const C = d && u && new u(onSizeChanged.bind(0, {
    gt: true
  }));
  C && C.observe(r);
  updateViewportAttrsFromHost();
  return [ () => {
    p();
    y();
    c && c[0]();
    C && C.disconnect();
    x();
  }, () => {
    S();
    b();
  }, () => {
    const t = {};
    const n = $();
    const o = m();
    const s = c && c[1]();
    if (n) {
      assignDeep(t, onHostMutation.apply(0, push(n, true)));
    }
    if (o) {
      assignDeep(t, onTrinsicChanged.apply(0, push(o, true)));
    }
    if (s) {
      assignDeep(t, onContentMutation.apply(0, push(s, true)));
    }
    return t;
  }, t => {
    const [n] = t("update.ignoreMutation");
    const [o, r] = t("update.attributes");
    const [a, u] = t("update.elementEvents");
    const [f, _] = t("update.debounce");
    const h = u || r;
    const ignoreMutationFromOptions = t => isFunction(n) && n(t);
    if (h) {
      if (c) {
        c[1]();
        c[0]();
      }
      c = createDOMObserver(l || i, true, onContentMutation, {
        Ht: g.concat(o || []),
        Mt: a,
        Dt: Yt,
        kt: (t, n) => {
          const {target: o, attributeName: s} = t;
          const e = !n && s && !d ? liesBetween(o, Yt, jt) : false;
          return e || !!closest(o, `.${U}`) || !!ignoreMutationFromOptions(t);
        }
      });
    }
    if (_) {
      w.m();
      if (isArray(f)) {
        const t = f[0];
        const n = f[1];
        s = isNumber(t) && t;
        e = isNumber(n) && n;
      } else if (isNumber(f)) {
        s = f;
        e = false;
      } else {
        s = false;
        e = false;
      }
    }
  } ];
};

const Gt = {
  x: 0,
  y: 0
};

const createInitialStructureSetupUpdateState = t => ({
  K: {
    t: 0,
    r: 0,
    b: 0,
    l: 0
  },
  St: false,
  P: {
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0
  },
  zt: Gt,
  Tt: Gt,
  Ct: {
    x: "hidden",
    y: "hidden"
  },
  Et: {
    x: false,
    y: false
  },
  ht: false,
  bt: directionIsRTL(t.Z)
});

const createStructureSetup = (t, n) => {
  const o = createOptionCheck(n, {});
  const [s, e, c] = createEventListenerHub();
  const [r, i, l] = createStructureSetupElements(t);
  const a = createState(createInitialStructureSetupUpdateState(r));
  const [u, d] = a;
  const f = createStructureSetupUpdate(r, a);
  const triggerUpdateEvent = (t, n, o) => {
    const s = keys(t).some((n => t[n]));
    const e = s || !isEmptyObject(n) || o;
    if (e) {
      c("u", [ t, n, o ]);
    }
    return e;
  };
  const [_, h, v, g] = createStructureSetupObservers(r, d, (t => triggerUpdateEvent(f(o, t), {}, false)));
  const w = u.bind(0);
  w.jt = t => s("u", t);
  w.Nt = () => {
    const {W: t, J: n} = r;
    const o = scrollLeft(t);
    const s = scrollTop(t);
    h();
    i();
    scrollLeft(n, o);
    scrollTop(n, s);
  };
  w.qt = r;
  return [ (t, o) => {
    const s = createOptionCheck(n, t, o);
    g(s);
    return triggerUpdateEvent(f(s, v(), o), t, !!o);
  }, w, () => {
    e();
    _();
    l();
  } ];
};

const {round: Xt} = Math;

const getScale = t => {
  const {width: n, height: o} = getBoundingClientRect(t);
  const {w: s, h: e} = offsetSize(t);
  return {
    x: Xt(n) / s || 1,
    y: Xt(o) / e || 1
  };
};

const continuePointerDown = (t, n, o) => {
  const s = n.scrollbars;
  const {button: e, isPrimary: c, pointerType: r} = t;
  const {pointers: i} = s;
  return 0 === e && c && s[o ? "dragScroll" : "clickScroll"] && (i || []).includes(r);
};

const createRootClickStopPropagationEvents = (t, n) => on(t, "mousedown", on.bind(0, n, "click", stopPropagation, {
  C: true,
  $: true
}), {
  $: true
});

const Ut = "pointerup pointerleave pointercancel lostpointercapture";

const createInteractiveScrollEvents = (t, n, o, s, e, c) => {
  const {B: r} = getEnvironment();
  const {Ft: i, Gt: l, Xt: a} = o;
  const u = `scroll${c ? "Left" : "Top"}`;
  const d = `client${c ? "X" : "Y"}`;
  const f = c ? "width" : "height";
  const _ = c ? "left" : "top";
  const h = c ? "w" : "h";
  const v = c ? "x" : "y";
  const createRelativeHandleMove = (t, n) => o => {
    const {Tt: d} = e();
    const f = offsetSize(l)[h] - offsetSize(i)[h];
    const _ = n * o / f;
    const g = _ * d[v];
    const w = directionIsRTL(a);
    const p = w && c ? r.n || r.i ? 1 : -1 : 1;
    s[u] = t + g * p;
  };
  return on(l, "pointerdown", (o => {
    const e = closest(o.target, `.${Q}`) === i;
    const c = e ? i : l;
    if (continuePointerDown(o, t, e)) {
      const t = !e && o.shiftKey;
      const getHandleRect = () => getBoundingClientRect(i);
      const getTrackRect = () => getBoundingClientRect(l);
      const getHandleOffset = (t, n) => (t || getHandleRect())[_] - (n || getTrackRect())[_];
      const a = o[d];
      const h = getHandleRect();
};