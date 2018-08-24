import React, { Component } from 'react';
import './App.css';
import DevTests from './DevTests.jpg';


class DevTest extends Component {
  render() {
    return (
      <div>
        <h2>Development Test</h2>

        <img src={DevTests} alt="DevTests" width="800" height="400" />

      </div>
    );
  }
}

export default DevTest;
