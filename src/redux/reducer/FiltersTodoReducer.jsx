import { createSlice } from '@reduxjs/toolkit'


// redux toolkit
export default createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers:{
        searchFilter: (state, action)=>{
            //mutation || IMMER
            state.search = action.payload

        },
        statusFilter:(state, action)=>{
            state.status = action.payload

        },
        priorityFilter:(state, action)=>{
            state.priority =action.payload

        }


    }


})


//redux binh thuong
// const initState ={
//         search:'',
//         status:'All',
//         priority:[]
// }
// export const filtersTodoReducer = (state = initState, action)=>{
// console.log(state, action);
//     switch(action.type){
//         case 'filter/searchFilter':
//         return{
//             ...state,
//             search:action.payload
//         }
//         case 'filter/statusFilter':
//             return {
//                 ...state,
//                 status:action.payload
//             }
//             case 'filter/priorityFilter':
//                 return {
//                     ...state,
//                     priority:action.payload
//                 }
//         default:
//             return state
//     }
// }

