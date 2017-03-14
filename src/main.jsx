import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodosTableContainer from './todos/TodosTableContainer';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'dummy undone',
      done: false
    },
    {
      id: 2,
      title: 'dummy done',
      done: true
    }
  ],
  visibilityFilter: 'SHOW_ALL'
};

const reducer = function(state = initialState, action){
  return state;
};

const app = document.getElementById('app');
const store = createStore(reducer);

const Dom = () => (
  <div>
    <h1>Hello says React!</h1>
    <Provider store={store}>
      <TodosTableContainer/>
    </Provider>
  </div>
);

render(<Dom/>, app);