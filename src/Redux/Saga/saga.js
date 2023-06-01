import {takeEvery,put} from "redux-saga/effects"
import constant from "../constant";
import axios from 'axios';
function* getStateList(){
    var data=yield axios.get('http://3.1.242.135/api/auth/getStateList')
    yield put({type:constant.set_state_list,data})
}

function* saga(){
yield takeEvery(constant.get_state_list,getStateList)
}
export default saga;