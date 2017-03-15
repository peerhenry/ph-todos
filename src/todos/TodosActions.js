import { FETCHING, SUCCESS, ERROR } from './AsyncStatus';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from './TodosActionTypes';

export const getTodos = (dispatch) => () => {
  console.log('fetching todos...');
  dispatch({type: GET_TODOS, status: FETCHING});
  axios.get('/todos/')
    .then((response) => dispatch({type: GET_TODOS, status: SUCCESS, payload: response.data}))
    .catch(err => dispatch({type: GET_TODOS, status: ERROR, payload: err}));
}

export const addTodo = (dispatch) => (todo) => {
  console.log('adding todo...' + JSON.stringify(todo));
  dispatch({type: ADD_TODO, status: FETCHING});
  console.log('now ajax call to addtodo...');
  axios.post('/todos/addtodo', todo)
    .then((response) => dispatch({type: ADD_TODO, status: SUCCESS, payload: response.data}))
    .catch(err => dispatch({type: ADD_TODO, status: ERROR, payload: err}));
}

export const deleteTodo = (dispatch) => (id) => {
  console.log('deleting todo...');
  dispatch({type: DELETE_TODO, status: FETCHING});
  axios.post('/todos/deletetodo', id)
    .then((response) => dispatch({type: DELETE_TODO, status: SUCCESS, payload: response.data}))
    .catch(err => dispatch({type: DELETE_TODO, status: ERROR, payload: err}));
}