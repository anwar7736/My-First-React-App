import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import projectImg from '../../asset/images/project.jpg';
import {Link} from 'react-router-dom';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import Loader from '../Loader/Loader.js';


class AllProjects extends Component{
     constructor(){
        super()
        this.state = {
            myData : [],
             loader : true,
        }
    }
        componentDidMount(){
        RestClient.GetRequest(AppURL.ProjectAll).then(result=>{
            this.setState({myData: result, loader:false})
        })
        .catch(error=>{

        });
    }
	render(){
        if(this.state.loader==true)
        {
            return <Loader/>
        }
        else {
        const myData = this.state.myData;
        const myView = myData.map(myList=>{
            return   <Col lg={4} md={6} sm={12} className="p-3">
                             <Card className="projectCard">
                                <Card.Img variant="top" src={myList.img_one} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        {myList.short_description}
                                    </Card.Text>
                                   <Link className="btn btn-primary" to={"/ProjectDetails/"+myList.id+"/"+myList.project_name}>Details</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                })
		return(

			<Fragment>
				<Container className="text-center mt-5">
					<Row>
						 {myView}
					</Row>
				</Container>
			</Fragment>
			);
        }
	}

}
export default AllProjects;