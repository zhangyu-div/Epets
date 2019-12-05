import React from "react";
import {Container,Formbox,Footer} from "./styled"
import {withRouter,Link} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            account:'',
            pwd:'',
            info:'',
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
                    <h2>账号密码登录</h2>
                    <div className="form">
                        <div className="input">
                            <input type="text" placeholder="请输入账号" value={account} onChange={this.handlechange.bind(this)}/>
                        </div>
                        <div className="input">
                            <input type="password" placeholder="密码" value={pwd} onChange={this.handlechanges.bind(this)}/>
                        </div>
                        <button type="button" onClick={this.handlelogin.bind(this)}>登录</button>
                    <p> <span>短信验证码登录</span><span> <Link to="/register">新用户注册</Link></span></p>
                    </div>
         
                </Formbox>
                <Footer>    
                    <h2>
                        <img src="https://static.epetbar.com/static_web/wap/src/images/newlogin/newother.png" alt=""/>
                    </h2>
                    <div>
                        <span><img src="https://static.epetbar.com/static_web/wap/src/images/newlogin/newother2.png" alt=""/></span>
                        <span><img src="https://static.epetbar.com/static_web/wap/src/images/newlogin/newother3.png" alt=""/></span>
                    </div>
                    <p>登录代表您阅读并同意<b>《E宠商城用户协议》</b></p>

                </Footer>
            </Container>
        )
    }   

    handlelogin(){
        let username=this.state.account;
        let password=this.state.pwd;
        this.props.logindata(username,password);
 
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
    back(){
        this.props.history.goBack();
    }
}
export default Login;