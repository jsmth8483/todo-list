import { v4 as uuid } from 'uuid';

export class TodoItem {
	constructor(title, dueDate, project) {
		this.id = uuid();
		this.title = title;
		this.dueDate = dueDate;
		this.project = project;
		this.isCompleted = false;
	}

	setPriority(priority) {
		this.priority = priority;
	}

	setCompleted(isCompleted) {
		this.isCompleted = isCompleted;
	}
}
