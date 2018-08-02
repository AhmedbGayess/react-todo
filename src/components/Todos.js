import React from "react";
import Todo from "./Todo";
import CompletedTodo from "./CompletedTodo";

const Todos = (props) => (
    <div>
        <h2 className="title">Your Todos</h2>
        <button
        className="button button--empty"
        onClick={props.handleDeleteTodos}
        >
        Delete all Todos</button>
        {props.todos.length === 0 && <p className="add-todo-error">No todos to display</p>}
        {
            props.todos.map((todo) =>
                <Todo
                    key={todo}
                    text={todo}
                    handleDeleteTodo={props.handleDeleteTodo}
                    handleTodoCompleted={props.handleTodoCompleted}
                />
            )
        }
        <div>
            <h2 className="title">Completed Todos</h2>
            {
                props.completedTodos.map((todo, index) =>
                    <CompletedTodo
                        key={index}
                        text={todo}
                    />
                )
            }
        </div>
    </div>
);
export default Todos;