import { SET_JOB,SAVE_JOB,DELETE_JOB } from "./constants"
// actions
export const setjob = payload=>{
    return {
        type: SET_JOB,
        payload
    }
}
export const savejob = payload=>{
    return {
        type: SAVE_JOB,
        payload
    }
}

export const deletejob = payload=>{
    return {
        type: DELETE_JOB,
        payload
    }
}