import React from 'react';
import './taskViewer.css';

function TaskCard({ task }) {
    return (
      <div className="task-card">
        <h4>{task.title}</h4>
        <p>Due date: {task.date}</p>
        <p>Due time: {task.time}</p>

        <label className="checkbox-label">
        <input type="checkbox" checked={task.completed} onChange={() => { /* Handle checkbox change if needed */ }} />
      </label>
      </div>
    );
}

export default TaskCard;