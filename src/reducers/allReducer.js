import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import errorReducer from "./errorReducer";
import editReducer from "./editReducer";

const allReducer = combineReducers({
  logged: loginReducer,
  errorOccured: errorReducer,
  edited: editReducer,
});

export default allReducer;
