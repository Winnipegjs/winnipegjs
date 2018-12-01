import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom' ;

class Forum extends Component{
    render(){
        return (
            <div>
                <h1>Forum</h1>
                <Link to="/resources">Resources</Link>
            </div>
        );
    }
}

export default withRouter(Forum);