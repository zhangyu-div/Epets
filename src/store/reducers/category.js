import { handleActions} from "redux-actions";
import {categoryAsyncType,handlerightAsyncType} from "actions/classify/classifyTypes"
const defaultState = {
    categorylist: [],
    rightlist:[],
}

export default handleActions({
    [categoryAsyncType]: (state, action) => {
        let categoryState = JSON.parse(JSON.stringify(state));
        // categoryState.category = [...weekState.week_choice,...action.payload];
        // categoryState.categorylist=action.data.categorys;
        categoryState.categorylist=action.payload.categorys;
        return categoryState;
    },
    [handlerightAsyncType]:(state, action) => {
        let handlerightState = JSON.parse(JSON.stringify(state));
        handlerightState.rightlist=action.payload.cate_list;
        return handlerightState;
    },    
}, defaultState);





