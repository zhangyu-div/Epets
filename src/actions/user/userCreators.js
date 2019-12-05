import {mineAsyncType,registerAsyncType,loginAsyncType} from "./userTypes";
import {registerApi,mineApi,loginApi} from "api/user";
import {createAction} from "redux-actions";

export const mineAsyncAction=()=>{
    let mineAction =createAction(mineAsyncType,(data)=>data);
    return async (dispatch)=>{
        let data=await mineApi();
        dispatch(mineAction(data));
    }
}
export const registerasyncAction=(username,password)=>{
    let registerAction =createAction(registerAsyncType,(data)=>data);
    return async (dispatch)=>{
        let data=await registerApi(username,password);
        alert(data.data.info);
        if(data.data.status==1){
            dispatch(registerAction(data));
            return(data.data.status);
        }
    }
}


export const loginAsyncAction=(username,password)=>{
    let loginAction =createAction(loginAsyncType,(data)=>data);
    return async (dispatch)=>{
        let data=await loginApi(username,password);
        console.log(data)
        alert(data.data.info)
        if(data.data.code==1){
            dispatch(loginAction(data));
            return(data.data.code);
        }
    }
}



