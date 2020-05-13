import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'
import Footer from './Footer'
import App from "./../App";

function Routes() {
  return (
  <BrowserRouter>
  <Switch> 
    <Route exact path='/' component={App}/>
    <Route exact path='/#home' component={Header}/>
    <Route exact path='/#about' component={About}/>
    <Route exact path='/#resume' component={Resume}/>
    <Route exact path='/#projects' component={Projects}/>
    <Route exact path='/#footer' component={Footer}/>
  </Switch>
  </BrowserRouter>
  );
}
export default Routes;