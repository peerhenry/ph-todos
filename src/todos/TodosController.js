import { Router } from 'express'
import TodosData from './TodosData'
import TodosLogic from './TodosLogic'

let todosData = new TodosData();
let todosLogic = new TodosLogic(todosData);

let router = Router()

router.get('/', (request, response) => {
  response.send({ todos: todosLogic.getTodos() });
})

router.post('/addtodo/', (request, response) =>{
  var title = request.body.title;
  var newTodo = todosLogic.addTodo(title, false);
  var message = 'Todo ' + title + ' succesfully added.';
  response.contentType('json');
  response.send({ message: message, todo: newTodo });
})

router.post('/deletetodo/', (request, response) =>{
  var todoId = request.body.id;
  todosLogic.deleteTodo(todoId);
  var message = 'Todo ' + todoId + ' succesfully deleted.';
  response.contentType('json');
  response.send({ message: message, id: todoId });
})

export default router