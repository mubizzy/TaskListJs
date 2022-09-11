import React, { createContext, useState } from "react";
// import { uuid } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "read a book", id: 1 },
    { title: "wash the car", id: 2 },
    { title: "Write some code", id: 3 },
  ]);

  const addTask = () => {
    setTasks([...tasks, { title: title }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
