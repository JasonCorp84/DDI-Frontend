import "../view/contact.css";
import React, {Component} from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



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
    if(this.state.name.length < 5 || this.state.email.length < 3  || this.state.message.length < 10) {
      alert('please fill out all fields')
    } else {
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
   
    
  }
  handleInput = (e, field) => {

    this.setState( 
      {
        [field]: e.target.value
      }
      )
  }

   //className="background-color"

  render() { 
    return ( 
      <div className="contact-wrapper">
        <MDBContainer fluid className="background-color">
          <MDBRow>
            <MDBCol md="6" className="input-color">
              <form onSubmit={this.handleSubmit}>
                <p className="h5 text-center mb-4">Write to us</p>
                <div className="grey-text">

                  <MDBInput onChange={(e) => this.handleInput(e, "name") } 
                    value={this.state.name}                    
                    label="Your name"
                    icon="user"
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
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />

                  <MDBInput onChange={(e) => this.handleInput(e, "subject")}
                    value={this.state.subject}
                    label="Subject"
                    icon="tag"
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
                    icon="pencil-alt"
                  />
                </div>
                <div className="text-center-1">
                  <MDBBtn outline color="blue darken-3" type="submit">
                    Send <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
      </MDBContainer>
      </div>
     );
  }
}


export default Contact;
