import {TuijianAsyncAction} from "actions/meng/mengCreators";

// export const mapStateToProps=(state)=>({
//     brandlist:state.brand.brandlist
// })

// export const mapDispatchToProps=(dispatch)=>({
//     brandAsyncData(){
//         dispatch(brandAsyncAction())
//     }
// })




export const mapStateToProps=(state)=>({
        tuijianlists:state.meng.tuijianlists
})

export const mapDispatchToProps=(dispatch)=>({
    tuijianData(pet_type,page){
        dispatch(TuijianAsyncAction(pet_type,page))
    }
})


