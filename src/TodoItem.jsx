import React from "react";
import './TodoItem.css';
import { IoTrash } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";


export function TodoItem({ text }) {
    return(
        <li className="todoItem">
            <span className="checked-icon"><AiOutlineCheck/></span>
            <p className="task-text">{text}</p>
            <span className="trash-icon"> <IoTrash/> </span>
        </li>
    )
}

