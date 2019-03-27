import React from "react";
import { NavLink } from 'react-router-dom'
import { MDBIcon,  MDBBtn } from "mdbreact";

import '../view/Home.css';


const Home = () => {
  return (
    <div className="bg home">
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Welcome to DDI Distribution{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h3 className="mb-4">
                    Industry leader in Warehouse and Distribution.
                  </h3>
                  <MDBBtn color="blue darken-3" className="btn">
                  <MDBIcon far icon="address-book"  /> <NavLink style={{color: "white"}} to="contact"> Contact</NavLink>
                  </MDBBtn>
                </div>

    </div>
  );
}

export default Home;