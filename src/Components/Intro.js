import React, {Component} from 'react'
import {Container, Row, Col, Figure,Button} from 'react-bootstrap';
import profile from '../assets/profile-img.jpg'
import indianFlag from '../assets/Flag_of_India.svg'

class Intro extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="justify-content-md-center">
                    <Col md="auto">
                            <Figure.Image width={300}
                                height={300}
                                alt="profile-image"
                                src={profile}
                                thumbnail
                                
                                />

                        </Col>
                        <Col>
                        <br/>
                        <br/>
                            <h1>I'm &nbsp;
                                <span style={
                                    {color: '#5d77ce'}
                                }>Paras Patidar</span>
                                &nbsp;
                                <Figure.Image width={50}
                                height={50}
                                alt="profile-image"
                                src={indianFlag}
                                rounded/>
                            </h1>
                            
                            <br/>
                            <h4 style={
                                {color: 'gray'}
                            }>Founder - MLAIT</h4>
                            <h4 style={
                                {color: 'gray'}
                            }>Machine Learning, Cloud & Web</h4>
                            <h4 style={
                                {color: 'gray'}
                            }>Contributor At Tech Communitites</h4>
                            <br />
                           <a href="https://drive.google.com/file/d/16VKvQVzDEM15kqbQ_03gG3vuZDj6sxcf/view?usp=sharing"> <Button style={{margin:'3px'}} variant="outline-primary">Resume</Button></a>
                            <a href="https://drive.google.com/file/d/1KlNf51TYvptIbE5z4ByCHuVwjWSuh2tQ/view?usp=sharing"><Button style={{margin:'3px'}} variant="outline-success">coverLetter</Button></a>
                        </Col>
                        
                    </Row>
                    <hr />

                </Container>
            </React.Fragment>

        );
    }
}

export default Intro;
