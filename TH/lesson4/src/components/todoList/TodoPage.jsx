import TodoItem from "./TodoItem"
import FormInput from "./FormInput"
import { useState } from "react"
import "./TodoPage.css"

const TodoPage = () => {
    const [todos, setTodos] = useState([])

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos, todo])
    }

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }

    const handleEditTodo = (index, todo) => {
        setTodos(todos.map((t, i) => i === index ? todo : t))
    }

    return (
        <div className="todo-page-container">
            <div className="todo-page-header">
                <h1 className="todo-page-title">Todo List</h1>
                <p className="todo-page-subtitle">{todos.length} {todos.length === 1 ? 'task' : 'tasks'}</p>
            </div>
            <FormInput handleAddTodo={handleAddTodo} />
            <div className="todo-list-container">
                {todos.length === 0 ? (
                    <div className="todo-empty-state">
                        <p>No tasks yet. Add one above to get started!</p>
                    </div>
                ) : (
                    todos.map((todo, index) => {
                        return (
                            <TodoItem
                                key={index}
                                index={index}
                                title={todo.title}
                                description={todo.description}
                                handleDeleteTodo={handleDeleteTodo}
                                handleEditTodo={handleEditTodo}
                            />
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default TodoPage