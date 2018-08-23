import React, { Component } from 'react';
import logo from './logo.svg';
import PO from './PO.jpg';
import './App.css';
import Prinziples3 from './Prinziples3.js';
import Pbacklog from './Pbacklog.js';
import Tasks from './Tasks.js';
import Sbacklog from './Sbacklog.js';
import Splanning from  './Splanning.js';
import Codecoverage from  './Codecoverage.js';
import Scrummaster from  './Scrummaster.js';


class Prinziples2 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Template</h1>
        </header>
        <p className="App-intro">
        <Scrummaster />
        
		  <ul>
		  <li > <b> Prinzip 5: </b> Build projects around motivated individuals. 
Give them the environment and support they need, 
and trust them to get the job done. <br></br>
<li>  Individuals and interactions over processes and tools</li> 
  </li> 
  <li>  <b> Prinzip 6:  </b>The most efficient and effective method of 
conveying information to and within a development 
team is face-to-face conversation.<br></br>
<li> Individuals and interactions over processes and tools</li> 
  </li> 
  <li>  <b> Prinzip 7: </b> Working software is the primary measure of progress.
<li> Working software over comprehensive documentation</li> 
  </li>
  <li>  <b> Prinzip 8: </b> Agile processes promote sustainable development. 
The sponsors, developers, and users should be able 
to maintain a constant pace indefinitely.<br></br>
<li>Customer collaboration over contract negotiation </li>
  </li> 

		  </ul>

      <h2>
        The Product Owner
        </h2>
      <img src={PO} class="center" width="500" height="600" />
        </p>
        <Prinziples3 />
        <Pbacklog />
        <Tasks />
        <Sbacklog />
        <Splanning />
        <Codecoverage />
        
      </div>
    );
  }
}


export default Prinziples2;
