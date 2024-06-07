import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import EditTaskForm from './EditTaskForm';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [ users, setUsers ] = useState([])

  const fetchUsers = async ()=>{
    const response = await fetch("http://127.0.0.1:8000/api/users/")
    const data = await response.json()
    if (response.ok){
      console.log(data)
      setUsers(data)
    } else {
      console.error(data)
    
  }
}

  useEffect(() => {
    // Fetch tasks from API
    fetch('http://127.0.0.1:8000/api/tasks/')
      .then(response => response.json())
      .then(data => setTasks(data));

    fetchUsers()
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
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/update_status/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ is_complete: isComplete }),
    })
      .then(response => response.json())
      .then(updatedTask => {
        if (updatedTask.id) {
          setTasks(tasks.map(task =>
            task.id === taskId ? updatedTask : task
          ));
        } else {
          console.error("Failed to update task status", updatedTask);
        }
      })
      .catch(error => {
        console.error("Error updating task status", error);
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
      <TaskList users={users} tasks={tasks} onEdit={setEditingTask} onDelete={deleteTask} onCompleteChange={completeTask} />
    </div>
  );
};

const styles = {

  container: {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
  },
  header: {
    marginLeft: '270px',
    fontSize: '40px',
    color: '#8E44AD',
  },
};

export default TaskPage;
