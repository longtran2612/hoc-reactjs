import './App.css';
import {useStore,actions} from './store'
import { savetodo, settodo } from './store/Actions';
function App() {

  const [state,dispatch]= useStore()
  const {todos,todo} = state
  console.log(todo);
  const handleAdd=()=>{
    dispatch(actions.savetodo(todo))
    dispatch(actions.settodo(''))
    
    
  }

  return (
    <div className="App" style={{padding :20}}>
    <h1>app.js</h1>
      <input value={todo}
      placeholder='enter todo...'
      onChange={e=>{dispatch(actions.settodo(e.target.value))}}
      />
      <button onClick={handleAdd}>add</button>
      <ul>
        {todos.map((todo,i)=>(
          <li key={i}>{todo}
            <span onClick={()=>dispatch(actions.deletetodo(i))}>&times;</span>
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default App;
