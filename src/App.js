import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Homepage from './components/homepage/Homepage';
import Footer from './components/layout/Footer';

const defaultRoutes = [{
  path: '/ShakaSwimwear',
  component: Homepage
}]

class App extends Component {
  render() {
    const routeComponents = defaultRoutes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <Router>
        <Header />
          <React.Fragment>
            <Switch>
              {routeComponents}
            </Switch>
          </React.Fragment>
        <Footer />
      </Router>
    )
  }
}

export default App;
