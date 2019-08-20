import React from 'react';
import { Link } from 'react-router-dom'
import CarCard from '../containers/car-card'
import { Header, Segment, Container, Grid, Divider, Button } from 'semantic-ui-react'


class CarsCollection extends React.Component {
  render(){
      return(
          <div>
            <Segment>
            <Header as='h1' textAlign='center' >Classic Car Collection</Header>
            <Link to="/login"><Button content="Login"/></Link>
            <Link to="/userprofile"><Button content="View Profile"/></Link>

            </Segment>
            <Segment>
                <Container>
                    <Grid centered>
                     {this.props.cars.map((car, idx) => <CarCard addCar={this.props.addCar} user={this.props.user} loginStatus={this.props.loginStatus} key={idx} car={car}/> )}
                      <Divider hidden/>
                    </Grid>
                </Container>
            </Segment>
        </div>
        
      )
  }
}

export default CarsCollection