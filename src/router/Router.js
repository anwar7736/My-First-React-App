import React, {Component, Fragment} from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Courses from '../pages/Courses';
import Refund from '../pages/Refund';
import Terms from '../pages/Terms';
import Privacy from '../pages/Privacy';
import ProjectDetails from '../pages/ProjectDetails';
import CourseDetails from '../pages/CourseDetails';
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
			                <Route exact path="/refund" component={Refund}/>
			                <Route exact path="/terms" component={Terms}/>
			                <Route exact path="/privacy" component={Privacy}/>
			                <Route exact path="/projects/1/details" component={ProjectDetails}/>
			                <Route exact path="/courses/1/details" component={CourseDetails}/>
			                <Route component={NotFound}/>
		              </Switch>
				</Fragment>
			);
	}
}
export default Router;