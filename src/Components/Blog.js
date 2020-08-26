import React,{Component} from 'react'
import Navigation from './Navigation'
import {Container} from 'react-bootstrap'
import Footer from './Footer'

class Blog extends Component {
    constructor(){
        super()
        this.state = { 
            blogData:[]
         }
    }
    componentDidMount(){
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@patidarparas13')
   .then((res) => res.json())
   .then((data) => {
      this.setState({blogData:data.items})
      console.log(this.state.blogData)
    })
    }
    render() { 
        
        return ( 
            <React.Fragment>
                <Navigation />
                <br/>
            <h2 className="text-center">
                    <span style={
                        {color: '#5d77ce'}
                    }>My Blogs</span>
                </h2>
                <br/>
        <Container >
        <div className="row">
        {this.state.blogData.map((data,i)=>(
                <div className="col-sm-4" key={i}>
                  <div className="card container" style={{width:400,height:200}}>
                    <div className="card-body">
                    <div style={{height:"60%"}}>
                    <h5 className="card-title">{data.title}</h5>
                    </div>
                    <hr />
                    <div>
                    <a href={data.link} className="btn btn-primary" style={{justifyContent:"center"}}>Medium Link</a>
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
 
export default Blog;