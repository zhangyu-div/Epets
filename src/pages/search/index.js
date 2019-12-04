import React from "react";
import {Searchbox,Listsbox} from "./styled";
import {withRouter,Link} from "react-router-dom";
@withRouter
class Search extends React.Component{
    constructor(){
        super();
        this.state={
            val:''
        }
    }
    render(){
        let {val}=this.state;
        return(
            <div>
                <Searchbox>
                    <div className="back iconfont icon-iconfontjiantou1" onClick={this.handback.bind(this)}></div>
                    <form action="">
                        <input type="text" placeholder="搜索你喜欢的宝贝" value={val} onChange={this.handlechange.bind(this)}/>
                    </form>
                    <div className="so" onClick={this.handlesend.bind(this)}>搜索</div>

                </Searchbox>
                <Listsbox>
                    
                </Listsbox>
            </div>
        )
    }
    handback(){
        this.props.history.goBack();
    }
    handlechange(e){
        let vals=e.target.value;
        this.setState({
            val:vals
        })
    }
    handlesend(){
        this.props.history.push({pathname:'/goodlist/0',state:this.state.val});
    }
}
export default Search;