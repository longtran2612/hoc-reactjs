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
//2. cleanup funtion
const tabs =['posts','photos','albums']
export default function Content() {
    const [posts, setposts] = useState([])
    const [style, setstyle] = useState('posts')
    const [showgototop, setshowgototop] = useState(false)
     const [size, setsize] = useState(
         window.innerWidth
     )
    //useEffect(callback,[dependentces])
    useEffect(()=>{
        console.log('title changed')
            fetch(`https://jsonplaceholder.typicode.com/${style}`)
            .then(res=>res.json())
            .then(posts=>{
                setposts(posts)
            })
    },[style])
    useEffect(()=>{
        const handlleSroll=()=>{
            if(window.scrollY>=200){
                setshowgototop(true)
            }else
            setshowgototop(false)
        }

        window.addEventListener('scroll',handlleSroll)
         return()=>{
             window.removeEventListener('scroll',handlleSroll)
         }
    },[])
    useEffect(()=>{
        const handleResize=()=>{
            setsize(window.innerWidth)
        }

        window.addEventListener('resize',handleResize)
    })
    
    
    

    return (
      <div>
          <h1>{size}</h1>
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
       {
           showgototop && (
               <button style={{position:'fixed',
               right:20,
               bottom :20,
            }}
            onClick={()=>setshowgototop(true)}
            >
                go to top
                </button>
           )
               
           
       }

      </div>
          
    )
}
