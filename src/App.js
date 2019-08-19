import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import userprofile from "./components/userprofile";
import HomepageLayout from "./components/homepageLayout";
import Login from './components/Login'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/login", { withCredentials: true })
      .then(response => {
        if (
          response.data.login &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "login",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "login")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  render() {
    return (
      <div className="app">
      <Login />
      <BrowserRouter>
      <Switch>
        <Route exact path ="/" render={props => (
         <HomepageLayout {...props} handleLogin={this.handleLogin}
           handleLogout={this.handleLogout}
           loggedInStatus={this.state.loggedInStatus}
          />
          )}
        />
        <Route exact path={"/userprofile"} render={props => (
         <userprofile {...props} loggedInStatus={this.state.loggedInStatus}
        />
         )}
        />
     </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
