import { Project } from './drawer';
import { TodoItem } from './todo/todoItem';

const storageManager = (function () {
	function getProjects() {
		if (localStorage.hasOwnProperty('projects')) {
			const json = JSON.parse(localStorage.getItem('projects'));
			return json.map((item) => Object.assign(new Project(), item));
		}
		return [];
	}

	function storeProject(project) {
		if (localStorage.hasOwnProperty('projects')) {
			const projects = getProjects();
			console.log(projects);
			projects.push(project);
			localStorage.setItem('projects', JSON.stringify(projects));
		} else {
			let projects = [];
			projects.push(project);
			localStorage.setItem('projects', JSON.stringify(projects));
		}
	}

	function getTodos() {
		if (localStorage.hasOwnProperty('todos')) {
			const json = JSON.parse(localStorage.getItem('todos'));
			const todos = json.map((item) => Object.assign(new TodoItem(), item));
			return todos;
		}
		return [];
	}

	function storeTodo(todo) {
		if (localStorage.hasOwnProperty('todos')) {
			const todos = getTodos();
			console.log(todos);
			todos.push(todo);
			localStorage.setItem('todos', JSON.stringify(todos));
		} else {
			let todos = [];
			todos.push(todo);
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	}

	return { getProjects, storeProject, getTodos, storeTodo };
})();

export { storageManager };
