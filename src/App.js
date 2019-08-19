import React from 'react';
import './App.css';
import { Header, Segment } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import CarsCollection from './containers/cars-collection';
import LoginSignUp from './containers/login-signup';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './containers/home'


const cars = "http://localhost:3000/cars"

class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      cars: [],
      startIdx: 0,
      loginClick: false
   }
  }
  


  componentDidMount(){
    fetch(cars)
    .then(res => res.json())
    .then(data => this.setState({ cars: data}))
  }
  
  handleLoginClick = (e) => {
    console.log('loging clicked')
    this.setState({ loginClick: !this.state.loginClick })
  }


  render() {

    return (
      <div>
        <Header as='h1' floated textAlign='center' color='blue' >Classic Cars</Header>
          
          <Link to="/login"><Button floated="right" basic color='blue'> Login / SignUp </Button></Link>

        <Switch>
         <Route exact path='/login' component={LoginSignUp} />
         <Route exact path='/' component={Home}/>
         </Switch>

         <Segment>
         <CarsCollection cars={this.state.cars}/>
         </Segment>
      </div>
    )
  }
}

export default App;
