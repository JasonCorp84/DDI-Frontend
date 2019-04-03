import React from "react";
import { NavLink } from 'react-router-dom'
import { MDBIcon,  MDBBtn, MDBContainer } from "mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../view/Home.css';


const Home = () => {
  return (
    <div className="bg home">
                <div className="white-text text-center text-md-center col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Welcome to PAL Distribution{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h3 className="mb-4 home-text">
                    Industry leader in Warehouse and Distribution.
                  </h3>
                  <div className="home-container">                  <MDBBtn color="blue darken-3" className="contact-button">
                     <NavLink far icon="address-book" style={{color: "white"}} to="contact"> Contact</NavLink>
                  </MDBBtn>
                  </div>

                </div>

    </div>
  );
}

export default Home;
