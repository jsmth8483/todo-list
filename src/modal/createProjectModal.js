import { Drawer } from '../drawer';
import { projectManager } from '../drawer/projectManager';
import { Modal } from './modal';

export class CreateProjectModal extends Modal {
	constructor() {
		super('Create Project');
	}

	render() {
		const modal = super.render();
		const form = this.#buildCreateProjectForm();
		modal.appendChild(form);

		return modal;
	}

	#buildNameInputLabel() {
		const nameInputLabel = document.createElement('label');
		nameInputLabel.htmlFor = 'name-input';
		nameInputLabel.innerText = 'Name:';
		return nameInputLabel;
	}

	#buildNameInput() {
		const nameInput = document.createElement('input');
		nameInput.name = 'name';
		nameInput.id = 'name-input';
		nameInput.type = 'text';
		return nameInput;
	}

	#buildColorInputLabel() {
		const colorInputLabel = document.createElement('label');
		colorInputLabel.htmlFor = 'color-input';
		colorInputLabel.innerText = 'Color:';
		return colorInputLabel;
	}

	#buildColorInput() {
		const colorInput = document.createElement('input');
		colorInput.name = 'color';
		colorInput.id = 'color-input';
		colorInput.type = 'color';
		return colorInput;
	}

	#buildCreateProjectForm() {
		const form = document.createElement('form');

		const nameInputLabel = this.#buildNameInputLabel();
		const nameInput = this.#buildNameInput();
		const colorInputLabel = this.#buildColorInputLabel();
		const colorInput = this.#buildColorInput();

		form.appendChild(nameInputLabel);
		form.appendChild(nameInput);
		form.appendChild(colorInputLabel);
		form.appendChild(colorInput);

		const submitButton = document.createElement('input');
		submitButton.type = 'submit';
		submitButton.classList.add('button');
		form.appendChild(submitButton);
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			console.log(colorInput.value);
			this.createProject(nameInput.value, colorInput.value);
			this.removeModal();
			Drawer.reloadProjects();
		});

		return form;
	}

	createProject(title, color) {
		projectManager.createProject(title, color);
	}
}
