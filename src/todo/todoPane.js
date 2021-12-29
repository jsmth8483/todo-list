import { todoManager } from './todoManager';
import { icons } from '../icons';
import { TodoCreationPrompt } from './todoCreationPrompt';
import { TodoList } from '.';

export class TodoPane {
	static todoList = new TodoList();
	static filterBy = '';
	static filter = '';
	constructor(title) {
		this.title = title;
	}

	render() {
		this.clearTodoContainer();
		const todoPane = document.createElement('div');
		todoPane.classList.add('todo-pane');

		const heading = document.createElement('h1');
		heading.textContent = this.title;
		todoPane.appendChild(heading);

		todoPane.appendChild(TodoPane.todoList.render());

		const addTodoContainer = this.#buildAddTodoContainer();
		todoPane.appendChild(addTodoContainer);

		return todoPane;
	}

	#buildAddTodoContainer() {
		const addTodoContainer = document.createElement('div');
		addTodoContainer.classList.add('add-todo-container');
		const addTodoDiv = this.#buildAddTodoDiv();
		addTodoDiv.addEventListener('click', () => {
			while (addTodoContainer.firstChild) {
				addTodoContainer.removeChild(addTodoContainer.firstChild);
			}
			const todoCreationPrompt = new TodoCreationPrompt();
			addTodoContainer.appendChild(todoCreationPrompt.render());

			const addTodoButton = document.createElement('button');
			addTodoButton.classList.add('add-todo-button', 'button');
			addTodoButton.textContent = 'Add Todo';
			addTodoButton.addEventListener('click', () => {
				const todoTitle = document.querySelector('.todo-title-input');
				const todoDueDate = document.querySelector('.due-date-input');
				const todoProject = document.querySelector('.project-input');

				todoManager.createTodo(
					todoTitle.value,
					todoDueDate.value,
					todoProject.value
				);
				todoTitle.value = '';
				todoDueDate.value = '';
				TodoPane.reloadTodos();
			});
			addTodoContainer.appendChild(addTodoButton);

			const cancelButton = document.createElement('button');
			cancelButton.classList.add('close-add-todo', 'button');
			cancelButton.textContent = 'Cancel';
			cancelButton.addEventListener('click', () => {
				while (addTodoContainer.firstChild) {
					addTodoContainer.removeChild(addTodoContainer.firstChild);
				}
				const addTodoDiv = this.#buildAddTodoDiv();
				addTodoContainer.appendChild(addTodoDiv);
			});
			addTodoContainer.appendChild(cancelButton);
		});
		addTodoContainer.appendChild(addTodoDiv);
		return addTodoContainer;
	}

	#buildAddTodoDiv() {
		const addTodoDiv = document.createElement('div');
		addTodoDiv.classList.add('add-list-todo');
		const addIcon = document.createElement('span');
		addIcon.className = icons.add;
		addTodoDiv.appendChild(addIcon);
		const addTodoText = document.createElement('span');
		addTodoText.classList.add('add-todo-text');
		addTodoText.textContent = 'Add task';
		addTodoDiv.appendChild(addTodoText);
		return addTodoDiv;
	}

	clearTodoContainer() {
		const todoPaneContainer = document.querySelector('#todo-pane-container');
		while (todoPaneContainer.firstChild) {
			todoPaneContainer.removeChild(todoPaneContainer.firstChild);
		}
	}

	static setFilter(filterBy, filter) {
		TodoPane.filter = filter;
		TodoPane.filterBy = filterBy;
	}

	static reloadTodos() {
		let todos;
		console.log(TodoPane.filterBy, TodoPane.filter);
		if (TodoPane.filterBy == 'date') {
			if (TodoPane.filter == 'week') {
				const fromDate = new Date();
				let toDate = new Date();
				toDate.setDate(fromDate.getDate() + 7);
				console.log(fromDate, toDate);
				todos = todoManager.getTodosByDate(fromDate, toDate);
			} else if (TodoPane.filter == 'today') {
				const fromDate = new Date();
				const toDate = new Date();
				todos = todoManager.getTodosByDate(fromDate, toDate);
			}
		} else {
			console.log('none');
			todos = todoManager.getTodos();
		}

		TodoPane.todoList.buildList(todos);
	}
}
