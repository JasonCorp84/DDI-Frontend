import React, { Component } from 'react';
import {  MDBContainer, MDBFooter, MDBIcon } from "mdbreact"


import '../view/Footer.css';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div class="footer">
        <MDBFooter color="blue darken-3" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="address">
            <MDBIcon icon="map-marked-alt" />   <strong> 16875 Heacock st. Moreno Valley, CA 92551</strong>
          </MDBContainer>
        </MDBFooter>
      </div>
     );
  }
}
 
export default Footer;