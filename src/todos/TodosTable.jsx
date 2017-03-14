import react from 'React';

const TodosTable = ({todos}) => (
  <table>
    <tbody>
      <tr>
        <td></td>
        <td><input type="text"/></td>
        <td><button>Add</button></td>
      </tr>
      {todos.map(todo => (
        <tr key={todo.id}>
          <td><input type="checkbox" defaultChecked={todo.done}/></td>
          <td><span>{todo.title}</span></td>
          <td><button>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TodosTable;