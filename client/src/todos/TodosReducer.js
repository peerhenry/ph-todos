import { CALLING, SUCCESS, ERROR } from 'async/AsyncStatus';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from './TodosActionTypes';
import { Map, fromJS } from 'immutable'

function convertTodos(todos){
  if(todos instanceof Array){
    var todosObject = {};
    for (var i = 0; i < todos.length; ++i)
      todosObject[todos[i].id] = todos[i];
    return fromJS(todosObject);
  }
  else return fromJS(todos)
}

const getTodos = function(state, action){
  switch(action.status){
    case CALLING:
      return state.set('calling', true)
    case SUCCESS:
      // todos are saved in state as a Map with ids as keys
      const newTodos = convertTodos(action.payload.todos)
      return state.merge({calling: false, todos: newTodos})
    case ERROR:
      return state.set('calling', false)
    default:
      return state;
  }
}

const addTodo = function(state, action){
  switch(action.status){
    case CALLING:
      return state.set('calling', true)
    case SUCCESS:
      const newTodo = Map(action.payload.todo)
      const newTodos = state.get('todos').set(newTodo.get('id'), newTodo)
      return state.merge({ calling: false, todos: newTodos })
    case ERROR:
      return state.set('calling', false)
    default:
      return state;
  }
}

const deleteTodo = function(state, action){
  switch(action.status){
    case CALLING:
      return state.set('calling', true)
    case SUCCESS:
      const newTodos = state.get('todos').filter(todo => todo.get('id') != action.payload.id)
      return state.merge({ calling: false, todos: newTodos })
    case ERROR:
      return state.set('calling', false)
    default:
      return state;
  }
}

const TodosReducer = function(state, action){
  switch(action.type){
    case GET_TODOS:
      return getTodos(state, action)
    case ADD_TODO:
      return addTodo(state, action)
    case DELETE_TODO:
      return deleteTodo(state, action)
    default:
      return state
  }
}

export default TodosReducer;