import React from "react";
import {Container,Search,Toggle,Lists} from "./styled";
class Goodlist extends React.Component{
    render(){
        return(
            <Container>
                <Search>
                    <div className="form">
                        <span className="iconfont icon-sousuo"></span>
                        <input type="search" placeholder="点击搜索商品"/>
                    </div>
                </Search>

                <Toggle>
                    <ul>
                        <li><span>默认</span><i></i></li>
                        <li>销量</li>
                        <li>价格</li>
                        <li>筛选</li>
                    </ul>
                </Toggle>

                <Lists>
                    <ul>
                        <li>
                            <a href="" className="left"><img src="https://img2.epetbar.com/2018-11/26/13/bdcdfa5f9a0d1703db11c3d3cb2177c7.jpg@!300w-b" alt=""/></a>
                            <div className="right">
                                <p className="name">卡尔karl 狗糖舔舔乐1枚装 21g</p>
                                <p className="price"></p>
                                <p className="info"></p>
                                <div>
                                    <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Lists>
            </Container>
        )
    }
}
export default Goodlist;