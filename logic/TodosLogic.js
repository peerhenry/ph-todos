var debug = require('debug')('ph-todos:TodosLogic');

class TodosLogic{
  constructor(todosData){
    this.todosData = todosData;
    this.todosData.addTodo('chillout', true);
    this.todosData.addTodo('brush', false);
    this.todosData.addTodo('mongodb', false);
    this.todosData.addTodo('TotalNote', false);
    this.todosData.addTodo('Dragon', false);
  }

  getTodos(){
    return this.todosData.getTodos();
  }

  addTodo(title, done){
    return this.todosData.addTodo(title, done);
  }

  deleteTodo(id){
    return this.todosData.deleteTodo(id);
  }
}

module.exports =  TodosLogic;