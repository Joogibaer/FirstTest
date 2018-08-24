import React, { Component } from 'react';
import backlogPicture from './Backlog.jpg';

class Pbacklog extends Component {
  render() {
      return (

<div>
<h2> Product Backlog </h2>

<ul>
 <li> single source of requierements</li>
 <li> as long as the product exists the backlog exists </li>
 <li> product owner has the sole responsibility for the backlog </li>
 <li> product owner  deciedes what comes in the backlog and the location of the
      item</li>
 <li> refinement is constant (but max 10% of the time of the Dev Team) </li>
 <li> Items have attributes </li>
  <ul>
    <li> order </li>
    <li> estimate complexity (done by the Dev Team) </li>
    <li> value  </li>
    <li> test description to show when it is done (optional)  </li>
  </ul>
</ul>

  <img src={backlogPicture} alt="Backlog" width="800" height="400" />

</div>

    );
  }
}

export default Pbacklog;
