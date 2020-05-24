import React, { useContext, useState, useEffect } from 'react'
import {TaskListContext} from '../context/TaskListContext';

const TaskForm = () => {
	const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
	const [ title, setTitle ] = useState("");

	const handleChange = e => {
		setTitle(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!editItem){
			addTask(title);
			setTitle("");
		} else {
			editTask(title, editItem.id);
		}
	};

	useEffect(() => {
		if (editItem) {
			setTitle(editItem.title);
			console.log(editItem)
		} else {
			setTitle("");
		}
	}, [editItem])

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
				<button className="btn add-task-btn" type="submit">
					{editItem ? 'Edit Task' : 'Add Task'}
				</button>
				<button className="btn clear-btn" onClick={clearList} type="button"> Clear </button>
			</div>
		</form>
	)
}

export default TaskForm
