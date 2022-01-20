import './App.css';
import Video from './Video'
import {useEffect,useRef} from 'react'

function App() {
 const videoref= useRef()

  useEffect(()=>{
    console.log(videoref);
  })


 const handlePlay=()=>{
   videoref.current.play()
 }
 const handlePause=()=>{
  videoref.current.pause()
}

  return (
    <div className="App" style={{padding :20}}>
    <h1>app.js</h1>
    <Video ref={videoref}/>
    <br/>
    <button onClick={handlePlay}>play</button>
    <button onClick={handlePause}>pause</button>
    
    
    </div>
  );
}

export default App;
