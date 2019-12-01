import React,{Fragment}from "react";
import {Contenter,Leftlist,Rightlist} from  "./style";

import {connect}  from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"; 
import {Link} from "react-router-dom";
@connect(mapStateToProps,mapDispatchToProps)
class Classifytabone extends React.Component{
    render(){
        let {categorylist}=this.props;
        return(
            <Fragment>
                <Contenter>
                    <Leftlist>
                        <ul>
                            {
                                categorylist.map((item,index)=>(
                                <li className="active" key={index}><Link > {item.name}</Link> </li>
                                ))
                            }
                        </ul>
                    </Leftlist>
                    <Rightlist>
                        <div className="lots">
                            <p><span>狗狗主梁</span> <span>全部商品<i className="iconfont icon-jiantou1 "></i></span></p>
                            <ul>
                                <li>
                                    <a href="">
                                        <div><img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/></div>
                                        <p>幼犬粮</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div><img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/></div>
                                        <p>幼犬粮</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div><img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/></div>
                                        <p>幼犬粮</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div><img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/></div>
                                        <p>幼犬粮</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="lots">
                            <p><span>狗狗主梁</span> <span>全部商品<i className="iconfont icon-jiantou1 "></i></span></p>
                            <ul>
                                <li>
                                    <a href="">
                                        <div><img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/></div>
                                        <p>幼犬粮</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div><img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/></div>
                                        <p>幼犬粮</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div><img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/></div>
                                        <p>幼犬粮</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div><img src="https://img.epetht.com/nowater/2017-09/21/20/95ef871eb30d94dda553b3d728ffdab2.png" alt=""/></div>
                                        <p>幼犬粮</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottomlots">
                            <p>人们品牌</p>
                            <ul>
                                <li>
                                    <a href="">
                                        <div><img src="https://img2.epetbar.com/brand/brandLogo/purchase_suppliers_file_1537406580.png?x-oss-process=style/waterfall&$1=200" alt=""/></div>
                                        <p>quanquanquna</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div><img src="https://img2.epetbar.com/brand/brandLogo/purchase_suppliers_file_1537406580.png?x-oss-process=style/waterfall&$1=200" alt=""/></div>
                                        <p>quanquanquna</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div><img src="https://img2.epetbar.com/brand/brandLogo/purchase_suppliers_file_1537406580.png?x-oss-process=style/waterfall&$1=200" alt=""/></div>
                                        <p>quanquanquna</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <div><img src="https://img2.epetbar.com/brand/brandLogo/purchase_suppliers_file_1537406580.png?x-oss-process=style/waterfall&$1=200" alt=""/></div>
                                        <p>quanquanquna</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Rightlist>

                </Contenter>
            </Fragment>
        )
    }
    componentDidMount(){
        if(!localStorage.getItem("category")){
            this.props.handlecategoryAsyncData();
        }

        this.props.handlerightAsyncData();
    }
}
export default Classifytabone;