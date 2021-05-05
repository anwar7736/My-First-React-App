import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import Loader from '../Loader/Loader.js';

class Courses extends Component {
      constructor(){
        super()
        this.state = {
            myData : [],
            loader : true,
        }
    }
        componentDidMount(){
        RestClient.GetRequest(AppURL.CourseHome).then(result=>{
            this.setState({myData: result, loader:false})
        })
        .catch(error=>{

        });
    }
    render() {
        if(this.state.loader==true)
        {
            return <Loader/>
        }
        else{
        const myData = this.state.myData;
        const myView = myData.map(myList=>{
            return  <Col lg={6} md={12} sm={12} className="p-3">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" src={myList.small_img}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">{myList.short_title}</h5>
                                        <p className="text-justify courseDes">{myList.short_des}</p>
                                        <Link className="courseDetails float-left" to={"/CourseDetails/"+myList.id+"/"+myList.short_title}>Details</Link>
                                    </Col>
                                </Row>
                    </Col>
        })
                             
        return (
            <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">OUR COURSES</h1>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
            </Fragment>
        );
    }
    }
}

export default Courses;