import {TuijianType,cepingType,videoType,videodetailType} from "actions/meng/mengTypes";

import { handleActions} from "redux-actions";

const defaultState = {
    tuilinks: [],
    cepinglists:[],
    videolists:[],
    tuijianlists:[],
    videodetail:'',
    series:'',
    users:'',
    lists:'',
    links:''
}


export default handleActions({
    [TuijianType]:(state,action)=>{
        let TuijianState=JSON.parse(JSON.stringify(state));
        TuijianState.tuijianlists=action.payload.data.list;
        // TuijianState.tuijianlists=[...TuijianState.tuijianlists,...action.payload.data.list];
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
    },
    [videodetailType]:(state,action)=>{
        let videodetailState=JSON.parse(JSON.stringify(state));
        videodetailState.videodetail=action.payload.data.list;
        videodetailState.users=action.payload.data.list.user;
        videodetailState.series=action.payload.data.list.detial.series;
        videodetailState.lists=action.payload.data.list.detial.series.list;
        videodetailState.links=action.payload.data.list.detial.link;
        return videodetailState;
    },
}, defaultState);


