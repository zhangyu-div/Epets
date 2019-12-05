import styled from "styled-components";
export const Container=styled.div`
    height:100%;
    overflow:auto;
    background: #fff;
    .header{
        height:0.5rem;
        display:flex;
        padding:0.2rem;
        b{
            font-size:0.2rem;
        }
    }
`

export const Formbox=styled.div`
    height:3.08rem;
    padding:0.1rem 0.4rem;
    h2{
        height:0.32rem;
        margin:0.1rem 0 ;
        color: #333;
        font-size:0.2rem;
        font-weight:bold;
    }
    .form{
        width:100%;
        .input{
            height:.58rem;
            width:100%;
            border-bottom: 2px solid #d0d0d0;
            display:flex;
            flex-direction:column;
            input{
                width:100%;
                height:100%;
                font-size:0.16rem;
                outline:none;
                border:none;
            }
        }

        button{
        width:100%;
        height:0.5rem;
        background: #f0f0f0;
        color: #bfbfbf;
        display:block;
        line-height:.5rem;
        border-radius:0.3rem;
        font-size:0.16rem;
        text-align:center;
        border:none;
        margin-top:0.39rem;
        border:none;
        outline:none;
        
    }
    .cur{
            background:DarkSlateBlue;
        }
    p{
        width:100%;
        display:flex;
        font-size:0.12rem;
        color: #333;
        justify-content:space-between;
        align-items:center;
        height:0.6rem;
    }
    }

`

export const Footer=styled.div`
    height:1.3rem;
    width:100%;
    margin-top:1rem;
    padding:0.1rem 0.4rem;
    h2{
        height:0.11rem;
        width:100%
        img{
            height:.11rem;
            width:100%;
        }
    }
    div{
        height:0.3rem;
        margin:0.2rem 0;
        display:flex;
        width:100%
        span{
            display:flex;
            width:50%;
           align-items:center;
           justify-content:center;
        }
        img{
            height:0.3rem;
            display:inline-block;
            width:0.3rem;
        }

    }
    p{
            font-size:0.12rem;

            text-align:center;
            b{
                color: #FF5757;
            }
        }
`
