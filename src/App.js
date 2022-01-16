import './App.css';
import{useState} from 'react';


function App() {

  
  const [counter, setCounter] = useState(()=>{
    const orders =[100,200,300]
  const total = orders.reduce((total, cur)=> total +cur)
  return total
  });
  const [info, setInfo] = useState({
    name: 'long',
    age: 12
  })
  

  const OnIncreate =()=>{
    setCounter(counter+1)
  }
  const handleUpdate=()=>{
    setInfo({
      ...info,
      bio:'ngu'
    })

  }

  return (
    <div className="App" style={{padding :20}}>
     <h1>long ngu</h1>
     <h1> {JSON.stringify(info)}</h1>
     <button onClick={handleUpdate}>update</button>


    </div>
  );
}

export default App;
