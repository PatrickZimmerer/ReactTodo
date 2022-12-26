import React from 'react';
import Todo from '../model';
import './styles.css';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: Props) {
	return <div className="todos">TodoList</div>;
}

export default TodoList;
