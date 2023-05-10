import {takeEvery,put} from "redux-saga/effects"
import constant from "../constant";
import axios from 'axios';
function* getProducts(){
    var data=yield axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log("================>",data.data)
    yield put({type:constant.set_todo_list,data})
}

function* saga(){
yield takeEvery(constant.add_to_cart,getProducts)
}
export default saga;