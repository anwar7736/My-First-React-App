import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';

class Courses extends Component{
	render(){
		return(
				<Fragment>
					<TopNavigation/>
			        <PageTop pageTitle="All Courses"/>
			        <AllCourses/>
			        <Footer/>
				</Fragment>
			);
	}
}
export default Courses;