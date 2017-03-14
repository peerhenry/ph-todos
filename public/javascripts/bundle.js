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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _TodosTable = __webpack_require__(8);

var _TodosTable2 = _interopRequireDefault(_TodosTable);

var _TodosActions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(function (t) {
        return t.completed;
      });
    case 'SHOW_ACTIVE':
      return todos.filter(function (t) {
        return !t.completed;
      });
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getTodos: (0, _TodosActions.getTodos)(dispatch),
    addTodo: (0, _TodosActions.addTodo)(dispatch),
    deleteTodo: (0, _TodosActions.deleteTodo)(dispatch)
  };
};

var TodosTableContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodosTable2.default);

exports.default = TodosTableContainer;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCHING = exports.FETCHING = 1;
var SUCCESS = exports.SUCCESS = 2;
var ERROR = exports.ERROR = 3;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_TODOS = exports.GET_TODOS = 'GET_TODOS';
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var DELETE_TODO = exports.DELETE_TODO = 'DELETE_TODO';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTodo = exports.addTodo = exports.getTodos = undefined;

__webpack_require__(6);

__webpack_require__(5);

var getTodos = exports.getTodos = function getTodos(dispatch) {
  return function () {
    dispatch({ type: GET_TODOS, status: FETCHING });
    axois.get('').then(function (response) {
      return dispatch({ type: GET_TODOS, status: SUCCESS, payload: response.data });
    }).catch(function (err) {
      return dispatch({ type: GET_TODOS, status: ERROR, payload: err });
    });
  };
};

var addTodo = exports.addTodo = function addTodo(dispatch) {
  return function () {
    console.log('addTodo in actions called!');
  };
};

var deleteTodo = exports.deleteTodo = function deleteTodo(dispatch) {
  return function () {};
};

/***/ }),
/* 8 */
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
      addTodo = _ref.addTodo;
  return React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement("td", null),
        React.createElement(
          "td",
          null,
          React.createElement("input", { type: "text" })
        ),
        React.createElement(
          "td",
          null,
          React.createElement(
            "button",
            { onClick: function onClick(e) {
                return addTodo();
              } },
            "Add"
          )
        )
      ),
      todos.map(function (todo) {
        return React.createElement(
          "tr",
          { key: todo.id },
          React.createElement(
            "td",
            null,
            React.createElement("input", { type: "checkbox", defaultChecked: todo.done })
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "span",
              null,
              todo.title
            )
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "button",
              null,
              "Delete"
            )
          )
        );
      })
    )
  );
};

exports.default = TodosTable;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _redux = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _TodosTableContainer = __webpack_require__(2);

var _TodosTableContainer2 = _interopRequireDefault(_TodosTableContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  todos: [{
    id: 1,
    title: 'dummy undone',
    done: false
  }, {
    id: 2,
    title: 'dummy done',
    done: true
  }],
  visibilityFilter: 'SHOW_ALL'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  return state;
};

var app = document.getElementById('app');
var store = (0, _redux.createStore)(reducer);

var Dom = function Dom() {
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
      { store: store },
      _react2.default.createElement(_TodosTableContainer2.default, null)
    )
  );
};

(0, _reactDom.render)(_react2.default.createElement(Dom, null), app);

/***/ })
/******/ ]);