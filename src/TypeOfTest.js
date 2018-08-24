import React, { Component } from 'react';
import './App.css';
import pic from './pictIv.jpg'

class TypeOfTest extends Component {
  render() {
    return (
        <div>
        <h2>Continuous Testing</h2>
		<h3 id ="expl">Exploratory testing</h3>
<p className="Eploratory">
Exploratory Testing is a testing approach that allows you to apply your ability and skill as a tester in a powerful way.
</p>
<ul>
<li></li>
</ul>
<h3 id ="acceptance">Acceptance testing</h3>
<p className="accept">
An acceptance test is a formal description of the behavior of a software product, generally expressed as an example or a usage scenario.
</p>
<ul>
<li>Alpha & Beta Testing</li>
<li>Smoke test</li>
<li>Contract Acceptance Testing</li>
<li>Regulation Acceptance Testing</li>
<li>Operational Acceptance Testing</li>
<li>Black Box Testing</li>
</ul>

<h3 id ="development">Development testing</h3>
<p className="develop">
Development testing (DevTest) is an approach in software development that aims to bring the development and testing phases closer together.
</p>
<ul>
<li>Unit Testing</li>
<li>Integration Tests</li>
<li></li>
</ul>





        Continuous testing is the process of executing automated tests as part of the software delivery pipeline in order to obtain feedback on the business risks associated with a software release candidate as rapidly as possible.
		<img src={pic} alt="Backlog" width="800" height="400" />

		<p>
		Continuous Testing focuses on business risk and providing insight on whether the software can be released. To achieve this shift, it we need to stop asking “are we done testing” and instead concentrate on “does the release candidate have an acceptable level of business risk?” </p>

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
