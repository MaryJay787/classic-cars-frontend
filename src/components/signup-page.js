import React from 'react';
import { Button, Form, Segment, Container, Grid, Header, Divider } from 'semantic-ui-react';

class SignUpPage extends React.Component{

    render(){
        return(
            <Segment padded='very'>
                <Header content=" Create Your Classic Cars Account!"  textAlign='center'/>
                <Divider/>
                <Container textAlign="center">
                    <Grid centered>
                        <Form onSubmit={this.props.handleSignSubmit} >  
                            <Form.Field required>
                            <label>Profile Picture</label>
                            <input placeholder='Image Url' name='image' onChange={this.props.handleSignIChange} />
                            </Form.Field>
                            <Form.Field required>
                            <label>Your UserName</label>
                            <input placeholder='Username' name='username' onChange={this.props.handleSignUChange} />
                            </Form.Field>
                            <Form.Field required>
                            <label>Your Password</label>
                            <input placeholder='Password' name='password' onChange={this.props.handleSignPChange} />
                            </Form.Field>
                            <Button type='submit' content="Submit"/>
                        </Form>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}

export default SignUpPage