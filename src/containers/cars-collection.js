import React from 'react';
import CarCard from '../components/car-card'
import { Grid} from 'semantic-ui-react'


class CarsCollection extends React.Component {
   

  render(){
      return(
         <Grid columns={3} divided>
            {this.props.cars.map(car => <CarCard car={car}/> )}
        </Grid>
        
      )
  }
}

export default CarsCollection

