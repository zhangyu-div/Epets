

import { handleActions} from "redux-actions";
import {mineAsyncType,registerAsyncType,loginAsyncType} from "actions/user/userTypes";
const defaultState = {
    orderlist: [],
    moneylist: [],
    servicelist:[],
    registerinfo:'',
    logininfo:'',
}


export default handleActions({
    [mineAsyncType]:(state,action)=>{
        let mineState=JSON.parse(JSON.stringify(state));
        console.log(action)
        mineState.orderlist=action.payload.list[1].data.items;
        mineState.moneylist=action.payload.list[2].data.items;
        mineState.servicelist=action.payload.list[3].data.items;
        return mineState;
    },
    [registerAsyncType]:(state,action)=>{
        let registerState=JSON.parse(JSON.stringify(state));
        registerState.registerinfo=action.payload.data.status;
        return registerState;
    },
    [loginAsyncType]:(state,action)=>{
        let loginState=JSON.parse(JSON.stringify(state));
        loginState.logininfo=action.payload.data.status;
        return loginState;
    }
}, defaultState);



