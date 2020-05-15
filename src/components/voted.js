import React from "react";

const Voted = (props) => {
  const { users, authUser, question, optionOne, optionTwo, totalVotes } = props;
  console.log(authUser);
  let voted = authUser.answers[question.id];
  console.log(voted);
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
                <h5 className="text-center mt-3">Votes</h5>
                <div className="mt-3">
                  <span className="float-left">Total Votes</span>
                  <span
                    className="float-right rounded-circle px-2 py-1"
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    {totalVotes}
                  </span>
                </div>{" "}
                <br />
                <div className="mt-3">
                  <span className="float-left">
                    {question.optionOne.text}
                    {voted === "optionOne" ? (
                      <i className="fas fa-check-circle text-success ml-2"></i>
                    ) : null}
                  </span>
                  <div className="float-right">
                    <span className="mr-2">
                      {Math.floor((optionOne / totalVotes) * 100)}%
                    </span>
                    <span
                      className="rounded-circle px-2 py-1"
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      {optionOne}
                    </span>
                  </div>
                </div>{" "}
                <br />
                <div className="mt-3">
                  <span className="float-left">
                    {question.optionTwo.text}{" "}
                    {voted === "optionTwo" ? (
                      <i className="fas fa-check-circle text-success ml-2"></i>
                    ) : null}
                  </span>
                  <div className="float-right">
                    <span className="mr-2">
                      {Math.floor((optionTwo / totalVotes) * 100)}%
                    </span>
                    <span
                      className="rounded-circle px-2 py-1"
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      {optionTwo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                You voted :{" "}
                <span style={{ fontWeight: "bold" }}>
                  {question[authUser.answers[question.id]].text}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voted;
