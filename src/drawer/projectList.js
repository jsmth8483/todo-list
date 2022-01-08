import { TodoPane } from '../todo';

export class ProjectList {
	//projects = ['Work', 'School'];
	render() {
		this.#clearProjectList();

		const projectList = document.createElement('div');
		projectList.classList.add('project-list');

		return projectList;
	}

	#buildListItem(title, color) {
		const listTitleDiv = document.createElement('div');
		listTitleDiv.classList.add('list-title');

		const iconSpan = document.createElement('span');
		iconSpan.className = 'dot';
		iconSpan.style.backgroundColor = color;

		listTitleDiv.appendChild(iconSpan);
		const listTitleText = document.createElement('a');
		listTitleText.classList.add('list-title-text');
		listTitleDiv.appendChild(listTitleText);

		listTitleText.textContent = title;

		return listTitleDiv;
	}

	buildList(projects) {
		const projectList = document.querySelector('.project-list');

		this.#clearProjectList();

		projects.forEach((project) => {
			const projectElement = this.#buildListItem(project.title, project.color);
			projectElement.addEventListener('click', () => {
				const todoPaneContainer = document.querySelector(
					'#todo-pane-container'
				);
				const todoPane = new TodoPane(project.title);
				TodoPane.setFilter('project', project.id);
				todoPaneContainer.appendChild(todoPane.render());
				TodoPane.reloadTodos();
			});
			projectList.appendChild(projectElement);
		});
	}

	#clearProjectList() {
		const projectList = document.querySelector('.project-list');
		if (projectList !== null) {
			while (projectList.firstChild) {
				projectList.removeChild(projectList.firstChild);
			}
		}
	}
}
