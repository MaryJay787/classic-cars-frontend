import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class SignUpPage extends React.Component{

    render(){
        return(
                <Form onSubmit={this.props.handleSignSubmit}>  
                    <Form.Field>
                    <label>username</label>
                    <input placeholder='Username' name='username' onChange={this.props.handleSignUChange} />
                    </Form.Field>
                    <Form.Field>
                    <label>password</label>
                    <input placeholder='Password' name='password' onChange={this.props.handleSignPChange} />
                    </Form.Field>
                    <Button type='submit' content="Submit"/>
                </Form>
        )
    }
}

export default SignUpPage