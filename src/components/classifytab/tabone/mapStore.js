import {categoryAsyncAction,handlerightAsyncAction} from "actions/classify/classifyCreators";


export const mapStateToProps=(state)=>({
    categorylist:JSON.parse(localStorage.getItem("category"))||state.category.categorylist 

})


export const mapDispatchToProps=(dispatch)=>({
    handlecategoryAsyncData(){
        dispatch(categoryAsyncAction())
    },

    handlerightAsyncData(){
        dispatch(handlerightAsyncAction())
    }
})