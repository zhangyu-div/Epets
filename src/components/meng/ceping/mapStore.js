import {cepingAsyncAction} from "actions/meng/mengCreators";


export const mapStateToProps=(state)=>({
    cepinglists:state.meng.cepinglists
})

export const mapDispatchToProps=(dispatch)=>({
    cepingData(){
        dispatch(cepingAsyncAction())
    }
})


