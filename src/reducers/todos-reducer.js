

function toDosReducer(state = [], action) {
  if (action.type === "ADD_TODO") {
    return state.concat({
      text: action.payload.text,
    })
  }

  return state
}

export default toDosReducer
