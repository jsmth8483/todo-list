import { storageManager } from '../storageManager';
import { TodoItem } from './todoItem';

const todoManager = (function () {
	// const todoList = new TodoList();

	function createTodo(title, dueDateValue, project) {
		console.log(dueDateValue);
		const dueDate = dueDateValue ? new Date(dueDateValue) : null;
		const todo = new TodoItem(title, dueDate, project);
		storageManager.storeTodo(todo);
	}

	function updateTodo(todo) {
		storageManager.storeTodo(todo);
	}

	function getTodos() {
		const json = storageManager.getTodos();
		return json.map((item) => Object.assign(new TodoItem(), item));
	}
	function getTodosByProject(projectId) {
		const json = storageManager.getTodos();
		return json
			.filter((todo) => todo.project == projectId)
			.map((item) => Object.assign(new TodoItem(), item));
	}
	function getTodosByDate(fromDate, toDate) {
		const todos = getTodos();
		const todosByDate = todos
			.filter((todo) => todo.dueDate !== null)
			.filter((todo) => {
				const dueDate = new Date(todo.dueDate);
				return (
					dueDate >= fromDate.setHours(0, 0, 0, 0) &&
					dueDate <= toDate.setHours(23, 59, 59, 999)
				);
			});
		console.log(todosByDate);
		return todosByDate;
	}

	return {
		createTodo,
		getTodos,
		getTodosByDate,
		updateTodo,
		getTodosByProject,
	};
})(storageManager);

export { todoManager };
