import './TodosActionTypes';

const initialState = {
  todos: [],
  fetching: false
}

const getTodos = function(state, action){
  return state;
}

const addTodo = function(state, action){
  return state;
}

const deleteTodo = function(state, action){
  return state;
}

const TodosReducer = function(state = initialState, action){
  switch(action.type){
    case GET_TODOS:
      return getTodos(state, action);
    case ADD_TODO:
      return addTodo(state, action);
    case DELETE_TODO:
      return deleteTodo(state, action);
  }
}

export default TodosReducer;