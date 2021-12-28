import './index.scss';

import { Drawer } from './drawer';
import { TodoPane } from './todo';

const app = () => {
	loadDrawer();
	loadTodoPane();
};

function loadDrawer() {
	const drawerContainer = document.querySelector('#drawerContainer');
	const drawer = new Drawer();
	drawerContainer.appendChild(drawer.render());
	Drawer.reloadProjects();
}

function loadTodoPane() {
	const todoListContainer = document.querySelector('#todoPaneContainer');
	const todoPane = new TodoPane('Inbox');
	todoListContainer.appendChild(todoPane.render());
	TodoPane.reloadTodos();
}

app();
