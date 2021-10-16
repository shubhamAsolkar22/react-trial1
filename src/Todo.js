import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleToggleTodo(e) {
        toggleTodo(todo.id);
    }
    function getTask() {
        if (todo.striked)
            return <strike>{todo.task}</strike>
        else return todo.task
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={handleToggleTodo} />
                {getTask()}
            </label>
        </div>
    );
}
