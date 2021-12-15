export class Todo {
	constructor(todoItem) {
		this.todoItem = todoItem;
	}
	render() {
		const todo = this.#buildTodo();
		const checkbox = this.#buildCheckbox();
		const title = this.#buildTitle();

		todo.appendChild(checkbox);
		todo.appendChild(title);
		return todo;
	}

	#buildTodo() {
		const todo = document.createElement('div');
		todo.classList.add('todo');
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
			console.log(this.todoItem);
			this.todoItem.isCompleted
				? this.todoItem.setCompleted(false)
				: this.todoItem.setCompleted(true);
			event.target.className = this.todoItem.isCompleted
				? 'far fa-check-square'
				: 'far fa-square';
			console.log(this.todoItem);
		});

		return checkbox;
	}

	#buildTitle() {
		const todoTitle = document.createElement('span');
		todoTitle.classList.add('todoDesc');
		todoTitle.textContent = this.todoItem.title;
		return todoTitle;
	}
}
