import React, { useContext } from "react";
import { TaskListContext } from "../context.js/TaskListContext";
import { Task } from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <TaskForm />
      <ul className="list">
        {tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
