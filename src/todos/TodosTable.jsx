import react from 'react'

const TodosTable = ({todos, addTodo, deleteTodo}) => {
  let inputTodoTitle;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td><input type="text" ref={ el => { inputTodoTitle = el }}/></td>
            <td><button onClick={ e => addTodo({ title: inputTodoTitle.value }) }>Add</button></td>
          </tr>
          {
            todos.map(todo => {
              return (
                <tr key={todo.get('id')}>
                  <td><input type="checkbox" defaultChecked={todo.get('done')}/></td>
                  <td><span>{todo.get('title')}</span></td>
                  <td><button onClick={e => deleteTodo(todo.get('id'))}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TodosTable;