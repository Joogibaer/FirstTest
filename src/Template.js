import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Prinziples3 from './Prinziples3.js';
import Pbacklog from './Pbacklog.js';
import Tasks from './Tasks.js';
import Sbacklog from './Sbacklog.js';
import Splanning from  './Splanning.js';
import Codecoverage from  './Codecoverage.js';
import Scrummaster from  './Scrummaster.js';
import Prinziples2   from  './Prinziples2.js';
import TypeOfTest   from  './TypeOfTest.js';
import TestDriven   from  './TestDriven.js';
import Unit   from  './Unit.js';
import DevTest   from  './DevTest.js';


class Template extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Scrum Training</h1>
        </header>
        <p className="App-intro">
        <Scrummaster />
        <Prinziples2 />
        <Prinziples3 />
        <Pbacklog />
        <Sbacklog />
        <Splanning />
        <Tasks />
        <Codecoverage />
        <TypeOfTest />
        <DevTest />
        <TestDriven />
        <Unit />
        </p>
      </div>
    );
  }
}
export default Template;
