import { projectManager } from '../drawer/projectManager';

export class TodoCreationPrompt {
	render() {
		const creationPromptContainer = document.createElement('div');
		creationPromptContainer.classList.add('todo-creation-container');

		const todoTitleInput = document.createElement('input');
		todoTitleInput.classList.add('todo-title-input');
		todoTitleInput.type = 'text';
		todoTitleInput.placeholder = 'E.g. Take out the trash';
		creationPromptContainer.appendChild(todoTitleInput);

		const optionalFields = document.createElement('div');
		optionalFields.classList.add('todo-optional-fields');

		const dueDateInput = document.createElement('input');
		dueDateInput.classList.add('due-date-input');
		dueDateInput.type = 'datetime-local';
		optionalFields.appendChild(dueDateInput);

		const projectInput = document.createElement('select');
		projectInput.classList.add('project-input');
		projectInput.id = 'projectInput';
		let inboxOption = document.createElement('option');
		inboxOption.text = 'Inbox';
		projectInput.add(inboxOption);
		const projects = projectManager.getProjects();
		console.log(projects);
		projects.map((project) => {
			const option = document.createElement('option');
			option.text = project.title;
			projectInput.add(option);
		});

		optionalFields.appendChild(projectInput);

		creationPromptContainer.appendChild(optionalFields);

		return creationPromptContainer;
	}
}
