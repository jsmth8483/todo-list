import './index.scss';

import { Drawer } from './drawer';

const app = () => {
	clearPage();
	loadDrawer();
};

function clearPage() {
	const main = document.querySelector('#main');
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}
}

function loadDrawer() {
	const main = document.querySelector('#main');
	const drawer = new Drawer();
	main.appendChild(drawer.render());
}

app();
