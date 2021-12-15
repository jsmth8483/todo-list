export class TodoItem {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.isCompleted = false;
	}

	setPriority(priority) {
		this.priority = priority;
	}

	setCompleted(isCompleted) {
		this.isCompleted = isCompleted;
	}
}