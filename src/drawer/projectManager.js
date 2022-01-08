import { Project } from '.';
import { storageManager } from '../storageManager';

const projectManager = (function () {
	function createProject(title, color) {
		const project = new Project(title, color);
		storageManager.storeProject(project);
	}

	function getProjects() {
		const json = storageManager.getProjects();
		return json.map((item) => Object.assign(new Project(), item));
	}

	function getProject(projectId) {
		const projects = getProjects();
		const filtered = projects.find((project) => {
			console.log(project.id, projectId);
			return project.id == projectId;
		});

		return filtered;
	}

	return { createProject, getProjects, getProject };
})(storageManager);

export { projectManager };
