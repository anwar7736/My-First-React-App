import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';
class About extends Component{
	render(){
		return(
				<Fragment>
					 <TopNavigation title="About"/>
				     <PageTop pageTitle="About Me"/>
				     <AboutDescription/>
				     <Footer/>
				</Fragment>
			);
	}
}
export default About;