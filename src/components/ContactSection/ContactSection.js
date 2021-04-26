import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class ContactSection extends Component{
	render(){
		return(

			<Fragment>
				<Container className="mt-5">
					<Row>
						<Col lg={6} md={6} sm={12} className="p-3">
                            <h1 className="serviceName">Quick Connect</h1>
                              <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Email Address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Message</Form.Label>
                                    <Form.Control  as="textarea" rows="3" />
                                </Form.Group>


                                <Button variant="success" type="button">
                                    Send
                                </Button>
                            </Form>
						</Col>
						<Col lg={6} md={6} sm={12} className="p-3">
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faMapMarkerAlt}/> Palli Biddut, Ashulia, Savar, Dhaka-1349</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> +8801794-030592</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> anwarhossain7736@gmail.com</p>
						</Col>
					</Row>
				</Container>
			</Fragment>
			);
	}

}
export default ContactSection;