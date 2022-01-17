import './App.css';
import{useState} from 'react';

function App() {


  
  const [job, setjob] = useState('')
  const [jobs, setjobs] = useState(
    JSON.parse(localStorage.getItem('jobs')) ?? []
  )

  const onAdd=()=>{
    setjobs(prev=>{
    const newjobs = [...prev,job]
    const jobJSON=  JSON.stringify(newjobs)
    localStorage.setItem('jobs',jobJSON)
    return newjobs
    })
    setjob("")
  }
  const onDelete=(i)=>{
   setjobs(prev=>{
     const newjobs= [...prev];
     newjobs.splice(i,1)

     const jobJSON=  JSON.stringify(newjobs)
     localStorage.setItem('jobs',jobJSON)

     return newjobs;
   })

  }
  return (
    <div className="App" style={{padding :20}}>
     <input value={job} onChange={e=>setjob(e.target.value)}/>
     <button onClick={onAdd}>add</button>
     <ul>
       {jobs.map((job,i) => (
        // <div >
         <li key={i} >{job}
         <button onClick={()=>onDelete(i)}>xoa</button>
         </li>
         
        // </div>
       ))}
       
     </ul>
    </div>
  );
}

export default App;
