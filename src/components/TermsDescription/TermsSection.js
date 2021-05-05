import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loader from '../Loader/Loader.js';

class TermsSection extends Component {
    constructor(){
        super()
        this.state = {
            data : '',
            loader : true,
        }
    }
      componentDidMount(){
        RestClient.GetRequest(AppURL.Information).then(result=>{
            this.setState({data: result[0]['terms'], loader:false})
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
        return (
            <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                  { ReactHtmlParser(this.state.data) }
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
    }
}

export default TermsSection;