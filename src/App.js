import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import {axios} from "axios";
// import userprofile from "./components/userprofile";
import HomepageLayout from "./components/homepageLayout";
import Login from './components/login'
import SignUpPage from './components/signup-page'
// import CarsCollection from './components/cars-collection'

export default class App extends Component {
  
  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path="/" render={HomepageLayout}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUpPage}/>
        {/* <Route exact path="/cars" component={CarsCollection}/> */}

        
     </Switch>
      </div>
    );
  }
}
