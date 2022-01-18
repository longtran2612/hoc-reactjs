import React from 'react'
import { useReducer,useState,useLayoutEffect,useRef,useCallback } from 'react'

//useReducer
// init state
// action:
// reducer
// dispatch : kick hoat 1 acction

// init 0
const initState = 0
// actions
const UP_ACTION ='up'
const DOWN_ACTION='down'
//reducer
const reducer =(state,action)=>{
    console.log('reducer running');
    switch(action){
        case UP_ACTION:
            return state+1
        case DOWN_ACTION:
            return state-1
        default:
            throw new console.error('inlalid');
    }

}

export default function Fake() {
    const [count, dispatch] = useReducer(reducer,initState)
   


    return (
        <div style={{padding :20}}>
          <h1>{count}</h1>
          <button onClick={()=>dispatch(UP_ACTION)}> up</button>
          <button onClick={()=>dispatch(DOWN_ACTION)}> down</button>
        </div>
    )
}
