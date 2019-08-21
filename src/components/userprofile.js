import React from 'react';
import { Menu, Header, Card, Image, Container, Segment, Icon, Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CarCard from '../containers/car-card';
import ls from 'local-storage';




export default class UserProfile extends React.Component{
  state = { activeItem: 'profile',
              addBtnToggle: false }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name, addBtnToggle: !this.state.addBtnToggle })
  
  mapCars(){
    const cars = ls.get('userCars')
    return cars.filter(car => car.added)
  }
  componentDidMount(){
    this.checkLoginStatus();

  }
  // user(){
  //   const username  = ls.get('currentUser')
  //   const name = ls.get('username')
  //   console.log(username)
  // }

  checkLoginStatus(){
    // console.log(this.props.user)
    fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({ user: {username: this.props.user.username, password: this.props.user.password}})
      })
    .then(res => res.json())
    .then(console.log)}
  //   .then(response => {
  //     if (this.state.loggedInStatus === false) 
  //     {
  //       this.setState({
  //         loggedInStatus: true,
  //         currentUser: response.user
  //       });
  //     } else if (
  //       (this.state.loggedInStatus === true)
  //     ) {
  //       this.setState({
  //         loggedInStatus: false
  //       });
  //     }
  //   })
  //   .catch(error => {
  //     console.log("check login error", error);
  //   },
  //   );   
  // }
    
  render (){
      const { activeItem } = this.state
        return (
        <div>
        <Container>
        <Menu pointing secondary>
          <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
          <Menu.Item
            name='your car collection'
            active={activeItem === 'your car collection'}
            onClick={this.handleItemClick}
          />
          <Link to="/cars"><Menu.Item
            name='add car'
            active={activeItem === 'add car'}
            onClick={this.handleItemClick}
          /></Link>
          <Menu.Menu position='right'>
            <Link to="/"><Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.props.logoutBtn}
            /></Link>
          </Menu.Menu>
        </Menu>


          <Header as='h1'>Flatiron Classic Cars</Header>
        <Segment>
          <Card>
          <Image src={this.props.user.image}/>
           
          <Card.Content>
            <Card.Header>{this.props.user.username}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2013</span>
          </Card.Meta>
          <Card.Description>{this.props.user.username} is an art director living in New York. </Card.Description>
          </Card.Content>
          <Card.Content extra>
           
            <Icon name='user'/>
              Number of User Cards 
          
          </Card.Content>
          </Card>
        </Segment> 
        </Container>

        <Segment>
          <Header textAlign='center'>{this.props.user.username} Cars Collections</Header>
          <Divider hidden/>
          <Container>
            <Grid centered>
            {this.state.activeItem === 'your car collection' ? this.mapCars().map(car => <CarCard removeCar={this.props.removeCar} addBtnToggle={this.state.addBtnToggle} car={car}/>) : null}
            </Grid>
            </Container>
        </Segment>
        </div> //end of div
         
        
        )
    }

}





            

