import React from "react";
import "./styleds";
import { Page } from "./styleds";
class Selected extends React.Component {
  // componentDidMount() {
  //     window.addEventListener('scroll', this.handleScroll);

  //   }
  //   handleScroll(e){
  //     var header = document.getElementById('header'); //定义一个dom节点为'header'的header变量
  //       if(window.pageYOffset > 10){  //if语句判断window页面Y方向的位移是否大于或者等于导航栏的height像素值
  //         header.classList.add('header_bg');  //当Y方向位移大于80px时，定义的变量增加一个新的样式'header_bg'
  //       } else {
  //         header.classList.remove('header_bg'); //否则就移除'header_bg'样式
  //       }
  //   }
  render() {
    return (
      <Page>
        {/* 头部 */}
        <div className="header" id="header">
          <div className="heatop">
            <a className="htl">
              <img
                className="htlimg"
                src="data:image/png;base64,iVBORw0KGgoAAAANS
                       UhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEUAAABmZmZmZmZmZmZmZm
                       ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ
                       mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm
                       ZmZmZmZmZmZmZmZmZmZmZmZmZmbXo4A1AAAAKXRSTlMABPz3FQnh2ZPmfnQgsF4kEO
                       vTzMWlZFkovrs0LxupoIhOSkZA7rlsaoBCP64AAAECSURBVCjPdZHXkgIhEEXJDJNzcky
                       rG+7//+AWojLJ83KpOnQ3VJMnxyhRnKshjMkacWZ4wk4r/WXAT10sZdw1HPx37lqGMX73b4B
                       gVscQkhkpR/SeVzjnuTLciSPASFaE0NQVctavpdTo3GuQkA0p6kcmaLdScgibGj3ZMuBqg0Puy
                       MD9hoHuyBAXGwZiR15cZYX7jmyQuu7hjlSYbNygtkMnFNQmVeg28vxaTAuTr9yBscydaI1h2ZiW
                       fqNHg59FbQYufJcC+uad7VXl/moJVH89JbRP7TChUfpaGhUA8A24BYoSOp4tKU0MA1RzIA9bQWVkQT
                       471jAT+YQcoclnG0T/ZkYT5KqIvnAAAAAASUVORK5CYII="
              />
              请输入搜索内容
            </a>
            <a className="htr">
              <img
                className="htrimg"
                src="data:image/png;base64,iVBORw0KGgoAAAAN
                       SUhEUgAAADAAAAAwCAMAAABg3Am1AAAAn1BMVEUAAAD////////
                       /////////////////////////////////////////////////////////
                       //////////////////////////////////////////////////////////
                       /////////////////////////////////////////////////////////////
                       ///////////////////////8Kd3m4AAAANHRSTlMAH7sEwArv/fr0kTMV497ZpCT3
                       5y0SD+vEb2kbyKxEP51/e0y0lWRaKI2MdD3PUzi9sK6JQiNRfQAAAe5JREFUSMfFle
                       mWojAQhS9LwiI7goiAtu3WanfPct//2WbGUUZwIb+mvz/k3HNzUkWqKvgC4nL9LZAW
                       pW8uyvGQe/QWsIPvjp7Ym4LkJJo2cQbkWlNGPsni9YF9bJJyPeofOSHNe6cYS5uTg8AN
                       Yjqh/WL0Zc+k5ea4i9hbLLyutgvoz/GQo88g7vzKlNUMT/AKplc7ZiF1gacInaHX5luxE
                       hhAVNQv6yWDDIPMUk5xQkusORR4ZaKdFhEjFX9r1GxbG7K2ocQAXEZQZME3AClHUGTEiYF
                       PBlAm5BxLrq+i1B1dAx4KLl9Qc4sWnaQJPBS2/IH36xQckjbwUBgzhGSmfkJGCRLqORi0YN
                       OAMgZtpPSUvG1IIQdnTzfpFT9u9OnuFH+JPlvWeKHbl0s6Sy87SJ53dC9uzrAv5zVPfM/vlY
                       Zxr/ialZSr5n7xwaWrXt57ADvLyRUbyLbiv9d/UG3Rxen7QRNqQ8DRztfntKLSmEGiUk7infpl
                       qXKCMBl6bWzVoN+r6LdlXnM55J9fj/uxZc+e23PXovmvCVZ0n9v7T1bCdrPYFEXvh326kjQ7Le
                       Pz51ETEONNnZDBnw2zOIeRxc00SkmavWd3Y/GCZW7Fb8VL2OLvb2v5uCj8hDKMynPyRh1I2jLQ1
                       5sd/j+/AMOpN25qtOyTAAAAAElFTkSuQmCC"
              />
            </a>
          </div>
          <div className="heabon">
            <ul className="hb">
              <li className="hbli">
                <span className="hbspan">精选</span>
              </li>
              <li className="hbli">进口狗粮</li>
              <li className="hbli">国产狗粮</li>
              <li className="hbli">内外驱虫</li>
              <li className="hbli">
                <img
                  className="hbimg"
                  src="https://img2.epetbar.com/2019-10/12/11/297925c78a7887a43c14420332d70f5b.png"
                />
              </li>
              <li className="hbli">五官护理</li>
              <li className="hbli">外出用品</li>
            </ul>
          </div>
        </div>

        {/* 内容区  */}
        <div className="content">
          <div className="mould">
            <div className="rela">
              <img
                className="relaimg"
                src="https://img2.epetbar.com/nowater/2019-11/28/10/8d81fab270d8ba64a18929fe1e9a0d2a.jpg?x-oss-process=style/water"
              />
            </div>
            <div className="menus">
              <ul className="menusul">
                <li className="menusli">
                  <img
                    className="menusimg"
                    src="https://img2.epetbar.com/2019-11/15/23/e172686fcd97b548ebfcb62c694f2801.png@!water"
                  />
                </li>
                <li className="menusli">
                  <img
                    className="menusimg"
                    src="https://img2.epetbar.com/2019-11/15/23/3fe5bbce73f303015077ed7a827de61c.png@!water"
                  />
                </li>
                <li className="menusli">
                  <img
                    className="menusimg"
                    src="https://img2.epetbar.com/2019-11/18/11/2fc10590dceefa9e3db0b32cdc5292fd.gif"
                  />
                </li>
                <li className="menusli">
                  <img
                    className="menusimg"
                    src="https://img2.epetbar.com/2019-11/18/11/0c37c313f2d988dad4173881cd02a988.png@!water"
                  />
                </li>
                <li className="menusli">
                  <img
                    className="menusimg"
                    src="https://img2.epetbar.com/2019-11/16/00/1ec58c7b09ad2baa80e57609d87b6244.png@!water"
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* 203 */}
          <div className="mould_203">
            <a>
              <img
                className="mould_203_img1"
                src="https://img2.epetbar.com/2019-11/12/16/96737a4e9141f4cf31d455412b077a3d.jpg?x-oss-process=style/water"
              />
            </a>
            <a>
              <img
                className="mould_203_img2"
                src="https://img2.epetbar.com/2019-11/11/15/20dca16cc75000fee0f3366f15556013.jpg?x-oss-process=style/water"
              />
            </a>
          </div>

          {/* 204 */}
          <div className="mould_204">
            <div className="mould_204_l">
              <img
                className="mould_204_img1"
                src="https://img2.epetbar.com/2019-11/22/18/2ba78e8d92c409e749941ba6d59c0be5.gif?x-oss-process=style/water"
              />
            </div>

            <div className="mould_204_r">
              <img
                className="mould_204_img2"
                src="https://img2.epetbar.com/2019-11/12/16/2c615b5be6a1efb33b0dc183d4fc9031.jpg?x-oss-process=style/water"
              />
              <img
                className="mould_204_img2"
                src="https://img2.epetbar.com/2019-11/12/16/32276bd49a0aa387cbd47f24270246ff.jpg?x-oss-process=style/water"
              />
              <img
                className="mould_204_img2"
                src="https://img2.epetbar.com/2019-11/12/16/0ae69af8893b47819ca64ddff4b0a430.jpg?x-oss-process=style/water"
              />
            </div>
          </div>

          {/* 205 */}
          <div className="mould_205">
            <a>
              {" "}
              <img
                className="mould_205_img"
                src="https://img2.epetbar.com/2019-11/13/00/2fe511e37fd09462deae2091dbb0e6b4.gif?x-oss-process=style/water"
              />
            </a>
          </div>
          {/* 206 */}
          <div className="mould_206">
            <div className="daily">
              <div className="daily_l">
                <div className="daily_l_t">
                  <img
                    className="dailyimg1"
                    src="https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_mark_415.png?version=03"
                  />
                  <div className="daily_l_t_ftc">
                    <div className="ftcdiv1">
                      {" "}
                      <span className="ftcspan1">14点场</span>
                    </div>

                    <div className="ftcdiv2">
                      {" "}
                      <span className="ftcspan2">正在疯抢</span>
                    </div>
                  </div>
                </div>


                <div className="daily_l_b">
                  <ul>
                    <li>
                      <a>
                        <img src="https://img1.epetbar.com/2018-05/15/13/1d01f2eade3570ad8b4e9556f148ff90.jpg?x-oss-process=style/fill&$1=200&$2=200" />
                        <p className="dailyP1">
                          ¥<span>9.30</span>
                        </p>
                        <p className="dailyP2">
                          <span>¥93.00</span>
                        </p>
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src="https://img1.epetbar.com/2018-05/15/13/1d01f2eade3570ad8b4e9556f148ff90.jpg?x-oss-process=style/fill&$1=200&$2=200" />
                        <p className="dailyP1">
                          ¥<span>9.30</span>
                        </p>
                        <p className="dailyP2">
                          <span>¥93.00</span>
                        </p>
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>


              <div className="daily_r">
                <div className="dr">
                  <p className="p0">
                    <img src="https://static.epetbar.com/static_wap/appmall/main/index_icon_egroup_415.png?version=03" />
                  </p>
                </div>   
                <div className="daily_l_b">
                  <ul>
                    <li>
                      <a>
                        <img src="https://img1.epetbar.com/common/upload/commonfile/2019/010/08/152811_670383.jpg?x-oss-process=style/fill&$1=200&$2=200" />
                        <p className="dailyP1">
                          ¥<span>19.90</span>
                        </p>
                        <p className="dailyP2">
                          <span>¥35.00</span>
                        </p>
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src="https://img1.epetbar.com/goods/sales/upload_file_2019388851.jpg?x-oss-process=style/fill&$1=200&$2=200" />
                        <p className="dailyP1">
                          ¥<span>24.00</span>
                        </p>
                        <p className="dailyP2">
                          <span>¥68.00</span>
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


            {/* 207 */}
            <div className="mould_207">
                <div className="m_207_img">
                    <a href="#">
                        <img src="https://img2.epetbar.com/2019-11/18/13/a548e0c63cd15bb23a4e4b8ca4e87349.jpg?x-oss-process=style/water" alt=""/>
                    </a>
                </div>
            </div>
          
          {/* 208 */}
          
          <div className="mould_208">
                <div className="imgflex">
                    <a className="flex_a1" href="#">
                        <img src="https://img2.epetbar.com/2019-11/12/18/a713be41aa19f483389c55cfe85be801.jpg?x-oss-process=style/water" alt=""/>
                        <img src="https://img2.epetbar.com/2019-11/13/16/3ee697db0e5d4dd406764eaa4e356594.jpg?x-oss-process=style/water" alt=""/>
                    </a>
                </div>

                <div className="imgflexr">
                    <a href="#">
                        <img src="https://img2.epetbar.com/2019-11/18/13/f52fb9f835ac1bb1895b4146620080cd.jpg?x-oss-process=style/water" alt=""/>
                        <img src="https://img2.epetbar.com/2019-11/12/18/558e3de3961888c7bc256f6d0bf6a592.jpg?x-oss-process=style/water" alt=""/>
                    </a>
                    <a href="#">
                        <img src="https://img2.epetbar.com/2019-11/12/18/f5993e04f9ef6217122888e482d841a6.jpg?x-oss-process=style/water" alt=""/>
                        <img src="https://img2.epetbar.com/2019-11/12/18/4e12991db8d888427c57cb46393a3de6.jpg?x-oss-process=style/water" alt=""/>
                    </a>
                    <a href="#">
                        <img src="https://img2.epetbar.com/2019-11/12/18/3dac62b03f5688b2c94a99cee9ef1e0e.jpg?x-oss-process=style/water" alt=""/>
                        <img src="https://img2.epetbar.com/2019-11/12/18/5b49b59b62ed5c0c1c7c73a1c01dbd21.jpg?x-oss-process=style/water" alt=""/>
                    </a>
                </div>
          </div>


          {/* 209 */}
          <div className="mould_209">
                <a href="#">
                    <img src="https://img2.epetbar.com/2019-09/25/11/908e62d71e648b19b2017a0344323d96.gif?x-oss-process=style/water" alt=""/>
                </a>
          </div>
          
            {/* 210 */}
          <div className="mould_210">
                <img src="https://img2.epetbar.com/nowater/2018-10/18/20/3fbb022a3225b959f51312c47f378016.png" alt=""/>
          </div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
        </div>
      </Page>
    );
  }
}

export default Selected;
