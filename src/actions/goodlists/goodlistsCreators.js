import {goodlistsAsyncType} from "./goodlistsTypes";
import {goodlistsApi} from "api/goodlists";
import {createAction} from "redux-actions";
export const goodlistsAsyncAction=(cateid,page,orderby)=>{
    let goodlistsAction=createAction(goodlistsAsyncType,(data)=>data);
    return async (dispatch)=>{
        let data=await goodlistsApi(cateid,page,orderby);
        dispatch(goodlistsAction(data));
    }
}
