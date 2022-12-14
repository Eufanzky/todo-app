import React from "react";
import './TodoList.css';
export function TodoList(props) {
    return(
        <section className="todoList">
            <ul className="todoList-ul">
                {props.children}
            </ul>
        </section>
    )
}

