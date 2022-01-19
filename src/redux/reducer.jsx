import { SET_JOB,SAVE_JOB,DELETE_JOB } from "./constants"

// init 0
export const initState = {
    job: '',
    jobs:[]
}

//reducer
const reducer =(state, action)=>{
  
   switch(action.type){
       case SET_JOB:
       return {
               ...state,
               job: action.payload
           }
           
        case SAVE_JOB:
            return{
                ...state,
                jobs:[...state.jobs,action.payload]
            }
            
            case DELETE_JOB:
                const newJobs =[...state.jobs]

                newJobs.splice(action.payload,1)
                return{
                    ...state,
                    jobs:newJobs
                }
                
           default:
               throw new Error('invalid');
   }
  
}

export default reducer