import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Error from '../../asset/images/error.svg';

class Failer extends Component{
	render(){
		return(
			<Fragment>
				<Container className="text-center">
					<Row>
						<Col>	
							<img className="loaderImg" src={Error}/>
						</Col>
					</Row>
				</Container>

			</Fragment>
		);
	}
}
export default Failer;