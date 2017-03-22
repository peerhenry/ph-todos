class TodosData{
  constructor(){
    this.counter = 1
    this.todos = []
  }

  getTodos(){
    return this.todos
  }

  addTodo(title, done){
    var newTodo = {
      id: this.counter++,
      title: title,
      done: done
    }
    this.todos.push(newTodo)
    return newTodo
  }

  deleteTodo(todoId){
    this.todos = this.todos.filter(todo => todo.id != todoId)
  }
}

export default TodosData