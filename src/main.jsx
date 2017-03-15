import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodosTableContainer from './todos/TodosTableContainer';
import { getTodos } from './todos/TodosActions'
import TodosReducer from './todos/TodosReducer';

const store = createStore(TodosReducer);

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