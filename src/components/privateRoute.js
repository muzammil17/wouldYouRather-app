import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, authUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated === true && authUser !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    authUser: state.authUser
  };
};

export default connect(mapStateToProps)(PrivateRoute);
