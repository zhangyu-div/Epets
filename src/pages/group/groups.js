import styled from "styled-components"

export const Page = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    .box{
        width:100%;
        height:26.96rem;
    }
    .TabCom{
        width:100%;
        height:.44rem;
        position: relative;
        ul{
            width:100%;
            height:.44rem;
        }
        li{
            width:.75rem;
            height:.44rem;
            float:left;
            line-height:.44rem;
            text-align:center;
            font-size:.14rem;
            color:#333333
        }        
    }
    .content{
        width:100%;
        height:100%;
       
        padding:.1rem;
        background:#F3F4F5;
    }
    .wrapper{
        width:3.55rem;
        height:1.66rem;
        padding:.2rem .1rem;
        border-radius:.15rem;
        position:relative;
        background:#fff;
        .cheap{
            width:.6705rem;
            height:.2rem;
            background:#FFA400;
            border-radius:0 .2rem .2rem 0;
            text-align:center;
            line-height:.2rem;
            position:absolute;
            color:#fff;
            font-size:.12rem;
        }
        .goods{
            width:3.35rem;
            height:1.26rem;
        }
        .goods_l{
            width:1.005rem;
            height:1.26rem;
            float:left;
            img{
                width:1.005rem;
                height:1.005rem;
            }
        }
        .goods_r{
            width:2.245rem;
            height:1.26rem;
            float:left;
            padding-left:.1rem;
        }
        .usa{
            line-height:1.2;
            overflow: hidden;
            font-size:.14rem;
        }
        .amout{
            width:.5955rem;
            height:.2rem;
            border-radius:.4rem;
            border:1px solid #C1C1C1;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-top:.1rem;
            img{
                width:.125rem;
                height:.1rem;
            }
            span{
                font-size:.12rem;
            }
        }
        .price{
            width:2.245rem;
            height:.44rem;
            font-size:.12rem;
            color:#999999;
            margin-top:.15rem;
            p{
                width:2.245rem;
                height:.25rem;
                line-height:.25rem;
                font-size:.12rem;
                font-weight:700;
                color:#FF5757;
                span{
                    font-size:.16rem;
                    color:#FF5757
                }
            }
        }
    }

    .pendant{
        width:.75rem;
        height:.6634rem;
        position: fixed;
        right: 8px;
        bottom: 15%;
        z-index: 10;
        opacity: 1;
        img{
            width:.75rem;
        height:.6634rem;
        }
    }
`