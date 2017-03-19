import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { getTodos } from './todos/TodosActions'
import TodosTableConnector from './todos/TodosTableConnector'
import TodosReducer from './todos/TodosReducer'

let initialState = {
  todos: [{id: -1, title: "reactdummyentry", done: false}],
  fetching: false,
  visibilityFilter: 'SHOW_ALL'
};

const store = createStore(TodosReducer, initialState, applyMiddleware(thunk));

class App extends Component {
  componentDidMount(){
    store.dispatch(getTodos());
  }

  render() {
    return (
      <div>
        <h1>Hello says React!</h1>
        <Provider store={store}>
          <TodosTableConnector/>
        </Provider>
      </div>
    )
  }
}

export default App