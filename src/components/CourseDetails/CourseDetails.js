import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import projectImg from '../../asset/images/project.jpg';
import {Link} from 'react-router-dom';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader.js';
import Failer from '../Failer/Failer.js';

class CourseDetails extends Component{
     constructor(props){
        super()
        this.state = {
            id : props.id,
            long_title : '',
            long_des : '',
            total_lecture : '', 
            total_student : '',     
            skill_all : '',
            video_url : '',
            loader : true,
            error : false,
        }
    }
        componentDidMount(){
        RestClient.GetRequest(AppURL.CourseDetails+this.state.id).then(result=>{
            if(result==null)
            {
               this.setState({error : true, loader : false})
            }
            else
            {
            this.setState({
                long_title : result[0]['long_title'],
                long_des : result[0]['long_des'],
                total_lecture : result[0]['total_lecture'],
                total_student : result[0]['total_student'],
                skill_all : result[0]['skill_all'],
                video_url : result[0]['video_url'],
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
					<Container fluid={true} className="topPageFixed p-0">
					<div className="topFixedOverlay">
						<Container className="topPageContentCourse">
							<Row>
								 <Col sm={12} md={6} lg={6}>
                                    <h3 className="CourseFullTitle">{this.state.long_title}</h3>
                                    <h5 className="CourseSubTitle">Total Lecture={this.state.total_lecture}</h5>
                                    <h5 className="CourseSubTitle mt-0">Total Student={this.state.total_student}</h5>
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                    <p className="CourseDes">{this.state.long_des}</p>
                                </Col>
							</Row>
						</Container>
					</div>
				</Container>
				 <Container className="mt-5">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h1 className="serviceName">Skill You Get</h1>
                                        {ReactHtmlParser(this.state.skill_all)}
                                    <Button variant="primary">More Info</Button>
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                    <Player>
                                        <source src="{this.state.video_url}" />
                                        <BigPlayButton position="center"/>
                                    </Player>
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
export default CourseDetails;