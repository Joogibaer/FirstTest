import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sprintblog from './sprintblog.jpg'

class Sbacklog extends Component {
  render() {
    return (
      <div className="App">
        
      
      <h2> Sprint Backlog </h2>
      <img src = {sprintblog} className = "sprintblog" alt ="pic" />
      </div>
    );
  }
}

export default Sbacklog;
