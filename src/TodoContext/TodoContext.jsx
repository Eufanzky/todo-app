import React, { useState, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos-v1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);


  const numberOfCompletedTodos = todos.filter(
    (item) => item.completed === true
  ).length;
  const numberOfTotalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((item) => {
      const todoText = item.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos);
  };


  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((item) => item.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((item) => item.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        numberOfCompletedTodos,
        numberOfTotalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }