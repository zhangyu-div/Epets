import {brandAsyncType} from "./brandTypes";
import {brandApi} from "api/brand";
import {createAction} from "redux-actions";

export const brandAsyncAction=()=>{
    let brandAction =createAction(brandAsyncType,(data)=>data);
    return async (dispatch)=>{
        let data=await brandApi();
        dispatch(brandAction(data));
    }
}