import React, { Component} from 'react'
import BScroll from "better-scroll"
import {BsWrapper} from "./styled"
export default class BscrollCom extends Component {
    render() {
        return (
            <BsWrapper ref="wrapper">
               {this.props.children}
            </BsWrapper>
        )
    }
    componentDidMount(){
        this.scroll=new BScroll(this.refs.wrapper)
        this.scroll = new BScroll(this.refs.wrapper,{
            pullUpLoad:true,
            click:true,
            tap:true
        });
    }
    handlepullingUp(callback){
        this.scroll.on("pullingUp",()=>{
            callback();
        })
    }
    handlefinishPullUp(){
        this.scroll.finishPullUp();
        this.scroll.refresh();
    }
}
