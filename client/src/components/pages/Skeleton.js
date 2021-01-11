import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";
import Login from "./Login";
import Game from "./Game";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return <>{this.props.userId ? <Game /> : <Login handleLogin={this.props.handleLogin} />}</>;
  }
}

export default Skeleton;
