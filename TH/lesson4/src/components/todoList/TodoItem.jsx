// create a todo item component with modern style and use props to pass the data
import "./TodoItem.css"
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa"
import { useState } from "react"
const TodoItem = (props) => {
    const { index, title, description, handleDeleteTodo, handleEditTodo } = props;

    const [isEditing, setIsEditing] = useState(false)

    const [editTitle, setEditTitle] = useState(title)
    const [editDescription, setEditDescription] = useState(description)

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        setIsEditing(false)
        const editedTodo = { title: editTitle.trim(), description: editDescription.trim() }
        handleEditTodo(index, editedTodo)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    return (
        <div className="todo-item-container">
            <div className="todo-item-content">
                {
                    isEditing ? (
                        <div className="todo-item-edit-form">
                            <input
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                className="todo-item-title-input"
                                placeholder="Title"
                            />
                            <input
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                                className="todo-item-description-input"
                                placeholder="Description"
                            />
                            <div className="todo-item-edit-actions">
                                <button className="todo-item-action-button todo-item-action-button-save" onClick={handleSave}>
                                    <FaCheck />
                                </button>
                                <button className="todo-item-action-button todo-item-action-button-cancel" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="todo-item-display">
                            <h3 className="todo-item-title">{title}</h3>
                            <p className="todo-item-description">{description}</p>
                        </div>
                    )
                }
            </div>
            {!isEditing && (
                <div className="todo-item-actions">
                    <button className="todo-item-action-button todo-item-action-button-edit" onClick={handleEdit}>
                        <FaEdit />
                    </button>
                    <button className="todo-item-action-button todo-item-action-button-delete" onClick={() => handleDeleteTodo(index)}>
                        <FaTrash />
                    </button>
                </div>
            )}
        </div>
    )
}

export default TodoItem