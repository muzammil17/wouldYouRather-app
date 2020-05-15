import { _getUsers } from "../_DATA";

export const GET_USERS = "GET_USERS";

const getUsers = (users) => ({
  type: GET_USERS,
  users,
});

export const handleGetUser = () => (dispatch) => {
  return _getUsers()
    .then((res) => {
      dispatch(getUsers(res));
    })
    .catch((err) => {
      console.log(err);
    });
};
