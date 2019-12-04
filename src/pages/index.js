//路由的懒加载
import Loadable from "react-loadable";
import Loading from "common/loading";



export const Selected = Loadable({
    loader:()=>import("./selected"),
    loading:Loading
})

export const Detail = Loadable({
    loader:()=>import("./detail"),
    loading:Loading
})

export const Grouppet= Loadable({
    loader:()=>import("./group"),
    loading:Loading
})









export const Cart = Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})







export const Classify = Loadable({
    loader:()=>import("./classify"),
    loading:Loading
})

export const Classifytabone = Loadable({
    loader:()=>import("components/classifytab/tabone"),
    loading:Loading
})
export const Classifytabtwo = Loadable({
    loader:()=>import("components/classifytab/tabtwo"),
    loading:Loading
})







export const Meng = Loadable({
    loader:()=>import("./meng"),
    loading:Loading
})



export const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})



export const Goodlist = Loadable({
    loader:()=>import("./goodlist"),
    loading:Loading
})


export const Videodetail = Loadable({
    loader:()=>import("./videodetail"),
    loading:Loading
})

export const Search = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})

export const Goodsdetail = Loadable({
    loader:()=>import("./goodsdetail"),
    loading:Loading
})


