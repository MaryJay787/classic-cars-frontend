import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import {axios} from "axios";
import UserProfile from "./components/userprofile";
import HomepageLayout from "./components/homepageLayout";
import Login from './components/login'
import SignUpPage from './components/signup-page'
// import CarsCollection from './components/cars-collection'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedInStatus: false ,
          username: '', 
        password: '',
        currentUser: {}
      
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);

    this.handleSignSubmit = this.handleSignSubmit.bind(this)


  }

  // handleLogout() {
  //   this.setState({
  //     loggedInStatus: false,
  //     user: {}
  //   });
  // }

  // handleLogin(data) {
  //   this.setState({
  //     loggedInStatus: true,
  //     user: data.user
  //   });
  // }

  handleSignUChange = (e) => {
    this.setState({
     username: e.target.value
    })       
}

handleSignPChange = (e) => {
  this.setState({
   password: e.target.value
  })       
}

  handleSignSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({user:{username: this.state.username, password: this.state.password}})
        })
        .then(res => res.json())
        .then(data => this.setState({currentUser: data.user, loggedInStatus: true}))
        // .then(data => this.props.history.push('/userprofile'))
}

 
  
    // componentDidMount() {
    //   this.checkLoginStatus();
    // }

    // checkLoginStatus() {
    //     fetch("http://localhost:3001/login", { withCredentials: true })
    //     .then(response => {
    //       if (
    //         response.data.login &&
    //         this.state.loggedInStatus === false
    //       ) {
    //         this.setState({
    //           loggedInStatus: true,
    //           user: response.data.user
    //         });
    //       } else if (
    //         !response.data.logged_in &
    //         (this.state.loggedInStatus === true)
    //       ) {
    //         this.setState({
    //           loggedInStatus: false,
    //           user: {}
    //         });
    //       }
    //     })
    //     .catch(error => {
    //       console.log("check login error", error);
    //     });
    // }
  
  

  handleLoginUChange = (e) => {

    this.setState({username: e.target.value }) 
  }

  handleLoginPChange = (e) => {

    this.setState({password: e.target.value})
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log( this.state, 'login clicked')
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({ user: {username: this.state.username, password: this.state.password}})
      })
     .then(res => res.json())
     .then(response => {
        if (
          this.state.loggedInStatus === false
        ) {
          this.setState({
            loggedInStatus: true
          });
          this.props.history.push('/userprofile', response)
        } else if (
          (this.state.loggedInStatus === true)
        ) {
          this.setState({
            loggedInStatus: false
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });   
  }

  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path="/" render={HomepageLayout}/>
        <Route exact path="/login" render={() => (<Login user={this.state.username} 
        handleLoginUChange={this.handleLoginUChange} handleLoginPChange={this.handleLoginPChange} handleLoginSubmit={this.handleLoginSubmit}/>)} />
        <Route exact path="/signup" render={() => (<SignUpPage handleSignUChange={this.handleSignUChange} handleSignPChange={this.handleSignPChange} handleSignSubmit={this.handleSignSubmit} username={this.state.username} password={this.state.password}/>)}/>
        <Route exact path="/userprofile" render={() => (<UserProfile user={this.state.username}/>)}/>
        {/* <Route exact path="/cars" component={CarsCollection}/> */}

        
     </Switch>
     {this.state.loggedInStatus ? <UserProfile user={this.state.username}/> : null}
      </div>
    );
  }
}
