import React, { Component } from 'react';
import './App.css';

class TestDriven extends Component {
  render() {
    return (
        <div>
        <h2>Test Driven Development</h2>
		
        <p> Def: ideal technology in an agile environment which focusses strongly on
	software quality and cooperation between developer.
	Focus on tree steps: red-green-refactor
 	Red: the developer writes a test for a new functionality, feature
 	Green: the he implements the code for the new feature until the test succeeds
	the developer use unit test.
 	Refactor: refactoring of test and code to improve their quality
	The test design is difficult to estimated, but it is done, the coding takes
	less time because the developer already knows all the expected scenarios from the SBI
	</p>
	
	<h2> Acceptance Test Driven Development</h2>
        <p> Development methodology based on communication between the business customers,
	developers and testers
	Extension of TDD. Besides unit test also uses acceptance test for testing user stories
	</p>
        </div>
    );
  }
}

export default TestDriven;
