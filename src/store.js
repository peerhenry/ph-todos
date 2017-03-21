import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import TodosReducer from 'todos/TodosReducer'

let initialState = {
  todos: [],
  calling: false,
  visibilityFilter: 'SHOW_ALL'
};

const logger = createLogger();
const store = createStore(
  TodosReducer, 
  initialState, 
  applyMiddleware(thunk, logger)
);

export default store