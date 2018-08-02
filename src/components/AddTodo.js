import React from "react";

class AddTodo extends React.Component {
    state = {
        error: undefined
    }
    handleAddTodo = (e) => {
        e.preventDefault();
        const todo = e.target.elements.todo.value.trim();
        const error = this.props.handleAddTodo(todo);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.todo.value = "";
        }
    }
    render() {
        return (
            <div className="add-todo-container">
                <h2 className="title">Add a Todo</h2>
                <form
                    className="add-todo"
                    onSubmit={this.handleAddTodo}
                >
                    <input
                        className="add-todo__input"
                        type="text" name="todo"
                    />
                    <button className="button">Add Todo</button>
                </form>
                {this.state.error && <p className="add-todo-error">{this.state.error}</p>}
            </div>
        );
    }
}

export default AddTodo; 