import './App.css';
import{useContext, useState,createContext} from 'react';
import Comment from './components/Fake';
import { themeContext } from './provider/ThemeProvider';


function App() {

const [show1, setshow1] = useState(false)

const context = useContext(themeContext)
  
  return (
    
    <div className="App" style={{padding :20}}>
      <button onClick={()=>setshow1(!show1)}>show1</button>

      <button onClick={context.handleTheme}>chage theme</button>
      {show1 && <Comment /> }
     
    </div>
  );
}

export default App;
