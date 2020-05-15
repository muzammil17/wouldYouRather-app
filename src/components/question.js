import React from "react";

const Question = ({ question, users, handleSubmit, handleChange }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card mt-3">
              <div className="card-header">
                <img
                  src={users ? users[question.author].avatarURL : null}
                  className="rounded-circle"
                  height="75px"
                  width="75px"
                  alt="user"
                />
                <span className="ml-2">
                  {users ? users[question.author].name : null}
                </span>
              </div>
              <div className="card-body">
                <h3>Would You Rather ?</h3>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input
                        type="radio"
                        aria-label="Radio button for following text input"
                        id="optionOne"
                        name="vote"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <span
                    className="form-control"
                    aria-label="Text input with radio button"
                  >
                    {question.optionOne.text}
                  </span>
                </div>
                <div className="input-group mt-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input
                        type="radio"
                        aria-label="Radio button for following text input"
                        id="optionTwo"
                        name="vote"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <span
                    className="form-control"
                    aria-label="Text input with radio button"
                  >
                    {question.optionTwo.text}
                  </span>
                </div>
                <button
                  className="btn btn-dark w-50 mx-auto d-block mt-3"
                  onClick={handleSubmit}
                >
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
