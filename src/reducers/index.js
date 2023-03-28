import { combineReducers } from "redux";
import toDosReducer from "./todos-reducer";

export default combineReducers({
    todos: toDosReducer,
})