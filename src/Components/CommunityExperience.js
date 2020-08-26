import React, {Component} from 'react'
import {CardDeck, Card, Container} from 'react-bootstrap'

class CommunityExperience extends Component {
    render() {
        return (
            <Container>
                <h2 className="text-center">
                    <span style={
                        {color: '#5d77ce'}
                    }>Community Experience</span>
                </h2>
                <br/>
                <CardDeck >
                    <Card>
                        <Card.Img style={
                                {
                                    height: 300,
                                    width: 300
                                }
                            }
                            variant="top"
                            src="https://cdn-images-1.medium.com/max/1200/1*2KGc8XfdE1KzkmbZdNvHKQ.jpeg"/>
                        <Card.Body>
                            <Card.Title>Developer Student Clubs LPU</Card.Title>
                            <Card.Text>
                                Developer Student Clubs are university based community groups for students interested in Google developer technologies.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img style={
                                {
                                    height: 300,
                                    width: 300
                                }
                            }
                            variant="top"
                            src="https://miro.medium.com/max/3200/1*FHJTiIW9_enNj4RWSQ3NEQ.png"/>
                        <Card.Body>
                            <Card.Title>Google Code-In Mentor For Tensorflow</Card.Title>
                            <Card.Text>
                                Google Code-in was an international annual programming competition hosted by Google LLC for pre-university students.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img style={
                                {
                                    height: 300,
                                    width: 300
                                }
                            }
                            variant="top"
                            src="https://secure.meetupstatic.com/photos/event/8/7/a/9/600_480274729.jpeg"/>
                        <Card.Body>
                            <Card.Title>Explore ML Facilitator</Card.Title>
                            <Card.Text>
                                Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <hr />
            </Container>
        );
    }
}

export default CommunityExperience;
