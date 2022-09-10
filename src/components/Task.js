import React from "react";

export const Task = () => {
  return (
    <li className="list-item">
      <span>task title </span>
      <div>
        <button className="btn-delete task-btn">
          <i className=" fas fa-light fa-pen"></i>
        </button>
      </div>
    </li>
  );
};
