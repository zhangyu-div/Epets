import React from "react";
import { Container, Header, Main } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Goodsdetail extends React.Component {
    render() {
        let {goodsdetaillistphotos,details}=this.props;

        return (
            <Container>
                <Header>
                    <div className="details-top" >
                        <span className="iconfont icon-iconfontjiantou1" onClick={this.handback.bind(this)} ></span>
                        <p>
                            <span className="rborder">商品</span>
                            <span>详情</span>
                            <span>评价</span>
                        </p>
                        <span className="details-top-dl"></span>
                        <i></i>
                    </div>
                </Header>
                <Main>
                    <div className="details-main">
                        <div className="imgs">
                            {
                                goodsdetaillistphotos.map((item,index)=>(
                                    <div key={index}> <img  src={item.image} alt="" /></div>
                                ))
                            }
                        </div>
                        <div className="describe">
                        <p>{details.subject}</p>
                        <p>{details.presubject}</p>
                        </div>
                        <div className="price">
                            <div>
                        <p></p>
                                <p>
                                    价格
                                    <span>￥8888</span>
                                </p>
                            </div>
                        </div>
                        <div className="ps1">
                            <span>超值搭配</span>
                            <span>
                                1折起换购爱犬生活大礼包
                                <i className="go"></i>
                            </span>
                        </div>
                </div>
                </Main>
            </Container>
        )
    }
    componentDidMount(){
        let {id}=this.props.match.params;
        this.props.goodsdetailData(id);
    }
    handback(){
      this.props.history.goBack();
    }

}
export default Goodsdetail;