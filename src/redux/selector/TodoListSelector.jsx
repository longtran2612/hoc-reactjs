import { createSelector } from '@reduxjs/toolkit'
export const todoListSelector = (state) => state.TodoList

export const seachSelector = (state) => state.filter.search

export const statusSelector = (state) => state.filter.status

export const prioritySelector = (state) => state.filter.priority

export const todoRemainingSelector = createSelector(
    todoListSelector,
    seachSelector,
    statusSelector,
    prioritySelector,
    (todoList, search, status, priority) => {
        return todoList.filter((todo) => {
            if(status ==='All' ){
                return priority.length 
                ? todo.name.includes(search) && priority.includes(todo.priority)
                : todo.name.includes(search)
            }
            return (
                todo.name.includes(search) && 
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priority.length ? priority.includes(todo.priority): true)
            )
        })
    })
