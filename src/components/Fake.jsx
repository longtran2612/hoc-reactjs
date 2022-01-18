import React from 'react'
import { useEffect,useState,useLayoutEffect,useRef } from 'react'

//useRef
//

export default function Fake() {
    const [count, setcount] = useState(60)

    const timerId = useRef()

    const prevCount = useRef()

    const h1ref = useRef()
    useEffect(() => {
        console.log(h1ref.current);
        return () => {
            
        }
    }, [])

    useEffect(()=>{
        prevCount.current =count
    },[count])

    const handleStart=()=>{
        timerId.current =setInterval(() => {
            setcount(prev=>prev-1)
        }, 1000)
        console.log('start',timerId.current);

    }

    const handleStop=()=>{
        clearInterval(timerId.current)
        console.log('stop',timerId.current);
        
    }
    console.log(count,prevCount.current);


    return (
        <div style={{padding :20}}>
            <h1 ref={h1ref}>{count}</h1>
            <button onClick={handleStart} >start</button>
            <button onClick={handleStop} >stop</button>
        </div>
    )
}
