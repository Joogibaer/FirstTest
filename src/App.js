import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> First four principles</h1>
        </header>
        <p className="App-intro">
        </p>
        <ul id="firstFourPrinciples">
          <h2 id="firstPrinciple">
            Our highest priority is to satisfy the customer
    through early and continuous delivery
    of valuable software.
        </h2>
          <ul>
            <li>
              Working software over comprehensive documentation
          </li>
            <li>
              Customer comes first by developing early "done" increments
          </li>
            <li>
              The goal is to incrementally create value and avoid risks
            </li>
          </ul>
          <h2 id="secondPrinciple">
            Welcome changing requirements, even late in
    development. Agile processes harness change for
    the customer's competitive advantage.
        </h2>
          <ul>
            <li>
              Responding to change over following a plan
          </li>
            <li>
              Transforming even late changes into advantages for the customer
          </li>
            <li>
              The goal is to respond to changing market situations and create value for the customer
          </li>
          </ul>
          <h2 id="thirdPrinciple">
            Deliver working software frequently, from a
    couple of weeks to a couple of months, with a
    preference to the shorter timescale.
        </h2>
          <ul>
            <li>
              Working software over comprehensive documentation
          </li>
            <li>
              Continuous delivery in short time periods to statisfy the customer
          </li>
            <li>
              The goal is to continuously get feedback from the customer and satisfy his needs
          </li>
          </ul>
          <h2 id="fourthPrinciple">
            Business people and developers must work
    together daily throughout the project.
        </h2>
          <ul>
            <li>
              Individuals and interactions over processes and tools
          </li>
            <li>
              The goal is to develop a valuable product that satisfies best the customer needs
          </li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default App;
