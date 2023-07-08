import { useState } from "react";
import React from 'react';



const TodoCard = (props) => {
    console.log("render");
    const td = props.value;
    const [isPressed, setIsPressed] = useState(td.completed);

    function toggleHandler(id, isToggle) {
        props.todoToggler(id, isToggle);
        setIsPressed(isToggle);

    }


    return (
        <li key={td.id}>
            <label for={td.id} className={(td.completed) ? "checkbox-icon fill" : "checkbox-icon"}></label>
            <input type="checkbox" id={td.id} className="checkbox" checked={td.completed} onChange={e => toggleHandler(td.id, e.target.checked)} />
            <label className="todo-text">{td.title}</label>
            <label className={isPressed ? "show-btn" : "show-btn hide"} onClick={() => props.deleteTodo(td.id)}>Delete</label>
        </li>

    );
}

export default TodoCard;