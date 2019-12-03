import styled from "styled-components";
export  const Container=styled.div`
    overflow:auto;
    height:100%;
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
        width:0.6rem;
        height:.3rem;
        display:flex;
        color: #333;
        align-items:center;
        span{
            font-size:0.15rem;
        }
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
            .iconfont{ 
                font-size:0.12rem;
            }
        }
    }
    .right{
        height: 0.22rem;
        font-size:0.22rem;
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
    .active{
        font-weight:bolder;
        font-size:0.16rem;
        color:#333;
    }
    .active::after {
        content: '';
        display: block;
        width: 0.14rem;
        height: 0.05rem;
        margin: 1px auto 0;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKCAMAAAB/nqUeAAAAnFBMVEVHcEx3z66V66Z2zq2Y76iU66mV66h2zq92zq6Y7qZ70q6U6qh60a130ayX7qaY7qZ50K6Y7qeX7qh60q53za2V7Kh50a12zKyX7KeQ56mO5KmM46qL4qqP5qmR6KmT6aiA2Kx91K17061+1a2K4aqG3auC2ayI36uE26uD2qx/1q2H3quU6qh40K560q550a6W7KiV66h3z66X7aeF4wsOAAAAGXRSTlMAT02IT/XB9cHB9fXBTYfyTPVM8oW+vlCFYF/ghgAAAF9JREFUGNNjYGAQEuWWl5OUlZKWUVHXVtXQVFPQUlZUEhYTYAACCQNDHSyyevq6IgwMLMY4ZY0YGTjxyHIwCOKRZWfgxyuL32R8rhJnYODDKcsM8jATGysWWS4eXgYGACNgJZsMtHSxAAAAAElFTkSuQmCC) center center no-repeat;
        border-radius: 0.05rem;
    }
`





