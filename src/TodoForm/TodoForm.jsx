import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoForm.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false );
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <label></label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="write your to do here!"
      />
      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button-cancel">
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
