import React from "react";

export const Tasks = ({ inputText, taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>{task.text}</div>
      ))}
    </div>
  );
};
