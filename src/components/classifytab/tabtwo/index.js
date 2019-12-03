import React, { Fragment } from "react";
import { Content } from "./styled";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
class Classifytabtwo extends React.Component {
    render() {
        let {brandlist} =this.props;

        return (
            <Fragment>
                <Content>
                    <div className="wrapper">
                        {
                            brandlist.map((item,index)=>(
                                <div className="pinpailist" key={index}>
                                    <div className="title c999 ft12 center">
                                        <span className="center">—— {item.title} ——</span>
                                    </div>
                                    <div className="list">
                                        <ul className="listinfo">
                                            {
                                                item.list.map((items,indexs)=>(
                                                    <li key={indexs}>
                                                        <a href="">
                                                            <div className="imgs"><img src={items.logo} alt="" /></div>
                                                            <p className="name">{items.name}</p>
                                                            <p className="country c999 ft12">{items.address}</p>
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Content>
            </Fragment>
        )
    }

    componentDidMount(){
        this.props.brandAsyncData();
    }
}
export default Classifytabtwo;