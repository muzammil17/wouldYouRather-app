import { GET_AUTHUSER, USER_LOGOUT } from "../actions/authUserAction";
import { SAVE_ANSWER, SAVE_QUESTION } from "../actions/questionActions";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case GET_AUTHUSER:
      return action.user;

    case SAVE_ANSWER :
    let { qid, answer } = action;
      return {
        ...state,
        // questions : state.questions.concat(qid),
        answers :{
          ...state.answers,
          [`${qid}`] : answer
        }
      }
    case SAVE_QUESTION:
      return {
        ...state,
        questions : state.questions.concat(action.question.id),
      }
    case USER_LOGOUT:
      return null
    default:
      return state;
  }
};


export default authReducer