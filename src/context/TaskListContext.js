import React, { createContext, useState} from 'react'

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

	return (
		<TaskListContext.Provider value={{tasks}}>
			{props.children}
		</TaskListContext.Provider>
	)
};

export default TaskListContextProvider;
