
export const addTodo= (data) =>{
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const statusTodo= (id) =>{
    return {
        type: 'todoList/statusTodo',    
        payload: id
    }
}
export const searchFilter= (text) =>{
    return {
        type: 'filter/searchFilter',
        payload: text
    }
}
export const statusFilter= (status) =>{
    return {
        type: 'filter/statusFilter',
        payload: status
    }
}
export const priorityFilter= (priority) =>{
    return {
        type: 'filter/priorityFilter',
        payload: priority
    }
}

