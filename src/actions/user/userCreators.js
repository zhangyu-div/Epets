import {mineAsyncType} from "./userTypes";
import {mineApi} from "api/user";
import {createAction} from "redux-actions";

export const mineAsyncAction=()=>{
    let mineAction =createAction(mineAsyncType,(data)=>data);
    return async (dispatch)=>{
        let data=await mineApi();
        console.log(data);
        dispatch(mineAction(data));
    }
}