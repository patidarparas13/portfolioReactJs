import React, {Component} from 'react'
import Navigation from './Navigation'
import Intro from './Intro'
import Skills from './Skills'
import Footer from './Footer'
import CommunityExperience from './CommunityExperience'

class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <br/>
                <br/>
                <Intro />

                <Skills />
                <CommunityExperience />
                <br />
                <Footer />
                
                
            </React.Fragment>

        );
    }
}

export default Home;
