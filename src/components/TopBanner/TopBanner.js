import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import Loader from '../Loader/Loader.js';

class TopBanner extends Component{
	constructor(){
		super()
		this.state = {
			title : '...',
			subtitle : '...',
			loaderClass: 'd-block',
            mainDiv : 'd-none text-center',
		}
	}
	componentDidMount(){
		RestClient.GetRequest(AppURL.HomeTopTitle).then(result=>{
			this.setState({
				title: result[0]['home_title'], 
				subtitle: result[0]['home_subtitle'],
				loaderClass: 'd-none',
                mainDiv : 'd-block text-center',
			})
		})
		.catch(error=>{

		});
	}
	render(){
		return(

			<Fragment>
				<Container fluid={true} className="topFixedBanner p-0">
					<div className="topBannerOverlay">
						<Container className="topContent">
							<Row>
								<Col className={this.state.loaderClass}>
									<Loader/>
								</Col>
								<Col className={this.state.mainDiv}>
									<h1 className="topTitle">{this.state.title}</h1>
									<h4 className="topSubTitle">{this.state.subtitle}</h4>
									<Link className="btn btn-success" to="/about">More Info</Link>
								</Col>
							</Row>
						</Container>
					</div>
				</Container>

			</Fragment>


			);
	}

}
export default TopBanner;