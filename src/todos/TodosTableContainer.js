import { connect } from 'react-redux';
import TodosTable from './TodosTable';
import { getTodos, addTodo, deleteTodo } from './TodosActions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: getTodos(dispatch),
    addTodo: addTodo(dispatch),
    deleteTodo: deleteTodo(dispatch)
  }
}

const TodosTableContainer = connect(mapStateToProps, mapDispatchToProps)(TodosTable);

export default TodosTableContainer;