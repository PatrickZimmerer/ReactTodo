import React, { useEffect, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos, completedTodos, setCompletedTodos }: Props) {
	const useStrictDroppable = (loading: boolean) => {
		const [enabled, setEnabled] = useState(false);

		useEffect(() => {
			let animation: any;

			if (!loading) {
				animation = requestAnimationFrame(() => setEnabled(true));
			}

			return () => {
				cancelAnimationFrame(animation);
				setEnabled(false);
			};
		}, [loading]);

		return [enabled];
	};
	const [enabled] = useStrictDroppable(false);
	return (
		<div className="container">
			{enabled && (
				<Droppable droppableId="todosList">
					{(provided) => (
						<div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
							<span className="todos-heading">Active Tasks</span>
							{todos.map((todo, index) => (
								<SingleTodo
									index={index}
									todo={todo}
									key={todo.id}
									todos={todos}
									setTodos={setTodos}
								/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			)}
			{enabled && (
				<Droppable droppableId="todosRemove">
					{(provided) => (
						<div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
							<span className="todos-heading">Completed Tasks</span>
							{completedTodos.map((todo, index) => (
								<SingleTodo
									index={index}
									todo={todo}
									key={todo.id}
									todos={completedTodos}
									setTodos={setCompletedTodos}
								/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			)}
		</div>
	);
}

export default TodoList;
