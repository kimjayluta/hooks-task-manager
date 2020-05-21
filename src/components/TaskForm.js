import React, { useContext, useState } from 'react'
import {TaskListContext} from '../context/TaskListContext';

const TaskForm = () => {
	const { addTask } = useContext(TaskListContext);
	const [ title, setTitle ] = useState("");

	const handleChange = e => {
		setTitle(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		addTask(title);
		setTitle("");
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input 
				type="text" 
				className="task-input" 
				placeholder="Add Task..." 
				onChange={handleChange} 
				value={title}
				required
			/>
			<div className="buttons">
				<button className="btn add-task-btn" type="submit"> Add Task </button>
				<button className="btn clear-btn" onClick={() => setTitle("")} type="button"> Clear </button>
			</div>
		</form>
	)
}

export default TaskForm
