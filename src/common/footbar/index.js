import React,{Fragment}from "react"
import {Footer} from "./styled";
import {FootBarRoutes} from "router";
import {withRouter} from "react-router-dom";
@withRouter//装饰器Alley
class Footbar extends React.Component{
    constructor(){
        super(); 
        this.state={
            activePath:"mine"
        }
    }
    render(){
        let {path}=this.props;

        return (
            <Fragment>
                <Footer>
                <ul>
                    {
                        FootBarRoutes.map((item,index)=>(
                            <li key={item.path} onClick={this.handleTo.bind(this,item.path)} className={path==item.path?'active':""}>
                                <i className={item.icon}> </i>
                                <span>{item.text}</span>
                            </li>
                            )
                        )
                    }
                </ul>
                </Footer>
            </Fragment>
        )
    }
    handleTo(path){
        this.props.history.push(path);
        this.setState({
            activePath:path
        })
    }
}

// export default withRouter(Footbar);
export default Footbar;