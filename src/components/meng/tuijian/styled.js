import styled from "styled-components";
export const Tuijan = styled.div`
    width:100%;
    overflow:auto;
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