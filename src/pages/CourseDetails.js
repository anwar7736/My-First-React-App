import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import CourseDetail from '../components/CourseDetails/CourseDetails';
import Footer from '../components/Footer/Footer';

class CourseDetails extends Component{
	render(){
		return(
				<Fragment>
					 <TopNavigation title="Course Details"/>
				     <PageTop/>
				     <CourseDetail/>
				     <Footer/>
				</Fragment>
			);
	}
}
export default CourseDetails;