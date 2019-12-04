import {goodlistsAsyncType,goodsdetailAsyncType} from "./goodlistsTypes";
import {goodlistsApi,goodsdetailsApi} from "api/goodlists";
import {createAction} from "redux-actions";
export const goodlistsAsyncAction=(cateid,page,orderby,extend_pam)=>{
    let goodlistsAction=createAction(goodlistsAsyncType,(data)=>data);
    return async (dispatch)=>{
        let data=await goodlistsApi(cateid,page,orderby,extend_pam);
        dispatch(goodlistsAction(data));
    }
}


export const goodsdetailasyncAction=(id)=>{
    let gooddetailAction=createAction(goodsdetailAsyncType,(data)=>data);
    return async (dispatch)=>{
        let data=await goodsdetailsApi(id);
        dispatch(gooddetailAction(data));
    }
}
