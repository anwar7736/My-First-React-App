import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetail from '../components/ProjectDetails/ProjectDetails';
import Footer from '../components/Footer/Footer';
class ProjectDetails extends Component{
		componentDidMount(){
		window.scroll(0,0);
	}
	render(){
		return(
				<Fragment>
					 <TopNavigation title="Project Details"/>
				     <PageTop pageTitle="Project Details"/>
				     <ProjectDetail/>
				     <Footer/>
				</Fragment>
			);
	}
}
export default ProjectDetails;