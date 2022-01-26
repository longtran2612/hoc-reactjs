import {combineReducers} from "redux";

import todoListReducer from "./AddTodoReducer";
import filtersTodoReducer  from "./FiltersTodoReducer";


export const rootReducer = combineReducers({
        filter: filtersTodoReducer,
        TodoList: todoListReducer  
})   
