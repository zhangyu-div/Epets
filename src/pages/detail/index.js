import React from "react";

import "./styled";

import { Page } from "./styled";

class Detail extends React.Component {
  render() {
    return (
      <Page>
        <div className="box">
          {/* 头部 */}
          <div className="headerBox"></div>


            {/* 轮播图 */}
            <div className="slideshow ">
                <img src="https://img2.epetbar.com/goods/sales/upload_file_2019387508.jpg?x-oss-process=style/fill&$1=500&$2=500" alt=""/>
            </div>
        
            {/* 时间 */}
            <div className="price">
                <div className="priceInfo">
                    <div className="clearfit">
                        <div className="ftl">
                            <span className="ftl_span1">¥ <span className="ftl_span2">24</span>.00</span>
                            <del>¥68.00</del>
                        </div>
                        <p>时间仅剩</p>
                    </div>
                    <div className="clearfib">
                        <p>2人拼</p>
                        <div className="ftb">
                            <em>0天</em>
                            <span>13</span>
                            :
                            <span>48</span>
                            :
                            <span>10</span>
                        </div>
                    </div>
                </div>
            </div>
        
        
            {/* content */}
            <div className="content">
                <div className="contbox">
                  <p>雷米高 雷滴净香茅驱虫滴剂  0.5ml*3支</p>
                  <p>雷米高 雷滴净香茅驱虫滴剂  0.5ml*3支</p>
                      <ul>
                        <li>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUVGQ0JFOUVBRjc1MTFFOUFBOEREMkQ5QjhDN0E2QzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUVGQ0JFOUZBRjc1MTFFOUFBOEREMkQ5QjhDN0E2QzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RUZDQkU5Q0FGNzUxMUU5QUE4REQyRDlCOEM3QTZDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RUZDQkU5REFGNzUxMUU5QUE4REQyRDlCOEM3QTZDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkXaTD4AAANRSURBVHjarJdpSFVREMffu2iIL9tILDCToMjCjKigrMysbKEPQUW0fGjhVRZikBAEfiui+mBCG7QQLR+kXSgDK7NNI6QoaS97aWVRkCJRgq//wP/K4XDO9b5XA78P79yZM+fOzJk7LxgOhwM+JQ3kgnlgCsjgegQ8ANXgHmjzs5nTy/MgmAmawA7QCraBHNCf5HCtlTrPaROM17G8USMYAcaDYtAA2kG3otfNtQbqjKNNoxIV346Xg6NgGjgOugL+pYs2YnuKe/lyXMpTF4LOQPwitvk8QKn+MEH7vRQMY8h0kfUhYDBIIZLHDob6B/gEPmpp2AL2gWWg0uQ4g0r5BqeiVwM2sop/gT98lgiSQSq4CiaC34YoyrN62vc4lpNXgala4biSBfaCW72EdyfIBo+09ShYAu6zUKNujvPAfktOQ+AYOOkjr+fBQdqYcl5OXz1vfIAnUWU+i2wFmGWpbLFJAt/Ba+oUgAtMzTNwTdE/DR6DsQnsSDWGjcV4JNjDUJlECmsAOAIWg59cK+S+77S376KvNAn1dHDWsGkTqzTqEdq3oBas4Z1NV65oG7uZLuJrhsPQvDAoSJj6+LyzH8A6cAn045rYPjXoiq8Ch321w6AgPbdvDA3jGw/QqRTlS0t68hyGx3SF3oNBMXarbKVW5APyxqAjvtK9PhIt7FSxiJqaVEbA+pFoYffRRYojMwan4uiy8ns4+GLz6fAjnmxQkIpe4NNpkE1ml7I2V+vbrkiPv+3wgo8yKEg/HqhUqU0kWmfYldzpI4n5bjfojwY3xHEdWG3ZVOaiQx5OC3jtysBNZb3cY0/phHUOTznHkmcpjjtgk0cDydKqdyV4Yqlo8TFbfLpVXcSTmOQwGAq2G+aoZu0qbgVjPKK0CmxWJ5BaDmwhi0EZm0E1i8P0BbsCvnLgC1h0SqSwVMfSjxdyQrBNhxd5YnG+nmGTj8xabraBRWar+nNgkdv71QYSYVjTe2mLuSwouYYPwSswCXz2sNsNTrjTh2nmqvJ5b+s54viZ2ytYpJWxDPT/IiGOSnc5NnlOmf9DElkLJcxpJJ6/MK40MmST2ckcbY8UPqtg/ps5FkVsG/p94wnKn7YiFlOmcpdlerzOKbPYz4Z/BRgArUjA4BTMWxQAAAAASUVORK5CYII=" alt=""/>
                          正品保证
                        </li>
                        <li>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEVGMjlCMDVBRjc2MTFFOUFBMzI5OUM2NEQ5QzRBODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEVGMjlCMDZBRjc2MTFFOUFBMzI5OUM2NEQ5QzRBODUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RUYyOUIwM0FGNzYxMUU5QUEzMjk5QzY0RDlDNEE4NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RUYyOUIwNEFGNzYxMUU5QUEzMjk5QzY0RDlDNEE4NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqwC3ecAAALsSURBVHjatJdZaBRBEIZnh43KxkTJgwEJ8UAQhBgjHoiyUQMeiG8qKur7RvBAffGERUG8kCiCEBAUF1GJiFcExQPiBSqoQSQPyro+GH0Q44EGov8P/4SmmZ0Zd8eCj9ntru6arq6q7klkMhknotSC2WARmAXq1Z4HD0En6AIfo0zmhvQnwFzQDXaAD2ALaAQjRKPaCtLp1phEqYa5omdgAmgCG8Bj0AcGDL0BtT2RzhQwTmPr/9XwStAO5uj524ku/eCUxp7WXJEMbwOTwULw3SldOHY+mKk5Aw0vB2PAdvDHKV+4DZtBNVhhdiStPeUeNTvxy25wHTxSFgyumBF4GSy2AseWYeCCvBEE9/kcqNQ4ti2TjYRpOA2Og28hb34I3NKEQYwEL8EVa8+Peh71XH1CKRMkFWCtYuBHBPeeBXuttpzSrIErHgXuFkkZ9k8CR+SNneBLGXvdL4/VunLzGZ/V7ZF7OlUc6L5jMQQaV52m4Rbw2sdNDLSpci0D5aeq0pAyDb+hTVd1tc8nn1fphcx83gVGl2mYW9bM4KorkkKmQZa/sToQ4igqdWYehyk7Cq5CHBUlqYmSirhi8kDEIVxswdUhnoowoDJAL2VUqTAZDu7R8A0wMaRwUKcHfAJZqz+r9h7pVYQYpq3bNHwfrAtQ3KorDaO5CswTKeN3lfq7pB8kq2nT1R2pxXrTp0aF4v2qwwiynP6/0jNnBF+Hzl8vbZ77eG8BbXpR3ao38WSaYfgkOAxqlFJZuWu8nlm110ivXeM+qwCZsgasNw8J1uoX4BL4ailfU+DwLP0l1/aqr1f/eQoNVbpdDQjOTap+g4ZZLJbISNrn9nFe+Ald3hDhtnoRLPXmNq8+vBkcUCWLW/brApj3u/o41sEdV7Hg4f/e9pjr/D/hnt5RxTvoVzLjFu+mslF7mi/lE8YT5mMbmKFi4VpzVKuvTcH2VtGbDzokokiT8dHGnJ+u3KW8kztvgn26IofKXwEGAOqlrRRbozglAAAAAElFTkSuQmCC" alt=""/>
                          全场包邮
                        </li>
                        <li>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTJEODg2RDdBRjc2MTFFOTk4NjdGM0I2OUI0NzhDOTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTJEODg2RDhBRjc2MTFFOTk4NjdGM0I2OUI0NzhDOTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMkQ4ODZENUFGNzYxMUU5OTg2N0YzQjY5QjQ3OEM5OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMkQ4ODZENkFGNzYxMUU5OTg2N0YzQjY5QjQ3OEM5OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pttik5kAAALTSURBVHjatJdbSFRRFIbPHGcoGrSXwjAdpSCkIM2h6J6RWlC9lYSUYMSQFjEPClEQgQVREBFEPVg9lD6oSCRRQWJGFxSSHoqiJ5WshIg0Su0y9i/4Bzabcx1PCz7m7LPXPv++rL32nlAikTA8Wi7YAHaAdSDG9yPgBXgAnoExLx8zXepDoBy8ASfBKGgEJWA+KeG7Ufq8ZZtQpsIyokGwFKwCx0A/mAApxS/Fd/30WQmWsG3Mr/A+0AI2guvgl+HdfoMbbHuL3/Ik3MRebwc/jMxN2m5lB5rchPeCAnACzBizN1mGowzMajvhGJ2SPj4ss/KRkb3awU9GXKeueViJ3m6wXgscJysCtZwhaf8SrAWTFr4ye3vAc1Aq5ax4PG4w/N+DAR+jrQD3OOIUf7Mc9rEE3TS34FB6xFfYEz82F0wp5XGQ49LmNngFVphc+EfskR+r5ijTthx88rDVRCtXhDeBNp+iB5kmx5V3DQwyNxOtzTLV28BxG6c8cBjMYTkKqsBFcE7zbQZn+CwJ5w4DTrd3EuFhBtZ3G+EBbpNplv8yLVpFfgen0WBH60Eh6NL8RGuLCOc7bKHF2rotdPCVLfNVKZ+W6LUQlvb5ps+1vavsfTeTrfXF6ZD4ACJG8CZZ7ZSdZpjROU+L0CDsEii2eJ8N+kT9PlgWsGgxj9M/NnU9IvwEHAhY+Dy4alNXI5omc2tlgOu8gKn0m0VdhDl+zFSyTo2F45RWLuBedrJGm6AS2w+OqOfxYzaIao6HmDxmeNwl+SzH4Gc+q0gu/snspFuU7fvU81ga7QTtYJdy+2glVslikY/pl452gt3pb6sJRBL8NWayoE3y+k31ENGzUHfAgjKwy2CYs+n5Qj8bkzXtBU/BBb0y/B8EI4zeJNd0JJO/MGkb5JSt4fXG1L6RzTrxec1TqdTpYuB1xGXKn7YGntFFrBvi7fEhOMvz2tX+CTAAZByjiq6QOOgAAAAASUVORK5CYII=" alt=""/>
                          好评率95% >
                        </li>
                      </ul> 
                </div>
            </div>
        
        
            {/* goodsdetail */}
            <div className="goodsdetail">
                <div className="titlewrapper">
                    <ul>
                      <li>商品详情</li>
                      <li>拼团规则</li>
                    </ul>
                </div>
            
                <div className="L-img">
                    <img src="https://img1.epetbar.com/2018-06/20/15/bd7a16822435bd11b5590a448bfea807.jpg@!water" alt=""/>
                </div>
            
            
            </div>
        


              {/* bottoms */}

              <div className="bottoms">
                    <div className="money" href="#">
                      <h3>
                        ¥80.00
                        {/* <span>单独购买</span> */}
                      </h3>
                      
                    </div>
                  <div className="booking">发起拼团</div>
              </div>
        </div>
      </Page>
    );
  }
}

export default Detail;
