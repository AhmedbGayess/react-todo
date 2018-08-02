import React from "react";

const Todo = (props) => (
    <div className="todo">
        <input type="checkbox" 
        onChange={(e) => {
            props.handleTodoCompleted(props.text);
            props.handleDeleteTodo(props.text);        
        }}
        />
        <p className="todo__text">{props.text}</p>
        <button
        className="button button--delete"
            onClick={(e) => {
                props.handleDeleteTodo(props.text);
            }}
        >
            Delete Todo
        </button>
    </div>
);
export default Todo;