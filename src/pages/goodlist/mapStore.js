
import {goodlistsAsyncAction,goodsdetailasyncssAction} from "actions/goodlists/goodlistsCreators";

export const mapStateToProps=(state)=>({
    goodlists:state.goodlists.goodlists
})

export const mapDispatchToProps=(dispatch)=>({
    goodslist(cateid,page,orderby,extend_pam){
        dispatch(goodlistsAsyncAction(cateid,page,orderby,extend_pam));
    },
    goodssslist(cateid,page,orderby,extend_pam){
        dispatch(goodsdetailasyncssAction(cateid,page,orderby,extend_pam));
    }


    
})