import { useState } from "react"
import { useDispatch } from "react-redux"

function AddTodo (){
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()

    function handleInputChange(event) {
      setTodo(event.target.value)
    }
    function handleBtnOnClick() {
      dispatch({
        type: "ADD_TODO",
        payload: {
          text: todo,
        },
      })
      setTodo("")
    }

    return (
      <div>
        <button onClick={handleBtnOnClick}>Foo</button>
        <input
          type="text"
          onChange={handleInputChange}
          value={todo}
        />
      </div>
    )
}

export default AddTodo