import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TaskList = ({ tasks, onEdit, onDelete, onCompleteChange, users }) => (
  <ul className="list-group" style={styles.listGroup}>
    {tasks.map((task) => {
      const user = users.find((user) => user.id === task.assigned_to);
      return (
        <li
          key={task.id}
          className="list-group-item"
          style={styles.listGroupItem}
        >
          <div style={styles.taskRow}>
            <div style={styles.taskColumn}>
              <h2 style={styles.title}>{task.title}</h2>
              <h5 style={styles.description}>{task.description}</h5>
              <small style={styles.deadline}>
                Deadline: {task.deadline ? new Date(task.deadline).toLocaleString() : "No deadline"}
              </small>
              <br />
              <small style={styles.assignedTo}>
                Assigned to: {user ? user.username : "Unassigned"}
              </small>
              <br />
              <small style={styles.status}>
                Status: {task.is_complete ? "Complete" : "Incomplete"}
              </small>
            </div>
            <div style={styles.actionsColumn}>
              <input
                type="checkbox"
                checked={task.is_complete}
                onChange={(e) => onCompleteChange(task.id, e.target.checked)}
                style={styles.checkbox}
              />
              <label className="form-check-label" style={styles.checkboxLabel}>
                Complete
              </label>
              <br />
              <button
                onClick={() => onEdit(task)}
                className="btn btn-warning"
                style={styles.iconButton}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="btn btn-danger"
                style={styles.iconButton}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
);


const styles = {
  listGroup: {
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "10px",
  },
  listGroupItem: {
    backgroundColor: "black",
    color: "#8E44AD",
    marginBottom: "10px",
    padding: "15px",
    border: "1px, solid, #8E44AD",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
  },
  taskRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  taskColumn: {
    flex: 3,
  },
  actionsColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  title: {
    color: "white",
  },
  description: {
    color: "white",
  },
  deadline: {
    color: "white",
    fontSize: "15px",
  },
  assignedTo: {
    color: "white",
    fontSize: "15px",
  },
  status: {
    color: "white",
    fontSize: "15px",
  },
  checkbox: {
    marginRight: "10px",
  },
  checkboxLabel: {
    color: "#8E44AD",
  },
  iconButton: {
    backgroundColor: "#8E44AD",
    color: "black",
    fontSize: "20px",
    marginTop: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    width: "45px",
  },
};

export default TaskList;
