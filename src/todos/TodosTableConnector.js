import react from 'react';
import { connect } from 'react-redux';
import { addTodoThunk, deleteTodoThunk } from './TodosActions';
import TodosTable from './TodosTable';
import { Map } from 'immutable';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.get('done'))
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.get('done'))
  }
}

const mapStateToProps = (state) => {
  const todos = state.get('todos')
  return {
    todos: getVisibleTodos(todos, state.get('visibilityFilter'))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => { dispatch(addTodoThunk(todo)) },
    deleteTodo: id => { dispatch(deleteTodoThunk(id)) }
  }
}

const TodosTableConnector = connect(mapStateToProps, mapDispatchToProps)(TodosTable);

export default TodosTableConnector;