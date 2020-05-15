import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = ({ question, users }) => {
  return (
    <Link to={`/question/${question.id}`} className="questionCard">
      <div className="card mb-2">
        <div className="card-header">
          {/* <img
                          src={users[question.author].avatarURL}
                          className="rounded-circle"
                          height="75px"
                          width="75px"
                        /> */}
          <span className="ml-2">{users[question.author].name}</span>
        </div>
        <div className="card-body">
          <h2>Would You Rather ?</h2>
          <div>
            <span>{question.optionOne.text} || </span>
            <span>{question.optionTwo.text}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
