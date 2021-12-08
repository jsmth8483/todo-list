import { Todo } from './todo';

export class TodoList {
	//Should this take a filter function instead of a project? That way it can just run the filter to pull the required todos
	//Write a class to query from storage similar to a repository class?
	constructor(title, todos) {
		this.title = title;
		this.todos = todos;
	}
	render() {
		const todoListContainer = document.createElement('div');
		todoListContainer.classList.add('todoList');
		const heading = document.createElement('h1');
		heading.textContent = this.title;
		todoListContainer.appendChild(heading);
		const todoListItems = document.createElement('div');
		todoListContainer.appendChild(todoListItems);

		this.todos.forEach((todoItem) => {
			const todo = new Todo(todoItem);
			console.log(todo);
			todoListItems.appendChild(todo.render());
		});

		return todoListContainer;
	}

	clearList() {
		const todoListContainer = document.querySelector('#todoListContainer');
		while (todoListContainer.firstChild) {
			todoListContainer.removeChild(todoListContainer.firstChild);
		}
	}
}
