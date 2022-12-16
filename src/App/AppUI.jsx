import React from "react";

import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

export function AppUI({
  loading,
  error,
  numberOfCompletedTodos,
  numberOfTotalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleCompleteTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter
        numberOfCompletedTodos={numberOfCompletedTodos}
        numberOfTotalTodos={numberOfTotalTodos}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <p>Cargando...</p>}
        {error && <p>Hubo un error</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}


        {searchedTodos.map((item) => {
          return (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              onToggle={() => toggleCompleteTodo(item.text)}
              onDelete={() => deleteTodo(item.text)}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}
