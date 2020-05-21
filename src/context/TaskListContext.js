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

	// Adding task functionality
	const addTask = (title) => {
		setTask([...tasks, {title, id:uuid()}])
	}

	return (
		<TaskListContext.Provider value={{tasks, addTask}}>
			{props.children}
		</TaskListContext.Provider>
	)
};

export default TaskListContextProvider;
