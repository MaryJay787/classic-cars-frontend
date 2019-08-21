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
    this.checkLoginStatus()
  }
  
  checkLoginStatus(){
    // console.log(this.props.user)
    const jwt = ls.get('jwt')
    console.log(jwt)
    fetch("http://localhost:3000/profile", {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then(res => res.json())
    .then(console.log)}
    
  render (){
      const { activeItem } = this.state
      const username = ls.get('username')
      const image = ls.get('image')
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
          <Image src={image}/>
           
          <Card.Content>
            <Card.Header>{username}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2013</span>
          </Card.Meta>
          <Card.Description>{username} is an art director living in New York. </Card.Description>
          </Card.Content>
          <Card.Content extra>
           
            <Icon name='user'/>
              Number of User Cards 
          
          </Card.Content>
          </Card>
        </Segment> 
        </Container>

        <Segment>
          <Header textAlign='center'>{username} Cars Collections</Header>
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





            

