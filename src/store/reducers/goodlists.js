

import { handleActions} from "redux-actions";
import {goodlistsAsyncType} from "actions/goodlists/goodlistsTypes";
// const defaultState = {
//     brandlist: [],
// }


// export default handleActions({
//     [brandAsyncType]:(state,action)=>{
//         let brandState=JSON.parse(JSON.stringify(state));
//         brandState.brandlist=action.payload.brand;
//         return brandState;
//     }
// }, defaultState);

const defaultState = {
    goodlists:[]
}


export default handleActions({
    [goodlistsAsyncType]:(state,action)=>{
        let goodlistsState=JSON.parse(JSON.stringify(state));
        goodlistsState.goodlists=action.payload.list;
        return goodlistsState;
    }
}, defaultState);