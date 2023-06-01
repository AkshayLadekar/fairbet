import { combineReducers } from "redux";
import { selectState } from "./reducer";
export default combineReducers({
  selectState: selectState,
});
