import React, { useContext } from "react";
import { TaskListContext } from "../context.js/TaskListContext";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return <div>{tasks}</div>;
};

export default TaskList;
