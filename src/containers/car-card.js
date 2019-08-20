import React from 'react';
import { Card, Image, Divider } from 'semantic-ui-react'

class CarCard extends React.Component{
    render(){
        return(
            <div>
            <Card>
                <Image src={this.props.car.image} circular size="medium" />
                <Card.Content>
                <Card.Header>{this.props.car.make} {this.props.car.model}</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description>
                </Card.Content>
            </Card>
            <Divider hidden/>
            </div>
        )
    }
}

export default CarCard 