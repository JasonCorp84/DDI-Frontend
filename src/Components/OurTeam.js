import React from 'react';
import "../view/OurTeam.css";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';

const OurTeam = () => {
  return (
<div className="OurTeam-Container">

      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem" }}>
      <MDBCardImage  className="img-fluid" src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966901.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle> Joe Castellanos </MDBCardTitle>
          <MDBCardText> 
          <b>Warehousing and Distribution District Manager of Operations</b><br/>
          joe@ddistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>


      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem" }}>
      <MDBCardImage className="img-fluid" src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966901.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Keneth Bagley</MDBCardTitle>
          <MDBCardText>
          <b>VP of Operations</b> <br/>
          Kenneth@ddidistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem" }}>
      <MDBCardImage className="img-fluid" src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966901.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Peter Larios</MDBCardTitle>
          <MDBCardText>
          <b>District Sales</b> <br/>
          joe@ddistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>


      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem" }}>
      <MDBCardImage className="img-fluid" src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966901.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Karla Mejia</MDBCardTitle>
          <MDBCardText>
          <b> Customer Service Manager </b>
          <br/>        
          karlam@ddidistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem" }}>
      <MDBCardImage className="img-fluid" src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966901.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Luis Vazquez</MDBCardTitle>
          <MDBCardText>
          <b> Manager </b>
          <br/>
          luisv@ddidistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem" }}>
      <MDBCardImage className="img-fluid" src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966901.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Ed Castellanos</MDBCardTitle>
          <MDBCardText>
          <b> Facility Manager
          </b>
          <br/>
          ed@ddistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </div>
  )
}

export default OurTeam;