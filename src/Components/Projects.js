import React,{Component} from 'react'
import Navigation from './Navigation'
import ProjectsData from '../data/projects.json'
import {Container} from 'react-bootstrap'
import Footer from './Footer'

class Projects extends Component {
    state = { 
        projectData:ProjectsData
     }
    render() { 
        return ( 
            <React.Fragment>
            <Navigation />
            <br/>
            <h2 className="text-center">
                    <span style={
                        {color: '#5d77ce'}
                    }>My Projects</span>
                </h2>
                <br/>
        <Container >
        <div class="row">
            {this.state.projectData.map((data,i)=>(
                <div class="col-sm-4" key={i}>
                  <div class="card container" style={{width:400,height:200}}>
                    <div class="card-body">
                    <div style={{height:"60%"}}>
                    <h5 class="card-title">{data.repoName}</h5>
                      <p class="card-text">{data.repoDescription}</p>
                    </div>
                    <hr />
                    <div>
                    <a href={data.link} class="btn btn-primary" style={{justifyContent:"center"}}>Github Link</a>
                    </div>
                      
                    </div>
                  </div>
                </div>
            ))} 
</div>
<hr />
        </Container>
        
        <br />
        <Footer />
        </React.Fragment>
            );
    }
}
 
export default Projects;