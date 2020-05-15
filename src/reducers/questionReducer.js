import { GET_QUESTIONS, SAVE_ANSWER, SAVE_QUESTION } from "../actions/questionActions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case SAVE_ANSWER:
      let { authedUser, qid, answer } = action;

      return {
        ...state,
        [`${qid}`]: {
          ...state[qid],
          [`${answer}`]: {
            ...state[qid][answer],
            votes : state[qid][answer].votes.concat(authedUser)
          }
        }
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id] : action.question
      }

    default:
      return state;
  }
};

export default questions;
