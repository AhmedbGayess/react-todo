import React from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

class TodoApp extends React.Component {
    state = {
        todos: [],
        completedTodos: []
    };
    handleAddTodo = (todo) => {
        if (!todo) {
            return "Enter a valid todo"
        } else if (this.state.todos.indexOf(todo) > -1) {
            return "This todo already exists"
        }
        this.setState((prevState) => ({
            todos: prevState.todos.concat(todo)
        }));

    }
    handleDeleteTodos = () => {
        this.setState(() => ({ todos: [] }));
    }
    handleDeleteTodo = (todoToDelete) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todoToDelete !== todo)
        }));
    }
    handleTodoCompleted = (todo) => {
        this.setState((prevState) => ({
            completedTodos: prevState.completedTodos.concat(todo)
        }));
    }
    componentDidMount = () => {
        try {
            const todos = JSON.parse(localStorage.getItem("todos"))
            if (todos) {
                this.setState(() => ({ todos }));
            }
        } catch (e) {

        }
        try {
            const completedTodos = JSON.parse(localStorage.getItem("completedTodos"))
            if (completedTodos) {
                this.setState(() => ({ completedTodos }));
            }
        } catch (e) {

        }

    }
    componentDidUpdate = (prevProps, prevState) => {

        if (prevState.completedTodos.length !== this.state.completedTodos.length) {
            const completedTodos = JSON.stringify(this.state.completedTodos);
            localStorage.setItem("completedTodos", completedTodos);
        }
        if (prevState.todos.length !== this.state.todos.length) {
            const todos = JSON.stringify(this.state.todos);
            localStorage.setItem("todos", todos);
        }

    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <AddTodo
                        handleAddTodo={this.handleAddTodo} />
                    <Todos
                        todos={this.state.todos}
                        completedTodos={this.state.completedTodos}
                        handleDeleteTodos={this.handleDeleteTodos}
                        handleDeleteTodo={this.handleDeleteTodo}
                        handleTodoCompleted={this.handleTodoCompleted}
                    />
                </div>
            </div>
        );
    }
};

export default TodoApp;