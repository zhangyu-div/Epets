import styled, { keyframes } from "styled-components";
const move = keyframes`
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(720deg);
    }
`;
export const Page = styled.div`

     width:100%;
     height:76rem;
     overflow-y: auto;
  .content {
    width: 100%;
    height: 10rem;
    background: pink;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .header {
    width: 100%;
    height: 1.04rem;
    background-color: rgba(0, 0, 0, 0.2);
    padding-top: 0.25rem;
    position: fixed;
    top: 0;
    z-index: 10;
    left: 0;
    right: 0;
    transition: 0.5s;
  }
  .heatop {
    width: 100%;
    height: 0.3rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.16rem;
    /* background:yellow; */
  }
  .htl {
    width: 3.05rem;
    height: 0.3rem;
    background: #f7f7f7;
    display: flex;
    border-radius: 0.15rem;
    align-items: center;
    padding-left: 0.1rem;
    color: #816681;
    font-size: 0.12rem;
  }
  .htlimg {
    width: 0.1rem;
    height: 0.1rem;
    margin-right: 0.1rem;
  }
  .htr {
    display: block;
    height: 0.3rem;
    width: 0.25rem;
    background: pink;
  }
  .htrimg {
    height: 0.3rem;
    width: 0.25rem;
  }
  .heabon {
    width: 100%;
    height: 0.44rem;
    margin-top: 0.04rem;
    overflow-y: hidden;
    overflow-x: auto;
    /* position:relative; */
  }
  .hb {
    width: 100%;
    height: 0.44rem;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
  }
  .hbli {
    width: 0.75rem;
    height: 0.44rem;
    text-align: center;
    line-height: 0.44rem;
    float: left;
    flex-shrink: 0;
    font-size: 0.14rem;
    color: #000;
  }
  .hbimg {
    width: 0.6875rem;
    height: 0.2rem;
    margin-top: 0.1rem;
  }
  .hbspan {
    font-size: 0.2rem;
    font-weight: 900;
  }
  .hbimg {
    width: 0.6875rem;
    height: 0.2rem;
    margin-top: 0.1rem;
  }
  .mould {
    width: 100%;
    height: 3.675rem;
  }
  .rela {
    width: 100%;
    height: 2.9rem;
    background: gray;
    position: relative;
  }
  .relaimg {
    width: 100%;
    height: 2.9rem;
  }
  .menus {
    width: 100%;
    height: 1.15rem;
    position: relative;
    z-index: 1;
    top: -0.37rem;
  }
  .menusul {
    width: 100%;
    height: 1.15rem;
    display: flex;
    justify-content: center;
  }
  .menusli {
    width: 0.75rem;
    height: 1.15rem;
  }
  .menusimg {
    width: 0.75rem;
    height: 1.15rem;
  }
  .mould_203 {
    width: 100%;
    height: 1.53rem;
  }
  .mould_203_img1 {
    width: 100%;
    height: 0.68rem;
  }
  .mould_203_img2 {
    width: 100%;
    height: 0.85rem;
  }
  .mould_204 {
    width: 100%;
    height: 2.115rem;
  }
  .mould_204_l {
    width: 1.74rem;
    height: 2.115rem;
    float: left;
  }
  .mould_204_r {
    width: 2.01rem;
    height: 2.115rem;
    float: left;
  }
  .mould_204_img1 {
    width: 1.74rem;
    height: 2.115rem;
  }
  .mould_204_img2 {
    width: 2.01rem;
    height: 0.705rem;
  }
  .mould_205 {
    width: 100%;
    height: 1.08rem;
  }
  .mould_205_img {
    width: 100%;
    height: 1.08rem;
  }
  .mould_206 {
    width: 100%;
    height: 1.66rem;
    margin-bottom: 20px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  }
  .daily {
    width: 3.55rem;
    height: 1.66rem;
    box-shadow: 1px 2px 25px 0px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin-left: 0.1rem;
  }
  .daily_l {
    width: 1.78rem;
    height: 1.66rem;
    float: left;
  }
  .daily_r {
    width: 1.77rem;
    height: 1.66rem;
    float: left;
    .dr{
        width:1.57rem;
        height:.256rem;
        display:flex;
        /* align-items:center; */
        flex-direction:column;
        margin-left:.1rem;
        padding-top:.05rem;
    }
    .p0{
        width:.8rem;
        height:.17rem;
        img{
            width:.8rem;
        height:.17rem;
        }
    }
    
  }
  .daily_l_t {
    width: 1.62rem;
    height: 0.256rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-left:.1rem;
  }
  .daily_l_b {
    width: 1.77rem;
    height: 0.954rem;
    ul{
        width: 1.77rem;
    height: 0.954rem;
    margin-top:.15rem;
    }
    li{
        width:.835rem;
        height:.954rem;
        float:left;
    }
    a{
        display:block;
        width:.835rem;
        height:.954rem;
        margin-left:.1rem;
    }
    img{
        width:.588rem;
        height:.588rem;
    }
    .dailyP1{
        width:.735rem;
        height:.224rem;
        text-align:center;
        line-height:.224rem;
        font-size:.14rem;
        color:#FF5757;
        font-weight:900;
    }
    .dailyP2{
        width:.735rem;
        height:.192rem;
        text-align:center;
        line-height:.192rem;
        font-size:.12rem;
        color:#999;
        text-decoration:line-through
    }
  }
  .dailyimg1 {
    width: 0.6rem;
    height: 0.16rem;
    /* background:yellow */
  }
  .daily_l_t_ftc {
    width: 0.734853rem;
    height: 0.136rem;
    line-height:0.136rem;
  }
  .ftcdiv1 {
    width: 0.326853rem;
    height: 0.136rem;
    background: #fb4752;
    text-align:center;
    line-height:0.136rem;
    float:left;
    border-radius:.2rem 0 0 .2rem;
  }
  .ftcspan1 {
    font-size: 0.08rem;
    color: #fff;
  }
  .ftcdiv2 {
    width: 0.408rem;
    height: 0.136rem;
    border:1px solid #FD989F;
    float:left;
    border-radius:0 .2rem .2rem 0;
    text-align:center;
  }
  .ftcspan2 {
    font-size: 0.08rem;
    color: #414646;
  }
  .mould_207{
    width:100%;
    height:.405rem;
    .m_207_img{
      width:100%;
    height:.405rem;
    a{
      width:100%;
    height:.405rem;
    }
    img{
      width:100%;
    height:.405rem;
    }
    }
  }
  .mould_208{
    width:100%;
    height:2.64rem;
    display:flex;
    justify-content:center;
  }
  .imgflex{
    width:1.875rem;
    height:2.64rem;
    .flex_a1{
    display:block;
    width:1.875rem;
    height:100%;
    img{
      width:1.875rem;
      height:1.315rem;
    }
  }
  }

 .imgflexr{
   width:1.875rem;
   height:2.64rem;
   a{
     float:left;
     display:block;
     width:.625rem;
     height:100%;
   }
   img{
    width:.625rem;
     height:1.315rem;;
   }
 }


.mould_209{
  width:100%;
  height:.8rem;
  a{
    display:block;
    width:100%;
    height:.8rem;
  img{
    width:100%;
    height:.8rem;
  }
  }
}


.mould_210{
  width:100%;
  height:.2567rem;
  padding-left:.1rem;
  img{
    width:1.4042rem;
    height:.19rem;
  }
}
`;
