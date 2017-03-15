var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

import Main from '../components/main.jsx'
import Plans from '../components/plans.jsx'

module.exports = (

  <div>

  <Route path='/' component={Main}/>

   <Route path='Profile' component={Plans} />
   
   </div>

);

