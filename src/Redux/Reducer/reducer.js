import constant from "../constant"
export const selectState=(data=[],action)=>{
    switch (action.type) {
        case constant.set_state_list:
            return [action.data.data]
        default:
            return data
    }


}