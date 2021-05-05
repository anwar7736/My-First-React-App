import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Footer from '../components/Footer/Footer';

class NotFound extends Component{
		componentDidMount(){
		window.scroll(0,0);
	}
	render(){
		return(
				<Fragment>
					 <TopNavigation title="404 Page Not Found"/>
				     <PageTop />
					 <h1 className="text-center text-danger">404 Page Not Found!</h1>
					 <Footer/>
				</Fragment>
			);
	}
}
export default NotFound;