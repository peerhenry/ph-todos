import './TodosActionTypes';
import './AsyncStatus';

export const getTodos = (dispatch) => () => {
  dispatch({type: GET_TODOS, status: FETCHING});
  axois.get('')
  .then((response) => dispatch({type: GET_TODOS, status: SUCCESS, payload: response.data}))
  .catch(err => dispatch({type: GET_TODOS, status: ERROR, payload: err}));
}

export const addTodo = (dispatch) => () => {
  console.log('addTodo in actions called!');
}

export const deleteTodo = (dispatch) => () => {

}