import React, { Component } from 'react';
import './App.css';
import pic from './pictIv.jpg'

class TypeOfTest extends Component {
  render() {
    return (
        <div>
        <h2>Types of Test</h2>
        Continuous testing is the process of executing automated tests as part of the software delivery pipeline in order to obtain feedback on the business risks associated with a software release candidate as rapidly as possible.
		<img src={pic} alt="Backlog" width="800" height="400" />
		
		Continuous Testing focuses on business risk and providing insight on whether the software can be released. To achieve this shift, it we need to stop asking “are we done testing” and instead concentrate on “does the release candidate have an acceptable level of business risk?” 
        The main differences can be grouped into three broad categories: 
		<ul>
		 <li> risk</li>
		<li> breadth</li>
		<li> time </li>
		</ul>

		</div>
		
    );
  }
}

export default TypeOfTest;
