import { Router } from 'express'
import TodosData from './TodosData'
import TodosLogic from './TodosLogic'
import debug from 'debug'

let todosData = new TodosData();
let todosLogic = new TodosLogic(todosData);

let router = Router()
let debugLog = debug('ph-todos:TodosController')
function log(msg){
  debugLog(msg)
  console.log('TodosController: ' + msg)
}

router.get('/', (request, response) => {
  log('GET received')
  response.send({ todos: todosLogic.getTodos() })
})

router.post('/addtodo/', (request, response) => {
  log('POST addtodo')
  var title = request.body.title;
  var newTodo = todosLogic.addTodo(title, false);
  var message = 'Todo ' + title + ' succesfully added.';
  response.contentType('json');
  response.send({ message: message, todo: newTodo });
})

router.post('/deletetodo/', (request, response) => {
  log('POST deletetodo')
  var todoId = request.body.id;
  todosLogic.deleteTodo(todoId);
  var message = 'Todo ' + todoId + ' succesfully deleted.';
  response.contentType('json');
  response.send({ message: message, id: todoId });
})

export default router