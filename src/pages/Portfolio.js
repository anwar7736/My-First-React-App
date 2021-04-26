import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AllProjects from '../components/AllProjects/AllProjects';
import Footer from '../components/Footer/Footer';
class Portfolio extends Component{
	render(){
		return(
				<Fragment>
					 <TopNavigation title="Portfolio"/>
				     <PageTop pageTitle="Portfolio"/>
				     <AllProjects/>
				     <Footer/>
				</Fragment>
			);
	}
}
export default Portfolio;