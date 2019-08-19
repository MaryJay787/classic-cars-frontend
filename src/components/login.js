import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

export default class LoginForm extends React.Component{
 
    constructor() {
      super();
      this.state = {
        username: '',
        password: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this)
      // this.handleLogin = this.handleLogin.bind(this);
      // this.handleLogout = this.handleLogout.bind(this);
    }
    // handleLogout() {
    //   this.setState({
    //     loggedInStatus: "NOT_LOGGED_IN",
    //     user: {}
    //   });
    // }
  
    // handleLogin(data) {
    //   this.setState({
    //     loggedInStatus: "LOGGED_IN",
    //     user: data.user
    //   });
    // }
  
    componentDidMount() {
      this.checkLoginStatus();
    }

    checkLoginStatus() {
      // axios
        fetch("http://localhost:3001/login", { withCredentials: true })
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
  
   
  
  

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.username, this.state.password)
    console.log( 'login clicked')
    //find user by id
     fetch(`http://localhost:3000/user/`)
     .then(res => res.json())
     .then()
      
  }
  
  
  render(){
     return (

      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
            </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                    <Segment stacked>
                    <Form.Input onChange={this.handleChange} fluid icon='user' iconPosition='left' placeholder='Username' name="username" required />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    name ="password"
                    placeholder='Password'
                    type='password'
                    onChange={this.handleChange}
                  />
                  <Button color='teal' fluid size='large'>
                  Login
                  </Button>
                 </Segment>
             </Form>
            <Message>
           New to us? Sign Up
          </Message>
   </Grid.Column>
  </Grid>
    );
  }
}
