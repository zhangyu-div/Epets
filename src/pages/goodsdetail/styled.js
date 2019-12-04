import styled from "styled-components";

export const Container=styled.div`
    overflow:auto;
    height:100%;
    font-size:0.14rem;
`



export const Header=styled.div`
.details-top {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
  padding: 0 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.18rem;
  background: #fff;
  position: relative;
}

.details-top p {
  height: 100%;
  display: flex;
  align-items: center;
}

.details-top p span {
  margin: 0 0.04rem;
  display: block;
  height: 100%;
  line-height: 0.5rem;

}
.details-top{
    .iconfont{
        font-size:0.2rem;
    }
}

.details-top p .rborder {
  border-bottom: 2px solid #f00;
}

.details-top .details-top-back {
  background: url(https://static.epetbar.com/static_web/wap/dist/images/background/topIco.png)
    0 0 no-repeat;
  display: block;
  height: 0.35rem;
  width: 0.35rem;
  background-size: 100%;
}

.details-top .details-top-dl {
  background: url(https://static.epetbar.com/static_web/wap/dist/images/background/topIco.png)
    0 33% no-repeat;
  display: block;
  height: 0.35rem;
  width: 0.35rem;
  background-size: 100%;
}

.details-top i {
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  position: absolute;
  top: 0.15rem;
  right: 0.4rem;
  background: url(https://static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/other.png);
  background-size: 0.5rem auto;
}


`
export const Main=styled.div`

.details-main {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow: auto;
  padding-bottom: 0.5rem;
  }
}

.details-main div:nth-child(1) {
  width: 100%;
  height: 3.2rem;
  overflow: auto;
  white-space: nowrap;
div{
    width: 100%;
    height: 100%;
    float:left;
    img{
        width:100%;
        height:100%;
    }
  }
}



.details-main .price {
  width: 100%;
  height: 0.66rem;
  box-sizing: border-box;
  padding: 0.1rem 0.3rem;
}

.details-main .price div p:nth-child(1) {
  color: #e6b686;
  font-size: 0.2rem;
  font-weight: bold;
}

.details-main .price div p:nth-child(2) {
  color: #fff;
  font-size: 0.12rem;
}

.details-main .price div p:nth-child(2) span {
  text-decoration: line-through;
}

.details-main .describe {
  width: 100%;
  height: 0.5rem;
  background: #fff;
  box-sizing: border-box;
  padding: 0.05rem 0.1rem 0.1rem;
  margin-bottom: 0.1rem;
}

.details-main .describe p:nth-child(1) {
  color: #333;
  font-size: 0.13rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom:.05rem;
}

.details-main .describe p:nth-child(2) {
  color: #e75656;
  font-size: 0.12rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}

.details-main .ps1 {
  width: 100%;
  height: 0.42rem;
  box-sizing: border-box;
  padding: 0.1rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.1rem;
}

.details-main .ps1 span:nth-child(1) {
  color: #333;
  font-size: 0.13rem;
}

.details-main .ps1 span:nth-child(2) {
  color: #999;
  font-size: 0.12rem;
}

.details-main .ps1 span:nth-child(2) i {
  margin-left: 0.1rem;
}

.go {
  display: inline-block;
  width: 0.08rem;
  height: 0.08rem;
  transform: rotate(45deg);
  border-right: 1px solid #bbb;
  border-top: 1px solid #bbb;
}

`
