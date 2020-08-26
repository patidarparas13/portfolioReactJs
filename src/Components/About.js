import React, {Component} from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import SocialLinks from './SocialLinks'
import { NavLink } from 'react-router-dom';
import {Container, Row, Col,Button} from 'react-bootstrap';


class About extends Component {

    render() {
        return (<React.Fragment>
            <Navigation/>
            <br/>
            <br/>
            <Container>
                    <Row className="">
                    <Col sm={8}>
                    <h1>I'm &nbsp;
                                <span style={
                                    {color: '#5d77ce'}
                                }>Paras Patidar</span>
                            </h1>
                            <br />
                    <p>
                    A passionate Developer 🚀 having an experience of building Web, Cloud and Machine Learning Applications with Python / JavaScript / Reactjs / GCP / AWS and some other cool libraries and frameworks.
                    </p>
                    <br/>
                    <p>
                    I have been programming websites for the last one year and I worked on different Web Technologies. I also spent time with Machine Learning, to explore new models and frameworks to solve real-world complex tasks that were tough with the software engineering aspect. I also contribute to the community a lot in various ways like, organizing events or helping people to get started with the technologies.
                    </p>
<br />
<p>Thank You!</p>
                        </Col>
                        <Col sm={4}>
                        </Col>
                        
                    </Row>
                    <hr />
                
                </Container>
                <br />
                <Footer />
            
        </React.Fragment>
        );
            }
        }
        
        export default About;
