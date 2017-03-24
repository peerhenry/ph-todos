module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {
  //res.render('index', { title: 'Express' }) // should replace with send?
  res.sendFile(path.join(__dirname, 'client/public/views/index.html'));
});

exports.default = router;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _TodosData = __webpack_require__(3);

var _TodosData2 = _interopRequireDefault(_TodosData);

var _TodosLogic = __webpack_require__(4);

var _TodosLogic2 = _interopRequireDefault(_TodosLogic);

var _debug = __webpack_require__(5);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todosData = new _TodosData2.default();
var todosLogic = new _TodosLogic2.default(todosData);

var router = (0, _express.Router)();
var debugLog = (0, _debug2.default)('ph-todos:TodosController');
function log(msg) {
  debugLog(msg);
  console.log('TodosController: ' + msg);
}

router.get('/', function (request, response) {
  log('GET received');
  response.send({ todos: todosLogic.getTodos() });
});

router.post('/addtodo/', function (request, response) {
  log('POST addtodo');
  var title = request.body.title;
  var newTodo = todosLogic.addTodo(title, false);
  var message = 'Todo ' + title + ' succesfully added.';
  response.contentType('json');
  response.send({ message: message, todo: newTodo });
});

router.post('/deletetodo/', function (request, response) {
  log('POST deletetodo');
  var todoId = request.body.id;
  todosLogic.deleteTodo(todoId);
  var message = 'Todo ' + todoId + ' succesfully deleted.';
  response.contentType('json');
  response.send({ message: message, id: todoId });
});

exports.default = router;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodosData = function () {
  function TodosData() {
    _classCallCheck(this, TodosData);

    this.counter = 1;
    this.todos = [];
  }

  _createClass(TodosData, [{
    key: "getTodos",
    value: function getTodos() {
      return this.todos;
    }
  }, {
    key: "addTodo",
    value: function addTodo(title, done) {
      var newTodo = {
        id: this.counter++,
        title: title,
        done: done
      };
      this.todos.push(newTodo);
      return newTodo;
    }
  }, {
    key: "deleteTodo",
    value: function deleteTodo(todoId) {
      this.todos = this.todos.filter(function (todo) {
        return todo.id != todoId;
      });
    }
  }]);

  return TodosData;
}();

exports.default = TodosData;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodosLogic = function () {
  function TodosLogic(todosData) {
    _classCallCheck(this, TodosLogic);

    this.todosData = todosData;
    this.todosData.addTodo('chillout', true);
    this.todosData.addTodo('brush', false);
    this.todosData.addTodo('mongodb', false);
    this.todosData.addTodo('TotalNote', false);
    this.todosData.addTodo('Dragon', false);
  }

  _createClass(TodosLogic, [{
    key: 'getTodos',
    value: function getTodos() {
      return this.todosData.getTodos();
    }
  }, {
    key: 'addTodo',
    value: function addTodo(title, done) {
      return this.todosData.addTodo(title, done);
    }
  }, {
    key: 'deleteTodo',
    value: function deleteTodo(id) {
      return this.todosData.deleteTodo(id);
    }
  }]);

  return TodosLogic;
}();

exports.default = TodosLogic;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configRoutes = undefined;

var _IndexController = __webpack_require__(1);

var _IndexController2 = _interopRequireDefault(_IndexController);

var _TodosController = __webpack_require__(2);

var _TodosController2 = _interopRequireDefault(_TodosController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configRoutes = function configRoutes(app) {
  app.use('/', _IndexController2.default);
  app.use('/todos/', _TodosController2.default);
};

exports.configRoutes = configRoutes;

/***/ })
/******/ ]);