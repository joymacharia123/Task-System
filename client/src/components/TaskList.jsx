import React from 'react';

const TaskList = ({ tasks }) => (
  <ul className="list-group">
    {tasks.map(task => (
      <li key={task.id} className="list-group-item">
        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <small>Deadline: {new Date(task.deadline).toLocaleString()}</small>
        <br />
        <small>Assigned to: {task.assigned_to}</small>
        <br />
        <small>Status: {task.is_complete ? 'Complete' : 'Incomplete'}</small>
      </li>
    ))}
  </ul>
);

export default TaskList;