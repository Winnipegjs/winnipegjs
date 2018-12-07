import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './css/style.css';
import Home from './screens/Home';
import Forum from './screens/Forum';
import Events from './screens/Events';
import Resources from './screens/Resources';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="body_container">
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/forum" component={Forum} />
            <Route exact path="/resources" component={Resources} />
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
};

export default App;
