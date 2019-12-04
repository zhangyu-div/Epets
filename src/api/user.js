import http from "utils/request";
export const mineApi =()=>http.get({
    url:"v3/user/UserCenter.html",
    data:{
        version: 420,
        system: 'wap',
        isWeb: 1,
        distinct_id:'16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',
    }
})
