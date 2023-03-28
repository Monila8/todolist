import { useSelector } from "react-redux"
import "../styles/todolist.css"

function TodoList() {
    const todos = useSelector((state)=>state.todos)
   return (
    <ul>
        {todos.map(todo => (
          <li className="item" key={todo.text}>{todo.text}</li>
        ))}
    </ul>
   ) 
}

export default TodoList