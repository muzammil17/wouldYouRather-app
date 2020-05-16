import { USER_LOGIN } from "../actions/authenticationAction";
import { USER_LOGOUT } from "../actions/authUserAction";

function isAuthenticated (state=false, action) {
  switch(action.type){
    case USER_LOGIN:
      return true
    case USER_LOGOUT:
      return false
    default:
      return state
  }
}

export default isAuthenticated