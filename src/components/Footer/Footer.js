import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component{
	render(){
		return(

			<Fragment>
				<Container fluid={true} className="text-center footerSection">
					<Row>
						<Col lg={3} md={6} sm={12} className="text-justify p-5">
							<h2 className="serviceName">Follow Me</h2>
							 <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
							 <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube}/> Youtube</a>
						</Col>
						<Col lg={3} md={6} sm={12} className="text-justify p-5">
							<h2 className="serviceName">Address</h2>
							<p className="serviceDescription"><FontAwesomeIcon icon={faMapMarkerAlt}/> Palli Biddut, Ashulia, Savar, Dhaka-1349</p>
							<p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> +8801794-030592</p>
							<p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> anwarhossain7736@gmail.com</p>
						</Col>
						<Col lg={3} md={6} sm={12} className="text-justify p-5">
							<h2 className="serviceName">Information</h2>
							<a className="footerLink" href="#">About Me</a><br/>
							<a className="footerLink" href="#">My Resume</a><br/>
							<a className="footerLink" href="#">Contact Me</a>
						</Col>
						<Col lg={3} md={6} sm={12} className="text-justify p-5">
							<h2 className="serviceName">Legal</h2>
							<a className="footerLink" href="#">Refund Policy</a><br/>
							<a className="footerLink" href="#">Terms and Conditions</a><br/>
							<a className="footerLink" href="#">Privacy Policy</a>
						</Col>
					</Row>
				</Container>
				<Container fluid={true} className="text-center copyRightSection">
					<a className="copyRightLink" href="#">anwar.com &copy; 2020-2021</a>
				</Container>
			</Fragment>


			);
	}

}
export default Footer;