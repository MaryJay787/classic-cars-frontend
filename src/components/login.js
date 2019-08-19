import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class LoginForm extends React.Component{
 
  constructor(props) {
     super(props);

     this.state = {

      username: "",
      password: "",
      loginError: "", 
     };

     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit(event) {
    const{username, password} = this.state;
  
    fetch("http://localhost:3000/login",
      {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
        headers: {
           'Content-type' : 'application/json'
      }
      }) .then(response => response.json())
          .then(res => console.log(res))
     
  }
  
  
  render(){
     return (

      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
           <Image src='/logo.png' /> Log-in to your account
            </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                    <Segment stacked>
                    <Form.Input onChange={this.handleChange} fluid icon='user' iconPosition='left' placeholder='Username' name="username" value={this.state.username} required />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    name ="password"
                    value= {this.state.password}
                    placeholder='Password'
                    type='password'
                    onChange={this.handleChange}
                  />
                  <Button onSubmit={this.handleSubmit} color='teal' fluid size='large'>
                  Login
                  </Button>
                 </Segment>
             </Form>
            <Message>
           New to us? <a href='#'>Sign Up</a>
          </Message>
   </Grid.Column>
  </Grid>
    );
  }
}
