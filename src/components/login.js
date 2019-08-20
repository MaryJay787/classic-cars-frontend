import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import logo from "../logo.png";
export default class LoginForm extends React.Component{
  
 
  render(){
     return (

      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
          <img className="logo" src={logo} alt="Car Logo" WIDTH="100" HEIGHT="100" />
            Log-in to your account
            </Header>
                <Form size='large' onSubmit={this.props.handleLoginSubmit}>
                    <Segment stacked>
                    <Form.Input onChange={this.props.handleLoginUChange} fluid icon='user' iconPosition='left' placeholder='Username' name="username" required />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    name ="password"
                    placeholder='Password'
                    type='password'
                    onChange={this.props.handleLoginPChange}
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
