import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class SignUpPage extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            image: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e, 'submit clicked')
        console.log(this.state, 'submitted')
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
              'Content-type' : 'application/json'
            },
            body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(userData => userData.jwt)
    }
    

    render(){
        return(
                <Form onSubmit={this.handleSubmit}>  
                <Form.Field >
                    <label>Image</label>
                    <input placeholder='Picture Url' name='image' onChange={this.handleInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>username</label>
                    <input placeholder='Username' name='username' onChange={this.handleInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>password</label>
                    <input placeholder='Password' name='password' onChange={this.handleInput} />
                    </Form.Field>
                    <Button type='submit' content="Submit"/>
                </Form>
        )
    }
}

export default SignUpPage