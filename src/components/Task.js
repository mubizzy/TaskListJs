import React from "react";

export const Task = ({ task }) => {
  const { removeTask } = useContext(TaskListContext);
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button className="btn-delete task-btn">
          <i className=" fas fa-light fa-pen"></i>
        </button>
        <button className="btn-delete task-btn onClick={() => removeTask(task.id)}">
          <i className=" fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};
