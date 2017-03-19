import { FETCHING, SUCCESS, ERROR } from './AsyncStatus';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from './TodosActionTypes';

const getTodos = function(state, action){
  switch(action.status){
    case FETCHING:
      return {...state, fetching: true};
    case SUCCESS:
      return {...state, fetching: false, todos: action.payload.todos};
    case ERROR:
      console.log('error: ' + action.payload);
      return {...state, fetching: false};
    default:
      return state;
  }
}

const addTodo = function(state, action){
  switch(action.status){
    case FETCHING:
      return {...state, fetching: true};
    case SUCCESS:
      console.log('message from server: ' + action.payload.message);
      return {...state, todos: [...state.todos, action.payload.todo]};
    case ERROR:
      console.log('error: ' + action.payload);
      return {...state, fetching: false};
    default:
      return state;
  }
}

const deleteTodo = function(state, action){
  switch(action.status){
    case FETCHING:
      return {...state, fetching: true};
    case SUCCESS:
      console.log('delete todo success payload: ' + action.payload);
      return {...state, fetching: false, todos: state.todos.filter(todo => todo.id != action.payload)};
    case ERROR:
      console.log('error: ' + action.payload);
      return {...state, fetching: false};
    default:
      return state;
  }
}

const TodosReducer = function(state, action){
  console.log('');
  console.log('*** REDUCE state: ' + JSON.stringify(state));
  console.log('*** REDUCE action: ' + JSON.stringify(action));
  console.log('');
  switch(action.type){
    case GET_TODOS:
      return getTodos(state, action);
    case ADD_TODO:
      return addTodo(state, action);
    case DELETE_TODO:
      return deleteTodo(state, action);
    default:
      console.log('reducer will now return default.');
      return state;
  }
}

export default TodosReducer;