import React, { useState } from "react";
import "./styles.css";
import ToDoForm from "./newToDoForm";

export default function App() {
	const [todos, setTodos] = useState([]);

	function settingTheToDO(title) {
		setTodos((todos) => [
			...todos,
			{ id: crypto.randomUUID(), title, completed: false },
		]);
	}

	function toggleChange(id, completed) {
		setTodos((todos) =>
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: completed };
				}
				return todo;
			})
		);
	}

	function deleteTask(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	console.log(todos);

	return (
		<>
			<ToDoForm something={settingTheToDO} />
      <h1 className='header'>TODO LIST </h1>
      <ToDoList anotherthing={ settingTheList} />
			
		</>
	);
}
