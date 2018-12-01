import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom' ;

class Events extends Component{
    render(){
        return (
            <div>
                <h1>Event</h1>
                <Link to="/forum">Forum</Link>
            </div>
        );
    }
}

export default withRouter(Events);