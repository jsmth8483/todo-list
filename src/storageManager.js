const storageManager = (function () {
	function getProjects() {
		if (localStorage.hasOwnProperty('projects')) {
			return JSON.parse(localStorage.getItem('projects'));
		}
		return [];
	}

	function storeProject(project) {
		if (localStorage.hasOwnProperty('projects')) {
			const projects = getProjects();
			console.log(projects);
			projects.push(project);
			localStorage.setItem('projects', JSON.stringify(projects));
		} else {
			let projects = [];
			projects.push(project);
			localStorage.setItem('projects', JSON.stringify(projects));
		}
	}

	return { getProjects, storeProject };
})();

export { storageManager };
