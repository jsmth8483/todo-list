import { icons } from '../icons';
import { Todo } from './todo';

export class TodoList {
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

		const addTodoDiv = document.createElement('div');
		addTodoDiv.classList.add('add-list-todo');

		const addIcon = document.createElement('span');
		addIcon.className = icons.add;
		addTodoDiv.appendChild(addIcon);

		const addTodoText = document.createElement('span');
		addTodoText.classList.add('add-todo-text');
		addTodoText.textContent = 'Add task';
		addTodoDiv.appendChild(addTodoText);

		todoListContainer.appendChild(addTodoDiv);

		return todoListContainer;
	}

	clearList() {
		const todoListContainer = document.querySelector('#todoListContainer');
		while (todoListContainer.firstChild) {
			todoListContainer.removeChild(todoListContainer.firstChild);
		}
	}
}
