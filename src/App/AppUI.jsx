import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm/TodoForm";

export function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>Cargando...</p>}
        {error && <p>Hubo un error</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

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
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
       />
    </React.Fragment>
  );
}
