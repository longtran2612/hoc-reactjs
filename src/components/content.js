import React from 'react'
import { useEffect,useState } from 'react'

//useEffect(callback)
// goi callback sau khi moi khi component re-render
//
//useEffect(callback,[])
// chi goi callback 1 lan sau khi mount
//useEffect(callback,[dependentces])
//-- callback goi lai khi deps thay doi

//1. call back luon luon goi sau khi component mounted
const tabs =['posts','photos','albums']
export default function Content() {
    const [posts, setposts] = useState([])
    const [style, setstyle] = useState('posts')

    //useEffect(callback,[dependentces])
    useEffect(()=>{
        console.log('title changed')
            fetch(`https://jsonplaceholder.typicode.com/${style}`)
            .then(res=>res.json())
            .then(posts=>{
                setposts(posts)
            })
    },[style])
    
    
    

    return (
      <div>
          {
              tabs.map(tab=>(
                  <button key={tab}
                  style={style===tab ?{color:'ActiveBorder'}:{}}
                  onClick={()=>setstyle(tab)}
                  >{tab}</button>
              ))
          }

       <ul>
           {posts.map(post=>(
           <li key={post.id}>{post.title}</li>
           ))}
       </ul>

      </div>
          
    )
}
