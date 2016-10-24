webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(172);

	var _reactRedux = __webpack_require__(235);

	var _Root = __webpack_require__(263);

	var _Root2 = _interopRequireDefault(_Root);

	var _CongestionIndex = __webpack_require__(264);

	var _CongestionIndex2 = _interopRequireDefault(_CongestionIndex);

	var _TrafficGuidance = __webpack_require__(302);

	var _TrafficGuidance2 = _interopRequireDefault(_TrafficGuidance);

	var _index = __webpack_require__(303);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _index2.default)();

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(
	        _reactRouter.Router,
	        { history: _reactRouter.hashHistory },
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: '/', component: _Root2.default },
	            _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/CI' }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/CI', component: _CongestionIndex2.default }),
	            _react2.default.createElement(_reactRouter.Route, { path: '/TG', component: _TrafficGuidance2.default })
	        )
	    )
	), document.getElementById('root'));

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(236);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(239);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(237);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(238);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },

/***/ 238:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(237);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(240);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(241);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(238);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(256);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(261);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(262);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 240:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(242);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(243);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(251);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(253);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(254);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(255);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(252);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(244);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(249);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(245),
	    isHostObject = __webpack_require__(247),
	    isObjectLike = __webpack_require__(248);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(246);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);

	module.exports = getPrototype;


/***/ },

/***/ 246:
/***/ function(module, exports) {

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },

/***/ 247:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },

/***/ 248:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(250)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 250:
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(243);

	var _isPlainObject = __webpack_require__(244);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(252);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 252:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 253:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(255);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },

/***/ 255:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(257),
	    isHostObject = __webpack_require__(259),
	    isObjectLike = __webpack_require__(260);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(258);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);

	module.exports = getPrototype;


/***/ },

/***/ 258:
/***/ function(module, exports) {

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },

/***/ 259:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },

/***/ 260:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },

/***/ 261:
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Root = function (_React$Component) {
	    _inherits(Root, _React$Component);

	    function Root() {
	        _classCallCheck(this, Root);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).apply(this, arguments));
	    }

	    _createClass(Root, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);

	    return Root;
	}(_react2.default.Component);

	exports.default = Root;

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Search = __webpack_require__(265);

	var _Search2 = _interopRequireDefault(_Search);

	var _ToolBar = __webpack_require__(276);

	var _ToolBar2 = _interopRequireDefault(_ToolBar);

	var _Rbox = __webpack_require__(287);

	var _Rbox2 = _interopRequireDefault(_Rbox);

	var _Map = __webpack_require__(297);

	var _Map2 = _interopRequireDefault(_Map);

	var _Collection = __webpack_require__(298);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _Emap = __webpack_require__(301);

	var _Emap2 = _interopRequireDefault(_Emap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CongestionIndex = function (_React$Component) {
	    _inherits(CongestionIndex, _React$Component);

	    function CongestionIndex() {
	        _classCallCheck(this, CongestionIndex);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CongestionIndex).apply(this, arguments));
	    }

	    _createClass(CongestionIndex, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Map2.default, null),
	                _react2.default.createElement(_Search2.default, null),
	                _react2.default.createElement(_ToolBar2.default, null),
	                _react2.default.createElement(_Rbox2.default, null),
	                _react2.default.createElement(_Collection2.default, null)
	            );
	        }
	    }]);

	    return CongestionIndex;
	}(_react2.default.Component);

	exports.default = CongestionIndex;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _leaflet = __webpack_require__(266);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _esriLeaflet = __webpack_require__(267);

	var _esriLeaflet2 = _interopRequireDefault(_esriLeaflet);

	var _search = __webpack_require__(269);

	var _search2 = _interopRequireDefault(_search);

	var _logo = __webpack_require__(273);

	var _logo2 = _interopRequireDefault(_logo);

	var _reactRedux = __webpack_require__(235);

	var _searchAction = __webpack_require__(274);

	var action = _interopRequireWildcard(_searchAction);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import { browserHistory } from 'react-router';

	var Search = function (_React$Component) {
	    _inherits(Search, _React$Component);

	    function Search() {
	        _classCallCheck(this, Search);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this));
	        //this.state = { val: '' }
	        //this.update = this.update.bind(this);
	    }

	    _createClass(Search, [{
	        key: 'update',
	        value: function update() {
	            var keyword = this.refs.searchVal.value;
	            if (keyword && keyword != '') this.props.fetchSearchList(keyword, 'search');else alert('请输入有效的搜索内容！');
	            //browserHistory.push('/TG');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'section',
	                { id: 'search', className: _search2.default.search },
	                _react2.default.createElement(
	                    'header',
	                    { className: _search2.default.searchbox },
	                    _react2.default.createElement('img', { className: _search2.default.logo, src: _logo2.default, draggable: 'false' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _search2.default.iptbox },
	                        _react2.default.createElement('input', { type: 'text', ref: 'searchVal', id: 'searchipt', placeholder: '搜索位置、公交站、地铁站', className: _search2.default.searchipt })
	                    ),
	                    _react2.default.createElement('span', { id: 'separator', className: _search2.default.separator }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _search2.default.direntry, id: 'searchbtn', title: '搜索', onClick: function onClick() {
	                                return _this2.update();
	                            } },
	                        _react2.default.createElement('i', { className: _search2.default.fa + ' ' + _search2.default.fa_search + ' ' + _search2.default.searchlogo }),
	                        _react2.default.createElement('span', { id: 'searchloading', className: _search2.default.ring })
	                    )
	                )
	            );
	        }
	    }]);

	    return Search;
	}(_react2.default.Component);

	function mapStateToProps(state) {
	    return {
	        search: state.search
	    };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, action)(Search);

/***/ },

/***/ 269:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"search":"_2Y7hnk_aRaXqOjychbBJbR","dtrigger":"_2wzZ5RxBD0mypTUwAL-uJL","searchbox":"_19twNYuoiX1KNxWSAZjtxa","searchipt":"_3mLqdEPtOUm8sbmIdICJHV","iptbox":"_1wKG8z8ml5y07Klv-B2tTY","logo":"_3oSdE8VDRbk4nt8N46LGgu","separator":"_25NVZ6Xe2jIXoLHfy433Ce","direntry":"_23I2PEB1vvpY2s8a4e-ye1","fa-dir":"_1R9RKqtxvF7wPS2wfV2yk8","searchbtn":"_2UZRrfLBtohu3sYMC9m3Ho","searchlogo":"_19c_zUEC__UR5CkJvXsywZ","fa":"Y1L6dN8JB1Bgrd5I3TlFm","fa-stack":"kCRM8Lkj7zg8Np3KHDvLX","jBox-wrapper":"_146KteSgb9hncvY4FuGS63","fa_search":"_39fB8NXuXTqasSx7gEdcR0"};

/***/ },

/***/ 273:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACQCAIAAABhz9WVAAAcCklEQVR4Ae1dCZQcxXme7umeYy9ptatd3ehGQtLqRAhJC9aBOALJczDBhAQDjnFiEiuQhwjiMuAcNg+HZ4FJzCM8xy+JFcCAOS0JETkG2bIBiUVIAgQrdB97zMzO7szuTHe+qr+np7dnpneOnp4RO/X29VZ3V/311//1f9TRPYKqqq5KOjslIBWDbf2B0DPFaMVGmoIggBodU8lSL3Lti05Nz6RSLvCKbeDpPURGZ5cy+mmBvBap+hWbe7Ok/Oq1VdmU1EWBwpSHBEgIdMyGSDZlCgVPZ5QwA3OiKGbT8Be4TCpOEA4Suoxj6t28RZE/eJwfdgA3SBXMLDAgERF4iqIgQ1dwtKg15K18wNNhA3VgViAHQ7L4RSoAWbndbvQIECIVCGFu4AE2ahjHCmyFPFVkqOLxOERK+Tx0IAfwdIVDM9ReIdxX6kIC0EJIlVQQp7nily141Aa1V5G7jRIAYIAwPxUcOjIk2ECdmrGR7wopXQLAD+IlCCFw/bp1ZgjwQAgJeg07WTGV1qIs8C7ECwghapJ5NtSswCMqFeSykaMtZci2ZY9fRvAIOSgyV7mMxWxhukJEl0BO+KVHRdc5KHLFWuqSdSYD/CDzbPxfRvCgvETFGY4rrRglQNaO7KfxuimfBjyoHaqhHNTOVLpy6pgESPjW+JnHeYQcjqiMo2O8nhUNOSwQQDAwMED2D8dUEQ3SPDCHRAYzbenU+pUrRZUA8LNwfoPAAx8Vg1lUMHIlDucHLSJQUusmwSOdQzmytqlFK1dKIgFSPuACgEwMmMHD7YrBNMmotKeAA/pnBR7zddzbSZI5hCkt65XWIQEoH4EHjIwC0TSPkMONitoZpVMmeQIlVfkYeEzpuNpVvF2ZoJXKRlrlS2oe8KuAlyq1Ylzp7+/PlawOnrEi83CkdhWDaZRLMfKQc09PD8bdMICNjY25NkFhCw0eqK4Iikggh6u5kquUz1ICGGh3d3cfOXb8YGf/0++FvV5vlhWNxXTlA150Pal5+VE0Uq/kUyUAPQuFQqcDvW8dc00YPeI/3w2cW6/6fL7UkkNeAXiwtzpyKC+R2lVs5pCyy7VANBoFbAfPRLa2K590i7eubHx8Z+B4WPizeX5ZlnOlRuUBE9lIwouBh5QfrUqttBLo7e0NhkK/O9q/rV3d26HOHeu//9L6B7Z3Hw+7RElaON6ftlY2F4GZES/NbFYcXjaysy4DsYbD4Y5Azxuf9m/7XD3dh2lJ97pzq29eUnfPtsCJXrZNbHKdUOvPU+3QOsUsyKAtAKmZzbwV2bo/w+Qu4hGEke2ne17/NPbro0JEEQVsJpLEGxfXXj7Dd+fWQHtAwRVIfH6TUIioyWyCDglWM5sVzbN+zmpkdcOFaUJEikfePdL7+mfx989gyU1yiW5RcvtlYUNr3dwmacOWYHtAxewkTV6dP14uRNSoC+TM4JEDtO7A8Lwri66vzHJfN8fjHrwaGolEuoKhNz7p3XbIdTQMVZNhFRlIgthYJT6wqrap2n3HlkB7d5wuQnqyqM4aXdDUse7zgB8zmwRJBbzUR1MUXJdMcd84T67zDsIN8cjRjtBLByI7jqi9MbcA+yhrsEGM5zZI919c7ZWEjdsYcpgsBpxYGICfmlkv+ORCwTPyqQUsuiYa7w3n/OIx4tfny5PqGGwknEhMiUf72o4EX/po4J3TguICYG5RlqBYum5dNEm6fZk/prju2tp9oAPIMdgYcoCQOTyYPWb3ChGssXpBD0IhTJRtXQAG2ACezmFnb/yFvcGXPww2+IVDIW6u2OZmN9wbw4b8mUu9bq7n+rne3gF149bAgY6YhpyIYoyUqqhLx8n2WjgWsOhcDvNMtSzcME+6bCp8lyaJQ10Dz7UFtn4cjjEX4w6HWTDC0AJsHDmmUi6XV1Rvu8DXOkkm5PafiXF947hCL10YnCk1smvSiOQDUYiodcgqmsfECLSA2fVzJN297T4WebYtsOvzPkSKgijB3MG3cQvp1nwYc2bMGI7yue5d6Z/Z4O6Pqw++Gdh/hu33YtAynQNh7UGY0yhIdm+l1HxeIQ/C2V7X6N4U1bXjYM8z7wc/7uhnILkR2XMlY0egyJADZgQJ9GnaSOH+Vl9DlQjk7t3WvefEgK6XrDqQ4wAzhzdaeye2QHHpagc6Fc1zPdDqgSAiA8or+0PPtwVPhjGgBmQezTZyzBgkBthQHshdOE7YsNyPMUQ0rt63rWv3cSDHtE10Sww5ilNQEmVVZfFYmx1eBTxIwNURjv28rfuVfaFwjJk70S1zAAzxiA4bqRGDTvmT2dLXWtiwnSG3tXM30zmJD/UMdpWRZzg3+FzNNfZvPx/WmocVlv3HQxu2BOIu7tgkeDVmHjWdI8xwRAJsHAaokexS1l/gXTWZTVFiVPDd7V0cOc2uMgoJnaMqzGY22WMzGUFDGqbg9Uaibx/s/sl74ROYPhY9zLGZ4hEeJTJBEWzIMG+jjvSo96z0zW5kcosp6kPbO3cd6ed1icJg5Fh9JHVBMxtb0ImNx+EFHuTfFer9xQfdz+2LRhSI28snRygkGRyP6JiRsDlyU+rU+1r9TdVMFxlyb3T+5nDUGjngDdQXNNuPHHiQWFxrYtTGZ6NsSGEN8/CZnv/aHXjzEMZsQAuwaUZSM5VGx2ZiG8ipytKxCE+q/BKzn4OQg8oyrU2rc0xfMeqv89ozwkPTRryY5iG2uvKZiInhwk9fviafxX5qN3t+hHh0Vm30hoU188al/zDY6R7EI12v7gv1xgQeiXghaFgx5tjYGM4QRqZ9iDlyV5/rvmm+j+7Den7vfzt3Ho7wCGUI5ABee3fsUMg3o4H17JrnI32xgkT7xBpxbGJ5gw0/kfCEFESyFJWFeP/5TfGbFlVPHDkibfufdkQ37+7a8Wkvj0dkXdUyxiMmKtxUSi7l1iWeddPYcAKJIbejY0c7Qw7L4lY6RxVcKuZWpo9i0U13VC0QORAhvMhYMrPJt7gPaG2dDf88QnzdOcLXFmBRWpu/MHH9zuHw5t3d7x6LcpOYXTxiIsGRq5PVu1f4sCxHN7nOndn+aYQN3hlyckZrySswd6eq85qg4uz8WMgGDQFYuptjmkecnRXHWlnF6trVs9IbZLii7R+H/mdPd3sXZhcx5c8spOFvKAupi4AjN7FG/c5F/jE1mnxyRY4RQx1VXThW09rjPTaAB+QAWVLzzgr8Gv2um1skrLnoEjZmwv3Kyx8Gnm8LdPSpzLEx2LKOR4yEuMQRniwZI9653F9l0OxHfgWd68tS5xhJjhxIzR+jbVphi0QFJx05UGKy0NWwYMqDCLDH1440rsb1lwulhTzaTqV5qicGzF7d39PHls/YrD+PSng8okeArId8mnFIftCAqlw13X3LQi/q6M1teqtzyyeEHFbMh7CWhkbYtPXEOu0FcQ5eejtvqDJE1ghW+gd5CAJO3Z4yQvjGAmne6PSG/eMz0Wf3dO/4rE/B48dgS5kfSR1oW3DOgFIRnnxzkXz5dM3QUfFNb3W8fCBn5MjhzW9OSvhEGE9zoeAZe5Akbbxa8jwWULBAkwm2XZ/3Pvt+93taPMIn/oecH7HuEkeuVlLvWu5tMYgblYDcS/t7RckjSlC4zOM5E31uMzEFumCMFtcDN8ydmkoVeFqm4P3zlwY9+9RJxCPbPgo990HwUBdbp07EIxAomxwZesSWSVQcuQnV6r2tvvG1g7T88bcTyLGHgw8MjPOWmQjSdZDFrGbC4e05jnh+eIBnEktPVHnpwwD2InTxeESQPPnHIybSTMLKgibhruX+as8g4T61q+vFfVzn2BwKXB1idLaYZyKQ9hQ2ExHLuBoBe8iowM4jUewfS1s474tM88B+3vWLXfFEaODnbYHXD/RE8MlIHo/wcfGgiX8ecWUXj5jY5chdPlX8q8U+rJwaE5Db3NaD5SEszuWKHNEB7QUGC9x2CqGmDeBxsDRetR3TRr7LJP/R6QgG2m8divB4hE9nwDayvZGJBbOc4hFTr5gMVFFVblkgXzXTbKKf2tW5uS3MkIOfy1HnWDtJh5ekfOHk6sP7bBgqYJKWvsmOdiScIL30lcR8mamTpTj97aHw5j3dbSf6uSezIx4x9YIjV+1W71zuXTTG7PWf/l3n5vd7tAglD+SoLYaf0pJweLhmywgddMA78KLRHtM8bLUvh3H6QFzd+lHwubbg593G+ZGC45F0yI2tUrH3ZELdoPAEBaHr/72nUOTI4U0ZKRoXE2yZGwOH/INICbMJGHFeyNsPJuHkcRqKxn+xN/DiB8FuOPUC50esm8ejqipzG4W7V/prB4cnqAfknvp9sFCd4wxAOxY0D/Jwj65NmlBrHq3vYps9fXcYo3VmNICfdYXi3T0RHMCI7Zcf9UQRj2DfOHZFsqDcpnjExDdH7pLJ4q1LfJJZ5VKQ02dnTESGPCWH58IgwWyQh6yaTQEjWNpbQtlUs7dMe0fkP97p/vWhXhdbGk2s19gVj5h4BWw8PLm5Rf7yrDQaYNY5NmpEWDQ4ADXRtDhV1Q0XyEvGDdI8i+I53WJPIHrDU1GeDgtu0Oy7h3t++k733lNsoxw2InBVY0NscxiZt+xMzbO+qn5RvWOZd+n4NP3FPvZ/N1rLwpBDW4ILNtNjnIQ0cWTXaZrO2EXaRAfzI1sPBJ95P3A4gLee9PUau+MRU6scuWY/9p54zxmRZiMJkNv0djdG/dqooDDkWOOqOm2kq8qTYpdNjNlxqoGna6IdNM00evvjGGi/uDcUxLdjsAFB9uHI1S67jQhmelmfo1eqMrtBwILqCC97m9tUE8g9tjNgL3IAbz5bfU3TnKn1wk+Lq3knQwNYGt3yMZbbYBXTxyNszgnJLiOpi4Qjt2qS8O3z04QnKKUjx4fhbJWHvc5jAxvqgqaibPTTe6ZnigXe/pN9P9sT2Pl5nxaP0HpNkeIRvTeUIQ1TlRvmuq+ZnSY8Qantn/Q8trNbcHuAHF8uYMhpj5GJWi6ncHh4k3bmKCdsJviyGTwYprc/63lmT+DD007FIybhMuOo+kTl75Z6lk1I3zsg9/CvOhly2kKPPcgxRlT1vEaXJ3UgYmLSptP03cuDOF6TeX1/8PkPgkeDcTZi0/aPFDkeMTHKkWv0Kfeu8E6tTxOeoDgh5xIJObBnJ3IAb95oBM5nj+YFIvEX2gIv73M8HkmH3MyR2I7ur/elH6KlIIePN9hgLQ2MqAubndvTVZDmHQ30w0K+cbAU8YhBYCzLw5OLJgjrl/rM321IlHy7PQxradA5jpx9C6Qw17Ue1+SRDqkdupUneJ090R//tuvNzygewSApEfrbsl6TEHe2/5mbU/70PPbBjUxVfnMo/A9vpkPOhvAy0aaqtoxmipw4L/r/fMDr6uqKRiJfnS0prqr/O8rWSGl+hPkPPMjgH0dn+sCdnFdQ1i/1tGbYFQgRAjm8zqMIMo9Q4OcSOmcjk+wBctThoV/5gFdfX9/X14eX29Yvk9Z0CP+2WzkdAVpskOQcbOCdIzfKo9670jt9VPrwxCHk0AxL6sImR383Kx/wwKbf78dHI2Ox2JLxYss48ScfxF87GFft8x9cFpYHjty0EQy5Bn9GN/Pu0b6i6xxnE3rXVOVqrHLOZqLZjN22lBy7CTXDKiCOPrfrW4s831vlnTB469WQFPIvwMOT5WNd31/ts0Bu97G+72w7U1xrSX3gNhO7mBwbJFCz+YOn1Wcemv3YKaYQN63zXjsboUv+oGRVk4cn18xy37UiY2AJOkDuvq1n+lVJkPhLIcXwc0Z2VXVuo0OzYnqzhYJHhIAflMHtiv/5XOkHa71TixQuc4WThfjtS6Ub5mUMLI3I6ZtlixpGwWZCAHjxHEmXrAMZzecxD2JHggpOHSH+y1rPc/tjP9sX67dhu1SCLcYieyV843LPrAarn4fbeyJy35bT/fjIXmKbc1GRI/7wFdQajxMrCQlxsP/2aJ6RIlunV+Iwa7Cisxtsos+Rwyvhj6xhyBmbM+UPnIoya+kkctzhtTThCbGps6YuZT4tVntQQezQ+v4qzzcXSv48Q9oE19xant+sIiYaXWXFMJDb+MvTvQrWnrRXCxzQOcYlRngNTkcraNZKFgnh5fOfvGA8HrtymvuxdV7jR/RyI8eR++OZ4j0rfD7+Mn+m6kbkaGuFM8jBmOMrqHP5Amwm3op0vVjgEbuAEFYU0/z4RNTfLpHhFXLoBocNQdD6xe4bW7AlxKrqJ2eSOsfWNPABKcz7ODXRc249zLQVe0W651CbsKKrzxGeuNSzYryVx0p2kjs5vBL+0EWeNVOG2IbV3tl/d8JaOo0cd3jzm/nnN5PcO5RzCDz0BipYJyt/f6G0cbk80npzPUcOr4QjPJkzegiwgdydr50Kxpifcxo5wggOr5HPDDoEWbIZ58CjMRBUcNlY4YnLvGsnZ0CFW8tFTerDq73N/FtDSWZTciVHDg6vWlan1bOZihTuin7BOfCoKxTI+MX4+iXSg61ys+nDNxy5P5wu3r/SZ3yZP60YDnWVWufAFptYYR/WLElyGjzqJAUy80e7Nq3zXDkdQSSeYCRFdMW/tdD9FwuGCE9A5FhwAH4uOIBX0UtkLcEEd3hO7nswPSIFDsFM1HI+9QjKN1qE1gmeH/6+P9Cn3nmhp6Upgzk10AZyG1491RERS4mcxg/bpVmML/oZupsxW2LwyFXgV8keXS1FFVdtFhuNByGHSWdnRwVGQcJc4EsdeHfZeNHJfInBo64CQo8kWM00J0RSPsgxjvhXUOn5SzDo6P/S+Lz8ungmHNv4esJallTnGP80pengRr9UoZ014AG5O145ebKX+7mSI8cFiTirpaTgaWYToV4qsOVzBcghQjlRTsjB4eErqCN9hf68TCFCPgs0L9hXdsgxiXOHV4joC69b7uDBJMT6gn80y1fnZ69hljC2HCRrGuFheO74Gp6RjXIHD78uCAFdMs332BU1K87hL/Y5tVZgFFNqXhLVOY1grZQCLGXbqRJJvYLdhfi2K7apNdbI97RW3b3CW595o19q9SJdgcObUS963SUOFM4C8IAc8MMsBkZUKyfK/3q5b+3kkg5PtUFCaVYSjI9jWYOHJQjYJcDGzBPfYwjW8f2U2y/wPHQx1hxKNrWBaAWfkyzVrJiOX1mDB4enI6dzTJnFY9w/usx/1Qx8ic90p+insJn4tewZ9RXNsxQ1HJ6uc6ZZKEShPrd6y3z3I6vlCZhddHacOqcBH4+xZN2Rm+WreTRvQNYyFTmsywNa2NWpdeqmS6Rrz3OLLsUJCDWHV+JBAj0b5QseDRJ0V6c/ygAVyAE2QhfXoXfXzRIfX+eZUu+ICjr+Kpfed1OmfMGjaMWkeTpypm7gdGy16werpK+34PMORVRBODzs2p5YW3qHhy6XO3gwmLrNtECOsIQbumq6+ORlntmjtFn/VIwLvzK/uTQ7VlI5L1PwoHbATI9WwDchBz+X2gfTFWxN+8eL5dvOd/swGrQ3kOEOr4T7Hkw9LVPw8NptWuR0LTR1w3SK8cPFE8WnLpfxu2lwkXZCyF48TxoDU7sOn7KpCvCiO3+Hm8/UHDQPEyvADwXAGxLpHDKZqqRer5Jcdy1z7zklPrwrFmYfxi80uofDG1fNtj4QV6ktOnDF+PhqmpeTUIrNIoJJNEGhCjI4ReSZd6N4be7pK+RLJtuhgmwZqJS2ygST5ntNV/OWlC0V9bE5qIEx8n+FUMaLBNhR+Ogaud4H5eF/eZDjFVscf3fZyCnBpCtfOWoegUfGPJsIxdg9i/zkOteTl8nXzhKBXn5eUBTYu8tkzC0aKt4tk44x8CAmslTFazUnymCGkKNMTnWtC2NO66uzxScvlSbVAb7cAhkAPn2k6JdycLrWzORx12SENM0rH/CMqqbbhzz6aVFldJXw6BrpbxZhd28u+CHOdPytc4te4BbzeUgmfbSuU9S79HDRYkLxGkLcueYc8ad/IM9rQNezgJBGeCV6G0iXA5kiggwXNfDKR/MwwvN4PM4sleFlzwdapatn4E0R/MbLkBCqM0eVeD6anmyAR3Ays0lBudFe6VA7nMEzBOQwwnOsXQgCnx/BZnvMqFkEMizCUdVM3xN0hls9jtOb0zQP+AFV/WqpMmDD67V+8bIorE2sE//pYvmvF4o1UgYV5GaztM4FAEE+SGaziUvloHlFQSZronjf80eXyqsnYnTJTSgAo6QhpzhjzDPxS+DpyKFYUvNwMjzxe3CncjikSQwbZL69RP5uqzShRtGtKMu4VPxctO5sMsm3eNeBHPTeqHZoS/N5uIrHqpBZqOLxXWzK751Ub9se//EepScxBzdntPjoGs/1swUsDVIgA8Fl8+Jg8VhNu50nqXkAj+AtHgdlSxlfm3ztM/XWrXEckUfCroprZkk/XCvj7XhVieMPn3woFf94dChaSaN5sAa4Sgm/8FUqFkveLn5wBfoHLYQuEjNjqoX7Vnjwq071HtX4o9kOswpQgA60y+jwwAMbniMhRge20WgUw6zq6moUdZi/Ejb35RfShNkLm4Wb5orY7kAJPzxQqnEC0AmFQgjCkbD5GNDorpeBRHjiKt3DJ4hLKMoyaTrpCPH7Ry5XqZBD01A76BwSwaYjh1uahuES7qEE8IPnG55hJ0PJkDRHuC3pCA03HcoCC4QqtNvfqHPUfBI8wg/lkKB80FaHGCzvZlIdoZP8hsNh0igcyUAaW0/6NqPyoURvb6+x3DDPYyCI4aDDQoAKARRMFuo208RA8nUbI3iIXxC8wNrCSZoqDOdTJ60RrCUgoCAlrdoBiKTmESq65wPgAK/i/ErysMLVwfIBAqRMamcGj6wqSsPtoRqOPT09IFSSDgzbRmH2IHYdgkxqZwYP50bjSfhhkFHBz7EniZADYEzpuNqRRqVlIOnz9NuEH5DXTXwwGKytrcUVvUwlUwwJwElB54zIpQ4PjO2mx0PHTy8K/aOfoNGvVDL2SgARCllLLEcjQVUsDCY1nRE83EZlI3+IXGE/q6qqAK3xeiVfuAQQniC2JFOZJXJoND14uEEI6fjhFAlPRyAQAH5ooHCOKxQgAZhKjMTh6iBSAi8bnSPRZQQPt4EWjrry4hQmmLQbzdTU1FABIlQ55ioBhBSADSsBkDDGc4Qc8kgQbDaytQIP3BAJYIbHgRPUFo/wvHR2dqJJaCHu5sr3MC8P2OCDMIyGSMlIAjlSOIpQskEOMhwCPMKPYMMRpCnh6QB+0EL8iiWaB4oVQ5rNEwmhATO4N4gRaCHpsOkKlyVyWYFHPBFyhCIaZrrNE0IYJMSiuKXrfvbNZ9PhL0AZPOVIgA2+DWIjwIAc8nSESEm2OXV2aM3TyREkaA8Zwg8N41Ei/HCE+QZ/sAm4jsTBZQcUBpFhgii6D4SQIBAIBxmIBd0niQE2CMQkHIItD/nks9Ed/FHiTDIuiVfK0MVEEe2//gSUW4ZESZafJGsSImEAAGDroD04RZese0EUCBJgpid6jnGkDK5TGVOL1sSNd3PQPL0aNYk+IAMOwAoBZjziLk416IbqrU7Z+QzxD1UgUaYyoPcR0CJPnUotZrxC8qEjyJoSEdTLGCvmmv9/cziN9LAF6uIAAAAASUVORK5CYII="

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchSearchList = exports.PAGE_SIZE = exports.SET_KEYWORD = exports.RECEIVE_CRA_LIST = undefined;

	var _util = __webpack_require__(275);

	// 设置rboxkey
	var SET_RBOX_KEY = 'SET_RBOX_KEY';
	var setRboxKey = (0, _util.cac)(SET_RBOX_KEY, 'rboxkey');

	// search点击事件
	var RECEIVE_CRA_LIST = exports.RECEIVE_CRA_LIST = 'RECEIVE_CRA_LIST';
	var SET_KEYWORD = exports.SET_KEYWORD = 'SET_KEYWORD';
	var PAGE_SIZE = exports.PAGE_SIZE = 1;

	var receiveList = (0, _util.cac)(RECEIVE_CRA_LIST, 'data', 'page');
	var setKeyord = (0, _util.cac)(SET_KEYWORD, 'value');

	var fetchSearchList = exports.fetchSearchList = function fetchSearchList(keyword, rboxkey) {
	    var page = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

	    return function (dispatch, getState) {

	        dispatch(setRboxKey(rboxkey));

	        if (!keyword && keyword != '') {
	            keyword = getState().search.keyword;
	        } else {
	            dispatch(setKeyord(keyword));
	        }
	        window.$.ajax({
	            url: 'http://www.tngou.net/api/search',
	            data: { keyword: keyword, name: 'topword', page: page, rows: PAGE_SIZE },
	            dataType: 'jsonp',
	            success: function success(data) {
	                if (data.status) {
	                    dispatch(receiveList(data, page));
	                } else {
	                    var Rdata = {};
	                    Rdata.tngou = [{ title: '中国', description: '你好' }, { title: '奥运', description: '伟大的项目' }];
	                    Rdata.total = 2;
	                    dispatch(receiveList(Rdata, page));
	                }
	            }
	        });
	    };
	};

	// 路口路段区域事件
	// export const PUSH_CROSS_LIST = 'PUSH_CROSS_LIST'
	// export const PUSH_ROAD_LIST = 'PUSH_ROAD_LIST'
	// export const PUSH_AREA_LIST = 'PUSH_AREA_LIST'

	// export const pushCrossList = cac(PUSH_CROSS_LIST, 'list')

	// export const fetchCrossList = (rboxkey) => {
	//     return (dispatch, getState) => {
	//         dispatch(setRboxKey(rboxkey))
	//         var keyword = 1, page = 1;
	//         window.$.ajax({
	//             url: 'http://www.tngou.net/api/search',
	//             data: { keyword, name: 'topword', page, rows: PAGE_SIZE },
	//             dataType: 'jsonp',
	//             success: (data) => {
	//                 if (data.status) {
	//                     let Rdata = {};
	//                     Rdata.tabelData = [{ rank: 0, name: '延陵中路-和平北路(延陵中路-和平北路)', index: 2.56, hierarchy: '严重拥堵' },
	//                         { rank: 1, name: '延陵中路-桃园路', index: 2.56, hierarchy: '严重拥堵' },
	//                         { rank: 2, name: '延陵中路-丹青路', index: 2.56, hierarchy: '严重拥堵' },
	//                         { rank: 3, name: '桃园路-延陵中路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 4, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 5, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 6, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 7, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 8, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 9, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 10, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 11, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 12, name: '友谊路-克山路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 13, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 14, name: '友谊路-sdsad克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 15, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 16, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 17, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 18, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 19, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 20, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 21, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 22, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 23, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 24, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 25, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 26, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 27, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 28, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 29, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 30, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 31, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 32, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 33, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 34, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 35, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 36, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 37, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 38, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }
	//                     ];
	//                     Rdata.lv1 = 12042141;
	//                     Rdata.lv2 = 21;
	//                     Rdata.lv3 = 22312;
	//                     Rdata.lv4 = 23213;
	//                     Rdata.lv5 = 24;
	//                     Rdata.geoDate = {
	//                         "type": "FeatureCollection",
	//                         "features": [
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.91, 31.85] }, "properties": { "index": 9.9, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.74] }, "properties": { "index": 2.1, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.939, 31.81] }, "properties": { "index": 3, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.952, 31.79] }, "properties": { "index": 4, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.945, 31.76] }, "properties": { "index": 8, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.953, 31.77] }, "properties": { "index": 6, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.957, 31.842] }, "properties": { "index": 8.8, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.956, 31.836] }, "properties": { "index": 8, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.957, 31.81] }, "properties": { "index": 9, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.95, 31.795] }, "properties": { "index": 1, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.75] }, "properties": { "index": 5.5, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.949, 31.819] }, "properties": { "index": 3, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.958, 31.791] }, "properties": { "index": 2, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.946, 31.76] }, "properties": { "index": 4, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.777] }, "properties": { "index": 9.5, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.950, 31.81] }, "properties": { "index": 5, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.96, 31.771] }, "properties": { "index": 9.6, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.954, 31.799] }, "properties": { "index": 9, 'name': '延陵中路' } }
	//                         ]
	//                     };
	//                     dispatch(pushCrossList(Rdata))
	//                 }
	//                 else {
	//                     let Rdata = {};
	//                     Rdata.tabelData = [{ rank: 0, name: '延陵中路-和平北路(延陵中路-和平北路)', index: 2.56, hierarchy: '严重拥堵' },
	//                         { rank: 1, name: '延陵中路-桃园路', index: 2.56, hierarchy: '严重拥堵' },
	//                         { rank: 2, name: '延陵中路-丹青路', index: 2.56, hierarchy: '严重拥堵' },
	//                         { rank: 3, name: '桃园路-延陵中路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 4, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 5, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 6, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 7, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' },
	//                         { rank: 8, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 9, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 10, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 11, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 12, name: '友谊路-克山路', index: 2.56, hierarchy: '轻度拥堵' },
	//                         { rank: 13, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 14, name: '友谊路-sdsad克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 15, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 16, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 17, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 18, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 19, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 20, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 21, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 22, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 23, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 24, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 25, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 26, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 27, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 28, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 29, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 30, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 31, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 32, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 33, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 34, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 35, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 36, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 37, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' },
	//                         { rank: 38, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }
	//                     ];
	//                     Rdata.lv1 = 12042141;
	//                     Rdata.lv2 = 21;
	//                     Rdata.lv3 = 22312;
	//                     Rdata.lv4 = 23213;
	//                     Rdata.lv5 = 24;
	//                     Rdata.geoDate = {
	//                         "type": "FeatureCollection",
	//                         "features": [
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.35, 28.411] }, "properties": { "index": 9.9, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.357, 28.412] }, "properties": { "index": 2.1, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.358, 28.413] }, "properties": { "index": 3, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.359, 28.414] }, "properties": { "index": 4, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.36, 28.415] }, "properties": { "index": 8, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.351, 28.416] }, "properties": { "index": 6, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.352, 28.417] }, "properties": { "index": 8.8, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.353, 28.418] }, "properties": { "index": 8, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.354, 28.419] }, "properties": { "index": 9, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.355, 28.39] }, "properties": { "index": 1, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.349, 28.37] }, "properties": { "index": 5.5, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.348, 28.42] }, "properties": { "index": 3, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.347, 28.43] }, "properties": { "index": 2, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.361, 28.38] }, "properties": { "index": 4, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.362, 28.39] }, "properties": { "index": 9.5, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.363, 28.37] }, "properties": { "index": 5, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.355, 28.40] }, "properties": { "index": 9.6, 'name': '延陵中路' } },
	//                             { "type": "Feature", "geometry": { "type": "Point", "coordinates": [121.355, 28.41] }, "properties": { "index": 9, 'name': '延陵中路' } }
	//                         ]
	//                     };
	//                     dispatch(pushCrossList(Rdata))
	//                     // dispatch(pushCrossList(Rdata, page))
	//                 }
	//             }
	//         })
	//     }
	// }

/***/ },

/***/ 275:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cr = cr;
	exports.cac = cac;
	// reducer生成器，为了以后使用方便，起名为create reducer的简写
	function cr(initialState, handlers) {
	  return function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    if (handlers.hasOwnProperty(action.type)) {
	      return handlers[action.type](state, action);
	    } else {
	      return state;
	    }
	  };
	}

	// action生成器的生成器，同样原因，起名为create action creator的简写
	function cac(type) {
	  for (var _len = arguments.length, argNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    argNames[_key - 1] = arguments[_key];
	  }

	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    var action = { type: type };
	    argNames.forEach(function (arg, index) {
	      action[argNames[index]] = args[index];
	    });
	    return action;
	  };
	}

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Traffic = __webpack_require__(277);

	var _Traffic2 = _interopRequireDefault(_Traffic);

	var _toolBar = __webpack_require__(278);

	var _toolBar2 = _interopRequireDefault(_toolBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ToolBar = function (_React$Component) {
	    _inherits(ToolBar, _React$Component);

	    function ToolBar() {
	        _classCallCheck(this, ToolBar);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ToolBar).call(this));
	    }

	    _createClass(ToolBar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'toolBar', className: _toolBar2.default.layerbox },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'layerbox', className: _toolBar2.default.layerboxIn },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'toolBar' },
	                        _react2.default.createElement(
	                            'ul',
	                            null,
	                            _react2.default.createElement(_Traffic2.default, null),
	                            _react2.default.createElement(
	                                'li',
	                                { id: 'satelliteMap' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { type: 'satellite' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: _toolBar2.default.satellite },
	                                        '回放'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                { id: 'subway' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { type: 'subway' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: _toolBar2.default.subway },
	                                        '事故'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                { id: 'distanceMeasure' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { type: 'ranging' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: _toolBar2.default.ranging },
	                                        '工具'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                { id: 'fullScreen' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { type: 'fullscreen' },
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: _toolBar2.default.fullscreen },
	                                        '全屏'
	                                    )
	                                )
	                            )
	                        )
	                    ),
	                    _react2.default.createElement('div', { id: 'presetBox' })
	                )
	            );
	        }
	    }]);

	    return ToolBar;
	}(_react2.default.Component);

	exports.default = ToolBar;

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _toolBar = __webpack_require__(278);

	var _toolBar2 = _interopRequireDefault(_toolBar);

	var _traffic = __webpack_require__(282);

	var _traffic2 = _interopRequireDefault(_traffic);

	var _CongestionIndex = __webpack_require__(284);

	var CI = _interopRequireWildcard(_CongestionIndex);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Traffic = function (_React$Component) {
	    _inherits(Traffic, _React$Component);

	    function Traffic() {
	        _classCallCheck(this, Traffic);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Traffic).call(this));

	        _this.state = {
	            active: false
	        };
	        return _this;
	    }

	    _createClass(Traffic, [{
	        key: 'mountTrafficConditions',
	        value: function mountTrafficConditions() {
	            this.setState({
	                active: !this.state.active
	            });
	            if (!document.getElementById('detailedRoad')) {
	                _reactDom2.default.render(_react2.default.createElement(TrafficConditions, null), document.getElementById("presetBox"));
	            } else {
	                _reactDom2.default.unmountComponentAtNode(document.getElementById("presetBox"));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'li',
	                    { id: 'trafficConditions', onClick: function onClick() {
	                            return _this2.mountTrafficConditions();
	                        } },
	                    _react2.default.createElement(
	                        'div',
	                        { type: 'traffic' },
	                        _react2.default.createElement(
	                            'span',
	                            { className: this.state.active ? _toolBar2.default.traffic_active : _toolBar2.default.traffic },
	                            '路况'
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // ReactDOM.render(
	            //         <TrafficConditions/>, document.getElementById("presetBox")
	            //     )
	        }
	    }]);

	    return Traffic;
	}(_react2.default.Component);

	var TrafficConditions = function (_React$Component2) {
	    _inherits(TrafficConditions, _React$Component2);

	    function TrafficConditions() {
	        _classCallCheck(this, TrafficConditions);

	        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(TrafficConditions).call(this));

	        _this3.state = {
	            forecast: true,
	            playback: false
	        };
	        return _this3;
	    }

	    _createClass(TrafficConditions, [{
	        key: 'forecast',
	        value: function forecast() {
	            this.setState({
	                forecast: true,
	                playback: false
	            });
	            _reactDom2.default.render(_react2.default.createElement(Forecast, null), document.getElementById('traffic_detailed'));
	        }
	    }, {
	        key: 'playback',
	        value: function playback() {
	            this.setState({
	                forecast: false,
	                playback: true
	            });
	            _reactDom2.default.render(_react2.default.createElement(Playback, null), document.getElementById('traffic_detailed'));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: _traffic2.default.boxpanel, id: 'detailedRoad' },
	                _react2.default.createElement(
	                    'div',
	                    { className: _traffic2.default.panel_header },
	                    _react2.default.createElement(
	                        'ul',
	                        { className: _traffic2.default.panel_tab },
	                        _react2.default.createElement(
	                            'li',
	                            { className: this.state.forecast ? _traffic2.default.panel_tab_li_active : _traffic2.default.panel_tab_li, id: 'traffic_current', type: 'current', onClick: function onClick() {
	                                    return _this4.forecast();
	                                } },
	                            '预测'
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { className: this.state.playback ? _traffic2.default.panel_tab_li_active : _traffic2.default.panel_tab_li, id: 'traffic_forecast', type: 'forecast', onClick: function onClick() {
	                                    return _this4.playback();
	                                } },
	                            '回放'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _traffic2.default.traffic_tag },
	                        _react2.default.createElement(
	                            'span',
	                            { className: _traffic2.default.smooth_jam },
	                            '畅通'
	                        ),
	                        _react2.default.createElement(
	                            'ul',
	                            { className: _traffic2.default.traffic_level },
	                            _react2.default.createElement('li', { className: _traffic2.default.traffic_level_1 }),
	                            _react2.default.createElement('li', { className: _traffic2.default.traffic_level_2 }),
	                            _react2.default.createElement('li', { className: _traffic2.default.traffic_level_3 }),
	                            _react2.default.createElement('li', { className: _traffic2.default.traffic_level_4 }),
	                            _react2.default.createElement('li', { className: _traffic2.default.traffic_level_5 })
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _traffic2.default.smooth_jam },
	                            '拥堵'
	                        )
	                    )
	                ),
	                _react2.default.createElement('div', { className: _traffic2.default.panel_body, id: 'traffic_detailed' })
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _reactDom2.default.render(_react2.default.createElement(Forecast, null), document.getElementById('traffic_detailed'));
	        }
	    }]);

	    return TrafficConditions;
	}(_react2.default.Component);

	var Forecast = function (_React$Component3) {
	    _inherits(Forecast, _React$Component3);

	    function Forecast() {
	        _classCallCheck(this, Forecast);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Forecast).call(this));
	    }

	    _createClass(Forecast, [{
	        key: 'render',
	        value: function render() {
	            var b = new Date();
	            var c = b.getFullYear();
	            var d = b.getMonth() + 1;
	            d = d < 10 ? "0" + d : d;
	            var e = b.getDate();
	            e = e < 10 ? "0" + e : e;
	            var f = b.getHours();
	            f = f < 10 ? "0" + f : f;
	            var g = b.getMinutes().toString();
	            g = g < 10 ? "0" + g : g;
	            return _react2.default.createElement(
	                'div',
	                { className: _traffic2.default.panel_body },
	                _react2.default.createElement(
	                    'span',
	                    { className: _traffic2.default.time_lbl },
	                    '预测时间：'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { className: _traffic2.default.date, id: 'dateNow' },
	                    c,
	                    '/',
	                    d,
	                    '/',
	                    e
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { className: _traffic2.default.date, id: 'timeNow' },
	                    f,
	                    ': ',
	                    g
	                )
	            );
	        }
	    }]);

	    return Forecast;
	}(_react2.default.Component);

	var Playback = function (_React$Component4) {
	    _inherits(Playback, _React$Component4);

	    function Playback() {
	        _classCallCheck(this, Playback);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Playback).call(this));
	    }

	    _createClass(Playback, [{
	        key: 'play',
	        value: function play() {
	            var markerPlayBack = CI.playback(111);
	            markerPlayBack.start();
	        }
	    }, {
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return { muiTheme: getMuiTheme(baseTheme) };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this7 = this;

	            var style = {
	                margin: 12
	            };
	            return _react2.default.createElement(
	                'div',
	                { className: _traffic2.default.panel_body },
	                _react2.default.createElement(
	                    'span',
	                    { className: _traffic2.default.time_lbl },
	                    _react2.default.createElement('input', { type: 'button', id: 'btnPlay', value: 'play', onClick: function onClick() {
	                            return _this7.play();
	                        } })
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { className: _traffic2.default.date, id: 'dateNow' },
	                    '2015/12/2'
	                ),
	                _react2.default.createElement('span', { className: _traffic2.default.date, id: 'timeNow' })
	            );
	        }
	    }]);

	    return Playback;
	}(_react2.default.Component);

	Playback.childContextTypes = {
	    muiTheme: _react2.default.PropTypes.object.isRequired
	};

	exports.default = Traffic;

/***/ },

/***/ 278:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"layerboxIn":"_32CNRQLxBqZJFp3-oQtPW1","usel":"Sz_rZx9M9LZ-CzHzh31cS","layerbox":"_2ENMuusFmXerEnjeHqFOCf Sz_rZx9M9LZ-CzHzh31cS","layerItemSpan":"XqchKSuct7gJvVASxQCxB","traffic":"_3bPkOmLZQOJ6nLlzDSY8nY XqchKSuct7gJvVASxQCxB","traffic_active":"_2NAD5fUHGgkghRTyIg1qdH XqchKSuct7gJvVASxQCxB","satellite":"_2VjpcVg5Pcav28w683KJti XqchKSuct7gJvVASxQCxB","subway":"_3gpLic-vR-YlSCDMKawvmb XqchKSuct7gJvVASxQCxB","toolItemSpan":"_3YZfpW3dcNRoATq4ovAR0h","ranging":"_1SBSe4HaU5kTvyRMRo3Aa3 _3YZfpW3dcNRoATq4ovAR0h","fullscreen":"_3VAB4dBvLz8kQUt0_kWuUW _3YZfpW3dcNRoATq4ovAR0h"};

/***/ },

/***/ 282:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"boxpanel":"_1VviI9DWdMBhq-zzZn-fTs","panel_header":"_2pfJyz26TyFQ1bLvDBF3Pa","panel_tab":"_3Y3vnjEF6Wd7Z4YlFF785s","panel_tab_li":"_1p7e05fcEeYuFZJc-LZYp9","panel_tab_li_active":"_1fYwbXooItHlI0o5ZBoJ9g _1p7e05fcEeYuFZJc-LZYp9","traffic_tag":"_3I7-Ck84qARJiJw9Dp4A0s","smooth_jam":"_3_sh-QP3iLgbmtUblDFsRK","traffic_level":"_3ct0QNlrNr0ixUPWPBMydD","traffic_level_li":"Rev_SSbORlsKmeSjSUFC0","traffic_level_1":"_2uuVTiFiKWtDqVvAZI7Nch Rev_SSbORlsKmeSjSUFC0","traffic_level_2":"_2lUzqsZ4DP3Ol5RWQDVMZh Rev_SSbORlsKmeSjSUFC0","traffic_level_3":"_1_VBmWDvNWulupFOKKPtxn Rev_SSbORlsKmeSjSUFC0","traffic_level_4":"QC4Fk9YwAMHWVmHGG4Ahy Rev_SSbORlsKmeSjSUFC0","traffic_level_5":"_32RPOJhISWw56zIcTSLiGY Rev_SSbORlsKmeSjSUFC0","panel_body":"_33fvMNli8JXbu5pl-iHWYN","time_lbl":"_2XJktDm2i8m6sQCD-W77Rr","date":"hCuwoSpWe4qZqkYMACEVV"};

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.playback = exports.addCrossGracLayer = undefined;

	var _leaflet = __webpack_require__(266);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _esriLeaflet = __webpack_require__(267);

	var _esriLeaflet2 = _interopRequireDefault(_esriLeaflet);

	var _US = __webpack_require__(285);

	var _lmap = __webpack_require__(286);

	var lmap = _interopRequireWildcard(_lmap);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addCrossGracLayer = exports.addCrossGracLayer = function addCrossGracLayer(geoDate) {
	    map.eachLayer(function (layer) {
	        if (layer.options.id != 'streetLayer') map.removeLayer(layer);
	    });
	    var getColor = function getColor(feature) {
	        var index = feature.properties.index;
	        switch (true) {
	            case index < 2:
	                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#36AE4C', heartbeat: 2 });
	            case index < 4:
	                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#6AB72D', heartbeat: 2 });
	            case index < 6:
	                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#ECE839', heartbeat: 2 });
	            case index < 8:
	                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#F29618', heartbeat: 2 });
	            case index < 10:
	                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#E41A16', heartbeat: 2 });
	            default:
	                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#36AE4C', heartbeat: 2 });

	        }
	    };
	    var pointToLayer = function pointToLayer(feature, latlng) {
	        return _leaflet2.default.marker(latlng, { icon: getColor(feature) });
	    };
	    var onEachFeature = function onEachFeature(feature, layer) {
	        var popupContent = feature.properties.name + "<br>指数: " + feature.properties.index;

	        if (feature.properties && feature.properties.popupContent) {
	            popupContent += feature.properties.popupContent;
	        }
	        layer.bindPopup(popupContent);
	    };
	    var geojsonlayer = _leaflet2.default.geoJson(geoDate, {
	        id: 'crossLayer',
	        pointToLayer: pointToLayer,
	        onEachFeature: onEachFeature
	    }).addTo(map);

	    // crossLayer.on('mouseover', (e) => {
	    //     let popup = L.popup(
	    //         {
	    //             offset: L.point(0, -20),
	    //             closeButton: false
	    //         })
	    //         .setLatLng(e.latlng)
	    //         .setContent("You clicked the map at " + e.latlng.toString())
	    //         .openOn(map);

	    // })
	};

	var playback = exports.playback = function playback(a) {
	    var markerPlayBack = lmap.geoTime(_US.geo_playback, {
	        map: map,
	        duration: 1000
	    });
	    return markerPlayBack;
	};

/***/ },

/***/ 285:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var GeoJsonPoints = exports.GeoJsonPoints = {
	    "type": "FeatureCollection",
	    "features": [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.91, 31.85] }, "properties": { "index": 9.9, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.74] }, "properties": { "index": 2.1, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.939, 31.81] }, "properties": { "index": 3, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.952, 31.79] }, "properties": { "index": 4, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.945, 31.76] }, "properties": { "index": 8, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.953, 31.77] }, "properties": { "index": 6, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.957, 31.842] }, "properties": { "index": 8.8, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.956, 31.836] }, "properties": { "index": 8, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.957, 31.81] }, "properties": { "index": 9, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.95, 31.795] }, "properties": { "index": 1, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.75] }, "properties": { "index": 5.5, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.949, 31.819] }, "properties": { "index": 3, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.958, 31.791] }, "properties": { "index": 2, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.946, 31.76] }, "properties": { "index": 4, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.777] }, "properties": { "index": 9.5, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.950, 31.81] }, "properties": { "index": 5, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.96, 31.771] }, "properties": { "index": 9.6, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.954, 31.799] }, "properties": { "index": 9, 'name': '延陵中路' } }]
	};

	var geo_playback = exports.geo_playback = {
	    "type": "FeatureCollection",
	    "features": [{
	        "type": "Feature",
	        "geometry": { "type": "Point", "coordinates": [121.35, 28.491] },
	        "properties": {
	            "index": [{ time: "08:22-13:00", val: 5.1 }, { time: "08:22-13:05", val: 9.5 }, { time: "08:22-13:10", val: 3.9 }, { time: "08:22-13:15", val: 2.9 }, { time: "08:22-13:20", val: 7 }],
	            "name": "友谊路"
	        }
	    }, {
	        "type": "Feature",
	        "geometry": { "type": "Point", "coordinates": [121.35, 28.411] },
	        "properties": {
	            "index": [{ time: "08:22-13:00", val: 9 }, { time: "08:22-13:05", val: 5 }, { time: "08:22-13:10", val: 7 }, { time: "08:22-13:15", val: 3.5 }, { time: "08:22-13:20", val: 7.9 }],
	            "name": "延陵中路"
	        }
	    }]
	};

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.geoTime = exports.icon = undefined;

	var _leaflet = __webpack_require__(266);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var icon = exports.icon = function icon(options) {
	    _leaflet2.default.Icon.Syl = _leaflet2.default.DivIcon.extend({
	        options: {
	            className: '',
	            iconSize: [12, 12],
	            color: 'red',
	            animate: true,
	            heartbeat: 2
	        },
	        initialize: function initialize(options) {
	            _leaflet2.default.setOptions(this, options);
	            // css
	            var uniqueClassName = 'lpi-' + new Date().getTime() + '-' + Math.round(Math.random() * 100000);

	            var before = ['background-color: ' + this.options.color];
	            var after = ['box-shadow: 0 0 6px 2px ' + this.options.color, 'animation: lmapIcon ' + this.options.heartbeat + 's ease-out', 'animation-iteration-count: infinite', 'animation-delay: ' + 0 + 's'];
	            if (!this.options.animate) {
	                after.push('animation: none');
	            }
	            var css = ['.' + uniqueClassName + '{' + before.join(';') + ';}', '.' + uniqueClassName + ':after{' + after.join(';') + ';}'].join('');

	            var el = document.createElement('style');
	            if (el.styleSheet) {
	                el.styleSheet.cssText = css;
	            } else {
	                el.appendChild(document.createTextNode(css));
	            }
	            document.getElementsByTagName('head')[0].appendChild(el);
	            // apply css class
	            this.options.className = this.options.className + ' leaflet-lmap-icon ' + uniqueClassName;
	            // initialize icon
	            _leaflet2.default.DivIcon.prototype.initialize.call(this, options);
	        }
	    });
	    return new _leaflet2.default.Icon.Syl(options);
	};

	var geoTime = exports.geoTime = function geoTime(geoJSON, options) {
	    _leaflet2.default.GeoTime = _leaflet2.default.Class.extend({
	        statics: {},
	        options: {
	            map: {},
	            duration: 1000
	        },
	        initialize: function initialize(geoJSON, options) {

	            _leaflet2.default.setOptions(this, options);

	            this._map = this.options.map || {};
	            this._duration = this.options.duration || {};
	            this._geos = this._geos || [];
	            this._makers = this._makers || [];
	            this._chID = this._chID || 1;
	            this._featureGroup = this._featureGroup || {};
	            this._setData(geoJSON);

	            this.start = this._start || {};
	            this.stop = this._stop || {};
	            this.speedUp = this._speedUp || {};
	            this.speedDown = this._speedDown || {};
	            this.clearLayer = this._clearLayer || {};
	        },

	        _setData: function _setData(geoJSON) {
	            if (!geoJSON) {
	                return;
	            }
	            for (var i = 0, len = geoJSON.features.length; i < len; i++) {
	                this._geos.push(geoJSON.features[i]);
	            }
	            this._addMakers(this);
	        },
	        _addMakers: function _addMakers(self) {
	            var lab = document.getElementById('dateNow');
	            lab.innerHTML = this._geos[0].properties.index[0].time;
	            for (var i = 0, len = this._geos.length; i < len; i++) {
	                var marker = _leaflet2.default.marker([this._geos[i].geometry.coordinates[1], this._geos[i].geometry.coordinates[0]], {
	                    icon: this._getColor(this._geos[i].properties.index[0].val)
	                });
	                this._makers.push(marker);
	            }
	            this._featureGroup = _leaflet2.default.featureGroup(this._makers).addTo(this._map);
	        },
	        _getColor: function _getColor(index) {
	            switch (true) {
	                case index < 2:
	                    return icon({ iconSize: [index * 2, index * 2], color: '#36AE4C', heartbeat: 1 });
	                case index < 4:
	                    return icon({ iconSize: [index * 2, index * 2], color: '#6AB72D', heartbeat: 1 });
	                case index < 6:
	                    return icon({ iconSize: [index * 2, index * 2], color: '#ECE839', heartbeat: 1 });
	                case index < 8:
	                    return icon({ iconSize: [index * 2, index * 2], color: '#F29618', heartbeat: 1 });
	                case index < 10:
	                    return icon({ iconSize: [index * 2, index * 2], color: '#E41A16', heartbeat: 1 });
	                default:
	                    return icon({ iconSize: [index * 2, index * 2], color: '#36AE4C', heartbeat: 1 });

	            }
	        },
	        _getPic: function _getPic(index) {
	            return index > 8 ? lv5 : index > 6 ? lv4 : index > 4 ? lv3 : index > 2 ? lv2 : lv1;
	        },
	        _isPlaying: function _isPlaying() {
	            return this._intervalID ? true : false;
	        },

	        _start: function _start() {
	            var btn = document.getElementById('btnPlay');
	            if (this._isPlaying()) {
	                this._stopAnimation();
	                btn.value = 'start';
	            } else {
	                this._startAnimation();
	                btn.value = 'stop';
	            }
	        },
	        _stop: function _stop() {
	            this._stopAnimation();
	        },
	        _stopAnimation: function _stopAnimation() {
	            if (!this._intervalID) return;
	            window.clearInterval(this._intervalID);
	            this._intervalID = null;
	        },
	        _startAnimation: function _startAnimation() {
	            if (this._intervalID) return;
	            this._intervalID = window.setInterval(this._animation, this._duration, this);
	        },
	        _animation: function _animation(self) {
	            var lab = document.getElementById('dateNow');
	            if (self._chID >= self._geos[0].properties.index.length) {
	                clearInterval(self._intervalID);
	                return;
	            }
	            for (var i = 0, len = self._makers.length; i < len; i++) {
	                self._makers[i].setIcon(self._getColor(self._geos[i].properties.index[self._chID].val));
	                lab.innerHTML = self._geos[i].properties.index[self._chID].time;
	            }
	            self._chID++;
	        },

	        _speedUp: function _speedUp() {
	            this._duration = this._duration + 1000;
	            document.getElementById('speed').value = this._duration;

	            if (this._intervalID) {
	                this.stop();
	                this.start();
	            }
	        },

	        _speedDown: function _speedDown() {
	            if (this._duration > 1000) {
	                this._duration = this._duration - 1000;
	            } else {
	                if (this._duration > 100) this._duration = this._duration - 100;else {
	                    this._duration = 100;
	                }
	            }
	            document.getElementById('speed').value = this._duration;

	            if (this._intervalID) {
	                this.stop();
	                this.start();
	            }
	        },

	        _clearLayer: function _clearLayer() {
	            this._stopAnimation();
	            this._map.removeLayer(this._featureGroup);
	        }
	    });
	    return new _leaflet2.default.GeoTime(geoJSON, options);
	};

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(235);

	var _craAction = __webpack_require__(288);

	var action = _interopRequireWildcard(_craAction);

	var _rbox = __webpack_require__(289);

	var _rbox2 = _interopRequireDefault(_rbox);

	var _CongestionIndex = __webpack_require__(284);

	var CI = _interopRequireWildcard(_CongestionIndex);

	var _SearchResults = __webpack_require__(292);

	var _SearchResults2 = _interopRequireDefault(_SearchResults);

	var _CraResults = __webpack_require__(293);

	var _CraResults2 = _interopRequireDefault(_CraResults);

	var _Pager = __webpack_require__(296);

	var _Pager2 = _interopRequireDefault(_Pager);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rbox = function (_React$Component) {
	    _inherits(Rbox, _React$Component);

	    function Rbox() {
	        _classCallCheck(this, Rbox);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rbox).call(this));

	        _this.state = {
	            contraction: false,
	            cross: false,
	            road: false,
	            area: false
	        };
	        return _this;
	    }

	    _createClass(Rbox, [{
	        key: 'contractionBtnClick',
	        value: function contractionBtnClick() {
	            this.setState({
	                contraction: !this.state.contraction
	            });
	        }
	    }, {
	        key: 'showResults',
	        value: function showResults() {
	            var rboxkey = this.props.cra.rboxkey;
	            console.log(this.props.cra);
	            switch (rboxkey) {
	                case 'search':
	                    return this.props.search.list.map(function (item) {
	                        item.key = item.title;
	                        return _react2.default.createElement(_SearchResults2.default, item);
	                    });
	                case 'cross':
	                    CI.addCrossGracLayer(this.props.cra.cralist.geoDate);
	                    return _react2.default.createElement(_CraResults2.default, { tabelData: this.props.cra.cralist.tabelData, lv1: this.props.cra.cralist.lv1, lv2: this.props.cra.cralist.lv2, lv3: this.props.cra.cralist.lv3, lv4: this.props.cra.cralist.lv4, lv5: this.props.cra.cralist.lv5 });
	                case 'road':
	                    return _react2.default.createElement(
	                        'h1',
	                        null,
	                        this.props.cra.rboxkey
	                    );
	                case 'area':
	                    return _react2.default.createElement(
	                        'h1',
	                        null,
	                        this.props.cra.rboxkey
	                    );
	                default:
	                    break;
	            }
	        }
	    }, {
	        key: 'crsBtnClick',
	        value: function crsBtnClick(layerName) {
	            //lmsg.send('hi', { message: layerName });
	            switch (layerName) {
	                case 'cross':
	                    this.setState({
	                        cross: true,
	                        road: false,
	                        area: false
	                    });
	                    break;
	                case 'road':
	                    this.setState({
	                        cross: false,
	                        road: true,
	                        area: false
	                    });
	                    break;
	                case 'area':
	                    this.setState({
	                        cross: false,
	                        road: false,
	                        area: true
	                    });
	                    break;
	                default:
	                    break;
	            }
	            this.props.fetchCrossList(layerName);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var page = _props.page;
	            var totalPage = _props.totalPage;
	            var dispatch = _props.dispatch;

	            var searchAvtive = this.props.searchValue === "";
	            return _react2.default.createElement(
	                'div',
	                { id: 'rbox', className: _rbox2.default.rbox },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'navBody', className: this.state.contraction ? _rbox2.default.navBody_none : _rbox2.default.navBody_display },
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'rboxPanels', className: _rbox2.default.rboxPanels },
	                        _react2.default.createElement(
	                            'ul',
	                            { id: 'nav', className: _rbox2.default.nav },
	                            _react2.default.createElement(
	                                'li',
	                                { id: 'cross', ref: 'cross', className: this.state.cross ? _rbox2.default.craLi_active : _rbox2.default.craLi, onClick: function onClick() {
	                                        return _this2.crsBtnClick(_this2.refs.cross.id);
	                                    } },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: _rbox2.default.navTxt },
	                                    '路口'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                { id: 'road', ref: 'road', className: this.state.road ? _rbox2.default.craLi_active : _rbox2.default.craLi, onClick: function onClick() {
	                                        return _this2.crsBtnClick(_this2.refs.road.id);
	                                    } },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: _rbox2.default.navTxt },
	                                    '路段'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                { id: 'area', ref: 'area', className: this.state.area ? _rbox2.default.craLi_active : _rbox2.default.craLi, onClick: function onClick() {
	                                        return _this2.crsBtnClick(_this2.refs.area.id);
	                                    } },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: _rbox2.default.navTxt },
	                                    '区域'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'resultPanel', className: _rbox2.default.resultPanel },
	                            this.showResults()
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'contractionBtn', className: _rbox2.default.rboxPanCtrl, onClick: function onClick() {
	                            return _this2.contractionBtnClick();
	                        } },
	                    _react2.default.createElement('i', { className: _rbox2.default.fa + ' ' + _rbox2.default.faChevronUp, id: 'contractionInsideBtnUp' })
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // <Pager page={page} totalPage={totalPage} onChangePage={i => this.props.fetchList(null, i) } />
	            var self = this;
	            lmsg.subscribe('hi', getMes);
	            function getMes(data) {
	                if (data.message == "cross") {
	                    self.refs.cross.click();
	                } else if (data.message == "road") {
	                    self.refs.road.click();
	                } else {
	                    self.refs.area.click();
	                }
	            }
	        }
	    }]);

	    return Rbox;
	}(_react2.default.Component);

	Rbox.defaultProps = {
	    page: 1,
	    totalPage: 10
	};

	function mapStateToProps(state) {
	    return {
	        search: state.search,
	        cra: state.cra
	    };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, action)(Rbox);

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchCrossList = exports.pushCrossList = exports.PUSH_AREA_LIST = exports.PUSH_ROAD_LIST = exports.PUSH_CROSS_LIST = exports.SET_RBOX_KEY = undefined;

	var _util = __webpack_require__(275);

	var SET_RBOX_KEY = exports.SET_RBOX_KEY = 'SET_RBOX_KEY';
	var setRbox = (0, _util.cac)(SET_RBOX_KEY, 'rboxkey');

	var PUSH_CROSS_LIST = exports.PUSH_CROSS_LIST = 'PUSH_CROSS_LIST';
	var PUSH_ROAD_LIST = exports.PUSH_ROAD_LIST = 'PUSH_ROAD_LIST';
	var PUSH_AREA_LIST = exports.PUSH_AREA_LIST = 'PUSH_AREA_LIST';

	var pushCrossList = exports.pushCrossList = (0, _util.cac)(PUSH_CROSS_LIST, 'list');

	var fetchCrossList = exports.fetchCrossList = function fetchCrossList(rboxkey) {
	    return function (dispatch, getState) {
	        //console.log(rboxkey);
	        dispatch(setRbox(rboxkey));
	        var keyword = 1,
	            page = 1;

	        var Rdata = {};
	        Rdata.tabelData = [{ rank: 0, name: '延陵中路-和平北路(延陵中路-和平北路)', index: 2.56, hierarchy: '严重拥堵' }, { rank: 1, name: '延陵中路-桃园路', index: 2.56, hierarchy: '严重拥堵' }, { rank: 2, name: '延陵中路-丹青路', index: 2.56, hierarchy: '严重拥堵' }, { rank: 3, name: '桃园路-延陵中路', index: 2.56, hierarchy: '中度拥堵' }, { rank: 4, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' }, { rank: 5, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' }, { rank: 6, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' }, { rank: 7, name: '延陵中路-和平北路', index: 2.56, hierarchy: '中度拥堵' }, { rank: 8, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' }, { rank: 9, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' }, { rank: 10, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' }, { rank: 11, name: '延陵中路-和平北路', index: 2.56, hierarchy: '轻度拥堵' }, { rank: 12, name: '友谊路-克山路', index: 2.56, hierarchy: '轻度拥堵' }, { rank: 13, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 14, name: '友谊路-sdsad克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 15, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 16, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 17, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 18, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 19, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 20, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 21, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 22, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 23, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 24, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 25, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 26, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 27, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 28, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 29, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 30, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 31, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 32, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 33, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 34, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 35, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 36, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 37, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }, { rank: 38, name: '友谊路-克山路', index: 2.56, hierarchy: '基本畅通' }];
	        Rdata.lv1 = 12042141;
	        Rdata.lv2 = 21;
	        Rdata.lv3 = 22312;
	        Rdata.lv4 = 23213;
	        Rdata.lv5 = 24;
	        Rdata.geoDate = {
	            "type": "FeatureCollection",
	            "features": [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.91, 31.85] }, "properties": { "index": 9.9, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.74] }, "properties": { "index": 2.1, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.939, 31.81] }, "properties": { "index": 3, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.952, 31.79] }, "properties": { "index": 4, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.945, 31.76] }, "properties": { "index": 8, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.953, 31.77] }, "properties": { "index": 6, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.957, 31.842] }, "properties": { "index": 8.8, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.956, 31.836] }, "properties": { "index": 8, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.957, 31.81] }, "properties": { "index": 9, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.95, 31.795] }, "properties": { "index": 1, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.75] }, "properties": { "index": 5.5, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.949, 31.819] }, "properties": { "index": 3, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.958, 31.791] }, "properties": { "index": 2, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.946, 31.76] }, "properties": { "index": 4, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.951, 31.777] }, "properties": { "index": 9.5, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.950, 31.81] }, "properties": { "index": 5, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.96, 31.771] }, "properties": { "index": 9.6, 'name': '延陵中路' } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [119.954, 31.799] }, "properties": { "index": 9, 'name': '延陵中路' } }]
	        };
	        dispatch(pushCrossList(Rdata));
	    };
	};

/***/ },

/***/ 289:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"rbox":"_2llNwVAGqDnhF4R1h3Zbm0","rboxSearchPanCtrl":"sFUUVXbHaLALSm4q7vCq-","rboxSearchPanCtrl_none":"_33d8lw-jW4ai9FG64eZ9ww sFUUVXbHaLALSm4q7vCq-","rboxSearchPanCtrl_display":"IPeljpTu3qd4XLKM1pLzg sFUUVXbHaLALSm4q7vCq-","navBody_display":"_1R_Edmj22xLahYtwnxPeN0","navBody_none":"_2W-ZMEGCJKS84iLfLfVom0","rboxPanels":"_3o_YCjzp4mJXJgrCZNRvnH","rboxPanCtrl":"_1gvDLBF1Z5F0zGrYEZvlGi","fa":"sd4QPqnJs3x-nNxJwTPlR","faChevronUp":"_3D8FssioAMIXT4EmtHhofX","nav":"_3JBIUlb5GasfGhTK5GMe9Y","navLi":"_3lvCjyESKb74vmNE1uFE5S","craLi":"_1wSq2-NcWDmN0AZ03ocdG4 _3lvCjyESKb74vmNE1uFE5S","craLi_active":"_1m2v8YxM4z9Ia5zCaALnCd _3lvCjyESKb74vmNE1uFE5S","navTxt":"_1ofkmpDkq-90qIuuGxSEPK","resultPanel":"tc4cTEpC8yn8zHWBwGt9L"};

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchResults = function (_React$Component) {
	    _inherits(SearchResults, _React$Component);

	    function SearchResults() {
	        _classCallCheck(this, SearchResults);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchResults).apply(this, arguments));
	    }

	    _createClass(SearchResults, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    this.props.title
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    this.props.description
	                )
	            );
	        }
	    }]);

	    return SearchResults;
	}(_react2.default.Component);

	exports.default = SearchResults;

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _craResults = __webpack_require__(294);

	var _craResults2 = _interopRequireDefault(_craResults);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CraResults = function (_React$Component) {
	    _inherits(CraResults, _React$Component);

	    function CraResults() {
	        _classCallCheck(this, CraResults);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CraResults).apply(this, arguments));
	    }

	    _createClass(CraResults, [{
	        key: 'render',
	        value: function render() {
	            console.log(this.props.tabelData);
	            return _react2.default.createElement(
	                'div',
	                { className: _craResults2.default.traffic_tag },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement('span', { className: _craResults2.default.traffic_level_3 }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam },
	                            '轻度拥堵: '
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam_num2 },
	                            this.props.lv3
	                        ),
	                        _react2.default.createElement('span', { id: 'separator', className: _craResults2.default.separator_LV3 }),
	                        _react2.default.createElement('span', { className: _craResults2.default.traffic_level_1 }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam1 },
	                            '畅通: '
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam_num3 },
	                            this.props.lv1
	                        ),
	                        _react2.default.createElement('span', { id: 'separator', className: _craResults2.default.separator_LV1 })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement('span', { className: _craResults2.default.traffic_level_4 }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam },
	                            '中度拥堵: '
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam_num2 },
	                            this.props.lv4
	                        ),
	                        _react2.default.createElement('span', { id: 'separator', className: _craResults2.default.separator_LV4 }),
	                        _react2.default.createElement('span', { className: _craResults2.default.traffic_level_2 }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam2 },
	                            '基本畅通: '
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam_num4 },
	                            this.props.lv2
	                        ),
	                        _react2.default.createElement('span', { id: 'separator', className: _craResults2.default.separator_LV2 })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement('span', { className: _craResults2.default.traffic_level_5 }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam },
	                            '严重拥堵: '
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam_num2 },
	                            this.props.lv5
	                        ),
	                        _react2.default.createElement('span', { id: 'separator', className: _craResults2.default.separator_LV5 }),
	                        _react2.default.createElement('span', { id: 'separator', className: _craResults2.default.separator_LV0 })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'table', className: _craResults2.default.table },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            '拥堵排名'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam_rank },
	                            '排名'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam_num_name },
	                            '名称'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam_num_index },
	                            '拥堵指数'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _craResults2.default.smooth_jam_num_hierarchy },
	                            '拥堵等级'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { id: 'table_rows', className: _craResults2.default.table_rows },
	                        this.props.tabelData.map(function (item) {
	                            return _react2.default.createElement(TableRow, { key: item, item: item });
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return CraResults;
	}(_react2.default.Component);

	var TableRow = function (_React$Component2) {
	    _inherits(TableRow, _React$Component2);

	    function TableRow() {
	        _classCallCheck(this, TableRow);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TableRow).call(this));
	    }

	    _createClass(TableRow, [{
	        key: 'render',
	        value: function render() {
	            var hierarchyStyle = null;
	            switch (this.props.item.hierarchy) {
	                case '畅通':
	                    hierarchyStyle = {
	                        color: '#36AE4C',
	                        float: 'left',
	                        width: '60px',
	                        height: '20px',
	                        textAlign: 'center'
	                    };
	                    break;
	                case '基本畅通':
	                    hierarchyStyle = {
	                        color: '#6AB72D',
	                        float: 'left',
	                        width: '60px',
	                        height: '20px',
	                        textAlign: 'center'
	                    };
	                    break;
	                case '轻度拥堵':
	                    hierarchyStyle = {
	                        color: '#ECE839',
	                        float: 'left',
	                        width: '60px',
	                        height: '20px',
	                        textAlign: 'center'
	                    };
	                    break;
	                case '中度拥堵':
	                    hierarchyStyle = {
	                        color: '#F29618',
	                        float: 'left',
	                        width: '60px',
	                        height: '20px',
	                        textAlign: 'center'
	                    };
	                    break;
	                case '严重拥堵':
	                    hierarchyStyle = {
	                        color: '#E41A16',
	                        float: 'left',
	                        width: '60px',
	                        height: '20px',
	                        textAlign: 'center'
	                    };
	                    break;
	                default:
	                    hierarchyStyle = {
	                        float: 'left',
	                        width: '60px',
	                        height: '20px',
	                        textAlign: 'center'
	                    };
	                    break;
	            }
	            return _react2.default.createElement(
	                'li',
	                { id: 'row', className: _craResults2.default.row },
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    _react2.default.createElement(
	                        'li',
	                        { className: _craResults2.default.rank },
	                        this.props.item.rank
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: _craResults2.default.name, title: this.props.item.name },
	                        this.props.item.name
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { className: _craResults2.default.index },
	                        this.props.item.index
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        { style: hierarchyStyle },
	                        this.props.item.hierarchy
	                    )
	                )
	            );
	        }
	    }]);

	    return TableRow;
	}(_react2.default.Component);

	exports.default = CraResults;

/***/ },

/***/ 294:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"traffic_tag":"_2QJnB2jDtlx59N8rYhJQDp","smooth_jam":"_3UQw6znoq4z3hf_bujtVol","smooth_jam1":"_3zAIgTfi8UfrmGM4R3aP0l","smooth_jam2":"Gb742l6idHSLTzBs0NEi1","separator":"_1vnoXI7SYPJGHe59VgO5pl","separator_LV0":"_1wQmKz2VoDC9RlW7JOAq9N _1vnoXI7SYPJGHe59VgO5pl","separator_LV1":"_3H-rd-gbiQ1LyC2FVCtpAI _1vnoXI7SYPJGHe59VgO5pl","separator_LV2":"_3rPkbBz3J6OrSlgIOWvBYq _1vnoXI7SYPJGHe59VgO5pl","separator_LV3":"_1auAliDqRNL4-AXamKQH58 _1vnoXI7SYPJGHe59VgO5pl","separator_LV4":"_36HpZPni8e1S5mFFlk6S6f _1vnoXI7SYPJGHe59VgO5pl","separator_LV5":"_31MmFVuVPDDfvye5OUW5VU _1vnoXI7SYPJGHe59VgO5pl","smooth_jam_num":"_134rXSuFrb4OYv56FuxPwA","smooth_jam_num2":"X7lzYQQ-O5i15gDzdDX3H","smooth_jam_num3":"_2k0MLw45uibr10eS_dLCTL","smooth_jam_num4":"_3-fRQBRu4UuMkTjtpbRiEM","traffic_level_li":"aqLdrHJj6cVGxytDPdSDE","traffic_level_1":"_3ZBO6tWqT7ZT_nJgPRsI7r","traffic_level_2":"scQFseyUg8d9RrX68H19Q","traffic_level_3":"jxIFuPMZwGEFdf8sCzBpr aqLdrHJj6cVGxytDPdSDE","traffic_level_4":"_2s7XNHzKSz0WRfATTpzQML aqLdrHJj6cVGxytDPdSDE","traffic_level_5":"_2GnY7zN8lv0KqcKZUWzuSE aqLdrHJj6cVGxytDPdSDE","table":"_1q3WE4u-kmR7C5mX_-gzHm","smooth_jam_rank":"qToumJB2gXsDBeUzyHlYr","smooth_jam_num_name":"_1ESFhCXVWVXYbQiOOOFVH_","smooth_jam_num_index":"_3kePYNBcBMqLCkhEY-hUMx","smooth_jam_num_hierarchy":"_1edwuPGtcyoo02IbZVrk8V","table_rows":"_2_Kny_cVYENe6CjUCyMRyx","row":"_3Lmq-mhslhkjqMavWHlbZ_","rank":"_1TSHcWSZHyZzFV1STuXfqt","name":"_2NPYSAwgx8m1UihCw0GybB","index":"v3CkNskKlV1o9UNGwr-lc","hierarchy":"_3uabfAoG7Rqgug4ki9iYQS"};

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pager = function (_React$Component) {
	    _inherits(Pager, _React$Component);

	    function Pager() {
	        _classCallCheck(this, Pager);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Pager).apply(this, arguments));
	    }

	    _createClass(Pager, [{
	        key: 'renderNumbers',
	        value: function renderNumbers() {
	            var _props = this.props;
	            var page = _props.page;
	            var totalPage = _props.totalPage;
	            var onChangePage = _props.onChangePage;

	            return Array.from({ length: totalPage }, function (x, i) {
	                ++i;
	                var style = {
	                    display: 'inline-block',
	                    border: 'solid 1px #ddd',
	                    padding: '5px',
	                    margin: '2px',
	                    color: page == i ? 'red' : '#999'
	                };
	                return _react2.default.createElement(
	                    'b',
	                    { style: style, onClick: function onClick() {
	                            onChangePage(i);
	                        } },
	                    i
	                );
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                ' ',
	                this.renderNumbers(),
	                ' '
	            );
	        }
	    }]);

	    return Pager;
	}(_react2.default.Component);

	Pager.propTypes = {
	    page: _react2.default.PropTypes.number.isRequired,
	    totalPage: _react2.default.PropTypes.number.isRequired,
	    onChangePage: _react2.default.PropTypes.func.isRequired
	};

	exports.default = Pager;

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _leaflet = __webpack_require__(266);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _esriLeaflet = __webpack_require__(267);

	var _esriLeaflet2 = _interopRequireDefault(_esriLeaflet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Map = function (_React$Component) {
	    _inherits(Map, _React$Component);

	    function Map() {
	        _classCallCheck(this, Map);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Map).call(this));
	    }

	    _createClass(Map, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // var searchVal = this.props.searchVal;
	            // console.log(nextProps.searchVal);
	            // console.log(map)
	            // LE.featureLayer({
	            //     url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'
	            // }).addTo(map)
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', { id: 'map' });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var map = _leaflet2.default.map("map", {
	                center: [28.41, 121.355],
	                zoom: 13,
	                zoomControl: false
	            });

	            _esriLeaflet2.default.tiledMapLayer({
	                id: 'streetLayer',
	                url: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetColor/MapServer"
	            }).addTo(map);

	            // var basemapLayer = new L.TileLayer('https://b.tiles.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbTgzcHQxMzAxMHp0eWx4bWQ1ZHN2NGcifQ.WVwjmljKYqKciEZIC3NfLA',{
	            //     id: 'streetLayer'
	            // }).addTo(map);


	            _leaflet2.default.control.scale().addTo(map);
	            var zoomControl = _leaflet2.default.control.zoom({
	                position: 'bottomright'
	            });
	            map.addControl(zoomControl);
	            map.attributionControl = false;

	            window.map = map;
	        }
	    }]);

	    return Map;
	}(_react2.default.Component);

	exports.default = Map;

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _collection = __webpack_require__(299);

	var _collection2 = _interopRequireDefault(_collection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Collection = function (_React$Component) {
	    _inherits(Collection, _React$Component);

	    function Collection() {
	        _classCallCheck(this, Collection);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this));

	        _this.state = {
	            panelDisplay: false
	        };
	        return _this;
	    }

	    _createClass(Collection, [{
	        key: 'contractionBtnClick',
	        value: function contractionBtnClick() {
	            this.setState({
	                panelDisplay: !this.state.panelDisplay
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { id: 'modularCol', className: _collection2.default.modular },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'panel', className: this.state.panelDisplay ? _collection2.default.panel : _collection2.default.panel_none },
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'rboxPanels', className: _collection2.default.rboxPanels },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'resultPanel', className: _collection2.default.resultPanel },
	                            _react2.default.createElement(
	                                'h1',
	                                null,
	                                '指数'
	                            ),
	                            _react2.default.createElement(
	                                'h1',
	                                null,
	                                '信号'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'contractionBtn', className: this.state.panelDisplay ? _collection2.default.ctrlShow : _collection2.default.ctrlNone, onClick: function onClick() {
	                            return _this2.contractionBtnClick();
	                        } },
	                    _react2.default.createElement('i', { className: _collection2.default.fa + ' ' + (this.state.panelDisplay ? _collection2.default.faChevronL : _collection2.default.faChevronR), id: 'contractionInsideBtnUp' })
	                )
	            );
	        }
	    }]);

	    return Collection;
	}(_react2.default.Component);

	exports.default = Collection;

/***/ },

/***/ 299:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"modular":"_3A5WKo1BSV5BAO51KwT0AF","modularPanCtrl":"_3nniM6NWO5L_P9QCN0xquq","ctrlShow":"_1UZ8zMs2Qj2P94Z2dVptRw _3nniM6NWO5L_P9QCN0xquq","ctrlNone":"ZKYYPO9vMizeU_xuGeXWN _3nniM6NWO5L_P9QCN0xquq","fa":"_2UfJtth_KPNao2L9tJhuhi","faChevronL":"_21urH6QBWtXpHltPEEgM-Z","faChevronR":"Mj7yYRp4uKlsIHDsVMI3j","panel":"_1AGwy2Pl-h2T4KHNvPoyQY","panel_none":"DMqpZB65PuBmM8drhUug8","resultPanel":"_897zV-YQJ49jLOnnIKOHz","rboxPanels":"_3fDsGsOSwj6vE2dygq05un"};

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Map = function (_React$Component) {
	    _inherits(Map, _React$Component);

	    function Map() {
	        _classCallCheck(this, Map);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Map).call(this));
	    }

	    _createClass(Map, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", { id: "map" });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.dojoRequire(["esri/map", "esri/layers/FeatureLayer", "dojo/domReady!"], function (Map, FeatureLayer) {

	                var map = new Map("map", {
	                    basemap: "hybrid",
	                    center: [-82.44109, 35.6122],
	                    zoom: 17
	                });

	                /****************************************************************
	                 * Add feature layer - A FeatureLayer at minimum should point
	                 * to a URL to a feature service or point to a feature collection 
	                 * object.
	                 ***************************************************************/

	                // Carbon storage of trees in Warren Wilson College.
	                var featureLayer = new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0");

	                map.addLayer(featureLayer);
	            });
	        }
	    }]);

	    return Map;
	}(_react2.default.Component);

	exports.default = Map;

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TrafficGuidance = function (_React$Component) {
	    _inherits(TrafficGuidance, _React$Component);

	    function TrafficGuidance() {
	        _classCallCheck(this, TrafficGuidance);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TrafficGuidance).apply(this, arguments));
	    }

	    _createClass(TrafficGuidance, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'h1',
	                null,
	                '交通诱导模块'
	            );
	        }
	    }]);

	    return TrafficGuidance;
	}(_react2.default.Component);

	exports.default = TrafficGuidance;

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(242);

	var _reduxThunk = __webpack_require__(304);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _index = __webpack_require__(305);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 加入了redux-thunk,初始化store
	var initStore = function initStore(initialState) {
	    var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);
	    var store = createStoreWithMiddleware(_index2.default, initialState);
	    return store;
	};

	exports.default = initStore;

/***/ },

/***/ 304:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(242);

	var _search = __webpack_require__(306);

	var _search2 = _interopRequireDefault(_search);

	var _cra = __webpack_require__(307);

	var _cra2 = _interopRequireDefault(_cra);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  search: _search2.default,
	  cra: _cra2.default
	});

	exports.default = rootReducer;

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(242);

	var _util = __webpack_require__(275);

	var _searchAction = __webpack_require__(274);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = (0, _redux.combineReducers)({
	    list: (0, _util.cr)([], _defineProperty({}, _searchAction.RECEIVE_CRA_LIST, function (state, _ref) {
	        var data = _ref.data;
	        return data.tngou;
	    })),
	    totalPage: (0, _util.cr)(0, _defineProperty({}, _searchAction.RECEIVE_CRA_LIST, function (state, _ref2) {
	        var data = _ref2.data;
	        return Math.ceil(data.total / _searchAction.PAGE_SIZE);
	    })),
	    page: (0, _util.cr)(1, _defineProperty({}, _searchAction.RECEIVE_CRA_LIST, function (state, _ref3) {
	        var page = _ref3.page;
	        return page;
	    })),
	    keyword: (0, _util.cr)('', _defineProperty({}, _searchAction.SET_KEYWORD, function (state, _ref4) {
	        var value = _ref4.value;
	        return value;
	    })),
	    rboxKey: (0, _util.cr)('', _defineProperty({}, _searchAction.SET_RBOX_KEY, function (state, _ref5) {
	        var rboxkey = _ref5.rboxkey;
	        return rboxkey;
	    }))
	});

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(242);

	var _util = __webpack_require__(275);

	var _craAction = __webpack_require__(288);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = (0, _redux.combineReducers)({
	    cralist: (0, _util.cr)([], _defineProperty({}, _craAction.PUSH_CROSS_LIST, function (state, _ref) {
	        var list = _ref.list;
	        return list;
	    })),
	    rboxkey: (0, _util.cr)([], _defineProperty({}, _craAction.SET_RBOX_KEY, function (state, _ref2) {
	        var rboxkey = _ref2.rboxkey;
	        return rboxkey;
	    }))
	});

/***/ }

});