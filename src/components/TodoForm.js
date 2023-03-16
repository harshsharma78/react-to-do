import React from 'react';
import { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : '');
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleSubmit = e => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput('');
	};
	const handleChange = e => {
		setInput(e.target.value);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='todo-form'
		>
			{props.edit ? (
				<>
					<input
						onChange={handleChange}
						type='text'
						placeholder='Update'
						value={input}
						name='text'
						className='todo-input edit'
						ref={inputRef}
					/>
					<button className='todo-button edit'>Update</button>
				</>
			) : (
				<>
					<input
						onChange={handleChange}
						type='text'
						placeholder='Add a todo'
						value={input}
						name='text'
						className='todo-input edit'
						ref={inputRef}
					/>
					<button className='todo-button edit'>Add todo</button>
				</>
			)}
		</form>
	);
}

export default TodoForm;
