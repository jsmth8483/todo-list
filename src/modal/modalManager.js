import { CreateProjectModal } from '.';

const modalManager = (function () {
	// let activeModal;
	function displayCreateProjectModal() {
		const modalBg = document.querySelector('#modal-bg');
		const modal = new CreateProjectModal();
		modalBg.style.visibility = 'visible';
		modalBg.style.opacity = '100%';
		modalBg.appendChild(modal.render());
	}

	return { displayCreateProjectModal };
})();

export { modalManager };
