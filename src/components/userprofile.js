import React from 'react';
import { Header, Card, Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'


export default class UserProfile extends React.Component{
    render (){
        return (
            <div>
            <Header as='h2' textAlign='center'>User Profile</Header>
            <Card centered size='large'>
                <Image src='https://cdn.dealeraccelerate.com/rkm/1/6969/440191/790x1024/1967-pontiac-gto' wrapped ui={false} />
                <Card.Content>
                <Card.Header>{this.props.user.username}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
               
            </Card>
            <Button animated >
            <Button.Content visible>My Car Collection</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow right' />
            </Button.Content>
            </Button>
            <Button animated='vertical' floated='right'>
            <Button.Content hidden> <Icon name='shop' /></Button.Content>
            <Button.Content visible>
                Flatiron Car Collection
            </Button.Content>
            </Button>
            <Button animated='fade'>
            <Button.Content visible>Edit Profile</Button.Content>
            <Button.Content hidden> <Icon name='arrow right' /></Button.Content>
            </Button>
            </div>
        )
    }

}

