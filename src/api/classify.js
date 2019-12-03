// import http from "utils/request";
// export const categorysApi =(pet_type="dog",version=358,system="wap",isWeb=1,distinct_id='16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',_=1575183221879)=>http.get({
//     url:"v3/goods/category/main.html",
//     data:{
//         pet_type: pet_type,
//         version: version,
//         system: system,
//         isWeb: isWeb,
//         distinct_id:distinct_id,
//         _: _
//     }
// })



import http from "utils/requests";

export const categorysApi=()=>http({
    method:"get",
    url:"v3/goods/category/main.html?pet_type=dog&version=358&system=wap&isWeb=1&distinct_id=16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c&_=1575183221879",
    // data:{

    // }
})


export const handlerightApi=(cateid=88888)=>http({
    method:"get",
    url:"v3/goods/category/main.html",
    data:{
        do: 'getChildren',
        owner: cateid,
        pet_type: 'dog',
        issite: true,
        version: 358,
        system: 'wap',
        isWeb: 1,
        distinct_id:' 16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',
        _: 1575248639674,
    }
})


