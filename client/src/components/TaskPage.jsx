import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import EditTaskForm from './EditTaskForm';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    // Fetch tasks from API
    fetch('http://127.0.0.1:8000/api/tasks/')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
      method: 'DELETE',
    }).then(() => {
      setTasks(tasks.filter(task => task.id !== taskId));
    });
  };

  const completeTask = (taskId, isComplete) => {
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ is_complete: isComplete }),
    })
      .then(response => response.json())
      .then(updatedTask => {
        setTasks(tasks.map(task =>
          task.id === taskId ? updatedTask : task
        ));
      });
  };

  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.header}>Tasks</h2>
      {editingTask ? (
        <EditTaskForm task={editingTask} onUpdate={updateTask} onCancel={() => setEditingTask(null)} />
      ) : (
        <TaskForm addTask={addTask} />
      )}
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={deleteTask} onCompleteChange={completeTask} />
    </div>
  );
};

const styles = {

  container: {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    marginLeft: '450px'
  },
  header: {
    marginLeft: '270px',
    fontSize: '40px',
    color: '#7767D8',
  },
};

export default TaskPage;
