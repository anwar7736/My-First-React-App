import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import mobile from '../../asset/images/mobile.svg';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import Loader from '../Loader/Loader.js';
import Failer from '../Failer/Failer.js';

class Services extends Component{
		constructor(){
		super()
		this.state = {
			myData : [],
			loader : true,
			error : false,
		}
	}
		componentDidMount(){
		RestClient.GetRequest(AppURL.Services).then(result=>{
			 if(result==null)
            {
               this.setState({error : true, loader : false})
            }
            else
            {
			this.setState({myData: result, loader:false})
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
	else if(this.state.error==true && this.state.loader==false) 
    {
         return <Failer/>
    }
	}

}
export default Services;