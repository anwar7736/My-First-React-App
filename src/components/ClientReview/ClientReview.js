import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import anwar from '../../asset/images/anwar.jpg';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';

class ClientReview extends Component{
	constructor(){
			super()
			this.state = {
				myData : [],
			}
		}
			componentDidMount(){
			RestClient.GetRequest(AppURL.ClientReview).then(result=>{
				this.setState({myData: result})
			})
			.catch(error=>{

			});
		}
	render(){
		 var settings = {
	      dots: true,
	      infinite: true,
	      speed: 4000,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      autoplay: true,
	      autoplaySpeed: 3000,
	      vertical: true,
      	  verticalSwiping: true,
	      responsive: [
	        {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            infinite: true,
	            dots: true
	          }
	        },
	        {
	          breakpoint: 600,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            initialSlide: 1
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	    };
	    const myData = this.state.myData;
		const myView = myData.map(myList=>{
			return <div>
					    <Row className="text-center justify-content-center">
					       		<Col lg={6} md={6} sm={12}>
					       			<img className="circleImg" src={myList.client_img}/>
					       			<h2 className="serviceName">{myList.client_title}</h2>
					       			<p className="serviceDescription">{myList.client_description}</p>
					       		</Col>

					     </Row>
					</div>
		})
	    				
		return(

			<Fragment>
					<Container className="text-center">
						<h1 className="serviceMainTitle text-center">CLIENT SAYS</h1>

						 <Slider {...settings}>
						 	{myView}
					    </Slider>
					</Container>
			</Fragment>


			);
	}

}
export default ClientReview;