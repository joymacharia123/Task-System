import React, { useEffect, useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [ users, setUsers ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      deadline,
      assigned_to: assignedTo,
      is_complete: isComplete,
    };

    fetch('http://127.0.0.1:8000/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => response.json())
      .then(data => {
        addTask(data);
        setTitle('');
        setDescription('');
        setDeadline('');
        setAssignedTo('');
        setIsComplete(false);
      });
  };

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

  useEffect(()=>{
    fetchUsers()
}, [])

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formRow}>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required style={styles.input} />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} style={styles.textarea}></textarea>
        </div>
      </div>
      <div style={styles.formRow}>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Deadline</label>
          <input type="datetime-local" className="form-control" value={deadline} onChange={(e) => setDeadline(e.target.value)} required style={styles.input} />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Assign to</label>
          <select onChange={(e)=>setAssignedTo(e.target.value)} value={assignedTo}>
            <option value="">Select a user</option>
            {
              users.map((user)=>{
                return <option key={user.id} value={user.id}>{user.username}</option>
              
              })
            }
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-primary" style={styles.button}>Add Task</button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: 'black',
    border: '1px solid #8E44AD',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    width: '600px'
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '10px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    margin: '10px',
  },
  formCheckGroup: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
  },
  label: {
    color: '#8E44AD',
    marginBottom: '5px',
  },
  input: {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid #8E44AD',
    padding: '5px',
  },
  textarea: {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid #8E44AD',
    padding: '5px',
    minHeight: '100px',
  },
  checkbox: {
    marginRight: '10px',
  },
  checkboxLabel: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8E44AD',
    borderColor: '#8E44AD',
    color: 'black',
    alignSelf: 'center',
    marginTop: '20px',
    padding: '10px 20px',
  },
};

export default TaskForm;
