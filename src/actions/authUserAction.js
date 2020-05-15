import { _getUsers } from "../_DATA";

export const GET_AUTHUSER = "GET_AUTHUSER";
export const USER_LOGOUT = "USER_LOGOUT";

const authUser = (user) => {
  return {
    type: GET_AUTHUSER,
    user,
  };
};

export const handleGetAuthUser = (user) => (dispatch) => {
  return _getUsers()
    .then((res) => {
      //  console.log(res)
      let AuthUser;
      Object.keys(res).filter((one) => {
        if (res[one].name === user) {
          AuthUser = res[one];
        }
        return null;
      });
      //  console.log(AuthUser)
      dispatch(authUser(AuthUser));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
