import { Todo } from './todo';

export class TodoList {
	render() {
		const todoListContainer = document.createElement('div');
		todoListContainer.classList.add('todo-list');
		return todoListContainer;
	}
	#buildTodoListItems(todos) {
		const todoListItemsDiv = document.createElement('div');
		todos.forEach((todoItem) => {
			if (!todoItem.isCompleted) {
				const todo = new Todo(todoItem);
				todoListItemsDiv.appendChild(todo.render());
			}
		});
		return todoListItemsDiv;
	}
	buildList(todoItems) {
		const todoList = document.querySelector('.todo-list');
		this.#clearList();
		const todos = this.#buildTodoListItems(todoItems);
		todoList.appendChild(todos);
	}
	#clearList() {
		const todoListContainer = document.querySelector('.todo-list');
		while (todoListContainer.firstChild) {
			todoListContainer.removeChild(todoListContainer.firstChild);
		}
	}
}
