import {TuijianType,cepingType,videoType} from "./mengTypes";
import {tuijianApi,cepingApi,videoApi} from "api/meng";
import {createAction} from "redux-actions";

export const TuijianAsyncAction=()=>{
    let TuijianAction =createAction(TuijianType,(data)=>data);
    return async (dispatch)=>{
        let data=await tuijianApi();
        dispatch(TuijianAction(data));
    }
}


export const cepingAsyncAction=()=>{
    let cepingAction =createAction(cepingType,(data)=>data);
    return async (dispatch)=>{
        let data=await cepingApi();
        dispatch(cepingAction(data));
    }
}

export const videoAsyncAction=()=>{
    let videoAction =createAction(videoType,(data)=>data);
    return async (dispatch)=>{
        let data=await videoApi();
        console.log(data,99999)
        dispatch(videoAction(data));
    }
}