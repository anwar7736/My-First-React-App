import React, {Component, Fragment} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetail from '../components/ProjectDetails/ProjectDetails';
import Footer from '../components/Footer/Footer';
class ProjectDetails extends Component{
		constructor({match}){
			super()
			this.state = {
				id : match.params.projectID,
				name : match.params.projectName,
			}
		}
		componentDidMount(){
		window.scroll(0,0);
	}
	render(){
		return(
				<Fragment>
					 <TopNavigation title="Project Details"/>
				     <PageTop pageTitle={this.state.name}/>
				     <ProjectDetail id={this.state.id}/>
				     <Footer/>
				</Fragment>
			);
	}
}
export default ProjectDetails;