import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import '../view/OurServices.css'

class OurServices extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="carousel-container">
          <MDBContainer className="carousel-sizer">
          <MDBCarousel  activeItem={1} length={8} showControls={true} showIndicators={true} className="z-depth-1">
            <MDBCarouselInner >

              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img className="d-block w-100 img-fluid" src={require("../img/ACTIVE1.jpeg")} alt="Pick and Pack" />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Pick and Pack</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img className="d-block w-100" src={require("../img/ACTIVE2.jpeg")} alt="Pick and Pack" />
                  <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Pick and Pack</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img className="d-block w-100" src={require("../img/SHIPPING1.jpeg")} alt="Shipping Area" />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Shipping Area</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="4">
                <MDBView>
                  <img className="d-block w-100" src={require("../img/SHIPPING2.jpeg")} alt="Cross-Dock" />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Cross-Dock</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="5">
                <MDBView>
                  <img className="d-block w-100" src={require("../img/drop ship fullfilment.jpeg")} alt="Drop Ship fulfillment" />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Drop Ship fulfillment</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="6">
                <MDBView>
                  <img className="d-block w-100" src={require("../img/HUB3.jpeg")} alt="Drop Ship fulfillment" />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Drop Ship fulfillment</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="7">
                <MDBView>
                  <img className="d-block w-100 standing-img" src={require("../img/compressed.jpg")} alt="Inventory Control" />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Inventory Control</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="8">
                <MDBView>
                  <img className="d-block w-100 standing-img" src={require("../img/STORAGE2.jpeg")} alt="Inventory Control" />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Inventory Control</h3>
                </MDBCarouselCaption>
              </MDBCarouselItem>


            </MDBCarouselInner>
          </MDBCarousel>
          </MDBContainer>
          </div>
     );
  }
}
 
export default OurServices;
