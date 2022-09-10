import React from "react";
import TaskListContextProvider from "../context.js/TaskListContext";
import "../App.css";
import TaskList from "./TaskList";
const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
