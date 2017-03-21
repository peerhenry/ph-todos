import react from 'react';
import { connect } from 'react-redux';
import { addTodoThunk, deleteTodoThunk } from './TodosActions';
import TodosTable from './TodosTable';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
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