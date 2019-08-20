import React from 'react';


export default class UserProfile extends React.Component{
    render (){
        return (
            <div>
                <h2>User Profile Page</h2>
                    <h3>Welcome! {this.props.user.username}</h3>
            </div>
        )
    }

}

