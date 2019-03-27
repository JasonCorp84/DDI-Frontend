import React, { Component } from 'react';
import { MDBCard, MDBCardBody,MDBCardText, MDBCardHeader, MDBContainer } from "mdbreact";

import "../view/about.css";


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="about-container">
        <MDBContainer>
          <MDBCard className="about-card" style={{ width: "100%"}}>
            <MDBCardHeader color="blue darken-3" tag="h3">
              About Us
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText className="card-text">
                <p className="card__paragraph">Providing an array of services including warehousing and distribution, and special projects services. </p>
                <p className="card__paragraph">Our goal is to provide you with the most competitive pricing and reliable services.
                    We value your trust in allowing us to provide our services; in turn, we are committed to giving you a seamless process in which you can rely.</p>
                <p className="card__paragraph">DDI's Customer Service team is here to provide friendly and efficient communication with our customers; or if our customers prefer they can remotely access our system to manage their inventory, or track and trace their shipments for real time status of shipments.</p>
                <p className="card__paragraph">DDI Distributions  is your valuable partner in your warehouse, and distribution needs; as we move forward in adapting to our customer needs in this ever changing industry.</p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
     );
  }
}
 

export default About;