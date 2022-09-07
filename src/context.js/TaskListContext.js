import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = () => {
  return <TaskListContext.Provider />;
};

export default TaskListContextProvider;
