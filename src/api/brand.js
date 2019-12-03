import http from "utils/request";
export const brandApi =()=>http.get({
    url:"v3/brand/list/main.html",
    data:{
        pet_type: 'dog',
        system: 'wap',
        isWeb: 1,
        version: 303,
        distinct_id:'16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',
        _: 1575268318181
    }
})