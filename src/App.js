import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import ReactDropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css';
import Calendar from 'react-calendar';
import './CustomCalendar.css';
import CreateForm from './createForm';
import LoginPage from './loginPage';
import CreateAccountPage from './createAccount';
import TaskCard from './taskViewer';

const taskOptions = [
  'Profile', 'Log Out'
];

function App() {
  const greetingMessage = Greeting();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate(); 
  const [selectedTask, setSelectedTask] = useState(taskOptions[0]);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', date: '1/19/2024', time: "11:00"},
    { id: 2, title: 'Task 2', date: '1/20/2024', time: "12:00"},
    { id: 3, title: 'Task 1', date: '1/19/2024', time: "11:00"},
    { id: 4, title: 'Task 2', date: '1/20/2024', time: "12:00"},
    { id: 5, title: 'Task 1', date: '1/19/2024', time: "11:00"},
    { id: 6, title: 'Task 2', date: '1/20/2024', time: "12:00"},
  ]);


  const handleCreateTask = () => {
    // Add logic to create a new task
    console.log('Creating a new task');
    navigate('/create-form');
  };

  const handleLoginButton = () => {
    navigate('/login-page');
  };

  const handleCalendarChange = (date) => {
    // Update the selectedDate state when the user selects a date
    setSelectedDate(date);
  };

  const handleTaskChange = (selected) => {
    setSelectedTask(selected.value);

    if (selected.value === 'Log Out') {
      handleLoginButton();
    }
  };

  const formattedMonth = selectedDate.toLocaleDateString(undefined, { month: 'long' });

  return (
    <div className="App">
      <p>{greetingMessage}</p>
      <ReactDropdown
        className="dropdown"
        options={taskOptions}
        value={selectedTask}
        onChange={handleTaskChange}
      />

      <div className="customCalendarBox">
      <h1>{formattedMonth}</h1>
      <Calendar
        onChange={handleCalendarChange}
        value={selectedDate} 
        showNavigation={false}
      />
      </div>
      
      <button className="createTaskButton" onClick={handleCreateTask}>Create a new task</button>
      <p>Selected Date: {selectedDate.toDateString()}</p>
      <p>List of tasks:</p>

      <div className="card-container">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

    </div>
  );
}


function Greeting() {
  var date = new Date();
  var time = date.getHours();
  
  var greeting = "";

  if (time < 12) {
    greeting = "Good morning";
  } 
  else if (time >= 12 && time < 18) {
    greeting = "Good afternoon";
  } 
  else {
    greeting = "Good evening";
  }

  return greeting;
}

// Yeah this is just how I have routers setup. I'll do a better job next time.
function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path= "/create-account" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
}

export default Main;