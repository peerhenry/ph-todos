import react from 'react'

const TodosTable = ({todos, getTodos, addTodo, deleteTodo}) => (
  <div>
    <table>
      <tbody>
        <tr>
          <td></td>
          <td><input type="text"/></td>
          <td><button onClick={e => addTodo({title: 'jimmy'})}>Add</button></td>
        </tr>
        {todos.map(todo => {
          //console.log('mapping todo: ' + todo.id); // DEBUG
          return (
            <tr key={todo.id}>
              <td><input type="checkbox" defaultChecked={todo.done}/></td>
              <td><span>{todo.title}</span></td>
              <td><button onClick={e => deleteTodo(todo.id)}>Delete</button></td>
            </tr>
          )
        }
        )}
      </tbody>
      
    </table>
    <button onClick={e => getTodos()}>fetch todos</button>
  </div>
);

export default TodosTable;