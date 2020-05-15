import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const handleGetQuestions = () => (dispatch) => {
  return _getQuestions()
    .then((res) => {
      dispatch(getQuestions(res));
    })
    .catch((err) => {
      console.error(err);
    });
};

const saveAnswer = ({ authedUser, qid, answer, authUser }) => ({
  type: SAVE_ANSWER,
  authedUser,
  qid,
  answer,
  authUser,
});

export const handleSaveAnswer = (answer) => (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(saveAnswer({ ...answer, authUser }));
  return _saveQuestionAnswer(answer).catch((err) => {
    console.log(err);
  });
};

const saveQuestion = (question) => ({
  type: SAVE_QUESTION,
  question,
});

export const handleSaveQuestion = (question) => (dispatch) => {
  return _saveQuestion(question)
    .then((res) => {
      dispatch(saveQuestion(res));
    })
    .catch((err) => {
      console.log(err);
    });
};
