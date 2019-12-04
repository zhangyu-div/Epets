import {TuijianType,cepingType,videoType,videodetailType} from "./mengTypes";
import {tuijianApi,cepingApi,videoApi,videodetailApi} from "api/meng";
import {createAction} from "redux-actions";

export const TuijianAsyncAction=(pet_type)=>{
    let TuijianAction =createAction(TuijianType,(data)=>data);
    return async (dispatch)=>{
        let data=await tuijianApi(pet_type);
        dispatch(TuijianAction(data));
    }
}


export const cepingAsyncAction=(pet_type)=>{
    let cepingAction =createAction(cepingType,(data)=>data);
    return async (dispatch)=>{
        let data=await cepingApi(pet_type);
        dispatch(cepingAction(data));
    }
}

export const videoAsyncAction=(pet_type)=>{
    let videoAction =createAction(videoType,(data)=>data);
    return async (dispatch)=>{
        let data=await videoApi(pet_type);

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