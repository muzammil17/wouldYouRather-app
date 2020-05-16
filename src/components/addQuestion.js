import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questionActions";

export class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    let data = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: this.props.authUser.id,
    };
    this.props.dispatch(handleSaveQuestion(data));
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2" style={{ marginTop: "100px" }}>
            <h2 className="text-center">Would You Rather :)</h2>
            <form className="mt-4" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="optionOne">Option One</label>
                <input
                  type="text"
                  className="form-control"
                  id="optionOne"
                  onChange={this.handleChange}
                  placeholder="option 1"
                />

                <label htmlFor="optionTwo" className="mt-3">
                  Option Two
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="optionTwo"
                  onChange={this.handleChange}
                  placeholder="option 2"
                />
              </div>

              <button className="btn btn-dark w-50 mx-auto d-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
  };
};

export default connect(mapStateToProps)(AddQuestion);
