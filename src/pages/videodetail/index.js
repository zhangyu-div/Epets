import React from "react";
import Headbar from "common/headbar";
import { Container, Videobox, Info, Pinglun, Footer } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Videodetail extends React.Component {
    render() {
        let {videodetail,series,users,lists,links}=this.props;
        let obj=Object.values(lists);
        console.log(obj)
        return (
            <Container>
                <Headbar></Headbar>
                <Videobox>
                    <div className="video">
                        <video
                            webkit-playsinline=""
                            playsinlineid="my-player video"
                            controls="controls"
                            poster={videodetail.cover}
                            x5-video-player-type="h5"
                            src={links}
                        >
                            <source src={links} type="video/mp4"></source>
                        </video>
                    </div>
                </Videobox>
                <Info>
                    <div className="title">
                        <h3>{videodetail.title}</h3>
                        <h4>
                            <span><img src={users.avatar} alt="" /></span>
                            <b>{users.username}</b>
                        </h4>
                    </div>
                    <div className="lists">
                        <div className="top">
                            <span>{series.title}</span>
                            <span>更新至{series.jishu}集</span>
                            <span>查看更多</span>
                        </div>
                        <div className="bottom">
                            <ul className="swipper">
                                {
                                    obj.map((item,index)=>(
                                        <li key={index} onClick={this.handlesend.bind(this,item.id)}>
                                        <div>
                                            <img src={item.cover} alt="" />
                                            <p>
                                                <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTg4M2Y0OC1hNGQ4LWY1NGItOWJhMy1jYWE4NmY0ZjQ1MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUFCNzI1QjMzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUFCNzI1QjIzQjM0MTFFOUJEMkJFNjUwNEM4NDdGQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE0MWNhYzUtMGU2NS0zNzRiLWE0M2QtM2Y4MGI5MjYxNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1ODgzZjQ4LWE0ZDgtZjU0Yi05YmEzLWNhYTg2ZjRmNDUyYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunD9bUAAAB/SURBVHjaYvj//z8DECsD8X4g/gLEC4BYECqOgmGMbf9RwW0g1sSl+OV/TPABiL2wKf77Hzv4A8Ql6IoJgflAzMrCQBxIAOJ3jGDjgRYQoeEzEwMJgBTFM4j14FyQB4kJumL0oHuFI1I8sEXKVlKiWwmI9wLxZyCehyshAQQYADiUiluqhp0SAAAAAElFTkSuQmCC" alt="" /></span>
                                                <span>{item.time}</span>
                                            </p>
                                        </div>
                                        <h4>{item.title}</h4>
                                    </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </Info>
                <Pinglun>
                    <h2>评论 (2)</h2>
                    <div>
                        <span><img src="https://wap.epet.com/app/images/loading.png" alt="" /></span>
                        <input type="text" placeholder="我来说两句..." />
                        <span>评论</span>
                    </div>
                    <ul className="user">
                        <li>
                            <div className="imgs"><img src="https://img1.epetbar.com/2015-09/23/10/7d9f85904647d4e183d94eae19a48e00.jpg" alt="" /></div>
                            <h3>奶昔慢慢喝 <span>(2)(34)43434</span></h3>
                            <p>卧室真的是我的私人领域，谁都不能进</p>
                            <span className="iconfont icon-zan"></span>
                        </li>
                    </ul>
                </Pinglun>
                <Footer>
                    <div><span className="iconfont icon-xingxing"></span><br />收藏.1</div>
                    <div><span className="iconfont icon-xinxi"></span><br /> 评论.99</div>
                </Footer>
            </Container>
        )
    }
    componentDidMount() {
        let {id}=this.props.match.params;
        this.props.vediodetailData(id);
    }
    handlesend(id){
        this.props.vediodetailData(id);
    }
}
export default Videodetail;