import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
import cogoToast from 'cogo-toast';
import Loader from '../Loader/Loader.js';
import Failer from '../Failer/Failer.js';
import emailjs from 'emailjs-com';

class ContactSection extends Component{
     constructor(){
        super()
        this.state = {
            address : '',
            email : '',
            phone : '',
            loaderClass: 'd-block',
            mainDiv : 'd-none',
            error : 'd-none',

        }
    }
     componentDidMount(){
        RestClient.GetRequest(AppURL.Footer).then(result=>{
            if(result==null)
            {
               this.setState({error : 'text-center', loaderClass : 'd-none', mainDiv : 'd-none'})
            }
            else
            {
            this.setState({
                address: result[0]['address'],
                email: result[0]['email'], 
                phone: result[0]['phone'],
                loaderClass: 'd-none',
                mainDiv : 'd-block',
                error : 'd-none',
            })
            }
        })
        .catch(error=>{
            this.setState({error : 'text-center', loaderClass : 'd-none', mainDiv : 'd-none'})
        }); 
    }
    contactSend=(e)=>{
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let msg = document.getElementById('message').value;
       
        let jsonData = {name:name, email:email, msg: msg};

        if(name==''){
            cogoToast.warn('Name Field is Required!');
        }
        else if(email==''){
            cogoToast.warn('Email Field is Required!');
        }
        else if(msg==''){
            cogoToast.warn('Message Field is Required!')
        }
        else{
        RestClient.PostRequest(AppURL.ContactSend, jsonData).then(response=>{
                    if(response==true){
                         emailjs.sendForm('portfolio_service', 'portfolio_template', e.target, 'user_GWJf11gBKZ4agSRdJb6VN')
                         .then((result) => {
                          cogoToast.success('Your message has been sent');
                    }, (error) => {
                          cogoToast.error('Something went wrong!');
                    });
                        
                    }
                   else {
                    cogoToast.error('Something went wrong!');
                   }
                    document.getElementById('name').value=' ';
                    document.getElementById('email').value=' ';
                    document.getElementById('message').value=' ';
        }) 
        .catch(error=>{
            cogoToast.error('Something went wrong!');
        })
     }
    }
	render(){
		return(

			<Fragment>
				<Container className="mt-5">
					<Row>
						<Col lg={6} md={6} sm={12} className="p-3">
                            <h1 className="serviceName">Quick Connect</h1>
                              <Form onSubmit={this.contactSend}>
                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Name</Form.Label>
                                    <Form.Control name="name" type="text" id="name"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Email Address</Form.Label>
                                    <Form.Control name="email" type="email" id="email"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Message</Form.Label>
                                    <Form.Control  name="message" as="textarea" rows="3" id="message"/>
                                </Form.Group>


                                <Button variant="success" type="submit">
                                    Send
                                </Button>
                            </Form>
						</Col>
						<Col lg={6} md={6} sm={12} className={this.state.error}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <span><Failer/></span>
                        </Col>
                        <Col lg={6} md={6} sm={12} className={this.state.loaderClass}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <span><Loader/></span>
                        </Col>
                        <Col lg={6} md={6} sm={12} className={this.state.mainDiv}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faMapMarkerAlt}/> Palli Biddut, Ashulia, Savar, Dhaka-1349</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> {this.state.phone}  </p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope}/> {this.state.email} </p>
                        </Col>
					</Row>
				</Container>
			</Fragment>
			);
	}

}
export default ContactSection;