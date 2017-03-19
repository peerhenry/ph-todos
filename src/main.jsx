import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { getTodos } from './todos/TodosActions'
import TodosTableContainer from './todos/TodosTableContainer'
import TodosReducer from './todos/TodosReducer'

let initialState = {
  todos: [{id: -1, title: "reactdummyentry", done: false}],
  fetching: false,
  visibilityFilter: 'SHOW_ALL'
};

const store = createStore(TodosReducer, initialState, applyMiddleware(thunk));

const Dom = () => (
  <div>
    <h1>Hello says React!</h1>
    <Provider store={store}>
      <TodosTableContainer/>
    </Provider>
  </div>
);

class Main extends Component {
  componentDidMount(){
    store.dispatch(getTodos());
  }

  render() {
    return <Dom/>
  }
}

const app = document.getElementById('app');
render(<Main/>, app);