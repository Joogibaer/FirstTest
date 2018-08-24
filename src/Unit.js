import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import unit1 from './unit1.png'
import unit2 from './unit2.png'

class Unit extends Component {
  render() {
    return (
      <div className="App">
        
      
      
      <img src = {unit1} className = "sprintblog" alt ="pic" />
	  <img src = {unit2} className = "sprintblog" alt ="pic" />
	  <span>
		A unit test is code that exercises a specific portion of your codebase in a particular context. Typically, each unit test sends a specific input to a method and verifies that the method returns the expected value, or takes the expected action. Unit tests prove that the code you are testing does in fact do what you expect it to do.
	  <br></br>
	  <br></br>
	  <b>Easy to write</b> Developers typically write lots of unit tests to cover different cases and aspects of the application’s behavior, so it should be easy to code all of those test routines without enormous effort.<br></br>
<b>Readable</b> The intent of a unit test should be clear. A good unit test tells a story about some behavioral aspect of our application, so it should be easy to understand which scenario is being tested and — if the test fails — easy to detect how to address the problem. With a good unit test, we can fix a bug without actually debugging the code!<br></br>
<b>Reliable</b> Unit tests should fail only if there’s a bug in the system under test. That seems pretty obvious, but programmers often run into an issue when their tests fail even when no bugs were introduced. For example, tests may pass when running one-by-one, but fail when running the whole test suite, or pass on our development machine and fail on the continuous integration server. These situations are indicative of a design flaw.<br></br>
<b>Fast</b> Developers write unit tests so they can repeatedly run them and check that no bugs have been introduced. If unit tests are slow, developers are more likely to skip running them on their own machines. One slow test won’t make a significant difference; add one thousand more and we’re surely stuck waiting for a while. Slow unit tests may also indicate that either the system under test, or the test itself, interacts with external systems, making it environment-dependent.<br></br>
<b>Truly unit</b> not integration. As we already discussed, unit and integration tests have different purposes. Both the unit test and the system under test should not access the network resources, databases, file system, etc., to eliminate the influence of external factors.<br></br>
</span>
      </div>
    );
  }
}

export default Unit;