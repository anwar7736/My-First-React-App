import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';

class Footer extends Component{
	 constructor(){
        super()
        this.state = {
            address : '',
            email : '',
            phone : '',
            facebook : '',
            youtube : '',
            footer_credit : '',

        }
    }
     componentDidMount(){
        RestClient.GetRequest(AppURL.Footer).then(result=>{
            this.setState({
            	address: result[0]['address'],
            	email: result[0]['email'], 
            	phone: result[0]['phone'], 
            	facebook: result[0]['facebook'], 
            	youtube: result[0]['youtube'], 
            	footer_credit: result[0]['footer_credit']
            })
        })
        .catch(error=>{

        }); 
    }
	render(){
		return(

			<Fragment>
				<Container fluid={true} className="text-center footerSection">
					<Row>
						<Col lg={3} md={6} sm={12} className="text-justify p-5">
							<h2 className="serviceName">Follow Me</h2>
							 <a className="socialLink" target="_blank" href={this.state.facebook}><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
							 <a className="socialLink" target="_blank" href={this.state.youtube}><FontAwesomeIcon icon={faYoutube}/> Youtube</a>
						</Col>
						<Col lg={3} md={6} sm={12} className="text-justify p-5">
							<h2 className="serviceName">Address</h2>
							<p className="serviceDescription"><FontAwesomeIcon icon={faMapMarkerAlt}/> Palli Biddut, Ashulia, Dhaka-1349</p>
							<p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> {this.state.phone} </p>
							<p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> {this.state.email} </p>
						</Col>
						<Col lg={3} md={6} sm={12} className="text-justify p-5">
							<h2 className="serviceName">Information</h2>
							<NavLink className="footerLink" to="/about">About Me</NavLink><br/>
							<NavLink className="footerLink" to="/contact">Contact Me</NavLink>
						</Col>
						<Col lg={3} md={6} sm={12} className="text-justify p-5">
							<h2 className="serviceName">Legal</h2>
							<NavLink className="footerLink" to="/refund">Refund Policy</NavLink><br/>
							<NavLink className="footerLink" to="/terms">Terms and Conditions</NavLink><br/>
							<NavLink className="footerLink" to="/privacy">Privacy Policy</NavLink>
						</Col>
					</Row>
				</Container>
				<Container fluid={true} className="text-center copyRightSection">
					<a className="copyRightLink" href="#">{this.state.footer_credit}</a>
				</Container>
			</Fragment>


			);
	}

}
export default Footer;