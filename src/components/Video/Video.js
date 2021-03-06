import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Card,Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader.js';
import Failer from '../Failer/Failer.js';

class Video extends Component{
	constructor(){
		super()
		this.state = {
			show : false,
			video_desc : '',
			video_url : '',
			loader : true,
			error : false,
		}
	}
	componentDidMount(){
        RestClient.GetRequest(AppURL.VideoHome).then(result=>{
        	if(result==null)
            {
               this.setState({error : true, loader : false})
            }
            else
            {
            this.setState({video_desc: result[0]['video_description'], video_url: result[0]['video_url'], loader:false})
        	}
        })
        .catch(error=>{
        	this.setState({error : true, loader : false})
        }); 
    }
	modalOpen=()=>{
		this.setState({show:true})
	}
	modalClose=()=>{
		this.setState({show:false})
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
							<Col lg={12} md={12} sm={12} className="videoCard">
								<div>
									 <p className="videoTitle">How I Do</p>
	                                	{ this.state.video_desc }
	                                 <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>
								</div>
							</Col>
						</Row>
					</Container>
					 <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
				        <Modal.Header closeButton title="Close">
				          <Modal.Title></Modal.Title>
				        </Modal.Header>
				        <Modal.Body>
				        	 <Player>
						      	<source src={ this.state.video_desc } />
						      	<BigPlayButton position="center"/>
						    </Player>	        	
				        </Modal.Body>
				        <Modal.Footer>
				          <Button position="left" variant="primary" onClick={this.modalClose}>
				            Close
				          </Button>
				        </Modal.Footer>
				    </Modal>
			</Fragment>


			);
	}
	else if(this.state.error==true && this.state.loader==false) 
    {
         return <Failer/>
    }
	}

}
export default Video;