import React from 'react'
import { useReducer,useState,useRef,useCallback } from 'react'
import { setjob,savejob,deletejob } from '../redux/actions'
import reducer , { initState } from '../redux/reducer' 
//useReducer
// init state
// action:
// reducer
// dispatch : kick hoat 1 acction






export default function Fake() {
    const [state, dispatch] = useReducer(reducer,initState)
   
    console.log(state);

    const{job,jobs}= state

    const inputRef = useRef();
    

    const handleadd =()=>{
        dispatch(savejob(job))
        dispatch(setjob(''))

        inputRef.current.focus()

    }


    return (
        <div style={{padding :20}}>
         <input ref={inputRef} 
         onChange={e=>{
             dispatch(setjob(e.target.value))
         }} value={job} placeholder='enter todo'/>
         <button onClick={handleadd} >add</button>
         <ul>
             {
                 jobs.map((job,i)=>(
                     <li key={i}>{job} 
                     <span onClick={()=>dispatch(deletejob(i))}>
                     &times;
                     </span>
                     </li>
                 ))
             }

         </ul>
        </div>
    )
}
