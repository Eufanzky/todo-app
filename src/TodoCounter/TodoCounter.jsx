import React from "react";
import './TodoCounter.css';

export function TodoCounter({ numberOfCompletedTodos, numberOfTotalTodos }) {
  return <h2 className="todoCounter">You have completed {numberOfCompletedTodos} of {numberOfTotalTodos} tasks</h2>;
}

