import {cepingAsyncAction} from "actions/meng/mengCreators";


export const mapStateToProps=(state)=>({
    cepinglists:state.meng.cepinglists
})

export const mapDispatchToProps=(dispatch)=>({
    cepingData(pet_type){
        dispatch(cepingAsyncAction(pet_type))
    }
})


