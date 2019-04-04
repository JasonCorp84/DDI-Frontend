import React, { Component } from 'react';
import axios from 'axios';
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
  } from "mdbreact";
  import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../view/Nav.css';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      weather: "" ,
      temp: "",
      icon: ""
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Moreno Valley,us,ca&appid=fe57fc98328d7b115a5b1b1745446662&units=imperial`)
    // .then(res => 
    //   this.setState(
    //     {
    //       weather: res.data['weather'][0]['description'],
    //       temp: res.data['main']['temp'],
    //       icon: res.data['weather'][0]['icon']
    //     }
    //     )
    // )
    // .catch(err=> console.log(err.data))
    
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

              <MDBNavItem>
              <div id="openweathermap-widget-13"></div>
            </MDBNavItem>

            </MDBNavbarNav>
          </MDBCollapse>

        </MDBNavbar>
        </div>
      );
    }
}
 
export default Nav;
