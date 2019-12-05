import React from "react";
import {Container,Search,Toggle,Lists} from "./styled";
import Headbar from "common/headbar";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {withRouter,Link} from "react-router-dom";
import Bscroll from "common/bscroll"; 
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Goodlist extends React.Component{
    constructor(){
        super();
        this.page=1;
        this.state={
            switchs:"默认",
            flag:false,
            page:1,
            orderby:'def_desc',
            toggle:[
                {
                    text:'默认排序',
                    orderby:'def_desc',
                    texts:'默认',
                },
                {
                    text:'按人气',
                    orderby:'views_desc',
                    texts:'人气',
                },
                {
                    text:'最新上架',
                    orderby:'lastupdate_desc',
                    texts:'最新',
                },
                {
                    text: '按评论',
                    orderby:'replys_desc',
                    texts:'评论',
                }
            ],
            colors:0,
            flagone:true,
            flagtwo:false,
            flagthree:false,
            flagthrees:false,
            flagfour:false
        }

    }
    render(){
        let {goodlists}=this.props;
        let {toggle,switchs,flag,colors,flagone,flagtwo,flagthree,flagthrees,flagfour}=this.state;
        return(

            <Container>
                <Headbar></Headbar>
                <Search>
                    <div className="form">
                        <Link to="/search/">
                        <span className="iconfont icon-sousuo"></span>
                        <input type="search" placeholder="点击搜索商品"/>
                        </Link>
                    </div>
                </Search>
                <Toggle>
                    <ul className="tabbar">
                        <li className={flagone?'active':''} onClick={this.handleToggle.bind(this)}><span>{switchs}</span><i className="iconfont icon-jiantou" ></i></li>
                        <li  className={flagtwo?'active':''} onClick={this.handtwo.bind(this)}><span>销量</span></li>
                        <li className={flagthree?'active':''} onClick={this.handthree.bind(this)}><span>价格</span><i className="iconfont icon-jiantou_shangxiaqiehuan" ></i></li>
                        <li className={flagfour?'active':''}><span>筛选</span><i className="iconfont icon-shaixuan" ></i></li>
                        <div className='toggle' style={{display:flag?'block':'none'}}>
                            {
                                toggle.map((item,index)=>(
                                    <p key={index} className={colors==index?'active':''} onClick={this.handleSend.bind(this,item,index)}>{item.text}</p>
                                ))
                            }
                        </div>
                    </ul>
                </Toggle>
                <Bscroll ref="scroll">
                    <div className="goodslist">
                {
                    goodlists.map((item,index)=>(
                        <Lists key={index}>
                        <ul>
                        <Link to={'/goodsdetail/'+item.gid}>
                            <li>
                               
                                <a href="" className="left"><img src={item.photo} alt=""/></a>
                                <div className="right">
                                    <p className="name">{item.subject}</p>
                                    <p className="cuxiao"><span></span> </p>
                                    <p className="price">￥{item.sale_price}</p>
                                    <p className="info">{item.comments} {item.sold}</p>
                                    <div>
                                        <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png"/>
                                    </div>
                                </div>
                          
                            </li>
                            </Link>
                        </ul>
                    </Lists>
                    ))
                }
                </div>
                </Bscroll>
            </Container>
       
        )
    }
    handleToggle(){
        this.setState({
            flag:!this.state.flag,
            flagone:true,
            flagtwo:false,
            flagthree:false,
            flagfour:false,
            orderby:'def_desc',
        },()=>{
            this.handleAsyncList();
        })
    }
    handleSend(item,index){
        this.setState({
            switchs:item.texts,
            colors:index,
            flag:false,
            orderby:item.orderby
        },()=>{
            this.handleAsyncList();
        })

    }
    handtwo(){
        this.setState({
            flagone:false,
            flagtwo:true,
            flagthree:false,
            flagfour:false,
            flag:false,
            orderby:'sold_desc',
        },()=>{
            this.handleAsyncList();
        })
    }



    handthree(){
        if(!this.state.flagthrees){
            this.setState({
                flagone:false,
                flagtwo:false,
                flagthree:true,
                flagthrees:true,
                flagfour:false,
                flag:false,
                orderby:'price_asc',
            },()=>{
                this.handleAsyncList();
            })
        }else{
            this.setState({
                flagthrees:false,
                orderby:'price_desc',
            },()=>{
                this.handleAsyncList();
            })
        }

    }

    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp();
    }
    componentDidMount(){
        this.handleAsyncList();

        this.refs.scroll.handlepullingUp(()=>{
            let {cateid}=this.props.match.params;
            let {orderby} =this.state;
            let extend_pam =this.props.location.state;
            let page=this.page;
            this.props.goodslist(cateid,page,orderby,extend_pam);
            this.page++;
        })
    }
    handleAsyncList(){
        let {cateid}=this.props.match.params;
        let {orderby} =this.state;
        let extend_pam =this.props.location.state;
        let page=1;
        this.props.goodslist(cateid,page,orderby,extend_pam);
    }

    
}
export default Goodlist;