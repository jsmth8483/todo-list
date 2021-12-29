import './index.scss';

import { Drawer } from './drawer';
import { TodoPane } from './todo';

const app = () => {
	loadDrawer();
	loadTodoPane();
};

function loadDrawer() {
	const drawerContainer = document.querySelector('#drawer-container');
	const drawer = new Drawer();
	drawerContainer.appendChild(drawer.render());
	Drawer.reloadProjects();
}

function loadTodoPane() {
	const todoListContainer = document.querySelector('#todo-pane-container');
	const todoPane = new TodoPane('Inbox');
	todoListContainer.appendChild(todoPane.render());
	TodoPane.reloadTodos();
}

app();
