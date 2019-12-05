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
        }
    }
    render(){
        let {account,pwd}=this.state;
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
                        <button type="button" onClick={this.handregister.bind(this)}>注册</button>
                    </div>
         
                </Formbox>
                <Footer>    
                    {/* <h2>
                        <img src="https://static.epetbar.com/static_web/wap/src/images/newlogin/newother.png" alt=""/>
                    </h2>
                    <div>
                        <span><img src="https://static.epetbar.com/static_web/wap/src/images/newlogin/newother2.png" alt=""/></span>
                        <span><img src="https://static.epetbar.com/static_web/wap/src/images/newlogin/newother3.png" alt=""/></span>
                    </div> */}
                    <p>登录代表您阅读并同意<b>《E宠商城用户协议》</b></p>

                </Footer>
            </Container>
        )
    }   
    
    handregister(){
        let username=this.state.account;
        let password=this.state.pwd;
        this.props.registerdata(username,password);
    }

    back(){
        this.props.history.goBack();
    }
    handlechange(e){
        let val=e.target.value;
        this.setState({
            account:val,
        })
    }
    handlechanges(e){
        let val=e.target.value;
        this.setState({
            pwd:val,
        })
    }
}
export default Register;