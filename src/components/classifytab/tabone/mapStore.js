import {categoryAsyncAction,handlerightAsyncAction} from "actions/classify/classifyCreators";


export const mapStateToProps=(state)=>({
    categorylist:JSON.parse(localStorage.getItem("category"))||state.category.categorylist,
    rightlist:state.category.rightlist
})



export const mapDispatchToProps=(dispatch)=>({
    handlecategoryAsyncData(){
        dispatch(categoryAsyncAction())
    },

    handlerightAsyncData(cateid){
        dispatch(handlerightAsyncAction(cateid))
    }
})