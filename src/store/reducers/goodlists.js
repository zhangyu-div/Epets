

import { handleActions} from "redux-actions";
import {goodlistsAsyncType,goodsdetailAsyncType} from "actions/goodlists/goodlistsTypes";
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
    goodlists:[],
    goodsdetaillistphotos:[],
    details:'',
}


export default handleActions({
    [goodlistsAsyncType]:(state,action)=>{
        let goodlistsState=JSON.parse(JSON.stringify(state));
        goodlistsState.goodlists=action.payload.list;
        return goodlistsState;
    },
    [goodsdetailAsyncType]:(state,action)=>{
        let goodsdetailState=JSON.parse(JSON.stringify(state));
        goodsdetailState.goodsdetaillistphotos=action.payload.datas[0].photos;
        goodsdetailState.details=action.payload.datas[1];

        return goodsdetailState;
    }
}, defaultState);