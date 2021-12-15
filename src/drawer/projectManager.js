import { Project, ProjectList } from '.';
import { storageManager } from '../storageManager';

const projectManager = (function () {
	const projectList = new ProjectList();

	function createProject(title, color) {
		const project = new Project(title, color);
		storageManager.storeProject(project);
	}

	function getProjects() {
		return storageManager.getProjects();
	}

	function populateProjects() {
		projectList.buildList(storageManager.getProjects());
	}

	function getProjectList() {
		return projectList;
	}

	return { createProject, getProjects, populateProjects, getProjectList };
})(storageManager);

export { projectManager };
