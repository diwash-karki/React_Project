import React from "react";
import { useState } from "react";
const Form = (props) => {
    const [newItem, setnewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return
        props.onSubmit(newItem);
        setnewItem("");
    }

    return <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <input type="text" placeholder="Create a new todo.." value={newItem} onChange={e => setnewItem(e.target.value)} className="text-holder" id="item" />
        </div>
    </form>
}

export default Form;