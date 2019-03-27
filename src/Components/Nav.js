import React, { Component } from 'react';

import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
  } from "mdbreact";
import '../view/Nav.css';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="App__Navigation">
        <MDBNavbar color="blue darken-3" dark expand="md">
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/services">Our Services</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/team">Our Team</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/about">About Us</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="contact">Contact Us</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon icon="phone" />  (951)242-3400
              </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        </div>
      );
    }
}
 
export default Nav;
