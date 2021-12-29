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
			projectList.appendChild(
				this.#buildListItem(project.title, project.color)
			);
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
