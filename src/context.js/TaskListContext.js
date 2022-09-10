import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = () => {
  const [tasks, setTasks] = useState([
    { task: "read a book", id: 1 },
    { task: "wash the car", id: 2 },
    { task: "Write some code", id: 3 },
  ]);
  return;
};

export default TaskListContextProvider;
