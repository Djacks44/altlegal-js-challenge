var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

import SearchRecipe from '../components/new.jsx'
import Plans from '../components/plans.jsx'

module.exports = (

  <div>

  <Route path='/' component={SearchRecipe}/>

   <Route path='Profile' component={Plans} />
   
   </div>

);

