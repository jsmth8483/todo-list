export class Project {
	constructor(title, color) {
		this.title = title;
		this.color = color;
	}

	setTitle(title) {
		this.title = title;
	}

	getTitle() {
		return this.title;
	}

	setColor(color) {
		this.color = color;
	}

	getColor() {
		return this.color;
	}
}
