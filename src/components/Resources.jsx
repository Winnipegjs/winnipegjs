import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom' ;

class Resources extends Component{
    render(){
        return (
            <div>
                <h1>Resources</h1>
                <Link to="/home">Home</Link>
            </div>
        );
    }
}

export default withRouter(Resources);