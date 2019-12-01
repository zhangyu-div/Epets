import { handleActions } from "redux-actions";
import {categoryAsyncType} from "actions/classify/classifyTypes"
const defaultState = {
    categorylist: [],
}

export default handleActions({
    [categoryAsyncType]: (state, action) => {
        let categoryState = JSON.parse(JSON.stringify(state));
        // categoryState.category = [...weekState.week_choice,...action.payload];

        // categoryState.categorylist=action.data.categorys;
        categoryState.categorylist=action.payload.categorys;
        return categoryState;
    },
    
}, defaultState)

