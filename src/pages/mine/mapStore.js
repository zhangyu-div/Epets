import {mineAsyncAction} from "actions/user/userCreators";

export const mapStateToProps=(state)=>({
    orderlist:state.user.orderlist,
    moneylist:state.user.moneylist,
    servicelist:state.user.servicelist
})

export const mapDispatchToProps=(dispatch)=>({
   mineAsyncData(){
        dispatch(mineAsyncAction())
    }
})