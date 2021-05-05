import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

class PageTop extends Component{
	render(){
		return(
				<Fragment>
					<Container fluid={true} className="topPageFixed p-0">
					<div className="topFixedOverlay">
						<Container className="topPageContent">
							<Row>
								<Col className="text-center">
									<h4 className="topSubTitle">{this.props.pageTitle}</h4>
								</Col>
							</Row>
						</Container>
					</div>
				</Container>
				</Fragment>
			);
	}
}
export default PageTop;