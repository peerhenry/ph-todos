var express = require('express');
var router = express.Router();

var counter = 1;
var todos = [];

function addTodo(title, done){
  todos.push({
    id: counter++,
    title: title,
    done: done
  });
}

/* initialize todos */
addTodo('chillout', true);
addTodo('brush', false);
addTodo('mongodb', false);
addTodo('TotalNote', false);

/* GET todos */
router.get('/', function(request, response) {
  response.send({ todos: todos });
});

/* POST new todo */
router.post('/addtodo/', function(request, response) {
  var success = false;
  var respMsg = 'Add todo failed!';
  var title = request.body.title;
  if(title){
    addTodo(title, false);
    respMsg = 'Todo ' + title + ' succesfully added.';
    success = true;
  }
  response.contentType('json');
  response.send({ success: success, message: respMsg });
});

module.exports = router;