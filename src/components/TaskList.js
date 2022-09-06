import React, { useContext } from "react";
import { TaskListContext } from "../context.js/TaskListContext";

const TaskList = () => {
  useContext(TaskListContext);
  return <div>TaskList</div>;
};

export default TaskList;
