import {TuijianType,cepingType,videoType} from "actions/meng/mengTypes";

import { handleActions} from "redux-actions";

const defaultState = {
    tuijianlists: [],
    cepinglists:[],
    videolists:[]
}


export default handleActions({
    [TuijianType]:(state,action)=>{
        let TuijianState=JSON.parse(JSON.stringify(state));
        TuijianState.tuijianlists=action.payload.data.list;
        return TuijianState;
    },
    [cepingType]:(state,action)=>{
        let cepingState=JSON.parse(JSON.stringify(state));
        cepingState.cepinglists=action.payload.data.list;
        return cepingState;
    },
    [videoType]:(state,action)=>{
        let videoState=JSON.parse(JSON.stringify(state));
        videoState.videolists=action.payload.data.list;
        return videoState;
    }
}, defaultState);


