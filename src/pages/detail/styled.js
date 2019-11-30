import styled from "styled-components"

export const Page = styled.div`
    width:100%;
    /* overflow:hidden; */
    .box{
        width:100%;
        height:27rem;
        background:#F3F4F5;
        overflow-y:auto;
    }
    .slideshow{
        width:100%;
        height:3.75rem;
        img{
            width:100%;
        height:3.75rem;
        }
    }

/* time */

    .price{
        width:100%;
        height:.87rem;
        padding:.05rem .1rem 0 .1rem;
    }
    .priceInfo{
        width:3.55rem;
        height:.82rem;
        border-radius:.15rem;
        background:#41C856;
        padding:.05rem .1rem 0 .1rem;
    }
    .clearfit{
        width:3.35rem;
        height:.32rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        span{
            font-size:.12rem;
            font-weight:700;
            color:#fff;
        }
        .ftl_span2{
            font-size:.2rem;
        }
        del{
            font-size:.12rem;
            color:#fff;
        }
        p{
            margin-top:.1rem;
            font-size:.12rem;
            color:#fff;
        }
    }
    .clearfib{
        width:3.35rem;
        height:.25rem;
        margin-top:.1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        p{
            width:.4605rem;
            height:.25rem;
            border-radius:.2rem;
            background:#77D586;
            text-align:center;
            line-height:.25rem;
            font-size:.12rem;
            color:#fff;
        }
        .ftb{
            width:1.2064rem;
            height:.2rem;
            line-height:.2rem;
            font-size:.12rem;
            color:#fff;
            em{
                font-style:normal;
                
            }
            span{
                display:inline-block;
                width:.2rem;
                height:.2rem;
                border-radius:50%;
                text-align:center;
                line-height:.2rem;
                background:#fff;
                color:#000;
                margin: 0 .05rem .02rem;
            }
        }
    }



/* content */

    .content{
        width:100%;
        height:1.1927rem;
        padding:0 .1rem;
        margin-top:.1rem;
        .contbox{
            width:3.55rem;
            height:1.1927rem;
            border-radius:.15rem;
            background:#fff;
            padding:.15rem .1rem;
        }
        p:first-child{
            font-size:.14rem;
            color:#000000;    
            line-height:1.2;
        }
        p:nth-child(2){
            font-size:.12rem;
            color:#B5B5B5;
            margin-top:.1rem;
        }
        ul{
            width:100%;
            height:.3427rem;
            padding-top:.15rem;
            margin-top:.1rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            color:#666666;
            font-size:.12rem;
            border-top:1px solid #F4F4F4;
            li{
                display:flex;
            justify-content:space-between;
            align-items:center;
            }
            img{
                width:.15rem;
                height:.15rem;
                margin: 0 0.05rem 0.02rem 0;
            }
        }
    }


/* goodsdetail */

    .goodsdetail{
        width:100%;
        height:34rem;
        margin-top:.2rem;
        background:#fff;
    .titlewrapper{
            width:100%;
            height:.5rem;
            line-height:.5rem;
            padding:0 .1rem;
            text-align:center;
            ul{
            display:flex;
            justify-content:space-between;
            padding:0 .81rem;
            border-bottom:1px solid #F4F4F4;
            li{
                width:1.065rem;
                height:.44rem;
                text-align:center;
                line-height:.44rem;
                color:rgb(51, 51, 51);
                font-size:.16rem;
            }
            }

        }
    .L-img{
            width:100%;
            height:4.3717rem;
            img{
                width:100%;
                height:4.3717rem;
            }
        }
    }
    
    /* bottoms */
    .bottoms{
        width:100%;
        height:.6rem;
        position:fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding-top: .1rem;
        z-index: 10;
        background:#fff;
        display:flex;
        justify-content:center;
    }
    .booking{
           width:1.415rem;
           height:.4rem;
           line-height:.4rem;
           text-align:center;
           color:#fff;
           background:#00C94B;
           margin-left:.1875rem;
           border-radius:.2rem;
           font-size:.14rem;
           font-weight:700;
       }
    .money{
           display:block;
           width:1.435rem;
           height:.4rem;
           border:1px solid #69DF95;
           border-radius:.2rem;
           text-align:center;
           line-height:.4rem;
           color: #00c94b;
           h3{
               font-size:.16rem;
           }
       }
`