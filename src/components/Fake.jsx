import React from 'react'
import { useEffect,useState,useLayoutEffect,useRef } from 'react'
import Contentfake from './Contentfake'
//useRef
//

export default function Fake() {
    const [count, setcount] = useState(60)
    const [count2, setcount2] = useState(60)



    const prevCount = useRef()

   
    useEffect(()=>{
        prevCount.current =count
    },[count])

    const handleStart=()=>{  
            setcount(count-1)
       
    }
    const handleStart2=()=>{  
        setcount2(count2-1)
   
}


    return (
        <div style={{padding :20}}>
            <h1 >{count}</h1>
            <button onClick={handleStart} >+1</button>
            <h1 >{count2}</h1>
            <button onClick={handleStart2} >+1</button>
           

            <Contentfake count={count}/>
        </div>
    )
}
