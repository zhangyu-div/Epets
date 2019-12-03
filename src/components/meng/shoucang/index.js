import React from "react";
import {Nothing} from "./styled";
import { connect } from "react-redux";
// import { mapStateToProps, mapDispatchToProps } from "./mapStore";
// @connect(mapStateToProps, mapDispatchToProps)
class Shoucang extends React.Component {
    render() {
        return (
            <Nothing>
                <div className="img">
                </div>
                <h4>暂无内容</h4>
                <p>小主，这里空空如也，快去收藏吧~</p>
            </Nothing>
        )
    }

}
export default Shoucang;