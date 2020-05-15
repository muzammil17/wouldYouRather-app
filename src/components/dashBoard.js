import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetQuestions } from "../actions/questionActions";
import { Redirect } from "react-router-dom";

import QuestionCard from "./questionCard";

class DashBoard extends Component {
  state = {
    tab1: true,
    tab2: false,
  };
  componentDidMount() {
    this.props.dispatch(handleGetQuestions());
  }
  handleChangeTab2 = () => {
    this.setState({ tab1: false, tab2: true });
  };
  handleChangeTab1 = () => {
    this.setState({ tab1: true, tab2: false });
  };
  render() {
    const { answeredQuestions, unansweredQuestions, users } = this.props;

    if (this.props.authUser === null) return <Redirect to="/" />;
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div
            className="w-100 mt-4"
            style={{ marginLeft: "50%", transform: "translateX(-20%)" }}
          >
            <button
              className="btn btn-dark mr-2"
              disabled={this.state.tab1}
              onClick={this.handleChangeTab1}
            >
              Unanswered Questions
            </button>

            <button
              className="btn btn-dark mr-2"
              disabled={this.state.tab2}
              onClick={this.handleChangeTab2}
            >
              Answered Questions
            </button>
          </div>

          {/* main content */}

          {this.state.tab1 === true ? (
            <div className="mt-3">
              {unansweredQuestions.length !== 0 ? (
                unansweredQuestions.map((question) => (
                  <QuestionCard
                    question={question}
                    users={users}
                    key={question.id}
                  />
                ))
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          ) : (
            <div className="mt-3">
              {answeredQuestions.length !== 0 ? (
                answeredQuestions.map((question) => (
                  <QuestionCard
                    question={question}
                    users={users}
                    key={question.id}
                  />
                ))
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { authUser, questions, users } = state;
  let answeredQuestions = [];

  if (authUser) {
    Object.keys(authUser.answers).map((id) => {
      Object.keys(questions).map((ques) => {
        if (ques === id) {
          answeredQuestions.push(questions[ques]);
          return null;
        }
        return null;
      });
      return null;
    });
  }

  let bc = Object.values(questions);
  let unansweredQuestions = [];
  answeredQuestions.map((id) => {
    bc.map((ques, i) => {
      if (ques.id === id.id) {
        delete bc[i];
      }
      return null;
    });
    return null;
  });

  unansweredQuestions = bc;
  answeredQuestions = Array.from(answeredQuestions).sort(
    (a, b) => b.timestamp - a.timestamp
  );
  unansweredQuestions = Array.from(unansweredQuestions).sort(
    (a, b) => b.timestamp - a.timestamp
  );
  unansweredQuestions = unansweredQuestions.filter((a) => a !== undefined);

  return {
    authUser,
    unansweredQuestions,
    answeredQuestions,
    users,
  };
};

export default connect(mapStateToProps)(DashBoard);
