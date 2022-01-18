import './App.css';
import{useState} from 'react';
import Content from './components/content';
import Comment from './components/Fake';
function App() {

const [show, setshow] = useState(false)
const [show1, setshow1] = useState(false)
 
  
  return (
    <div className="App" style={{padding :20}}>
      <button onClick={()=>setshow(!show)}>show</button>
      {show && <Content/> }

      <button onClick={()=>setshow1(!show1)}>show1</button>
      {show1 && <Comment/> }
    </div>
  );
}

export default App;
