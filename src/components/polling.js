import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { handleSaveAnswer } from "../actions/questionActions";

import Voted from "./voted";
import Question from "./question";

class Polling extends Component {
  state = {
    voted: false,
    newVote: "",
    optionOne: 0,
    optionTwo: 0,
    totalVotes: 0,
  };
  componentDidMount() {
    const { question, authUser } = this.props;

    let votes = question
      ? question.optionOne.votes.concat(question.optionTwo.votes)
      : null;
    let optionOne = question ? question.optionOne.votes.length : null;
    let optionTwo = question ? question.optionTwo.votes.length : null;
    let totalVotes = optionTwo + optionOne;
    if (votes) {
      if (votes.includes(authUser.id)) {
        this.setState({
          voted: true,
        });
      }
    }

    this.setState({
      optionOne,
      optionTwo,
      totalVotes,
    });
  }

  handleChange = (e) => {
    this.setState({ newVote: e.target.id });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authUser, question, dispatch } = this.props;
    let answer = {
      authedUser: authUser.id,
      qid: question.id,
      answer: this.state.newVote,
    };
    dispatch(handleSaveAnswer(answer));

    this.setState({
      voted: true,
      [`${answer.answer}`]: this.state[`${answer.answer}`] + 1,
      totalVotes: this.state.totalVotes + 1,
    });
  };

  render() {
    const { voted } = this.state;
    const { question, users, authUser } = this.props;
    if (this.props.authUser === null) return <Redirect to="/" />;
    return (
      <div>
        {voted ? (
          <Voted
            {...this.state}
            authUser={authUser}
            users={users}
            question={question}
          />
        ) : (
          <Question
            question={question}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            users={users}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let id = props.match.params.questionId;
  let question = Object.values(state.questions).filter((question) => {
    if (question.id === id) return state.questions[id];

    return null;
  });
  return {
    authUser: state.authUser,
    question: question[0],
    users: state.users,
  };
};

export default connect(mapStateToProps)(Polling);
