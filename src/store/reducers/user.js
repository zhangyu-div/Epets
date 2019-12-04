

import { handleActions} from "redux-actions";
import {mineAsyncType} from "actions/user/userTypes";
const defaultState = {
    minelist: [],
}


export default handleActions({
    [mineAsyncType]:(state,action)=>{
        let mineState=JSON.parse(JSON.stringify(state));
        // mineState.minelist=action.payload.mine;
        return mineState;
    }
}, defaultState);