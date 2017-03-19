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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
exports.deleteTodo = exports.addTodo = exports.getTodos = undefined;

var _AsyncStatus = __webpack_require__(3);

var _TodosActionTypes = __webpack_require__(4);

var getTodos = exports.getTodos = function getTodos() {
  return function (dispatch, getState) {
    console.log('dispatching getTodos...');
    dispatch({ type: _TodosActionTypes.GET_TODOS, status: _AsyncStatus.FETCHING });
    axios.get('/todos/').then(function (response) {
      return dispatch({ type: _TodosActionTypes.GET_TODOS, status: _AsyncStatus.SUCCESS, payload: response.data });
    }).catch(function (err) {
      return dispatch({ type: _TodosActionTypes.GET_TODOS, status: _AsyncStatus.ERROR, payload: err });
    });
  };
};

var addTodo = exports.addTodo = function addTodo(todo) {
  return function (dispatch, getState) {
    console.log('dispatching addTodo... ' + JSON.stringify(todo));
    dispatch({ type: _TodosActionTypes.ADD_TODO, status: _AsyncStatus.FETCHING });
    console.log('now ajax call to addtodo...');
    axios.post('/todos/addtodo', todo).then(function (response) {
      return dispatch({ type: _TodosActionTypes.ADD_TODO, status: _AsyncStatus.SUCCESS, payload: response.data });
    }).catch(function (err) {
      return dispatch({ type: _TodosActionTypes.ADD_TODO, status: _AsyncStatus.ERROR, payload: err });
    });
  };
};

var deleteTodo = exports.deleteTodo = function deleteTodo(id) {
  return function (dispatch, getState) {
    console.log('dispatching deleteTodo... ' + id);
    dispatch({ type: _TodosActionTypes.DELETE_TODO, status: _AsyncStatus.FETCHING });
    console.log('now ajax call to deletetodo...');
    axios.post('/todos/deletetodo', { id: id }).then(function (response) {
      return dispatch({ type: _TodosActionTypes.DELETE_TODO, status: _AsyncStatus.SUCCESS, payload: id });
    }).catch(function (err) {
      return dispatch({ type: _TodosActionTypes.DELETE_TODO, status: _AsyncStatus.ERROR, payload: err });
    });
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCHING = exports.FETCHING = 'FETCHING';
var SUCCESS = exports.SUCCESS = 'SUCCESS';
var ERROR = exports.ERROR = 'ERROR';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_TODOS = exports.GET_TODOS = 'GET_TODOS';
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var DELETE_TODO = exports.DELETE_TODO = 'DELETE_TODO';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AsyncStatus = __webpack_require__(3);

var _TodosActionTypes = __webpack_require__(4);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getTodos = function getTodos(state, action) {
  switch (action.status) {
    case _AsyncStatus.FETCHING:
      return _extends({}, state, { fetching: true });
    case _AsyncStatus.SUCCESS:
      console.log(JSON.stringify(action.payload));
      return _extends({}, state, { fetching: false, todos: action.payload });
    case _AsyncStatus.ERROR:
      console.log('error: ' + action.payload);
      return _extends({}, state, { fetching: false });
    default:
      return state;
  }
};

var addTodo = function addTodo(state, action) {
  switch (action.status) {
    case _AsyncStatus.FETCHING:
      return _extends({}, state, { fetching: true });
    case _AsyncStatus.SUCCESS:
      console.log('message from server: ' + action.payload.message);
      return _extends({}, state, { todos: [].concat(_toConsumableArray(state.todos), [action.payload.todo]) });
    case _AsyncStatus.ERROR:
      console.log('error: ' + action.payload);
      return _extends({}, state, { fetching: false });
    default:
      return state;
  }
};

var deleteTodo = function deleteTodo(state, action) {
  switch (action.status) {
    case _AsyncStatus.FETCHING:
      return _extends({}, state, { fetching: true });
    case _AsyncStatus.SUCCESS:
      console.log('delete todo success payload: ' + action.payload);
      return _extends({}, state, { fetching: false, todos: state.todos.filter(function (todo) {
          return todo.id != action.payload;
        }) });
    case _AsyncStatus.ERROR:
      console.log('error: ' + action.payload);
      return _extends({}, state, { fetching: false });
    default:
      return state;
  }
};

var TodosReducer = function TodosReducer(state, action) {
  console.log('');
  console.log('*** REDUCE state: ' + JSON.stringify(state));
  console.log('*** REDUCE action: ' + JSON.stringify(action));
  console.log('');
  switch (action.type) {
    case _TodosActionTypes.GET_TODOS:
      return getTodos(state, action);
    case _TodosActionTypes.ADD_TODO:
      return addTodo(state, action);
    case _TodosActionTypes.DELETE_TODO:
      return deleteTodo(state, action);
    default:
      console.log('reducer will now return default.');
      return state;
  }
};

exports.default = TodosReducer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _TodosActions = __webpack_require__(1);

var _TodosTable = __webpack_require__(10);

var _TodosTable2 = _interopRequireDefault(_TodosTable);

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
  console.log('the todos prop will be: ' + JSON.stringify(state.todos));
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getTodos: function getTodos() {
      dispatch(_TodosActions.getTodos);
    },
    addTodo: function addTodo(todo) {
      dispatch((0, _TodosActions.addTodo)(todo));
    },
    deleteTodo: function deleteTodo(id) {
      dispatch((0, _TodosActions.deleteTodo)(id));
    }
  };
};

var TodosTableContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodosTable2.default);

exports.default = TodosTableContainer;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = ReduxThunk;

/***/ }),
/* 10 */
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
      getTodos = _ref.getTodos,
      addTodo = _ref.addTodo,
      deleteTodo = _ref.deleteTodo;
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
            React.createElement('input', { type: 'text' })
          ),
          React.createElement(
            'td',
            null,
            React.createElement(
              'button',
              { onClick: function onClick(e) {
                  return addTodo({ title: 'jimmy' });
                } },
              'Add'
            )
          )
        ),
        todos.map(function (todo) {
          //console.log('mapping todo: ' + todo.id); // DEBUG
          return React.createElement(
            'tr',
            { key: todo.id },
            React.createElement(
              'td',
              null,
              React.createElement('input', { type: 'checkbox', defaultChecked: todo.done })
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                'span',
                null,
                todo.title
              )
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                'button',
                { onClick: function onClick(e) {
                    return deleteTodo(todo.id);
                  } },
                'Delete'
              )
            )
          );
        })
      )
    ),
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          return getTodos();
        } },
      'fetch todos'
    )
  );
};

exports.default = TodosTable;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(9);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRedux = __webpack_require__(2);

var _TodosTableContainer = __webpack_require__(6);

var _TodosTableContainer2 = _interopRequireDefault(_TodosTableContainer);

var _TodosActions = __webpack_require__(1);

var _TodosReducer = __webpack_require__(5);

var _TodosReducer2 = _interopRequireDefault(_TodosReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  todos: [{ id: -1, title: "reactdummyentry", done: false }],
  fetching: false,
  visibilityFilter: 'SHOW_ALL'
};

var store = (0, _redux.createStore)(_TodosReducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

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

var app = document.getElementById('app');
(0, _reactDom.render)(_react2.default.createElement(
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
), app);

/***/ })
/******/ ]);