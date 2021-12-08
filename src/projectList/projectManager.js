import { Project } from '.';
import { storageManager } from '../storageManager';

const projectManager = (function () {
	function createProject(title) {
		const project = new Project(title);
		storageManager.storeProject(project);
	}

	function getProjects() {
		return storageManager.getProjects();
	}

	return { createProject, getProjects };
})();

export { projectManager };
