import { AddProjectButton } from './addProjectButton';
import { projectManager } from './projectManager';

export class ProjectList {
	//projects = ['Work', 'School'];
	render() {
		this.#clearProjectList();

		const projectList = document.createElement('div');
		projectList.classList.add('projectList');

		const projectListActions = document.createElement('div');
		projectListActions.classList = 'projectListActions';

		const projectActionsHeading = document.createElement('span');
		projectActionsHeading.classList.add('projectActionsHeading');
		projectActionsHeading.textContent = 'Projects';

		projectListActions.appendChild(projectActionsHeading);

		const projectAddButton = new AddProjectButton();
		projectListActions.appendChild(projectAddButton.render());

		projectList.appendChild(projectListActions);

		projectManager.getProjects().forEach((project) => {
			projectList.appendChild(this.buildListItem(project.title, 'red'));
		});

		return projectList;
	}

	buildListItem(title, color = 'black') {
		const listTitleDiv = document.createElement('div');
		listTitleDiv.classList.add('listTitle');

		const iconSpan = document.createElement('span');
		iconSpan.className = 'dot';
		iconSpan.style.backgroundColor = color;

		listTitleDiv.appendChild(iconSpan);
		const listTitleText = document.createElement('a');
		listTitleText.classList.add('listTitleText');
		listTitleDiv.appendChild(listTitleText);

		listTitleText.textContent = title;

		return listTitleDiv;
	}

	#clearProjectList() {
		const projectList = document.querySelector('.projectList');
		console.log(projectList);
		if (projectList !== null) {
			while (projectList.firstChild) {
				projectList.removeChild(projectList.firstChild);
			}
		}
	}
}
