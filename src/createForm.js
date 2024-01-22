import React, { useState } from 'react';
import './createForm.css';

function CreateForm() {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('Task Name:', taskName);
    console.log('Due Date:', dueDate);

    setTaskName('');
    setDueDate('');
    setDueTime('');
  };

  return (
    <div>
      <h2>Create a New Task</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="time"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
            required
          />
        </label>
      </form>
      <button type="submit">Submit</button>
    </div>
  );
}

export default CreateForm;
