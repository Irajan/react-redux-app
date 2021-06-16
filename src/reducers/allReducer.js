import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const allReducer = combineReducers({
  logged: loginReducer,
});

export default allReducer;
