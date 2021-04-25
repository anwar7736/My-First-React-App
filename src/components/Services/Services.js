import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import WebLogo from '../../asset/images/web.svg';
import MobileLogo from '../../asset/images/mobile.svg';
import GraphicsLogo from '../../asset/images/graphics.svg';
class Services extends Component{
	render(){
		return(
			<Fragment>
				<Container>
					<h1 className="serviceMainTitle text-center">MY SERVICES</h1>
					<Row>
						<Col lg={4} md={6} sm={12}>
							<div className="serviceCard text-center">
								<img src={WebLogo}/>
								<h2 className="serviceName">Web Development</h2>
								<p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
							</div>
						</Col>
						<Col lg={4} md={6} sm={12}>
							<div className="serviceCard text-center">
								<img src={MobileLogo}/>
								<h2 className="serviceName">Mobile Development</h2>
								<p className="serviceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
							</div>
						</Col>
						<Col lg={4} md={6} sm={12}>
							<div className="serviceCard text-center">
								<img src={GraphicsLogo}/>
								<h2 className="serviceName">Graphics Design</h2>
								<p className="serviceDescription">I desing modern user interface and other graphical components for your business and instiution.</p>
							</div>
						</Col>
					</Row>
				</Container>
			</Fragment>
			);
	}

}
export default Services;