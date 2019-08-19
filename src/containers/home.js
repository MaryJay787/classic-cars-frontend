import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
        <div>
            <Link to="/cars"><h2>See Cars Collection</h2></Link>
            <Link to="/login"><h2>Login</h2></Link>
            <Link to="/signup"><h2>SignUp</h2></Link>

        </div>

        )
    }
}

export default Home