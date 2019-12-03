import React, { Fragment } from "react";
import { Contenter, Leftlist, Rightlist } from "./style";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import {Link} from "react-router-dom";
@connect(mapStateToProps, mapDispatchToProps)
class Classifytabone extends React.Component {
    constructor(){
        super();
        this.state={
            activeindex:0
        }
    }
    render() {
        let { categorylist, rightlist } = this.props;
        let {activeindex}=this.state;
        return (
            <Fragment>
                <Contenter>
                    <Leftlist>
                        <ul>
                            {
                                categorylist.map((item, index) => (
                                    <li className={activeindex==index?'active':''} key={index} onClick={this.props.handlerightAsyncData.bind(this, item.cateid,index)} ><div onClick={this.handlecolor.bind(this,index)} > {item.name}</div></li>
                                ))
                            }
                        </ul>
                    </Leftlist>
                    <Rightlist>
                        {
                            rightlist.map((item, index) => {
                                if(item.title!=="热门品牌"){
                                    return(
                                        <div className="lots" key={index}>
                                        <p className="all"><span>{item.title}</span> <span>全部商品<i className="iconfont icon-jiantou1 "></i></span></p>
                                        <ul>
                                            {
                                                item.list.map((items,indexs)=>(
                                                    <li key={indexs}>
                                                        <Link to={'/goodlist/'+items.id_param.substring(7)}>
                                                        <a>
                                                            <div><img src={items.photo} alt="" /></div>
                                                            <p className="name">{items.name}</p>
                                                        </a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    )
                                }else{
                                    return(
                                        <div className="bottomlots" key={index}>
                                            <p>{item.title}</p>
                                            <ul>
                                                {
                                                    item.list.map((items,indexs)=>(
                                                        <li key={indexs}>
                                                        <a href="">
                                                            <div><img src={items.logo} alt="" /></div>
                                                            <p>{items.name}</p>
                                                        </a>
                                                    </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    )
                                }
                            })
                        }

                    </Rightlist>
                </Contenter>
            </Fragment>
        )
    }
    handlecolor(index){
        this.setState({
            activeindex:index
        })
    }
    componentDidMount() {
        if (!localStorage.getItem("category")) {
            this.props.handlecategoryAsyncData();
        }
        this.props.handlerightAsyncData();
    }
}
export default Classifytabone;