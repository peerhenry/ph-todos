import { FETCHING, SUCCESS, ERROR } from './AsyncStatus';
import { GET_TODOS, ADD_TODO, DELETE_TODO } from './TodosActionTypes';

export const getTodos = () => (dispatch, getState) => {
  console.log('dispatching getTodos...');
  dispatch({type: GET_TODOS, status: FETCHING});
  axios.get('/todos/')
    .then((response) => dispatch({type: GET_TODOS, status: SUCCESS, payload: response.data}))
    .catch(err => dispatch({type: GET_TODOS, status: ERROR, payload: err}));
}

export const addTodo = (todo) => (dispatch, getState) => {
  console.log('dispatching addTodo... ' + JSON.stringify(todo));
  dispatch({type: ADD_TODO, status: FETCHING});
  console.log('now ajax call to addtodo...');
  axios.post('/todos/addtodo', todo)
    .then(response => dispatch({type: ADD_TODO, status: SUCCESS, payload: response.data}))
    .catch(err => dispatch({type: ADD_TODO, status: ERROR, payload: err}));
}

export const deleteTodo = (id) => (dispatch, getState) => {
  console.log('dispatching deleteTodo... ' + id);
  dispatch({type: DELETE_TODO, status: FETCHING});
  console.log('now ajax call to deletetodo...');
  axios.post('/todos/deletetodo', {id: id})
    .then(response => dispatch({type: DELETE_TODO, status: SUCCESS, payload: id}))
    .catch(err => dispatch({type: DELETE_TODO, status: ERROR, payload: err}));
}