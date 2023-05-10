import constant from "../constant"
export const cartData=(data=[],action)=>{
    switch (action.type) {
        case constant.add_to_cart:
            console.log("action called",action.data)
            return [action.data,...data]
        case constant.romove_from_cart:
            console.log("action called remove 2",action.data)
            data.length=data.length?data.length=data.length-1:[]
            return [...data]
        case constant.set_todo_list:
            console.log("reducer called for saga remove 2",action.data)
            return [...action.data.data]
        default:
            return data
    }


}