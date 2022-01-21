import { Routes ,Route,Link} from 'react-router-dom';

import './App.css';
import Heading from './components/heading/Heading';
import Paragrap from './components/paragrap/Paragrap';

// chia nho css ko bi trung 

// css module


function App() {
 
  return (
    <div className="App" style={{padding :20}}>
    <h1>app.js</h1>
      <nav>
        <ul>
          <li> <Link to='/heading'> heading</Link></li>
          <li> <Link to='/paragrap'> paragrap</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='heading' element={<Heading/>}/>
        <Route path='paragrap' element={<Paragrap/>}/>
      </Routes>
    
    
    </div>
  );
}

export default App;
