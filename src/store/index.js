import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import category from "./reducers/category";
import brand from "./reducers/brand";
import goodlists from "./reducers/goodlists";
import meng from "./reducers/meng";
import user from "./reducers/user";
const reducers = combineReducers({
    category,
    brand,
    goodlists,
    meng,
    user
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;