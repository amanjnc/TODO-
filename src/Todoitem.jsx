export function Todoitem( ) {
    return (
			<li key={todo.id}>
				<label>
					{todo.title}
					<input
						type='checkbox'
						checked={todo.completed}
						onChange={(e) => toggleChange(todo.id, e.target.checked)}
					/>
				</label>
				<button onClick={() => deleteTask(todo.id)} className='btn btn-danger'>
					Delete
				</button>
			</li>
		);
}