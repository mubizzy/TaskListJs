import React from "react";
import TaskListContextProvider from "../context.js/TaskListContext";
import "../App.css";
import TaskList from "./TaskList";
const App = () => {
  return (
    <TaskListContextProvider>
      <div>
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
};

export default App;
