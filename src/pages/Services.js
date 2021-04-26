import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Service from '../components/Services/Services';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
class Services extends Component{
	render(){
		return(
				<Fragment>
					 <TopNavigation/>
				     <PageTop pageTitle="Get My Services"/>
				      <Service/>
				      <ContactSection/>
				     <Footer/>
				</Fragment>
			);
	}
}
export default Services;