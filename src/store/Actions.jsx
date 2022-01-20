import {SET_TODO,SAVE_TODO,DELETE_TODO} from './Contants'

// actions
export const settodo = payload=>{
    return {
        type: SET_TODO,
        payload
    }
}
export const savetodo = payload=>{
    return {
        type: SAVE_TODO,
        payload
    }
}

export const deletetodo = payload=>{
    return {
        type: DELETE_TODO,
        payload
    }
}