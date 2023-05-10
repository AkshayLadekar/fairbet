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
}
// setTodoList:(data)=>{
//     return {
//         type:constant.set_todo_list,
//         data:data
//     }
// }
}