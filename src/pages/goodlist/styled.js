import styled from "styled-components";
export const Container=styled.div`
    background:#fff;
    overflow:auto;
    height:100%;
`
export const Search=styled.div`
    width:3.75rem;
    height:0.6rem;
    padding:0.1rem;
    .form{
        padding:0 0.1rem;
        border-radius:0.05rem;
        background: #f6f6f6;
        font-size:0.2rem;
        width:100%;
        height:100%;
        display:flex;
        span{
            font-size:0.16rem;
            height:100%;
            line-height:.4rem;
            margin-right:0.06rem;
        }
        input{
            width:2.88rem;
            height:100%;
            vertical-align:middle;
            border:none;
            background:inherit;
            display:inline-block;
            font-size:0.13rem;
        }
    }
`

export const Toggle=styled.div`
    height:0.4rem;
    .tabbar{
        position:relative;
        display:flex;
        background:#fff;
        height:100%;
        align-items:center;
        border-top: 1px solid #e7e7e7;
        .active{
            color:goldenrod;
            background:#fff;
        }
        li{
            width:25%;
            font-size:0.14rem;
            text-align:center;
            i{
                font-size:0.15rem;
            }
        }
        .toggle{
            background: #f6f6f6;
            position:absolute;
            top:0.4rem;
            width:100%;
            font-size:0.14rem;
            z-index:4;
            p{
                height:0.42rem;
                width:100%;
                padding:0.1rem;
                padding-left:.2rem;
            }
            .actives{
                background: #f6f6f6;
            }
        }
    }


`

export const Lists=styled.div`
    overflow:auto;
    li{
        height:1.23rem;
        width:100%;
        padding:0.1rem;
        border-bottom: 1px solid #e7e7e7;
        display:flex;
        a{
            display:block;
            height:1rem;
            width:1rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .right{
            position:relative;
            width:2.45rem;
            padding-left:0.16rem;
            .name{
                height:0.32rem;
                font-weight:400;
                font-size:0.13rem;
            }
            .cuxiao{
                height:0.25rem;
                margin-top:0.05rem;
            }
            .price{
                height:0.22rem;
                color: #FF5757;
                font-size:0.14rem;
            }
            .info{
                height:0.2rem;
                color: #999;
                font-size:0.13rem;
            }
            div{
                position:absolute;
                bottom:0.05rem;
                right:0.02rem;
                width:0.3rem;
                height:0.3rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
`



