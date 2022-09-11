import React, { useContext, useState } from "react";
import { TaskListContext } from "../context.js/TaskListContext";

const TaskForm = () => {
  const { addTasks } = useContext(TaskListContext);

  const [titl, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTasks(titl);
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add Task..."
        value={title}
        // onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button className="btn clear-btn">Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
