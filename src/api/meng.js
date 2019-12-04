import http from "utils/request";
export const tuijianApi =(pet_type="dog")=>http.get({
    url:"v3/content/opgc/Index.html",
    data:{
        do: 'GetList',
        param: 0,
        page: 1,
        pet_type:pet_type,
        system:'wap',
        isWeb: 1,
        version: 303,
        distinct_id: '16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',
    }
})



export const cepingApi =(pet_type="dog")=>http.get({
    url:"v3/content/opgc/Index.html",
    data:{
        do:'GetList',
        param: 1,
        page: 1,
        pet_type: pet_type,
        system: 'wap',
        isWeb: 1,
        version: 303,
        distinct_id: '16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',
    }
})



export const videoApi =(pet_type="dog")=>http.get({
    url:"v3/content/opgc/Index.html",
    data:{
        do:'GetList',
        param: 4,
        page: 1,
        pet_type:pet_type,
        system: 'wap',
        isWeb: 1,
        version: 303,
        distinct_id: '16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',
    }
})

export const videodetailApi =(id)=>http.get({
    url:"v3/content/Experience.html",
    data:{
        do:'VideoDetail',
        id:id,
        isWeb: 1,
        system: 'wap',
        version: 303,
        distinct_id: '16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c'
    }
})





