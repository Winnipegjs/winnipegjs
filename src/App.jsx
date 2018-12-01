import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './css/style.css'
import Home from './components/Home'
import Forum from './components/Forum';
import Events from './components/Events';
import Resources from './components/Resources';


class App extends Component{

    render(){
     return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/events" component={Events}/>
                <Route exact path="/forum" component={Forum}/>
                <Route exact path="/resources" component={Resources}/>
            </Switch>
        </Router>
     )
    }

}

export default App;