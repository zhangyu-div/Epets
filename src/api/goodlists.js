import http from "utils/request";
export const goodlistsApi =(cateid=521,page=1,orderby="def_desc",dd="")=>http.get({
    url:"v3/goods/list/main.html",
    data:{
        version: 358,
        brandid: 0,
        page: page,
        orderby: orderby,
        cateid: cateid,
        pet_type: 'dog',
        extend_pam:'keyword:'+dd,
        real_wid:'' ,
        region:'' ,
        system: 'wap',
        isWeb: 1,
        distinct_id: '16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',
        _: 1575282735456,
    }
})

export const goodsdetailsApi =(gid=100188)=>http.get({
    url:"v3/goods/detail/main.html",
    data:{
        gid:gid,
        extend_pam:'buytype:|tid:0',
        version: 410,
        system: 'wap',
        isWeb: 1,
        distinct_id:' 16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',
        _: 1575426538887
    }
})


