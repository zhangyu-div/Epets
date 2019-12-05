import {loginAsyncAction} from "actions/user/userCreators";

export const mapStateToProps=(state)=>({
    logininfo:state.user.logininfo,
})

export const mapDispatchToProps=(dispatch)=>({
    async logindata(username,password){
        let data=await dispatch(loginAsyncAction(username,password))
        if(data==1){
            this.history.push("./selected")
        }
    }
})