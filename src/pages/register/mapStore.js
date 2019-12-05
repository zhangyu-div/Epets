import {registerasyncAction} from "actions/user/userCreators";

export const mapStateToProps=(state)=>({
    registerinfo:state.user.registerinfo,
})

export const mapDispatchToProps=(dispatch)=>({
    async registerdata(username,password){
        let data=await dispatch(registerasyncAction(username,password))
        if(data==1){
            this.history.push("./selected")
        }
    }
})