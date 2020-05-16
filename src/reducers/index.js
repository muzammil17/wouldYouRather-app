import { combineReducers } from "redux";

import authReducer from "./authUserReducer";
import userReducer from "./userReducers";
import questionReducer from "./questionReducer";
import isAuthenticated from "./authenticationReducer";

export default combineReducers({
  authUser: authReducer,
  users: userReducer,
  questions: questionReducer,
  isAuthenticated,
});
