import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';

class Analysis extends Component{
	constructor(){
		super()
		this.state = {
			data : [],
			desc : '',
		}
	}
	  componentDidMount(){
        RestClient.GetRequest(AppURL.ChartData).then(result=>{
            this.setState({data: result})
        })
        .catch(error=>{

        }); 
        RestClient.GetRequest(AppURL.TechDesc).then(result=>{
            this.setState({desc: result[0]['tech_description']})
        })
        .catch(error=>{

        });
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
								    <XAxis dataKey="technology"/>
									<Tooltip/>
									<Bar dataKey="projects">
									</Bar>
							</BarChart>
							</ResponsiveContainer>
						</Col>
						<Col lg={6} md={12} sm={12}>
								<p className="text-justify des">{ ReactHtmlParser(this.state.desc) }</p>
						</Col>
					</Row>
				</Container>
			</Fragment>
			);
	}

}
export default Analysis;