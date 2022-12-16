import React from "react";
import './TodoItem.css';
import { IoTrash } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";


export function TodoItem({ text, completed, onToggle, onDelete }) {

    const deleteTodo = () => {
        alert(`Delete Todo ${text}`);
    }

    return(
        <li className="todoItem">
            <span onClick={onToggle} className={`checked-icon ${completed && 'color-green'}`}><AiOutlineCheck/></span>
            <p className={`task-text ${completed && 'green-text-line-through'}`}>{text}</p>
            <span onClick={onDelete} className="trash-icon"> <IoTrash/> </span>
        </li>
    )
}

