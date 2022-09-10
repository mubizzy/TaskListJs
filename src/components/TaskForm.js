import React from "react";

const TaskForm = () => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
