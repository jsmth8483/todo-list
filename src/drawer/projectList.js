export class ProjectList {
	//projects = ['Work', 'School'];
	render() {
		this.#clearProjectList();

		const projectList = document.createElement('div');
		projectList.classList.add('projectList');

		return projectList;
	}

	#buildListItem(title, color) {
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

	buildList(projects) {
		const projectList = document.querySelector('.projectList');

		this.#clearProjectList();
		projects.forEach((project) => {
			projectList.appendChild(
				this.#buildListItem(project.title, project.color)
			);
		});
	}

	#clearProjectList() {
		const projectList = document.querySelector('.projectList');
		if (projectList !== null) {
			while (projectList.firstChild) {
				projectList.removeChild(projectList.firstChild);
			}
		}
	}
}
