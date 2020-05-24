import React, { createContext, useState} from 'react'
import {v1 as uuid} from 'uuid'

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
	const [tasks, setTask] = useState([
		{
			title: "Read a Book",
			id: 1
		},
		{
			title: "Find a Girlfriend",
			id: 2
		},
		{
			title: "Wash the card",
			id: 3
		}
	]);

	const [ editItem, setEditItem ] = useState(null);

	// Adding task functionality
	const addTask = (title) => {
		setTask([...tasks, {title, id:uuid()}])
	}

	const removeTask = id => {
		setTask(tasks.filter(task => task.id !== id));
	}

	const clearList = () => {
		setTask([]);
	}

	const findItem = id => {
		const item = tasks.find(task => task.id === id);
		setEditItem(item);
	}

	const editTask = (title, id) => {
		const newTasks = tasks.map(task => (task.id === id ? {title, id} : task))
		setTask(newTasks);
		setEditItem(null);
	}

	return (
		<TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask, editItem}}>
			{props.children}
		</TaskListContext.Provider>
	)
};

export default TaskListContextProvider;
