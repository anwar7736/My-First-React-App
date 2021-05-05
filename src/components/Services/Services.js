import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import mobile from '../../asset/images/mobile.svg';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import Loader from '../Loader/Loader.js';

class Services extends Component{
		constructor(){
		super()
		this.state = {
			myData : [],
			loader : true,
		}
	}
		componentDidMount(){
		RestClient.GetRequest(AppURL.Services).then(result=>{
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
        else{
		const myData = this.state.myData;
		const myView = myData.map(myList=>{
			return <Col lg={4} md={6} sm={12}>
							<div className="serviceCard text-center">
								<img src={myList.service_logo}/>
								<h2 className="serviceName">{myList.service_name}</h2>
								<p className="serviceDescription">{myList.service_description}</p>
							</div>
						</Col>
		})
		return(
			<Fragment>
				<Container>
					<h1 className="serviceMainTitle text-center">MY SERVICES</h1>
					<Row>
						{myView}
					</Row>
				</Container>
			</Fragment>
			);
	  }
	}

}
export default Services;