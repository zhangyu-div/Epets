import {videoAsyncAction} from "actions/meng/mengCreators";


export const mapStateToProps=(state)=>({
    videolists:state.meng.videolists
})

export const mapDispatchToProps=(dispatch)=>({
    vedioData(pet_type){
        dispatch(videoAsyncAction(pet_type))
    }
})


