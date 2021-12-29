import { ProjectList } from '.';
import { icons } from '../icons';
import { modalManager } from '../modal/modalManager';
import { FilteredList } from './filteredList';
import { projectManager } from './projectManager';

export class Drawer {
	static projectList = new ProjectList();
	constructor() {
		this.filteredList = new FilteredList();
	}
	render() {
		this.#clearDrawer();
		const drawer = document.createElement('div');
		drawer.classList.add('drawer-list');

		const filteredListElem = this.filteredList.render();

		const projectListContainerElem = this.#buildProjectListContainer();

		drawer.appendChild(filteredListElem);
		drawer.appendChild(projectListContainerElem);

		return drawer;
	}

	#buildProjectListActions() {
		const projectListActions = document.createElement('div');
		projectListActions.classList = 'project-list-actions';

		const projectActionsHeading = document.createElement('span');
		projectActionsHeading.classList.add('project-actions-heading');
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
		button.classList.add('add-project-button');

		button.addEventListener('click', () => {
			modalManager.displayCreateProjectModal();
		});

		return button;
	}

	#buildProjectListContainer() {
		const projectListContainer = document.createElement('div');
		projectListContainer.classList.add('project-list-container');

		const projectListActions = this.#buildProjectListActions();

		projectListContainer.appendChild(projectListActions);
		projectListContainer.appendChild(Drawer.projectList.render());
		return projectListContainer;
	}

	#clearDrawer() {
		const drawerContainer = document.querySelector('#drawer-container');
		while (drawerContainer.firstChild) {
			drawerContainer.removeChild(drawerContainer.firstChild);
		}
	}

	static reloadProjects() {
		const projects = projectManager.getProjects();
		Drawer.projectList.buildList(projects);
	}
}
