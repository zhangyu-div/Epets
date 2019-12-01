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


// pet_type=dog,version=358,system=wap,isWeb=1,distinct_id='16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',_=1575183221879


export const handlerightAsyncAction=()=>{
    let handlerightAction=createAction(handlerightAsyncType,(data)=>data);

    // let categoryAction=(data)=>({
    //     type:categoryAsyncType,
    //     data
    // })
    return async (dispatch)=>{
        let data=await handlerightApi();
        dispatch(handlerightAction(data));
    }
}
