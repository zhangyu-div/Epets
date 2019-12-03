import styled from "styled-components";
export const Container = styled.div`
    overflow:auto;
    height:100%;
 
`

export const Videobox = styled.div`
    .video{
        width:100%;
        height:1.8rem;
        video{
            width:100%;
            height:100%;
            font-size:0.3rem;
            object-fit: contain;
        }
    }
 
`
export const Info = styled.div`
    .title{
        border-bottom:1px solid #e5e5e5;
        height:0.99rem;
        padding:0.18rem 0;
        h3{
            width:92%;
            margin:0 auto;
            font-size:0.16rem;
            font-weight:700;
            color: #333;
        }
        h4{
            width:92%;
            margin:0 auto;
            padding-left:2.2rem;
            display:flex;
            align-items:center;
            span{
                display:inline-block;
                height:0.3rem;
                width:0.3rem;
                margin-right:0.05rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            b{
                font-size:0.12rem;
                color:#999;
                font-weight:normal;
                list-style:normal;
            }
        }
    }

    .lists{
        height:1.8rem;
        border-bottom:1px solid #e5e5e5;
        .top{
            padding:0.13rem;
            display:flex;
            align-items:center;
    
            span:nth-child(1){
                font-size:0.16rem;
                font-weight:700;
                margin-right:0.08rem;
                color: #333;
            }
            span:nth-child(2){
                width:0.7rem;
                height:0.2rem;
                line-height:.2rem;
                text-align:center;
                font-size:0.13rem;
                display:inline-block;
                background: #f3f4f5;
                vertical-align: middle;
                border-radius:0.05rem;
                margin-right:0.8rem;
            }
            span:nth-child(3){
                font-size: 0.13rem;
                color: #999;
            }
        }
    }
    .bottom{
        padding:0.1rem;

        .swipper{
                position:relative;
                width:100%;
                overflow:auto;
                background:#fff;
                display:flex;

                li{
                    width:1.1rem;
                    margin-right:0.1rem;
                    div{
                        position:relative;
                        width:1.1rem;
                        height:0.62rem;
                        border-radius:0.07rem;
                        img{
                            border-radius:inherit;
                            width:100%;
                            height:100%;
                        }
                        p{
                            position:absolute;
                            display: inline-block;
                            padding: 0px 0.07rem;
                            background:rgba(0,0,0,1);
                            opacity: 0.4;
                            border-radius: 0.14rem;
                            position: absolute;
                            bottom: 0.05rem;
                            right: 0.05rem;
                            font-size: 0.09rem;
                            color:#fff;
                            span:first-child{
                                display:inline-block;
                                height:0.06rem;
                                width:0.06rem;
                                margin-right:0.03rem;
                                img{
                                    height:100%;
                                    width:100%;
                                }
                            }
                        }
                    }
                    h4{
                        font-size: 0.1rem;
                        margin-top: 0.06rem;
                        width:100%;
                        overflow:hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        text-align:center;
                    }
                }
            }
    }
`
export const Pinglun=styled.div`
    padding:0.2rem 0.13rem 0 0.13rem;
    h2{
        color: #70c8b0;
        border-left: 0.04rem solid #70c8b0;
        height: 0.17rem;
        font-size:0.14rem;
        padding-left:0.06rem;

        margin-bottom:0.15rem;
    }
    div{
        border-top:1px solid #e5e5e5;
        display:flex;
        align-items:center;
        padding-top:0.1rem;
        span:nth-child(1){
            display:inline-block;
            width:0.3rem;
            height:0.3rem;           
            border-radius:50%;
            img{
                width:100%;
                height:100%;
                border-radius:50%;
            }
        }
        input{
            width:2.29rem;
            height:0.4rem;
            background: #f3f4f5;
            border: none;
            font-size:0.14rem;
            padding: 0.05rem 0.15rem;
            outline: none;
            resize: none;
            border-radius:0.06rem;
            margin:0 0.2rem 0 0.13rem;
        }
        span:nth-child(3){
            font-size:0.15rem;
            color:#666;
        }
    }
    .user{
        width:100%;
        padding:0.15rem 0.1rem;
        li{
            position:relative;
            height:0.68rem;
            margin-top:0.1rem;
            width:100%;
            padding:0.1rem 0 0 0.32rem;
            .imgs{
                position:absolute;
                height:0.3rem;
                width:0.3rem;
                border-radius:50%;
                left:-0.09rem;
                top:0;
                img{
                    width:100%;

                    border-radius:50%;
                }
            }
            h3{
                color: #70c8b0;
                font-size:0.14rem;
                font-weight:700;
                span{
                    color: #999;
                    font-size:0.12rem;
                    margin-left:0.05rem;
                }
            }
            p{
                font-size: 0.14rem;
                color: #333;
                margin-top:0.1rem;
                padding-bottom:0.1rem;
            }
            .iconfont{
                height:0.2rem;
                width:0.2rem;
                display:inline-block;
                position:absolute;
                font-size:0.16rem;
                right:0.05rem;
                top:0.07rem;
            }
        }
    }
`

export const Footer=styled.div`
    height:0.5rem;
    display:flex;
    position:fixed;
    bottom:0;
    left:0;
    background:#fff;
    width:100%;
    justify-content:space-around;
    border-top:1px solid #e5e5e5;
    padding-top:0.05rem;
    div{
        text-align:center;
        font-size:0.13rem;
        span{
            font-size:0.23rem;
        }
    }
`