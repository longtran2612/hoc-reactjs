// import { createSlice } from '@reduxjs/toolkit'


// // redux toolkit
// export const filterSlice = createSlice({
//     name: 'filter',
//     initState: {
//         search: '',
//         status: 'All',
//         priority: []
//     },
//     reducers:{
//         searchFilter: ()=>{
//             //mutation 
//             state

//         },
//         statusFilter:()=>{

//         },
//         priorityFilter:()=>{

//         }


//     }


// })


//redux binh thuong
const initState ={
        search:'',
        status:'All',
        priority:[]
}
export const filtersTodoReducer = (state = initState, action)=>{
console.log(state, action);
    switch(action.type){
        case 'filter/searchFilter':
        return{
            ...state,
            search:action.payload
        }
        case 'filter/statusFilter':
            return {
                ...state,
                status:action.payload
            }
            case 'filter/priorityFilter':
                return {
                    ...state,
                    priority:action.payload
                }
        default:
            return state
    }
}

