import React from 'react';
import { Link } from 'react-router-dom'
import CarCard from '../containers/car-card'
import { Header, Segment, Container, Grid, Divider, Button } from 'semantic-ui-react'


class CarsCollection extends React.Component {
   constructor(){
       super()
       this.state={
        loggedInStatus: false,
        currentUser: []
       }
   }

    componentDidMount() {
      this.checkLoginStatus();
    }

    checkLoginStatus() {
        fetch("http://localhost:3001/login", { withCredentials: true })
        .then(response => {
           if (
          this.state.loggedInStatus === false
        ) {
          this.setState({
            loggedInStatus: true,
            currentUser: response.user
          });
          this.props.history.push("/userprofile")

        } else if (
          (this.state.loggedInStatus === true)
        ) {
          this.setState({
            loggedInStatus: false
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
        });
    }

  render(){
      return(
          <div>
            <Segment>
            <Header as='h1' textAlign='center' >Classic Car Collection</Header>
            <Link to="/login">{this.state.loggedInStatus ? <Button content="Login"/> : null}</Link>
            </Segment>
            <Segment>
                <Container>
                    <Grid centered>
                     {this.props.cars.map((car, idx) => <CarCard key={idx} car={car}/> )}
                      <Divider hidden/>
                    </Grid>
                </Container>
            </Segment>
        </div>
        
      )
  }
}

export default CarsCollection