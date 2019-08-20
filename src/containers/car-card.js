import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, Image, Divider, Button, List } from 'semantic-ui-react'

class CarCard extends React.Component{
    constructor(){
        super()
        this.state = {
            isFlipped: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
   

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
   
  render(){
        return(
            <div>
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <Card key="front" >
                <Image src={this.props.car.image} circular size="medium" />
                <Card.Content>
                <Card.Header>{this.props.car.make} {this.props.car.model}</Card.Header>
                <Card.Meta>Year:{this.props.car.year}</Card.Meta>
                <Card.Description>
                    Engine: {this.props.car.engine}
                </Card.Description>
                
                </Card.Content>
             
                <Button onClick={this.handleClick}>Click to flip</Button>
                <Button content='Add To Collection'/>
             
                <Divider hidden/>
            </Card>

            <Divider hidden/>

            <Card key="back">
            <Card.Content>
                <Card.Header>{this.props.car.make} {this.props.car.model}</Card.Header>
                <Card.Meta> Year:{this.props.car.year}</Card.Meta>
                <List>
                    <List.Item>
                    <List.Header>Engine</List.Header>
                    {this.props.car.engine}
                    </List.Item>
                    <List.Item>
                    <List.Header>Transition</List.Header>
                    {this.props.car.trans}
                    </List.Item>
                    <List.Item>
                    <List.Header>Body Type</List.Header>
                    {this.props.car.body_type}
                    </List.Item>
                    <List.Item>
                    <List.Header>Drive</List.Header>
                    {this.props.car.drive}
                    </List.Item>
                    <List.Item>
                    <List.Header>Color</List.Header>
                    {this.props.car.color}
                    </List.Item>
                    <List.Item>
                    <List.Header>Interior Color</List.Header>
                    {this.props.car.interior_color}
                    </List.Item>
                    <List.Item>
                    <List.Header>Interior</List.Header>
                    {this.props.car.interior}
                    </List.Item>
                </List>
                
                </Card.Content>
                <Button onClick={this.handleClick}>Click to flip</Button>
            </Card>
            </ReactCardFlip>

            </div>
        )
    }
}

export default CarCard 