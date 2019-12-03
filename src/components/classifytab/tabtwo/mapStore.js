import {brandAsyncAction} from "actions/brand/brandCreators";

export const mapStateToProps=(state)=>({
    brandlist:state.brand.brandlist
})

export const mapDispatchToProps=(dispatch)=>({
    brandAsyncData(){
        dispatch(brandAsyncAction())
    }
})