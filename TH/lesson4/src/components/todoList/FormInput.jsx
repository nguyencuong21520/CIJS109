import "./FormInput.css"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"

const FormInput = (props) => {
    const { handleAddTodo } = props;
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim()) {
            const todo = { title: title.trim(), description: description.trim() }
            handleAddTodo(todo)
            setTitle("")
            setDescription("")
        }
    }

    return (
        <form className="form-input-container" onSubmit={handleSubmit}>
            <div className="form-input-fields">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-input-title"
                    type="text"
                    placeholder="What needs to be done?"
                    required
                />
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-input-description"
                    type="text"
                    placeholder="Add a description (optional)"
                />
            </div>
            <button className="form-input-button" type="submit">
                <FaPlus />
                <span>Add Task</span>
            </button>
        </form>
    )
}

export default FormInput