import React from 'react';
import CarCard from '../containers/car-card'
import { Header, Segment, Container, Grid, Divider } from 'semantic-ui-react'


class CarsCollection extends React.Component {
   

  render(){
      return(
          <div>
            <Segment>
            <Header as='h1' textAlign='center' >Classic Car Collection</Header>
            </Segment>
            <Segment>
                <Container>
                    <Grid centered>
                     {this.props.cars.map((car, idx) => <CarCard key={idx} car={car}/> )}
                      <Divider/>
                    </Grid>
                </Container>
            </Segment>
        </div>
        
      )
  }
}

export default CarsCollection