import react from 'react'

const TodosTable = ({todos, getTodos, addTodo}) => (
  <div>
    <table>
      <tbody>
        <tr>
          <td></td>
          <td><input type="text"/></td>
          <td><button onClick={e => addTodo({title: 'jimmy'})}>Add</button></td>
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
    <button onClick={e => getTodos()}>fetch todos</button>
  </div>
);

export default TodosTable;