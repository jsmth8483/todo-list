import './index.scss';

import { Project, ProjectList, Drawer } from './projectList';
import { TodoList } from './todo';
import { TodoItem } from './todo/todoItem';

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

	const main = document.querySelector('#todoListContainer');
	const inbox = new TodoList(defaultProject.getTitle(), [todo1, todo2]);
	main.appendChild(inbox.render());
};

function loadDrawer() {
	const drawerContainer = document.querySelector('#drawerContainer');
	console.log(drawerContainer);
	const drawer = new Drawer();
	drawerContainer.appendChild(drawer.render());
}

app();
