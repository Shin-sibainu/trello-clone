import React from "react";
import { Task } from "./Task";

export const Tasks = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};
