import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
// import {axios} from "axios";
import UserProfile from "./components/userprofile";
import HomepageLayout from "./components/homepageLayout";
import Login from './components/login';
import SignUpPage from './components/signup-page';
import CarsCollection from './components/cars-collection';
import ls from 'local-storage';

const carsApi = "http://localhost:3000/cars"

class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedInStatus: false ,
          username: '', 
        password: '',
        image: '',
        currentUser: {},
        cars: [],
        userCars: [],
        redirect: false  
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleSignSubmit = this.handleSignSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  componentDidMount(){
    fetch(carsApi)
    .then(res => res.json())
    .then(cars => {
      const updatedCars = cars.map(car => {
        car.added = false
        return car })
        this.setState({cars: updatedCars})
    })
  }

  handleLogout = (e) => {
    this.setState({
      loggedInStatus: false,
      currentUser: {},
      redirect: true
    });
    ls.remove('jwt')
    ls.remove('username')
    ls.remove('image')

    return <Redirect to="/" />
  }

  handleLogin(data) {
    console.log(data)
    this.setState({
      loggedInStatus: true,
      currentUser: data.user
    });
    ls.set('jwt', data.jwt)
    ls.set('username', data.user.username)
    ls.set('image', data.user.image)
  }

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

  handleSignIChange = (e) => {
    this.setState({
    image: e.target.value
    })       
  }

  handleSignSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({user:{username: this.state.username, password: this.state.password, image: this.state.image}})
        })
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => {
          this.handleLogin(data)
          alert('SignUp Successful')
          this.props.history.push("/userprofile")
        })
  }

  handleLoginUChange = (e) => {
    this.setState({username: e.target.value }) 
    // ls.set('username', this.state.username)
  }

  handleLoginPChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({ user: {username: this.state.username, password: this.state.password}})
      })
     .then(res => res.json())
    //  .then(console.log)
     .then(data => {
        if (
          this.state.loggedInStatus === false
        ) {
          alert('Login Successful')
          this.handleLogin(data)
          this.props.history.push("/userprofile")
        } else
        alert('Username or Password Incorrect')
        return data.message
  
      })
      .catch(error => {
        console.log("check login error", error);
      },
      );   
  }

  addCar = (id) => {
    const newUserCar = this.state.cars.map(car => {
      if(car.id === id){
        car.added = true
        return car
      } else {
        return car
      }
    })
    this.setState({userCars: newUserCar})
    ls.set('userCars', newUserCar)

  }

  removeCar = (id) => {
    console.log(id, 'remove car')
    const updatesUser = this.state.userCars.map(car => {
      if (car.id === id){
        car.added = false
        return car
      } else
      return car
    })
    this.setState({userCars: updatesUser})
    ls.remove('userCars')
    ls.set('userCars', updatesUser)
  }


  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={HomepageLayout}/>
          <Route exact path="/login" render={() => (<Login user={this.state.username} 
          handleLoginUChange={this.handleLoginUChange} handleLoginPChange={this.handleLoginPChange} handleLoginSubmit={this.handleLoginSubmit}/>)} />
          <Route exact path="/signup" render={() => (<SignUpPage handleSignIChange={this.handleSignIChange} handleSignUChange={this.handleSignUChange} handleSignPChange={this.handleSignPChange} handleSignSubmit={this.handleSignSubmit} username={this.state.username} password={this.state.password}/>)}/>
          <Route exact path="/userprofile" render={() => (<UserProfile logoutBtn={this.handleLogout} removeCar={this.removeCar} user={this.state.currentUser}/>)}/>
          <Route exact path="/cars" render={() => ( <CarsCollection addCar={this.addCar} user={this.state.currentUser} loginStatus={this.state.loggedInStatus} cars={this.state.cars}/>)}/>
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);