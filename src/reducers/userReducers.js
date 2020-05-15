import { GET_USERS } from "../actions/userAction";
import { SAVE_ANSWER, SAVE_QUESTION } from "../actions/questionActions";

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWER:
      let { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],

          answers: {
            ...state[authedUser].answers,
            [`${qid}`]: answer,
          },
        },
      };

    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat(
            action.question.id
          ),
        },
      };
    default:
      return state;
  }
};

export default users;
