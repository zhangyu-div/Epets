import { goodsdetailasyncAction} from "actions/goodlists/goodlistsCreators";


export const mapStateToProps=(state)=>({
    goodsdetaillistphotos:state.goodlists.goodsdetaillistphotos,
    details:state.goodlists.details,

})

export const mapDispatchToProps=(dispatch)=>({
    goodsdetailData(id){
        dispatch(goodsdetailasyncAction(id))
    }
})


