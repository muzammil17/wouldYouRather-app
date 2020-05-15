import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetAuthUser } from "../actions/authUserAction";
import { Redirect } from "react-router-dom";
import udactiy from "../images/udacity.png";

class Login extends Component {
  state = {
    userName: "",
  };

  handleChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleGetAuthUser(this.state.userName));
  };

  render() {
    const { users } = this.props;
    if (this.props.authUser !== null) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container">
        {/* <select onChange={this.handleChange}>

        </select>
        <button onClick={this.handleSubmit}>Submit</button> */}
        <div className="col-sm-6 offset-sm-3 my-5 py-5">
          <img src={udactiy} height="100px" className="mx-auto d-block mb-5" alt="udacity" />

          <h2 className="text-center">Would You Rather :)</h2>

          <div>
            <div className="input-group mb-3">
              <select className="custom-select" id="inputGroupSelect02" onChange={this.handleChange}>
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
              <button type="button" onClick={this.handleSubmit} className="btn btn-dark w-50 mx-auto d-block">
                Submit
              </button>
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
  };
};

export default connect(mapStateToProps)(Login);
