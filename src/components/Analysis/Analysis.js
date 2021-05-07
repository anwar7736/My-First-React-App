import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader.js';
import Failer from '../Failer/Failer.js';

class Analysis extends Component{
	constructor(){
		super()
		this.state = {
			data : [],
			desc : '',
			loader : true,
			error : false,
		}
	}
	  componentDidMount(){
        RestClient.GetRequest(AppURL.ChartData).then(result=>{
        	if(result==null)
            {
               this.setState({error : true, loader : false})
            }
            else
            {
            this.setState({data: result, loader:false})
        	}
        })
        .catch(error=>{
        	this.setState({error : true, loader : false})
        }); 
        RestClient.GetRequest(AppURL.TechDesc).then(result=>{
        	if(result==null)
            {
               this.setState({error : true, loader : false})
            }
            else
            {
            this.setState({desc: result[0]['tech_description'], loader:false})
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
		else if(this.state.error==true && this.state.loader==false) 
	    {
	         return <Failer/>
	    }
	}

}
export default Analysis;