import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Service from '../components/Services/Services';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
class Services extends Component{
		componentDidMount(){
		window.scroll(0,0);
	}
	render(){
		return(
				<Fragment>
					 <TopNavigation title="Services"/>
				     <PageTop pageTitle="Get My Services"/>
				      <Service/>
				      <ContactSection/>
				     <Footer/>
				</Fragment>
			);
	}
}
export default Services;