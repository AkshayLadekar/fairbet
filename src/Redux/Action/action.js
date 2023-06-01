import constant from "../constant"



// eslint-disable-next-line import/no-anonymous-default-export
export default
{ 
    addToCart:(data)=>{
    console.log("action called",data)
    return {
        type:constant.add_to_cart,
        data:data
    }
},
removeFromCart:()=>{
    console.log("action called remove action")
    return {
        type:constant.romove_from_cart,
        data:"data removed from cart"
    }
},
getStateList:()=>{
    console.log("action called get state")
    return {
        type:constant.get_state_list,
    }
},
setStateList:(data)=>{
    console.log("action called set state")
    return {
        type:constant.get_state_list,
        data:data
    }
}
}