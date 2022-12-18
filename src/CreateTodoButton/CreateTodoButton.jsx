import React from "react";
import './CreateTodoButton.css';

export function CreateTodoButton({setOpenModal}) {
    const createTodo = () => {
        setOpenModal(prevState => !prevState);
    }
    return <button onClick={createTodo} className="createTodoButton">+</button>
}

