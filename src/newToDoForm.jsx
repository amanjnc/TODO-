import React, { useState } from "react";

export default function ToDoForm(props) {
	const [newItem, setNewItem] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		props.something(newItem);
		setNewItem("");
	}

	return (
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
	);
}
