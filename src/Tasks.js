import React, { Component } from 'react';
import task1 from './1.jpg';
import task2 from './2.jpg';
import task3 from './3.jpg';

class Tasks extends Component {
  render() {
      return (

<div>
<h2>  Tasks </h2>

Sprint tasks are used by teams to decompose user stories or product backlog
items (PBIs) at the sprint planning meeting to a more granular level.
Tasks are used to break down user stories even further. Tasks are the smallest
unit used in scrum to track work. A task should be completed by one person on
the team, though the team may choose to pair up when doing the work.

  <img src={task3} alt="Backlog" width="800" height="400" />

Typically, each user story will have multiple associated tasks.
Stories involve different types of work (programming, testing, database design,
userinterface design...), while tasks are limited to just one time of work.

  <img src={task1} alt="Backlog" width="800" height="400" />
  <img src={task2} alt="Backlog" width="800" height="400" />



</div>

    );
  }
}

export default Tasks;
