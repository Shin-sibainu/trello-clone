import React from "react";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    //カードを追加する。
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
