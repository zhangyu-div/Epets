import {mineAsyncAction} from "actions/user/userCreators";

export const mapStateToProps=(state)=>({
    minelist:state.user.minelist
})

export const mapDispatchToProps=(dispatch)=>({
   mineAsyncData(){
        dispatch(mineAsyncAction())
    }
})