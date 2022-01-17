import './App.css';
import{useState} from 'react';
import Content from './components/content';
function App() {

const [show, setshow] = useState(false)
  
  
  return (
    <div className="App" style={{padding :20}}>
      <button onClick={()=>setshow(!show)}>show</button>
      {show && <Content/> }
    </div>
  );
}

export default App;
