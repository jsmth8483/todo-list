import { todoManager } from './todoManager';
import { formatRelative } from 'date-fns';

export class Todo {
	constructor(todoItem) {
		this.todoItem = todoItem;
	}
	render() {
		const todo = this.#buildTodo();

		return todo;
	}

	#buildTodo() {
		const todo = document.createElement('div');
		todo.classList.add('todo');

		const titleRow = document.createElement('div');
		titleRow.classList.add('todo-title-row');
		const checkbox = this.#buildCheckbox();
		const title = this.#buildTitle();
		titleRow.appendChild(checkbox);
		titleRow.appendChild(title);

		const detailsRow = document.createElement('div');
		detailsRow.classList.add('todo-details-row');
		const projectLabel = this.#buildProjectLabel();
		const dueDateLabel = this.#buildDueDateLabel();
		detailsRow.appendChild(dueDateLabel);
		detailsRow.appendChild(projectLabel);

		todo.appendChild(titleRow);
		todo.appendChild(detailsRow);

		return todo;
	}

	#buildCheckbox() {
		const checkbox = document.createElement('span');
		checkbox.className = this.todoItem.isCompleted
			? 'far fa-check-square'
			: 'far fa-square';
		checkbox.classList.add('checkbox');

		checkbox.addEventListener('mouseover', (event) => {
			if (
				event.target.classList.contains('fa-square') &&
				!this.todoItem.isCompleted
			) {
				event.target.classList.remove('fa-square');
				event.target.classList.add('fa-check-square');
			}
		});
		checkbox.addEventListener('mouseout', (event) => {
			if (
				event.target.classList.contains('fa-square') &&
				this.todoItem.isCompleted
			) {
				event.target.classList.remove('fa-square');
				event.target.classList.add('fa-check-square');
			} else if (!this.todoItem.isCompleted) {
				event.target.classList.remove('fa-check-square');
				event.target.classList.add('fa-square');
			}
		});

		checkbox.addEventListener('click', (event) => {
			this.todoItem.isCompleted
				? this.todoItem.setCompleted(false)
				: this.todoItem.setCompleted(true);
			event.target.className = this.todoItem.isCompleted
				? 'far fa-check-square'
				: 'far fa-square';
			todoManager.updateTodo(this.todoItem);
		});

		return checkbox;
	}

	#buildTitle() {
		const todoTitle = document.createElement('span');
		todoTitle.classList.add('todo-desc');
		todoTitle.textContent = this.todoItem.title;
		return todoTitle;
	}

	#buildDueDateLabel() {
		const dueDateLabel = document.createElement('span');
		dueDateLabel.classList.add('todo-due-date-label');
		dueDateLabel.textContent = formatRelative(
			new Date(this.todoItem.dueDate),
			new Date()
		);
		return dueDateLabel;
	}

	#buildProjectLabel() {
		const projectLabel = document.createElement('span');
		projectLabel.classList.add('todo-project-label');
		projectLabel.textContent = this.todoItem.project;

		return projectLabel;
	}
}
