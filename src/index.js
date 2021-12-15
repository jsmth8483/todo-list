import './index.scss';

import { Project, Drawer } from './drawer';
import { projectManager } from './drawer/projectManager';
import { TodoList } from './todo';
import { TodoItem } from './todo/todoItem';
import { storageManager } from './storageManager';

const app = () => {
	loadDrawer();

	const defaultProject = new Project('Inbox');

	const todo1 = new TodoItem(
		'Walk dog',
		'take dog for a 30 min walk',
		'5:00pm today',
		'high'
	);
	const todo2 = new TodoItem('Do Work', '', '5:00am today', 'high');

	// storageManager.storeTodo(todo1);
	// storageManager.storeTodo(todo2);

	const todos = storageManager.getTodos();
	console.log(todos);
	const main = document.querySelector('#todoListContainer');
	const inbox = new TodoList(defaultProject.getTitle(), todos);
	main.appendChild(inbox.render());
};

function loadDrawer() {
	const drawerContainer = document.querySelector('#drawerContainer');
	console.log(drawerContainer);
	const drawer = new Drawer();
	drawerContainer.appendChild(drawer.render());
	projectManager.populateProjects(drawer.projectList);
}

app();
