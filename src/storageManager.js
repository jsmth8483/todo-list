const storageManager = (function storageManager() {
	function getProjects() {
		const projectsJSON = localStorage.getItem('projects');
		if (projectsJSON) {
			return JSON.parse(projectsJSON);
		}
		return [];
	}

	function storeProject(project) {
		if (localStorage.getItem('projects')) {
			const projects = getProjects();
			projects.push(project);
			localStorage.setItem('projects', JSON.stringify(projects));
		} else {
			let projects = [];
			projects.push(project);
			localStorage.setItem('projects', JSON.stringify(projects));
		}
	}

	function getTodos() {
		if (localStorage.getItem('todos')) {
			return JSON.parse(localStorage.getItem('todos'));
		}
		return [];
	}

	function storeTodo(todo) {
		if (localStorage.getItem('todos')) {
			const todos = getTodos();
			const existingTodo = todos.find((t) => t.id == todo.id);
			if (existingTodo) {
				todos[todos.indexOf(existingTodo)] = todo;
			} else {
				todos.push(todo);
			}

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
