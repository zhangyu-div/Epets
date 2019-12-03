import {TuijianType,cepingType,videoType,videodetailType} from "./mengTypes";
import {tuijianApi,cepingApi,videoApi,videodetailApi} from "api/meng";
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

        dispatch(videoAction(data));
    }
}


export const videodetailAsyncAction=(id)=>{
    let videodetailAction =createAction(videodetailType,(data)=>data);
    return async (dispatch)=>{
        let data=await videodetailApi(id);

        dispatch(videodetailAction(data));
    }
}