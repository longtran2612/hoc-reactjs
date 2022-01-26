import {combineReducers} from "redux";
import { todoListRecuder } from "./AddTodoReducer";
import { filtersTodoReducer } from "./FiltersTodoReducer";


export const rootReducer = combineReducers({
        filter: filtersTodoReducer,
        TodoList: todoListRecuder  
})   
