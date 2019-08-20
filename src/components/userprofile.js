import React from 'react';
import { Header, Card, Image, Container } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'


export default class UserProfile extends React.Component{
    render (){
        return (
            <div>
            <container>
           
            <div class="ui secondary pointing menu">
            <a class="active item">
              Home
            </a>
            <a class="item">
              View My Car Colliections
            </a>
            <a class="item">
              Add Cars 
            </a>
            <div class="right menu">
              <a class="ui item">
                Logout
              </a>
            </div>
          </div>
          <h1>Flatiron Classic Cars</h1>
          <div class="ui segment">
            <p></p>
            <div class="ui card">
            <div class="image">
              <img src="/images/avatar2/large/kristy.png"/>
            </div>
            <div class="content">
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">Joined in 2013</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div class="extra content">
              <a>
              <i class="car icon"></i>
                Number of User Cards 
              </a>
            </div>
          </div>
           </div> 
            </container>
            <container>
             <Header>Kristy Cars Collections</Header>
             <p>Input User Cars Collection in this Container</p>
           </container>
          </div> //end of div
         
        
        )
    }

}





            

