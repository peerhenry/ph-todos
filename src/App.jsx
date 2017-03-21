import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { getTodosThunk } from 'todos/TodosActions'
import TodosTableConnector from 'todos/TodosTableConnector'

import store from './store'

class App extends Component {
  componentDidMount(){
    store.dispatch(getTodosThunk());
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