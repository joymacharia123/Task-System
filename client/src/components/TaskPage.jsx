import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from API
    fetch('/api/tasks/')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <h2>Tasks</h2>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;