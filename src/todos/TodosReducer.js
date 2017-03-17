import { FETCHING, SUCCESS, ERROR } from './AsyncStatus';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from './TodosActionTypes';

const getTodos = function(state, action){
  switch(action.status){
    case FETCHING:
      state.fetching = true;
      return state;
    case SUCCESS:
      state.todos = action.payload;
      return state;
    case ERROR:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}

const addTodo = function(state, action){
  switch(action.status){
    case FETCHING:
      state.fetching = true;
      return state;
    case SUCCESS:
      console.log('will push a new todo if success');
      if(action.payload.success){
        console.log('pushing a new todo : ' + JSON.stringify(action.payload.todo));
        state.todos.push(action.payload.todo);
      }
      console.log('new todos in state: ' + JSON.stringify(state.todos));
      console.log('message from server: ' + action.payload.message);
      return state;
    case ERROR:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}

const deleteTodo = function(state, action){
  switch(action.status){
    case FETCHING:
      state.fetching = true;
      return state;
    case SUCCESS:
      if(action.payload.success){
        state.todos = state.todos.filter(todo.id != action.payload);
      }
      console.log(action.payload.message);
      return state;
    case ERROR:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}

let initialState = {
  todos: [{id: -1, title: "reactdummyentry", done: false}],
  fetching: false,
  visibilityFilter: 'SHOW_ALL'
};

const TodosReducer = function(state = initialState, action){
  console.log('TodosReducer reached in state: ' + JSON.stringify(state));
  console.log('With action: ' + JSON.stringify(action));
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