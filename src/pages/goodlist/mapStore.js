
import {goodlistsAsyncAction} from "actions/goodlists/goodlistsCreators";

export const mapStateToProps=(state)=>({
    goodlists:state.goodlists.goodlists
})

export const mapDispatchToProps=(dispatch)=>({
    goodslist(cateid,page,orderby){
        dispatch(goodlistsAsyncAction(cateid,page,orderby));
    }
})