import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom' ;

class Home extends Component{
    render(){
        return (
            <div>
                <h1>Home</h1>
                <Link to="/events">Events</Link>
            </div>
        );
    }
}

export default withRouter(Home);