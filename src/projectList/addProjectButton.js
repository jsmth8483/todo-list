import { projectManager } from './projectManager';

export class AddProjectButton {
	render() {
		const button = document.createElement('span');
		const i = document.createElement('i');
		i.className = 'fa-solid fa-plus';
		button.appendChild(i);
		button.classList.add('addProjectButton');

		return button;
	}
}
