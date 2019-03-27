import "../view/contact.css";
import React, {Component} from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      email: "",
      subject: "",
      message: ""
     }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("https://pdfmy1ykk8.execute-api.us-east-2.amazonaws.com/s2", this.state)
 
    .then(res => {
      
      this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
      })
    })
    .catch(err => alert(err.message))

    
  }
  handleInput = (e, field) => {

    this.setState( 
      {
        [field]: e.target.value
      }
      )
  }

  

  render() { 
    return ( 
      
        <MDBContainer className="background-color">
          <MDBRow xsm="11" sm="11" md="6" lg="1">
            <MDBCol md="12">
              <form onSubmit={this.handleSubmit}>
                <p className="h5 text-center mb-4">Write to us</p>
                <div className="grey-text">

                  <MDBInput onChange={(e) => this.handleInput(e, "name") } 
                    value={this.state.name}                    
                    label="Your name"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />

                  <MDBInput
                    onChange={(e) => this.handleInput(e, "email") }
                    value={this.state.email}
                    label="Your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />

                  <MDBInput onChange={(e) => this.handleInput(e, "subject")}
                    value={this.state.subject}
                    label="Subject"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput onChange={(e) => this.handleInput(e, "message")}
                  value={this.state.message}
                    type="textarea"
                    rows="2"
                    label="Your message"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="blue darken-3" type="submit">
                    Send <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
      </MDBContainer>
     );
  }
}

export default Contact;
