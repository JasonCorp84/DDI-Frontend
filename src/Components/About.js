import React, { Component } from 'react';
import { MDBCard, MDBCardBody,MDBCardText,MDBCardHeader, MDBContainer } from "mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import "../view/about.css";


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="about-wrapper">
        <MDBContainer fluid className="about-container">
          <MDBCard className="about-card" style={{ width: "100%"}}>
            <MDBCardHeader color="blue darken-3" tag="h3">
              <div className="h4-responsive"> About Us </div>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText className="card-text md-6">
                <h5 className="h5-responsive">Providing an array of services including warehousing and distribution, and special projects services. </h5>
                <h5 className="h5-responsive">Our goal is to provide you with the most competitive pricing and reliable services.
                    We value your trust in allowing us to provide our services; in turn, we are committed to giving you a seamless process in which you can rely.  </h5>
                <h5 className="h5-responsive">DDI's Customer Service team is here to provide friendly and efficient communication with our customers; or if our customers prefer they can remotely access our system to manage their inventory, or track and trace their shipments for real time status of shipments.</h5>
                <h5 className="h5-responsive">DDI Distributions  is your valuable partner in your warehouse, and distribution needs; as we move forward in adapting to our customer needs in this ever changing industry.</h5>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        </div>
     );
  }
}
 

export default About;
