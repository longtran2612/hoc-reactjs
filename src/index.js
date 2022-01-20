import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from './provider/ThemeProvider';
// fake comment
function emitcomment(id){
setInterval(()=>{
  window.dispatchEvent(new CustomEvent(`lesson-${id}`,{detail:`Noi dung comment cua lesson ${id}`})
)
},2000)
}
emitcomment(1)
emitcomment(2)
emitcomment(3)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider >
    <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
