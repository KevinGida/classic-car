"use client";
import React from "react";
import CarList from "./components/CarList";
import LogIn from "./components/LogIn";
import { login, setAuthToken } from "./utils/fetch";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { componentToShow: "login" };
    this.setState = { componentToShow: "login" };
    this.onLogin = this.onLogin.bind(this);
  }

  carList = () => {
    this.setState({ componentToShow: "carList" });
  };

  logout = () => {
    this.setState({ componentToShow: "login" });
  };

  onLogin = (e, username, password) => {
    e.preventDefault();
    const response = login(username, password);
    if (response) {
      this.carList();
      setAuthToken(response.data.token);
    } else {
      this.setState({ componentToShow: "login" });
    }
  };

  render() {
    return (
      <div>
        <h1>hello</h1>
        <h2>{}a</h2>
        {this.setState.componentToShow == "login" && (
          <LogIn onLogin={(e) => this.onLogin(e)} />
        )}
        {this.setState.componentToShow == "carList" && <CarList />}
      </div>
    );
  }
}
