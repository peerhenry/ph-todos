import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import TodosReducer from 'todos/TodosReducer'
import { fromJS } from 'immutable'

const initialState = fromJS({
  todos: {},
  calling: false,
  visibilityFilter: 'SHOW_ALL'
})

console.log('now logging initial state keys')
console.log(Object.keys(initialState))

const logger = createLogger();
const store = createStore(
  TodosReducer, 
  initialState, 
  applyMiddleware(thunk, logger)
)

export default store