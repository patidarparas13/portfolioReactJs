import React,{Component} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import SocialLinks from './SocialLinks'

class Navigation extends Component {
    render() { 
        return ( 
          <Navbar collapseOnSelect bg="navbar navbar-light navbar-expand-sm shadow-sm p-2 bg-white rounded" expand="lg" sticky="top">
<NavLink to="/" className="navbar-brand text-dark" >Paras Patidar</NavLink>          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavLink to="/" className="navbar-brand text-dark" ><Navbar.Text>Home</Navbar.Text></NavLink>
      <NavLink to="/projects" className="navbar-brand text-dark" ><Navbar.Text>Projects</Navbar.Text></NavLink>
      <NavLink to="/blog" className="navbar-brand text-dark" ><Navbar.Text>Blog</Navbar.Text></NavLink>
      <NavLink to="/about"className="navbar-brand text-dark" ><Navbar.Text>About</Navbar.Text></NavLink>
            </Nav>
            <Nav>
<SocialLinks />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
         );
    }
}
 
export default Navigation;