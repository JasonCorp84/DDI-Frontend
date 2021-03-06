import React from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "../view/OurTeam.css";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer} from 'mdbreact';

const OurTeam = () => {
  return (

<MDBContainer className="OurTeam-Container">

      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem", height: "25rem" }}>
        <MDBCardImage className="img-fluid card-image" src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966901.jpg" waves />
          <MDBCardBody>
            <MDBCardTitle>Peter Larios</MDBCardTitle>
            <MDBCardText>
            <b>District Manager of Operations</b> <br/>
            peter@ddidistributions.com
            </MDBCardText>
          </MDBCardBody>
      </MDBCard>

      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem",height: "25rem" }}>
      <MDBCardImage  className="img-fluid" src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966901.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle> Joe Castellanos </MDBCardTitle>
          <MDBCardText> 
          <b>Manager of Equipment</b><br/>
          joe@ddistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>


      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem",height: "25rem" }}>
      <MDBCardImage className="img-fluid card-image" src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-450966901.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Keneth Bagley</MDBCardTitle>
          <MDBCardText>
          <b>VP of Operations</b> <br/>
          Kenneth@ddidistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    
      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem",height: "25rem" }}>
      <MDBCardImage className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDVGZCCx_Jrov7sALYuflSbcxTyrgJ329wq5eBfetXNheplsx" waves />
        <MDBCardBody>
          <MDBCardTitle>Kelsey Robinson</MDBCardTitle>
          <MDBCardText>
          <b> Controller </b>
          <br/>        
          kelsey@ddidistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>


      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem",height: "25rem" }}>
      <MDBCardImage className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDVGZCCx_Jrov7sALYuflSbcxTyrgJ329wq5eBfetXNheplsx" waves />
        <MDBCardBody>
          <MDBCardTitle>Karla Mejia</MDBCardTitle>
          <MDBCardText>
          <b> Customer Service Manager </b>
          <br/>        
          karlam@ddidistributions.com
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem",height: "25rem" }}>
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

      <MDBCard outline color="blue lighten-5" className="our-team__card" style={{ width: "17rem",height: "25rem" }}>
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
      </ MDBContainer>
  )
}

export default OurTeam;
