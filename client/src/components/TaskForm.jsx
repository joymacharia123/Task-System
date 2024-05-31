import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new task
    const newTask = {
      title,
      description,
      deadline,
      assigned_to: assignedTo,
      is_complete: isComplete,
    };

    fetch('/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => response.json())
      .then(data => {
        addTask(data);
        // Clear form fields
        setTitle('');
        setDescription('');
        setDeadline('');
        setAssignedTo('');
        setIsComplete(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <div className="form-group">
        <label>Deadline</label>
        <input type="datetime-local" className="form-control" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Assign to</label>
        <input type="text" className="form-control" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" checked={isComplete} onChange={(e) => setIsComplete(e.target.checked)} />
        <label className="form-check-label">Complete</label>
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default TaskForm;