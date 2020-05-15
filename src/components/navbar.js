import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../actions/authUserAction";

const Navbar = (props) => {
  function handleOnClick() {
    props.dispatch(handleLogout());
  }
  const { authUser } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse container"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/add">
              Add New
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/leaderboard">
              Leadorboard
            </Link>
          </li>
        </ul>
        {props.authUser !== null ? (
          <div className="ml-auto navbar-text">
            <span className="mr-4" style={{ color: "white" }}>
              {authUser.name + " "}
            </span>

            <span style={{ color: "white" }} onClick={handleOnClick}>
              logout
            </span>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
  };
};

export default connect(mapStateToProps)(Navbar);
