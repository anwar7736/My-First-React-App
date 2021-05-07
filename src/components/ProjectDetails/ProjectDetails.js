import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import projectImg from '../../asset/images/project.jpg';
import {Link} from 'react-router-dom';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader.js';
import Failer from '../Failer/Failer.js';

class ProjectDetails extends Component{
	constructor(props){
			super()
			this.state = {
				id : props.id,
				img_two : '',
				project_name : '',
				short_description : '',
				project_features : '',
				live_preview : '',
				loader : true,
				error : false,
			}
		}
	 componentDidMount(){
        RestClient.GetRequest(AppURL.ProjectDetails+this.state.id).then(result=>{
        	if(result==null)
            {
               this.setState({error : true, loader : false})
            }
            else
            {
            this.setState({
            	img_two: result[0]['img_two'],
            	project_name: result[0]['project_name'], 
            	short_description: result[0]['short_description'], 
            	project_features: result[0]['project_features'], 
            	live_preview: result[0]['live_preview'], 
            	loader:false
            })
        	}
        })
        .catch(error=>{
        	this.setState({error : true, loader : false})
        }); 
    }
	render(){
		if(this.state.loader==true && this.state.error==false)
        {
            return <Loader/>
        }
        else if(this.state.loader==false && this.state.error==false) 
        {
		return(

			<Fragment>
				<Container className="text-center">
					<Row>
						<Col lg={6} md={6} sm={12} className="p-3">
							<img height="100%" width="100%" src={this.state.img_two}/>
						</Col>
						<Col lg={6} md={6} sm={12} className="p-3">
							 <h2 className="serviceName">{this.state.project_name}</h2>
                                <p className="serviceDescription">{this.state.short_description}</p>
                                { ReactHtmlParser (this.state.project_features) }
                                <Button variant="primary">More Info</Button>
						</Col>
					</Row>
				</Container>
			</Fragment>
			);
	}
	else if(this.state.error==true && this.state.loader==false) 
    {
         return <Failer/>
    }
	}

}
export default ProjectDetails;