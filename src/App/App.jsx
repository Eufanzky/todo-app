import React, { useState, useEffect } from "react";
import { TodoProvider } from "../TodoContext/TodoContext";
import { AppUI } from "./AppUI";
import "./App.css";

// const defaultTodos = [
//   { text: "Normal Task asdasdasdasd", completed: false },
//   { text: "This task is so larg ", completed: false },
//   { text: "Short task", completed: true },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
