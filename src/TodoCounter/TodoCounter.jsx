import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCounter.css";

export function TodoCounter() {
  const { numberOfCompletedTodos, numberOfTotalTodos } =
    useContext(TodoContext);
  return (
    <h2 className="todoCounter">
      You have completed {numberOfCompletedTodos} of {numberOfTotalTodos} tasks
    </h2>
  );
}
