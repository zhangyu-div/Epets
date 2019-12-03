import {videodetailAsyncAction} from "actions/meng/mengCreators";


export const mapStateToProps=(state)=>({
    videodetail:state.meng.videodetail,
    series:state.meng.series,
    users:state.meng.users,
    lists:state.meng.lists,
    links:state.meng.links
})

export const mapDispatchToProps=(dispatch)=>({
    vediodetailData(id){
        dispatch(videodetailAsyncAction(id))
    }
})


