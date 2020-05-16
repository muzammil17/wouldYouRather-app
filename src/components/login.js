import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetAuthUser } from "../actions/authUserAction";
import { Redirect } from "react-router-dom";
import udactiy from "../images/udacity.png";
import { handleLogin } from "../actions/authenticationAction";

class Login extends Component {
  state = {
    userName: "",
    redirectToReferer: false,
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleSubmit = (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    this.props.dispatch(handleGetAuthUser(this.state.userName));

    this.props.dispatch(
      handleLogin(this.setState({ redirectToReferer: true }))
    );
  };

  render() {
    const { users, isAuthenticated, authUser } = this.props;
    const { from } = this.props.location.state || {
      from: { pathname: "/dashboard" },
    };
    if (this.state.redirectToReferer) {
      return <Redirect to={from} />;
    }

    if (authUser !== null && isAuthenticated) return <Redirect to={from} />;
    return (
      <div className="container">
        <div className="col-sm-6 offset-sm-3 my-5 py-5">
          <img
            src={udactiy}
            height="100px"
            className="mx-auto d-block mb-5"
            alt="udacity"
          />

          <h2 className="text-center">Would You Rather :)</h2>

          <div>
            <div className="input-group mb-3">
              <select
                className="custom-select"
                id="inputGroupSelect02"
                onChange={this.handleChange}
              >
                <option defaultValue>Select Username</option>;
                {users
                  ? Object.keys(users).map((user) => {
                      const { id, name } = users[user];
                      return <option key={id}>{name}</option>;
                    })
                  : null}
              </select>
            </div>
            <div>
              {!this.state.loading ? (
                <button
                  type="button"
                  onClick={this.handleSubmit}
                  className="btn btn-dark w-50 mx-auto d-block"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-dark w-50 mx-auto d-block"
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Loading...</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    authUser: state.authUser,
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Login);
