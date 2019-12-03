import {categoryAsyncType,handlerightAsyncType} from "./classifyTypes";
import {categorysApi,handlerightApi} from "api/classify";
import {createAction} from "redux-actions";

export const categoryAsyncAction=()=>{
    let categoryAction=createAction(categoryAsyncType,(data)=>data);

    // let categoryAction=(data)=>({
    //     type:categoryAsyncType,
    //     data
    // })
    return async (dispatch)=>{
        let data=await categorysApi();
        dispatch(categoryAction(data));
        localStorage.setItem("category",JSON.stringify(data.categorys))
    }
}
export const handlerightAsyncAction=(cateid)=>{
    let handlerightAction=createAction(handlerightAsyncType,(data)=>data);
    return async (dispatch)=>{
        let data=await handlerightApi(cateid);
        dispatch(handlerightAction(data));
    }
}
