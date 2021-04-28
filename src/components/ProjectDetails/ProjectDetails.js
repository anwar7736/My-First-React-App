import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import projectImg from '../../asset/images/project.jpg';
import {Link} from 'react-router-dom';

class ProjectDetails extends Component{
	render(){
		return(

			<Fragment>
				<Container className="text-center">
					<Row>
						<Col lg={6} md={6} sm={12} className="p-3">
							<img height="100%" width="100%" src={projectImg}/>
						</Col>
						<Col lg={6} md={6} sm={12} className="p-3">
							 <h2 className="serviceName">Foll Bazzar</h2>
                                <p className="serviceDescription">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                                <ul>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                </ul>
                                <Button variant="primary">More Info</Button>
						</Col>
					</Row>
				</Container>
			</Fragment>
			);
	}

}
export default ProjectDetails;