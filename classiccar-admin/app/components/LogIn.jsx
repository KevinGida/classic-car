"use client";
import React from "react";
import login from "../style/login.module.css";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      onLogin: props.onLogin,
    };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    this.state.onLogin(e, this.state.username, this.state.password);
  };

  render() {
    return (
      <div className={login.container}>
        <form onSubmit={this.submitHandler}>
          <input
            type="username"
            name="username"
            placeholder="Username"
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.changeHandler}
          />{" "}
          <button type="submit" value="submit" className="button submit">
            <span>Submit</span>
          </button>
        </form>
      </div>
    );
  }
}
