import react from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { addTodoThunk, deleteTodoThunk } from './TodosActions';
import TodosTable from './TodosTable';

const filterVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.done)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.done)
    default:
      return todos
  }
}

export const mapStateToProps = (state) => {
  const todosMap = state.get('todos')
  const todosObject = todosMap.toJS()
  const todosArray = Object.keys(todosObject).map(key => todosObject[key])
  return {
    todos: filterVisibleTodos(todosArray, state.get('visibilityFilter'))
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => { dispatch(addTodoThunk(todo)) },
    deleteTodo: id => { dispatch(deleteTodoThunk(id)) }
  }
}

const TodosTableConnector = connect(mapStateToProps, mapDispatchToProps)(TodosTable);

export default TodosTableConnector;