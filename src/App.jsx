import React, { useState } from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Normal Task asdasdasdasd", completed: false },
  { text: "This task is so larg ", completed: false },
  { text: "Short task", completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const numberOfCompletedTodos = todos.filter(
    (item) => item.completed === true
  ).length;
  const numberOfTotalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(item => {
      const todoText = item.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    })
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(item => item.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(item => item.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter
        numberOfCompletedTodos={numberOfCompletedTodos}
        numberOfTotalTodos={numberOfTotalTodos}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((item) => {
          return (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              onToggle={()=>toggleCompleteTodo(item.text)}
              onDelete = {() => deleteTodo(item.text)}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
