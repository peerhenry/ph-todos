/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/javascripts/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CALLING = exports.CALLING = 'CALLING';
var SUCCESS = exports.SUCCESS = 'SUCCESS';
var ERROR = exports.ERROR = 'ERROR';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_TODOS = exports.GET_TODOS = 'GET_TODOS';
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var DELETE_TODO = exports.DELETE_TODO = 'DELETE_TODO';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodoThunk = exports.addTodoThunk = exports.getTodosThunk = undefined;

var _AxiosThunks = __webpack_require__(8);

var _TodosActionTypes = __webpack_require__(2);

var getTodosThunk = exports.getTodosThunk = function getTodosThunk() {
  return (0, _AxiosThunks.getThunk)(_TodosActionTypes.GET_TODOS, '/todos/');
};

var addTodoThunk = exports.addTodoThunk = function addTodoThunk(todo) {
  if (!todo.title) {
    console.warn('title must not be empty.');
    return function (dispatch) {};
  }
  return (0, _AxiosThunks.postThunk)(_TodosActionTypes.ADD_TODO, '/todos/addtodo', todo);
};

var deleteTodoThunk = exports.deleteTodoThunk = function deleteTodoThunk(id) {
  return (0, _AxiosThunks.postThunk)(_TodosActionTypes.DELETE_TODO, '/todos/deletetodo', { id: id });
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = Immutable;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _TodosActions = __webpack_require__(3);

var _TodosTableConnector = __webpack_require__(12);

var _TodosTableConnector2 = _interopRequireDefault(_TodosTableConnector);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _store2.default.dispatch((0, _TodosActions.getTodosThunk)());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Hello says React!'
        ),
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: _store2.default },
          _react2.default.createElement(_TodosTableConnector2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postThunk = exports.getThunk = undefined;

var _AsyncStatus = __webpack_require__(1);

var applyDispatch = function applyDispatch(dispatch, type, status, payload) {
  return dispatch({
    type: type,
    status: status,
    payload: payload
  });
};

var getThunk = exports.getThunk = function getThunk(type, url) {
  return function (dispatch) {
    applyDispatch(dispatch, type, _AsyncStatus.CALLING);
    axios.get(url).then(function (response) {
      return applyDispatch(dispatch, type, _AsyncStatus.SUCCESS, response.data);
    }).catch(function (err) {
      return applyDispatch(dispatch, type, _AsyncStatus.ERROR, err);
    });
  };
};

var postThunk = exports.postThunk = function postThunk(type, url, request) {
  return function (dispatch) {
    applyDispatch(dispatch, type, _AsyncStatus.CALLING);
    axios.post(url, request).then(function (response) {
      return applyDispatch(dispatch, type, _AsyncStatus.SUCCESS, response.data);
    }).catch(function (err) {
      return applyDispatch(dispatch, type, _AsyncStatus.ERROR, err);
    });
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _reduxThunk = __webpack_require__(14);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(15);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _TodosReducer = __webpack_require__(10);

var _TodosReducer2 = _interopRequireDefault(_TodosReducer);

var _immutable = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = (0, _immutable.fromJS)({
  todos: [{ id: -1, title: "dummy", done: true }],
  calling: false,
  visibilityFilter: 'SHOW_ALL'
});

console.log('now logging initial state keys');
console.log(Object.keys(initialState));

var logger = (0, _reduxLogger2.default)();
var store = (0, _redux.createStore)(_TodosReducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));

exports.default = store;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AsyncStatus = __webpack_require__(1);

var _TodosActionTypes = __webpack_require__(2);

var _immutable = __webpack_require__(4);

var getTodos = function getTodos(state, action) {
  switch (action.status) {
    case _AsyncStatus.CALLING:
      return state.set('calling', true);
    case _AsyncStatus.SUCCESS:
      return state.merge({ calling: false, todos: action.payload.todos });
    case _AsyncStatus.ERROR:
      return state.set('calling', false);
    default:
      return state;
  }
};

var addTodo = function addTodo(state, action) {
  switch (action.status) {
    case _AsyncStatus.CALLING:
      return state.set('calling', true);
    case _AsyncStatus.SUCCESS:
      var newTodo = (0, _immutable.fromJS)(action.payload.todo);
      var newTodos = state.get('todos').push(newTodo);
      return state.merge({ calling: false, todos: newTodos });
    case _AsyncStatus.ERROR:
      return state.set('calling', false);
    default:
      return state;
  }
};

var deleteTodo = function deleteTodo(state, action) {
  switch (action.status) {
    case _AsyncStatus.CALLING:
      return state.set('calling', true);
    case _AsyncStatus.SUCCESS:
      var newTodos = state.get('todos').filter(function (todo) {
        return todo.get('id') != action.payload.id;
      });
      return state.merge({ calling: false, todos: newTodos });
    case _AsyncStatus.ERROR:
      return state.set('calling', false);
    default:
      return state;
  }
};

var TodosReducer = function TodosReducer(state, action) {
  switch (action.type) {
    case _TodosActionTypes.GET_TODOS:
      return getTodos(state, action);
    case _TodosActionTypes.ADD_TODO:
      return addTodo(state, action);
    case _TodosActionTypes.DELETE_TODO:
      return deleteTodo(state, action);
    default:
      return state;
  }
};

exports.default = TodosReducer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodosTable = function TodosTable(_ref) {
  var todos = _ref.todos,
      addTodo = _ref.addTodo,
      deleteTodo = _ref.deleteTodo;

  var inputTodoTitle = void 0;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'table',
      null,
      React.createElement(
        'tbody',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement('td', null),
          React.createElement(
            'td',
            null,
            React.createElement('input', { type: 'text', ref: function ref(el) {
                inputTodoTitle = el;
              } })
          ),
          React.createElement(
            'td',
            null,
            React.createElement(
              'button',
              { onClick: function onClick(e) {
                  return addTodo({ title: inputTodoTitle.value });
                } },
              'Add'
            )
          )
        ),
        todos.map(function (todo) {
          return React.createElement(
            'tr',
            { key: todo.get('id') },
            React.createElement(
              'td',
              null,
              React.createElement('input', { type: 'checkbox', defaultChecked: todo.get('done') })
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                'span',
                null,
                todo.get('title')
              )
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                'button',
                { onClick: function onClick(e) {
                    return deleteTodo(todo.get('id'));
                  } },
                'Delete'
              )
            )
          );
        })
      )
    )
  );
};

exports.default = TodosTable;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _TodosActions = __webpack_require__(3);

var _TodosTable = __webpack_require__(11);

var _TodosTable2 = _interopRequireDefault(_TodosTable);

var _immutable = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(function (t) {
        return t.get('done');
      });
    case 'SHOW_ACTIVE':
      return todos.filter(function (t) {
        return !t.get('done');
      });
  }
};

var mapStateToProps = function mapStateToProps(state) {
  var todos = state.get('todos');
  return {
    todos: getVisibleTodos(todos, state.get('visibilityFilter'))
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addTodo: function addTodo(todo) {
      dispatch((0, _TodosActions.addTodoThunk)(todo));
    },
    deleteTodo: function deleteTodo(id) {
      dispatch((0, _TodosActions.deleteTodoThunk)(id));
    }
  };
};

var TodosTableConnector = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodosTable2.default);

exports.default = TodosTableConnector;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = ReduxThunk;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = reduxLogger;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(7);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');
(0, _reactDom.render)(React.createElement(_App2.default, null), app);

/***/ })
/******/ ]);