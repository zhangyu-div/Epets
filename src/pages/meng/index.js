import React from "react";
import {Container, Box, Search, Todo} from "./styled";
import Headbar from "common/headbar";
import Tuijian from "components/meng/tuijian";
import Ceping from "components/meng/ceping";
import Shoucang from "components/meng/shoucang";
import Vidios from "components/meng/vidio";
class Meng extends React.Component {
    constructor(){
        super();
        this.state=({
            flag:1,
            active:1,
            lists:[
                "收藏",
                "推荐",
                "达人测评",
                "养宠视频"
            ]
        })
    }
    render() {
        let {flag,lists,active}=this.state;
        let show;
        switch(flag){
            case 1:
                show=<Tuijian/>
                break;
            case 2:
                show=<Ceping/>
                break;
            case 0:
                show=<Shoucang/>
                break;
            case 3:
                show=<Vidios/>
                break;
        }

        return (
            <Container>
                <Headbar></Headbar>
                <Box>
                    <div className="box">
                        <div className="fixed">
                            <Search>
                                <div className="left">
                                    <span className="iconfont icon-dizhi"></span>
                                    <span className="gou">狗狗</span>
                                    <span className="iconfont icon-jiantou"></span>
                                </div>
                                <div className="center">
                                    <div className="form">
                                        <span className="iconfont icon-sousuo"></span>
                                        <span>请输入搜索内容</span>
                                    </div>
                                </div>
                                <div className="right iconfont icon-xinxi">

                                </div>
                            </Search>
                            <Todo>
                                {
                                    lists.map((item,index)=>(
                                    <li key={index} className={active==index?"active":''} onClick={this.handletoggle.bind(this,index)}> {item}</li>
                                    ))
                                }
                            </Todo>
                        </div>
                    </div>
                </Box>
                {show}

            </Container>
        )
    }
    handletoggle(index){
        this.setState({
            flag:index,
            active:index
        })
    }
}
export default Meng;