import React from "react";
import "./login.css";
import Cookies from "js-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };

    const isAuthenticated = !!Cookies.get("token");
    if (isAuthenticated) {
      props.history.push("/dashboard");
    }
  }

  handleEmail = (e) => {
    this.setState({ ...this.state, email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ ...this.state, password: e.target.value });
  };

  handleLogin = async (e) => {
    e.preventDefault();
    console.log("state", this.state);

    //hit the login api

    const res = await fetch(
      "https://webmaster-fake-api.herokuapp.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }
    );

    const result = await res.json();
    console.log("result", result);

    if (result.status != 401) {
      //if access token -> cookie & redirect user to dashboard
      Cookies.set("token", result.access_token);
      this.props.history.push("/dashboard");
    }
    if (result.status == 401) {
      //if error -> set state error
      this.setState({ ...this.state, error: "Invalid username and password." });
    }
  };

  render() {
    const isActive = true;
    return (
      <div
        style={{
          border: "1px solid #c7c7c7",
          width: "500px",
          padding: "20px",
          margin: "auto",
        }}
      >
        <p>{this.state.error}</p>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="input-style"
            onChange={this.handleEmail}
            value={this.state.email}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            className="input-style"
            onChange={this.handlePassword}
            value={this.state.password}
          />

          <button style={{ backgroundColor: "tomato" }} id="login-button">
            Login
          </button>

          {/* <button className="login-button">Forgot password</button> */}
        </form>
      </div>
    );
  }
}

export default Login;
