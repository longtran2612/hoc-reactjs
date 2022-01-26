import { createStore} from 'redux';
import { rootReducer } from './reducer/Reducer';

import {composeWithDevTools } from 'redux-devtools-extension'

const composedEngencers = composeWithDevTools()
const store = createStore(rootReducer, composedEngencers)


export default store;

// redux-toolkit
// import {configureStore} from '@reduxjs/toolkit'
// import { todoListRecuder } from './reducer/AddTodoReducer'
// import { filtersTodoReducer } from './reducer/FiltersTodoReducer'

//  const store = configureStore({
//     reducer:{
//         filter: filtersTodoReducer,
//         TodoList: todoListRecuder  
//     }
// })
// export default store