import React, { Component } from 'react';
import logo from './logo.svg';
import PO from './PO.jpg';
import './App.css';

class Codecoverage extends Component {
  render() {
    return (
        <p className="Code Coverage"></p>
        <p Code Coverage is a measure used to describe the degree to
        which code is exercised by your test.
        It helps the developer by showing the ratio between tested and untested Code.
        The measure unit is percentage.
        A higher percentage of Code coverage could help increase the software
        quality by identifying untested parts of your application.></p>
    );
  }
}

export default Codecoverage;
