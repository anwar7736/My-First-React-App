import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

class Analysis extends Component{
	constructor(){
		super()
		this.state = {
			data : [
				{Technology : 'Java', Projects : 100},
				{Technology : 'Kotline',Projects : 40},
				{Technology : 'SQL', Projects : 60},
				{Technology : 'CSS', Projects : 95},
				{Technology : 'Jquery', Projects : 50},
				{Technology : 'React', Projects : 90},
				{Technology : 'PHP', Projects : 100},
				{Technology : 'Angular', Projects : 45}


			]
		}
	}
	render(){
		const blue = 'rgba(0, 115, 230, 0.8)'
		return(
			<Fragment>
				<Container>
					<h1 className="serviceMainTitle text-center">Technology Used</h1>
					<Row>
						<Col style={{height: 300, width: '100%'}} lg={6} md={12} sm={12}>
							<ResponsiveContainer>
								<BarChart fill={blue} height={300} width={100} data={this.state.data}>
								    <XAxis dataKey="Technology"/>
									<Tooltip/>
									<Bar dataKey="Projects">
									</Bar>
							</BarChart>
							</ResponsiveContainer>
						</Col>
						<Col lg={6} md={12} sm={12}>
								<p className="text-justify des">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.
                            I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.
                            Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
						</Col>
					</Row>
				</Container>
			</Fragment>
			);
	}

}
export default Analysis;