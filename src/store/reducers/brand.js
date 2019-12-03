import { handleActions} from "redux-actions";
import {brandAsyncType} from "actions/brand/brandTypes";
const defaultState = {
    brandlist: [],
}


export default handleActions({
    [brandAsyncType]:(state,action)=>{
        let brandState=JSON.parse(JSON.stringify(state));
        brandState.brandlist=action.payload.brand;
        return brandState;
    }
}, defaultState);