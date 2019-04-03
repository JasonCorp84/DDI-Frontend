import React, { Component } from 'react';
import {  MDBContainer, MDBFooter, MDBIcon } from "mdbreact"
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import '../view/Footer.css';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="footer-copyright text-center py-3 blue darken-3 fixed-bottom">
        <MDBContainer fluid>
        <MDBIcon icon="map-marked-alt" />   <strong> 16875 Heacock st. Moreno Valley, CA 92551</strong>
        </MDBContainer>
      </div>
      // <div className="footer">
      //   <MDBFooter color="blue darken-3" className="font-small pt-4 mt-4">
      //     <MDBContainer fluid className="address">
      //       <MDBIcon icon="map-marked-alt" />   <strong> 16875 Heacock st. Moreno Valley, CA 92551</strong>
      //     </MDBContainer>
      //   </MDBFooter>
      // </div>
     );
  }
}
 
export default Footer;
