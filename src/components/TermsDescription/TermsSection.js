import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AppURL from '../../RestAPI/AppURL';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';

class TermsSection extends Component {
    constructor(){
        super()
        this.state = {
            data : '',

        }
    }
      componentDidMount(){
        RestClient.GetRequest(AppURL.Information).then(result=>{
            this.setState({data: result[0]['terms']})
        })
        .catch(error=>{

        }); 
    }
    render() {
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

export default TermsSection;