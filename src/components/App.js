import React from "react";
import "../App.css";
import TaskListContextProvider from "../context.js/TaskListContext";
import Header from "./Header";
const App = () => {
  return (
    <TaskListContextProvider>
      <div className="app-wrapper">
        <Header />
      </div>
      ;
    </TaskListContextProvider>
  );
};

export default App;
