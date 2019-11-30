import styled from "styled-components";
export  const Container=styled.div`
    overflow:hidden;

`
export const Box = styled.div`
    width: 100%;
    background:#fff;
    font-family: SourceHanSansCN-Medium;
    border-bottom: 1px solid #F3F4F5;
    .box{
        width: 100%;
        height: 0.76rem;
    }
    .fixed{
        width:92%;
        margin:0 auto;
    }

`

export const Search = styled.div`
    overflow: hidden;
    width: 100%;
    height: .3rem;
    margin-bottom: .1rem;
    margin-top: .1rem;
    display:flex;
    justify-content:space-between;
    align-items: center;
    .left{
        color: #333;
    }
    .center{
        width:2.43rem;
        .form{
            height: 0.3rem;
            background:rgba(240,240,240,1);
            opacity: 0.8;
            border-radius: 0.3rem;
            line-height: 0.3rem;
            padding: 0 .15rem;
            text-align: left;
            font-size:0.12rem;
            span{
                margin-right:0.05rem;
            }
        }
    }
    .right{
        height: 0.22rem;
        font-size:0.24rem;
    }
`
export const Todo = styled.ul`
    display:flex;
    justify-content:space-between;
    font-weight: 400;
    font-size: 0.12rem;
    li{
        text-align:center;
        height: 0.36rem;
        line-height: 0.3rem;
        width:25%;
    }
    .active::after {
        content: '';
        display: block;
        width: 14.5px;
        height: 5px;
        margin: 1px auto 0;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKCAMAAAB/nqUeAAAAnFBMVEVHcEx3z66V66Z2zq2Y76iU66mV66h2zq92zq6Y7qZ70q6U6qh60a130ayX7qaY7qZ50K6Y7qeX7qh60q53za2V7Kh50a12zKyX7KeQ56mO5KmM46qL4qqP5qmR6KmT6aiA2Kx91K17061+1a2K4aqG3auC2ayI36uE26uD2qx/1q2H3quU6qh40K560q550a6W7KiV66h3z66X7aeF4wsOAAAAGXRSTlMAT02IT/XB9cHB9fXBTYfyTPVM8oW+vlCFYF/ghgAAAF9JREFUGNNjYGAQEuWWl5OUlZKWUVHXVtXQVFPQUlZUEhYTYAACCQNDHSyyevq6IgwMLMY4ZY0YGTjxyHIwCOKRZWfgxyuL32R8rhJnYODDKcsM8jATGysWWS4eXgYGACNgJZsMtHSxAAAAAElFTkSuQmCC) center center no-repeat;
        border-radius: 5px;
    }
`

export const Tuijan = styled.div`
    width:100%;
    .header{
        height:0.97rem;
        margin-bottom:-0.15rem;
        display:flex;
        width:100%;
        justify-content:space-between;
        a{
            display:block;
            width:20%;
            img{
                width:100%;
                height:100%;
            }
        }
    }
    .lists{
        height:1.28rem;
        padding:0.15rem;
        margin:0 auto;
        width: 92%;
        margin: 0.2rem auto;
        background:rgba(255,255,255,1);
        -webkit-box-shadow: 0px 0.1rem 0.25rem 0px rgba(23,23,23,0.1);
        box-shadow: 0px 0.1rem 0.25rem 0
        rgba(23,23,23,0.1);
        border-radius: 0.1rem; 
        overflow:hidden;
        .content{
            .top{
                width:100%;
            }
            a{
                display:flex;
                width:100%;
                height:100%;
                .left{
                    width:1.25rem;
                    height:0.62rem;
                    border-radius:0.08rem;
                    img{
                        width:100%;
                        height:100%;
                        border-radius:inherit;
                    }
                }
                .right{
                    width:1.9rem;
                    padding-left:0.1rem;
                    height:0.6rem;
                    h3{
                        font-size:0.14rem;
                        font-weight:500;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    p{
                        font-weight: 300;
                        font-size: 0.12rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-top: 0.08rem;
                    }
                }
            }
            .bot{
                margin-top:0.15rem;
                display:flex;
                align-items:center;
                font-size:0.12rem;
                .imgone{
                    display:inline-block;
                    width:0.23rem;
                    height:0.23rem;
                    margin-right:0.05rem;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .text{
                    width:2.5rem;
                }
                .imgtwo{
                    display:inline-block;
                    width:0.16rem;
                    height:0.15rem;
                    margin-right:0.08rem;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
    }

`

export const Nothing=styled.div`
    position: fixed;
    width: 100%;
    top: 30%;
    left: 0;
    .img{
        background:url(https://wap.epet.com/app/img/bitmap404.5c8694aa.png);
        background-size:2rem auto;
        background-position: 0 -8.12rem;
        height: 1.8rem;
        width: 2rem;
        margin:0 auto;
    }
    h4{
        text-align:center;
        color: #666;
        font-size: 0.15rem;
        margin-top: 0.15rem;
    }
    p{
        text-align:center;
        color: #B7B7B7;
        font-size: 0.12rem;
        margin-top:0.1rem;
    }

`

export const Vidio=styled.div`
        overflow:hidden;
        .lists{
            margin-top:0.25rem;
        }
        width:92%;
        margin:0 auto;
        overflow:hidden;
        .top{
            overflow:hidden;
            a{
                border-radius:0.05rem 0.05rem 0 0;
                display: block;
                width: 100%;
                position: relative;
                height:1.94rem;
                background: rgba(0,0,0,1);
                img{
                    width:100%;
                    height:100%;
                    position:absolute;
                    z-index:1;
                    opacity:.5
                }
                p{
                    position:absolute;
                    font-size: 0.15rem;
                    font-weight: 300;
                    color:#fff;
                    position: absolute;
                    left: 0.15rem;
                    bottom: 0.09rem;
                    z-index:2;
                }
                div{
                    border-radius: 0px 0.6rem 0.6rem 0.66rem;
                    padding: 0 0.07rem;
                    opacity: 0.99;
                    font-weight: 400;
                    background:#f3f4f5;
                    position: absolute;
                    z-index:2;
                    right: 0.1rem;
                    bottom: 0.12rem;
                    font-size: 0.09rem;
                }
            }
        }
        .ul{
            background:#fff;
            padding: 0.15rem 0 0.08rem 0.15rem;
            .swipper{
                position:relative;
                width:100%;
                overflow:hidden;
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
                        text-align:center;
                    }
                }
            }
        }

`