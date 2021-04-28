import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import TermsSection from '../components/TermsDescription/TermsSection';
import Footer from '../components/Footer/Footer';

class Terms extends Component{
	render(){
		return(
				<Fragment>
					 <TopNavigation title="Terms & Conditions"/>
				     <PageTop pageTitle="Terms & Conditions"/>
				     <TermsSection/>
				     <Footer/>
				</Fragment>
			);
	}
}
export default Terms;