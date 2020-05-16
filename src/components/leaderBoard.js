import React, { Component } from "react";
import { connect } from "react-redux";

export class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-8 offset-sm-2">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">LeaderBoard</h3>
              </div>
              <div className="card-body">
                <div>
                  <h4>Would You Rather :) </h4>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4 offset-sm-8">
                    <h4 className="float-right">Score</h4>
                  </div>
                </div>
                {users
                  ? users.map((user) => (
                      <div key={user.id}>
                        <div className="row mt-2">
                          <div className="col-sm-2">
                            <img
                              src={user ? user.avatarURL : null}
                              className="rounded-circle"
                              height="75px"
                              width="75px"
                              alt="user"
                            />
                          </div>
                          <div className="col-sm-9">
                            <h4>{user.name}</h4>
                            <p>total questions : <b>{user.totalQuestions}</b></p>
                            <p>
                              total Answers : <b>{user.totalAnswer}</b>
                            </p>
                          </div>
                          <div className="col-sm-1">
                            <h5 className="mt-5">{user.score}</h5>
                          </div>
                        </div>

                        <br />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { users, authUser } = state;
  let newUsers = Object.keys(users).map((user) => {
    let score =
      users[user].questions.length + Object.keys(users[user].answers).length;
    let totalQuestions = users[user].questions.length;
    let totalAnswer = Object.keys(users[user].answers).length;
    return {
      ...users[user],
      score,
      totalQuestions,
      totalAnswer,
    };
  });

  newUsers = Array.from(newUsers).sort((a, b) => b.score - a.score);
  return {
    authUser,
    users: newUsers,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
