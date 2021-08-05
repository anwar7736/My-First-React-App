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
					  		<Route exact path="/" render={(props)=> <Home {...props} key={ Date.now() } />} />
					  		<Route exact path="/about" render={(props)=> <About {...props} key={ Date.now() } />} />
					  		<Route exact path="/contact" render={(props)=> <Contact {...props} key={ Date.now() } />} />
					  		<Route exact path="/services" render={(props)=> <Services {...props} key={ Date.now() } />} />
					  		<Route exact path="/portfolio" render={(props)=> <Portfolio {...props} key={ Date.now() } />} />
					  		<Route exact path="/courses" render={(props)=> <Courses {...props} key={ Date.now() } />} />
					  		<Route exact path="/refund" render={(props)=> <Refund {...props} key={ Date.now() } />} />
					  		<Route exact path="/terms" render={(props)=> <Terms {...props} key={ Date.now() } />} />
					  		<Route exact path="/privacy" render={(props)=> <Privacy {...props} key={ Date.now() } />} />
					  		<Route exact path="/ProjectDetails/:projectID/:projectName" render={(props)=> <ProjectDetails {...props} key={ Date.now() } />} />
					  		<Route exact path="/CourseDetails/:courseID/:courseName" render={(props)=> <CourseDetails {...props} key={ Date.now() } />} />
					  		<Route exact render={(props)=> <NotFound {...props} key={ Date.now() } />} />
		              </Switch>
				</Fragment>
			);
	}
}
export default Router;