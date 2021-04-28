import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import PrivacySection from '../components/PrivacyDescription/PrivacySection';
import Footer from '../components/Footer/Footer';

class Privacy extends Component{
		componentDidMount(){
		window.scroll(0,0);
	}
	render(){
		return(
				<Fragment>
					 <TopNavigation title="Privacy Policy"/>
				     <PageTop pageTitle="Privacy Policy"/>
				     <PrivacySection/>
				     <Footer/>
				</Fragment>
			);
	}
}
export default Privacy;