import react from 'react';
import { connect } from 'react-redux';
import { getTodos, addTodo, deleteTodo } from './TodosActions';
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
};

const mapStateToProps = (state) => {
  console.log('the todos prop will be: ' + JSON.stringify(state.todos));
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: (getTodos(dispatch)),
    addTodo: todo => (addTodo(todo)(dispatch)),
    deleteTodo: (deleteTodo(dispatch))
  }
}

const TodosTableContainer = connect(mapStateToProps, mapDispatchToProps)(TodosTable);

export default TodosTableContainer;