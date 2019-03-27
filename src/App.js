import React, { Component } from 'react';
import OurServices from './Components/OurServices';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import {
  Route,
} from 'react-router-dom';
import './App.css';
import OurTeam from './Components/OurTeam';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
          <Route exact path="/services" component={OurServices}/>
          <Route exact path="/" component={Home}/>          
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/team" component={OurTeam}/>
          <Route exact path="/about" component={About}/>
      <Footer />
      </div>
    );
  }
}

export default App;
