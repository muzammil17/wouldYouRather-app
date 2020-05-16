import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetUser } from "../actions/userAction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./login";
import DashBoard from "./dashBoard";
import Navbar from "./navbar";
import Polling from "./polling";
import AddQuestion from "./addQuestion";
import LeaderBoard from "./leaderBoard";
import Page404 from "./page404";
import PrivateRoute from "./privateRoute";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUser());
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/dashboard" component={DashBoard} />
          <PrivateRoute path="/add" component={AddQuestion} />
          <PrivateRoute path="/question/:questionId" component={Polling} />
          <PrivateRoute path="/leaderboard" component={LeaderBoard} />
          <PrivateRoute component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
