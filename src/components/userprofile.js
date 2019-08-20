import React from 'react';
import { Menu, Header, Card, Image, Container, Segment, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CarCard from '../containers/car-card';



export default class UserProfile extends React.Component{
  state = { activeItem: 'profile' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // mapCars(){
  //   return this.props.userCars.map(car => car)
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
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>


          <Header as='h1'>Flatiron Classic Cars</Header>
        <Segment>
          <Card>
          <Image src="https://secureservercdn.net/184.168.47.225/b8a.cee.myftpupload.com/wp-content/uploads/2013/09/Screen-Shot-2013-09-19-at-4.59.44-PM.png"/>
           
          <Card.Content>
            <Card.Header>Kristy</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2013</span>
          </Card.Meta>
          <Card.Description>Kristy is an art director living in New York. </Card.Description>
          </Card.Content>
          <Card.Content extra>
           
            <Icon name='user'/>
              Number of User Cards 
          
          </Card.Content>
          </Card>
        </Segment> 
        </Container>

        <Segment>
        <Header textAlign='center'>Kristy Cars Collections</Header>
        {console.log(this.props.userCars)}
        <Grid centered>
        {this.state.activeItem === 'your car collection' ? this.props.userCars.map(car => <CarCard car={car}/>) : null}
        </Grid>
        </Segment>
        </div> //end of div
         
        
        )
    }

}





            

