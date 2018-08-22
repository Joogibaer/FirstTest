import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        
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
        </p>
      </div>
    );
  }
}

export default App;
