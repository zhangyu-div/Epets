import styled from "styled-components";
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
                        text-align:center;
                    }
                }
            }
        }

`