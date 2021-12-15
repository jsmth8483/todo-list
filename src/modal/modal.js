import { icons } from '../icons';

export class Modal {
	constructor(title) {
		this.title = title;
	}
	render() {
		const modal = document.createElement('div');
		modal.classList.add('modal');

		const exitButton = document.createElement('span');
		exitButton.className = icons.exit;
		exitButton.classList.add('modal-exit');
		exitButton.addEventListener('click', this.removeModal);

		const heading = document.createElement('h2');
		heading.textContent = this.title;

		modal.appendChild(exitButton);
		modal.appendChild(heading);
		return modal;
	}

	removeModal() {
		const modalBg = document.querySelector('#modal-bg');
		while (modalBg.firstChild) {
			modalBg.removeChild(modalBg.firstChild);
		}
		modalBg.style.opaccity = '100%';
		modalBg.style.visibility = 'hidden';
	}
}
