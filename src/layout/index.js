import React, { Component,Fragment} from 'react'
import Footbar from "common/footbar"
export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
                {/* 内容区 */}
                <Footbar path={this.props.path}/>
            </Fragment>
        )
    }
}


/*
    在React中接收组件内部包裹的内容
    this.props.children

*/