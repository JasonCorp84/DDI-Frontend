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
    console.log("lol")
    axios.post("https://pdfmy1ykk8.execute-api.us-east-2.amazonaws.com/s1", this.state)
 
    .then(res => {
      console.log(res.data)
      this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
      })
    })
    .catch(err => console.log(err.message))

    
  }
  handleInput = (e, field) => {

    this.setState( 
      {
        [field]: e.target.value
      }
      )
      console.log(this.state)
  }

  

  render() { 
    return ( 
      <div className="contact-wrapper">
      <div className="contact-container">
  <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
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
              <div className="text-center">
                <MDBBtn outline color="blue darken-3" type="submit">
                  Send <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      </div>
     );
  }
}

export default Contact;
