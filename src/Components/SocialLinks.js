import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class SocialLinks extends Component {
   
    render() {
        return (
            <>
            <NavLink to="# " className="nav-link "><i className="fa fa-facebook " /></NavLink>
            <NavLink to="# " className="nav-link "><i className="fa fa-twitter " /></NavLink>
      <NavLink to="# " className="nav-link "><i className="fa fa-github " /></NavLink>
      <NavLink to="# " className="nav-link "><i className="fa fa-linkedin " /></NavLink>
      <NavLink to="# " className="nav-link "><i className="fa fa-medium " /></NavLink>
      <NavLink to="# " className="nav-link "><i className="fa fa-youtube " /></NavLink>
      <NavLink to="# " className="nav-link "><i className="fa fa-stack-overflow " /></NavLink>
      <NavLink to="# " className="nav-link "><i className="fa fa-quora " /></NavLink>
      <NavLink to="# " className="nav-link "><i className="fa fa-whatsapp " /></NavLink>
      <NavLink to="# " className="nav-link "><i className="fa fa-instagram " /></NavLink>
            </>
        )
    }
}
