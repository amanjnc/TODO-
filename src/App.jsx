import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
     setTodos((todos) => [
				...todos,
				{ id: crypto.randomUUID(), title: newItem, completed: false },
			]);
    
    
    setNewItem("");
  }
  function togglechange(id, completed) {
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
      <form onSubmit={(e) => handleSubmit(e) } className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">ADD</button>
      </form>
      <h1 className="header">TODO LIST </h1>
      <ul className="list">
        {todos.length ===0 && "No TOdos"}


        {todos.map((todo) => (
          <li >
            <label>
              {todo.title}
              <input type="checkbox" checked={todo.completed} onChange={(e)=> togglechange(todo.id, e.target.checked)}   />
            </label>
            <button
              onClick={() => deleteTask(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}