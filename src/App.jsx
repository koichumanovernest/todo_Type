import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
	const todos = useSelector((state) => state);
	const dispatch = useDispatch();
	const [todo, setTodo] = useState("");
	const [editTodoId, setEditTodoId] = useState("");
	const [editTodoName, setEditTodoName] = useState("");

	const AddTodo = () => {
		dispatch({ type: "ADD_TODO", payload: { id: Math.random(), name: todo, completed: false } });
		setTodo("");
	};

	const Delete = (todoIdToDelete) => {
		dispatch({ type: "DELETE_TODO", payload: { id: todoIdToDelete } });
	};

	const Edit = (todoId, name) => {
		setEditTodoName(name);
		setEditTodoId(todoId);
	};

	const SaveEdit = (todoId) => {
		dispatch({
			type: "EDIT_TODO",
			payload: { id: todoId, name: editTodoName },
		});
		setEditTodoId("");
	};

	const ToggleCompleted = (todoId) => {
		dispatch({ type: "TOGGLE_TODO", payload: { id: todoId } });
	};

	

	return (
		<div className="App">
			<input className="class"
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button onClick={AddTodo}>Add</button>
			{todos.map((item) => (
				<div key={item.id}>
					{editTodoId === item.id ? (
						<>
							<input className="class"
								type="text"
								value={editTodoName}
								onChange={(e) => setEditTodoName(e.target.value)} // Fix this line
							/>
							<button onClick={() => SaveEdit(item.id)}>Save</button>
						</>
					) : (
						<>
							<p
								style={{
									textDecoration: item.completed ? "line-through" : "none",
								}}>
								{item.name}
							</p>
							<input
								type="checkbox"
								checked={item.completed}
								onChange={() => ToggleCompleted(item.id)}
							/>
							<button onClick={() => Edit(item.id, item.name)}>Edit</button>
							<button onClick={() => Delete(item.id)}>Delete</button>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default App;
