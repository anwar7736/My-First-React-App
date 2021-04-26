import React, {Component, Fragment} from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Courses from '../pages/Courses';
import NotFound from '../pages/NotFound';
import {Route, Switch} from 'react-router-dom';

class Router extends Component{
	render(){
		return(
				<Fragment>
					  <Switch>
			                <Route exact path="/" component={Home}/>
			                <Route exact path="/about" component={About}/>
			                <Route exact path="/contact" component={Contact}/>
			                <Route exact path="/services" component={Services}/>
			                <Route exact path="/portfolio" component={Portfolio}/>
			                <Route exact path="/courses" component={Courses}/>
			                <Route component={NotFound}/>
		              </Switch>
				</Fragment>
			);
	}
}
export default Router;