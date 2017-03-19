import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import TodosTableContainer from './todos/TodosTableContainer';
import { getTodos } from './todos/TodosActions'
import TodosReducer from './todos/TodosReducer';

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

const app = document.getElementById('app');
render(<div>
    <h1>Hello says React!</h1>
    <Provider store={store}>
      <TodosTableContainer/>
    </Provider>
  </div>, app);