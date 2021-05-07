import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader.js';
import Failer from '../Failer/Failer.js';

class AboutDescription extends Component {
    constructor(){
        super()
        this.state = {
            data : '',
             loader : true,
             error : false,

        }
    }
      componentDidMount(){
        RestClient.GetRequest(AppURL.Information).then(result=>{
            if(result==null)
            {
               this.setState({error : true, loader : false})
            }
            else
            {
                 this.setState({data: result[0]['about'], loader:false})
            }
           
        })
        .catch(error=>{
            this.setState({error : true, loader : false})
        }); 
    }
    render() {
         if(this.state.loader==true && this.state.error==false)
        {
            return <Loader/>
        }
        else if(this.state.loader==false && this.state.error==false) 
        {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="p-3">
                           { ReactHtmlParser(this.state.data) }
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

export default AboutDescription;