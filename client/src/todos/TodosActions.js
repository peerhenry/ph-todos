import { getThunk, postThunk } from 'async/AxiosThunks'
import { GET_TODOS, ADD_TODO, DELETE_TODO } from './TodosActionTypes';

export const getTodosThunk = () => getThunk(GET_TODOS, '/todos/')

export const addTodoThunk = (todo) => {
  if(!todo.title){
    console.warn('title must not be empty.');
    return (dispatch => {});
  }
  return postThunk(ADD_TODO, '/todos/addtodo', todo)
}

export const deleteTodoThunk = (id) => postThunk(DELETE_TODO, '/todos/deletetodo', {id: id})