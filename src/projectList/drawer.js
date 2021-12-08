import { ProjectList } from '.';
import { FilteredList } from './filteredList';

export class Drawer {
	render() {
		this.#clearDrawer();
		const drawer = document.createElement('div');
		drawer.classList.add('drawerList');

		const filteredList = new FilteredList();
		drawer.appendChild(filteredList.render());

		const projectList = new ProjectList();
		drawer.appendChild(projectList.render());

		// const projectAddButton = document.querySelector('.addProjectButton');
		// console.log(projectAddButton);
		// projectAddButton.addEventListener('click', () => {
		// 	projectManager.createProject('Work');
		// 	this.render();
		// });

		return drawer;
	}

	#clearDrawer() {
		const drawerContainer = document.querySelector('#drawerContainer');
		while (drawerContainer.firstChild) {
			drawerContainer.removeChild(drawerContainer.firstChild);
		}
	}
}
