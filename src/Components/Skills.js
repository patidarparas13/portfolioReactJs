import React, {Component} from 'react';
import {Container, Row, Col,Button} from 'react-bootstrap';

class Skills extends Component {

    render() {
        return (
            <Container className="container--fluid">
                <h2 className="text-center">Hand's On &nbsp;
                    <span style={
                        {color: '#5d77ce'}
                    }>Experience In...</span>
                </h2>
                <br />
                <Row className="justify-content-center">
                    <div className="text-center col-md-8 col-12" >
                    <Button style={{margin:'5px'}} className="button-class" variant="outline-primary">React Js</Button>{' '}
  <Button style={{margin:'3px'}} variant="outline-secondary">JavaScript</Button>{' '}
  <Button style={{margin:'3px'}} variant="outline-success">Python</Button>{' '}
  <Button style={{margin:'3px'}} variant="outline-warning">Google Cloud</Button>{' '}
  <Button style={{margin:'3px'}} variant="outline-info">Machine Learning</Button>{' '}
  <Button style={{margin:'3px'}} variant="outline-dark">Cloud Computing</Button>
  <Button style={{margin:'3px'}} variant="outline-danger">AWS</Button>{' '}
  <Button style={{margin:'3px'}} variant="outline-warning">Django</Button>{' '}
  <Button style={{margin:'3px'}} variant="outline-secondary">CSS</Button>{' '}
  <Button style={{margin:'3px'}} variant="outline-success">Flask</Button>{' '}
  <Button style={{margin:'3px'}} variant="outline-dark">HTML</Button>
  <Button style={{margin:'3px'}} variant="outline-danger">Deep Learning</Button>{' '}
                        </div></Row>
                
                        <hr />
            </Container>
        );
    }
}

export default Skills;
