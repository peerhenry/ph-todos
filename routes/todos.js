var express = require('express');
var router = express.Router();

var counter = 1;
var todos = [];

function addTodo(title, done){
  var newTodo = {
    id: counter++,
    title: title,
    done: done
  };
  todos.push(newTodo);
  return newTodo;
}

function deleteTodo(todoId){
  todos = todos.filter(function(todo){
    return todo.id != todoId;
  });
}

/* initialize todos */
addTodo('chillout', true);
addTodo('brush', false);
addTodo('mongodb', false);
addTodo('TotalNote', false);

/* GET all todos */
router.get('/', function(request, response) {
  response.send({ todos: todos });
});

/* POST new todo */
router.post('/addtodo/', function(request, response) {
  var success = false;
  var message = 'Add todo failed!';
  var title = request.body.title;
  var newTodo;
  if(title){
    newTodo = addTodo(title, false);
    message = 'Todo ' + title + ' succesfully added.';
    success = true;
  }
  response.contentType('json');
  response.send({ success: success, message: message, todo: newTodo });
});

/* POST delete todo */
router.post('/deletetodo/', function(request, response) {
  var success = false;
  var message = 'Please pass a valid id!';
  var todoId = request.body.id;
  if(todoId){
    deleteTodo(todoId);
    message = 'Todo ' + todoId + ' succesfully deleted.';
    success = true;
  }
  response.contentType('json');
  response.send({ success: success, message: message });
});

module.exports = router;