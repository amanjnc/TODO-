import { useState } from "react";
import "./styles.css";

export default function App() {
	const [newItem, setNewItem] = useState("");
	const [todos, setTodos] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		setTodos([
			...todos,
			{ id: crypto.randomUUID(), title: newItem, completed: false },
		]);
		setNewItem(""); // Clear the newItem input field after submitting
	}

	console.log(todos);

	return (
		<>
			<form onSubmit={handleSubmit} className='new-item-form'>
				<div className='form-row'>
					<label htmlFor='item'>New item</label>
					<input
						value={newItem}
						onChange={(e) => setNewItem(e.target.value)}
						type='text'
						id='item'
					/>
				</div>
				<button className='btn'>ADD</button>
			</form>
			<h1 className='header'>TODO LIST</h1>
			<ul className='list'>
				{/* Render the todo items dynamically */}
				{todos.map((todo) => (
					<li key={todo.id}>
						<label>
							{todo.title}
							<input type='checkbox' />
						</label>
						<button className='btn btn-danger'>Delete</button>
					</li>
				))}
			</ul>
		</>
	);
}
