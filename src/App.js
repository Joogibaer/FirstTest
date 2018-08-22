import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import devteam from './devteam.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title"> Principles 9 - 12  and their corresponding values of Agile Manifesto</h1>
        </header>
        <ul className="App-intro">
        <li> <b>Continuous attention to technical excellence 
and good design enhances agility. </b><br></br>
Value: Working software over comprehensive documentation<br></br>
Comments: Technical excellence allows for agility
</li>


 <li> <b>Simplicity--the art of maximizing the amount 
of work not done--is essential.</b><br></br>
Values: 
Customer collaboration over contract negotiation
Responding to change over following a plan <br></br>
Comments: Being clear of what needs to be done gives clarity and makes thinking about he problem more easier
</li>

<li><b>The best architectures, requirements, and designs 
emerge from self-organizing teams.</b><br></br>
Values: 
Individuals and interactions over processes and tools<br></br>
Comments: Self-organizing teams can interact better
</li>

<li><b>At regular intervals, the team reflects on how 
to become more effective, then tunes and adjusts 
its behavior accordingly.</b><br></br>
Value: Responding to change over following a plan<br></br>
Comments: Reflection results in behavioural change
</li>

        </ul>
      <h1> Scrum Developement Team</h1>
      <img src={devteam} className="devteam" alt="logo" />
      </div>
    );
  }
}

export default App;
