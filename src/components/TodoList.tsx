import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: Props) {
	return (
		<div className="container">
			<div className="todos">
				<span className="todos-heading">Active Tasks</span>
				{todos.map((todo) => (
					<SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
				))}
			</div>
			<div className="todos remove">
				<span className="todos-heading">Completed Tasks</span>
				{todos.map((todo) => (
					<SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
				))}
			</div>
		</div>
	);
}

export default TodoList;
