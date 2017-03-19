var express = require('express');
var router = express.Router();
var debug = require('debug')('ph-todos:todos');

var TodosData = require('../data_access/TodosData');
var TodosLogic = require('../logic/TodosLogic');

let todosData = new TodosData();
let todosLogic = new TodosLogic(todosData);

// GET all todos
router.get('/', function(request, response) {
  debug('get todos');
  response.send({ todos: todosLogic.getTodos() });
});

// POST new todo
router.post('/addtodo/', function(request, response) {
  debug('add todo');
  var title = request.body.title;
  var newTodo = todosLogic.addTodo(title, false);
  var message = 'Todo ' + title + ' succesfully added.';
  response.contentType('json');
  response.send({ message: message, todo: newTodo });
});

// POST delete todo
router.post('/deletetodo/', function(request, response) {
  debug('delete todo');
  var todoId = request.body.id;
  todosLogic.deleteTodo(todoId);
  var message = 'Todo ' + todoId + ' succesfully deleted.';
  response.contentType('json');
  response.send({ message: message });
});

module.exports = router;