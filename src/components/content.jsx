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

     const [avatar, setavatar] = useState()

    const [coundown, setcoundown] = useState(180)

    useEffect(()=>{
        //clean up

        return()=>
        avatar && URL.revokeObjectURL(avatar.preview)

    },[avatar])

    useEffect(()=>{
       const timerid = setInterval(()=>{
            setcoundown(prev =>
                prev-1
            )
        },1000)
        return ()=> clearInterval(timerid)
    },[])
    
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
    
   const handlePreview =(e)=>{
       const file = e.target.files[0]
      file.preview= URL.createObjectURL(file)
      setavatar(file)
   }
    
    
    

    return (
      <div>
          <h1>{size}</h1>
          <h1>
           {coundown}
       </h1>
       {
           avatar && <img src={avatar.preview} alt='' width='80%'/>
       }
       <input type="file" onChange={handlePreview}/>

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
