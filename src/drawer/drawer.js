import { icons } from '../icons';
import { modalManager } from '../modal/modalManager';
import { FilteredList } from './filteredList';
import { projectManager } from './projectManager';

export class Drawer {
	constructor() {
		this.filteredList = new FilteredList();
		this.projectList = projectManager.getProjectList();
	}
	render() {
		this.#clearDrawer();
		const drawer = document.createElement('div');
		drawer.classList.add('drawerList');

		const filteredListElem = this.filteredList.render();

		const projectListContainerElem = this.#buildProjectListContainer();

		drawer.appendChild(filteredListElem);
		drawer.appendChild(projectListContainerElem);

		return drawer;
	}

	#buildProjectListActions() {
		const projectListActions = document.createElement('div');
		projectListActions.classList = 'projectListActions';

		const projectActionsHeading = document.createElement('span');
		projectActionsHeading.classList.add('projectActionsHeading');
		projectActionsHeading.textContent = 'Projects';
		projectListActions.appendChild(projectActionsHeading);

		const projectAddButton = this.#buildAddProjectButton();
		projectListActions.appendChild(projectAddButton);

		return projectListActions;
	}

	#buildAddProjectButton() {
		const button = document.createElement('span');
		const i = document.createElement('i');
		i.className = icons.add;
		button.appendChild(i);
		button.classList.add('addProjectButton');

		button.addEventListener('click', () => {
			modalManager.displayCreateProjectModal();
		});

		return button;
	}

	#buildProjectListContainer() {
		const projectListContainer = document.createElement('div');
		projectListContainer.classList.add('projectListContainer');

		const projectListActions = this.#buildProjectListActions();

		projectListContainer.appendChild(projectListActions);
		projectListContainer.appendChild(this.projectList.render());
		return projectListContainer;
	}

	#clearDrawer() {
		const drawerContainer = document.querySelector('#drawerContainer');
		while (drawerContainer.firstChild) {
			drawerContainer.removeChild(drawerContainer.firstChild);
		}
	}
}
