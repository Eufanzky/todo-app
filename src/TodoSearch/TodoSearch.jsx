import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <input
      onChange={handleSearchValueChange}
      placeholder="Search a task!"
      value={searchValue}
      className="todoSearch"
    />
  );
}
