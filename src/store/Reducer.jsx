import { SET_TODO,SAVE_TODO,DELETE_TODO } from "./Contants"
const initState={
    todos:[],
    todo:''
}
export default function Reducer(state,action){
     switch(action.type){
            case SET_TODO:
             return{
                 ...state,
                 todo: action.payload
             }
            case SAVE_TODO:
                return{
                    ...state,
                    todos:[...state.todos,action.payload]
                }
            case DELETE_TODO:
                const newTodos =[...state.todos]
                newTodos.splice(action.payload,1)
                    return{
                        ...state,
                       todos:newTodos
                    }
        default:
            throw new Error("ngu")
     }
 }

export {initState}