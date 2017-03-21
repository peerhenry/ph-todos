import { CALLING, SUCCESS, ERROR } from 'async/AsyncStatus';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from './TodosActionTypes';

const getTodos = function(state, action){
  switch(action.status){
    case CALLING:
      return {...state, calling: true};
    case SUCCESS:
      return {...state, calling: false, todos: action.payload.todos};
    case ERROR:
      return {...state, calling: false};
    default:
      return state;
  }
}

const addTodo = function(state, action){
  switch(action.status){
    case CALLING:
      return {...state, calling: true};
    case SUCCESS:
      return {...state, calling: false, todos: [...state.todos, action.payload.todo]};
    case ERROR:
      return {...state, calling: false};
    default:
      return state;
  }
}

const deleteTodo = function(state, action){
  switch(action.status){
    case CALLING:
      return {...state, calling: true};
    case SUCCESS:
      return {...state, calling: false, todos: state.todos.filter(todo => todo.id != action.payload.id)};
    case ERROR:
      return {...state, calling: false};
    default:
      return state;
  }
}

const TodosReducer = function(state, action){
  /*console.log('');
  console.log('*** REDUCE state: ' + JSON.stringify(state));
  console.log('*** REDUCE action: ' + JSON.stringify(action));
  console.log('');//*/
  switch(action.type){
    case GET_TODOS:
      return getTodos(state, action);
    case ADD_TODO:
      return addTodo(state, action);
    case DELETE_TODO:
      return deleteTodo(state, action);
    default:
      return state;
  }
}

export default TodosReducer;