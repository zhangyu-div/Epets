import React from "react";
import {Container,Formbox,Footer} from "./styled"
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Register extends React.Component{
    constructor(){
        super();
        this.state={
            account:'',
            pwd:'',
            flag:false
        }
    }
    render(){
        let {account,pwd,flag}=this.state;
        return(
            <Container>
                <div className="header">
                    <b className="iconfont icon-iconfontjiantou1" onClick={this.back.bind(this)}></b>
                </div>
                <Formbox>
                    <h2>新用户注册</h2>
                    <div className="form">
                        <div className="input">
                            <input type="text" placeholder="请输入账号" value={account} onChange={this.handlechange.bind(this)}/>
                        </div>
                        <div className="input">
                            <input type="password" placeholder="密码" value={pwd} onChange={this.handlechanges.bind(this)}/>
                        </div>
                        <button type="button" onClick={this.handregister.bind(this)}  className={flag?'cur':''}>注册</button>
                    </div>
         
                </Formbox>
                <Footer>    

                    <p>登录代表您阅读并同意<b>《E宠商城用户协议》</b></p>

                </Footer>
            </Container>
        )
    }   
    
    handregister(){
        let username=this.state.account;
        let password=this.state.pwd;

        if(username&&password){
            this.props.registerdata(username,password);
        }
    }

    back(){
        this.props.history.goBack();
    }
    handlechange(e){
        let val=e.target.value;
        this.setState({
            account:val,
        },()=>{
            let {account,pwd}=this.state;
            if(account&&pwd){
                this.setState({
                    flag:true
                })
            }else{
                if(!account||!pwd){
                    this.setState({
                        flag:false
                    })
                }
            }
        })
    }
    handlechanges(e){
        let val=e.target.value;
        this.setState({
            pwd:val,
        },()=>{
            let {account,pwd}=this.state;
            if(account&&pwd){
                this.setState({
                    flag:true
                })
            }
            if(!account||!pwd){
                this.setState({
                    flag:false
                })
            }
        })
    }
}
export default Register;