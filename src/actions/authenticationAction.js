export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

const Login = () => {
  return {
    type: USER_LOGIN,
  };
};

const Logout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const handleLogin = (cb) => (dispatch) => {
  dispatch(Login());
  setTimeout(cb, 100);
};

export const handleLogout = (cb) => (dispatch) => {
  dispatch(Logout());
  setTimeout(cb, 100);
};
