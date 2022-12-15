import React, { useState } from "react";
import "./TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue }) {

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
