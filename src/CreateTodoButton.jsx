import React from "react";
import './CreateTodoButton.css';

export function CreateTodoButton() {
    const createTodo = () => {
        alert('create todo :D');
    }
    return <button onClick={createTodo} className="createTodoButton">+</button>
}

