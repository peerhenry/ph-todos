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

const logger = createLogger();
const store = createStore(
  TodosReducer, 
  initialState, 
  applyMiddleware(thunk, logger)
)

/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // DEV
const store = createStore(
  TodosReducer, 
  initialState, 
  composeEnhancers(applyMiddleware(thunk, logger))
)//*/

export default store