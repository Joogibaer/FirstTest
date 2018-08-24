import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sprintblog from './sprintblog.jpg'

class Unit extends Component {
  render() {
    return (
      <div className="App">
        
      
      <h2> Sprint Backlog </h2>
      <img src = {sprintblog} className = "sprintblog" alt ="pic" />
	  <span>Easy to write. Developers typically write lots of unit tests to cover different cases and aspects of the application’s behavior, so it should be easy to code all of those test routines without enormous effort.
Readable. The intent of a unit test should be clear. A good unit test tells a story about some behavioral aspect of our application, so it should be easy to understand which scenario is being tested and — if the test fails — easy to detect how to address the problem. With a good unit test, we can fix a bug without actually debugging the code!
Reliable. Unit tests should fail only if there’s a bug in the system under test. That seems pretty obvious, but programmers often run into an issue when their tests fail even when no bugs were introduced. For example, tests may pass when running one-by-one, but fail when running the whole test suite, or pass on our development machine and fail on the continuous integration server. These situations are indicative of a design flaw. Good unit tests should be reproducible and independent from external factors such as the environment or running order.
Fast. Developers write unit tests so they can repeatedly run them and check that no bugs have been introduced. If unit tests are slow, developers are more likely to skip running them on their own machines. One slow test won’t make a significant difference; add one thousand more and we’re surely stuck waiting for a while. Slow unit tests may also indicate that either the system under test, or the test itself, interacts with external systems, making it environment-dependent.
Truly unit, not integration. As we already discussed, unit and integration tests have different purposes. Both the unit test and the system under test should not access the network resources, databases, file system, etc., to eliminate the influence of external factors.
</span>
      </div>
    );
  }
}

export default Unit;