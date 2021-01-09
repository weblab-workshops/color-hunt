import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Login-body">
        <div className="Login-title">The coolest game ever</div>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={this.props.handleLogin}
          onFailure={(err) => console.log(err)}
          theme="dark"
        />
      </div>
    );
  }
}

export default Login;
