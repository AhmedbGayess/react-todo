import React from "react";

const completedTodo = (props) => (
    <div className="todo">
        <p className="todo__text">{props.text}</p>
    </div>
);
export default completedTodo;