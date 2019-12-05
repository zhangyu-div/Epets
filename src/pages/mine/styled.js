import styled from "styled-components";
export const Container=styled.div`
    height:100%;
    overflow:auto;
    background: #f3f4f5;
`

export const Top=styled.div`
    margin-bottom:.4rem;
    height:2.07rem;
    width:100%;
    background-image: url("https://static.epetbar.com/static_web/wap/src/images/background/backgroundV420.jpg");
    .top{
        display:flex;
        height:0.26rem;
        width:100%;
        padding-top:0.15rem;
        justify-content:space-between;
        div{
            width:.48rem;
            height:.26rem;
            text-align:center;
            img{
                height:0.24rem;
                width:0.24rem;
                margin:0 auto;
            }
        }
    }
    .center{
        height:0.7rem;
        margin:0.3rem 0 ;
        padding:0 0.1rem;
        display:flex;
        align-items:center;
        span{
            display:inline-block;
            font-size:0.16rem;
            color:#fff;
            margin-right:0.08rem;
        }
        span:nth-child(1){
            height:100%;
            width:0.7rem;
            border-radius:50%;
            img{    
                height:100%;
                width:100%;
                border-radius:50%;
            }
            margin-left:0.1rem;
        }

    }
    .bottom{

        width:3.55rem;
        margin:0 auto;
        border-radius:0.15rem 0.15rem 0 0;
        background: #252525;
        margin-top:0.46rem;
        height:0.35rem;
        display:flex;
        span{
            display:flex;
            width:25%;
            align-items:center;
            justify-content:center;
            img{
                height:0.16rem;
                width:0.63rem;
            }
        }
    }
`

export const Order=styled.div`

    width:3.55rem;
    height:1.17rem;
    background:#fff;
    border-radius:0.12rem;
    margin:0 auto;
    h3{
        height:0.35rem;
        padding:0.1rem ;
        padding-bottom:0;
        font-size:0.17rem
    }
    div{
        width:100%;
        height:0.6rem;
        margin-top:0.2rem;
        padding-bottom:0.1rem;
        display:flex;
        font-size:0.12rem;
        color:#333;
        span{   
            width:20%;
            display:inline-block;
            text-align:center;
            img{
                height:0.24rem;
                width:0.24rem;
                margin:0.06rem auto;
            }
        }
    }

`
export const Money=styled.div`
        width:3.55rem;
        height:1.17rem;
        background:#fff;
        border-radius:0.12rem;
        margin:0.25rem auto;
        h3{
        height:0.35rem;
        padding:0.1rem ;
        padding-bottom:0;
        font-size:0.17rem
        }
        div{
            width:100%;
            height:0.6rem;
            margin-top:0.2rem;
            padding-bottom:0.1rem;
            display:flex;
            font-size:0.12rem;
            color:#333;
            span{   
                width:25%;
                display:inline-block;
                text-align:center;
                b{
                    color: #ff5757;
                    font-size:0.14rem;
    
                }
            }
        }

`
export const Service=styled.div`
        width:3.55rem;
        height:2.75rem;
        background:#fff;
        border-radius:0.12rem;
        margin:0.25rem auto;
        margin-bottom:0.7rem;
        h3{
            height:0.35rem;
            padding:0.1rem ;
            padding-bottom:0;
            font-size:0.17rem
        }
        ul{
            display:flex;
            width:100%;
            flex-wrap:wrap;
            padding:0 0.1rem;
            margin-top:0.2rem;
            font-size:0.12rem;
            li{
                width:25%;
                text-align:center;
                margin-bottom:0.2rem
                img{
                    width:0.2rem;
                    margin: 0 auto;
                    margin-bottom:-0.05rem;
                }
            }
        }
`
