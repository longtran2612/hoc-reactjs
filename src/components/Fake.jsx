import React from 'react'
import { useEffect,useState } from 'react'

const lesson =[
    {
        id:1,
        title:'di choi'
    },
    {
        id:2,
        title:'di cho'
    },
    {
        id:3,
        title:'di hoc'
    }
]

export default function Fake() {
    const [lessonid, setlessonid] = useState(1)

    

    useEffect(()=>{
        const handleComment =({detail})=>{
            console.log(detail);
        }
        // nhan event tu lesson-1
        window.addEventListener(`lesson-${lessonid}`,handleComment)
        return ()=>{
            window.removeEventListener(`lesson-${lessonid}`,handleComment)
        }
    },[lessonid])
    return (
        <div>
           <ul>
               {lesson.map(lesson =>(

               <li key={lesson.id}
               style={{
                   color: lessonid===lesson.id ?
                   'red':
                   '#333'
                }}
               onClick={()=>setlessonid(lesson.id)}
               >
                   {lesson.title}
               </li>
               ))}
           </ul>
        </div>
    )
}
