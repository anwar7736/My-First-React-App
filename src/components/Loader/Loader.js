import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Loading from '../../asset/images/loading.svg';

class Loader extends Component{
	render(){
		return(
			<Fragment>
				<Container className="text-center">
					<Row>
						<Col>	
							<img className="loaderImg" src={Loading}/>
						</Col>
					</Row>
				</Container>

			</Fragment>
		);
	}
}
export default Loader;