import http from "utils/requests";
export const mineApi =()=>http({
    url:"v3/user/UserCenter.html",
    data:{
        version: 420,
        system: 'wap',
        isWeb: 1,
        distinct_id:'16eac309c55139-085f566e985e4f-67e1b3f-1327104-16eac309c5635c',
    }
})


export const registerApi =(username,password)=>http({
    url:"/users/register",
    method:"post",
    data:{
       username:username,
       password:password
    }
})




export const loginApi =(username,password)=>http({
    url:"/users/login",
    method:'post',
    data:{
       username:username,
       password:password,
    }
})






