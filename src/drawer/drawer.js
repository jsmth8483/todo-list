import './drawer.scss';

export class Drawer {
	lists = ['Inbox', 'Today', 'This week'];
	render() {
		const drawer = document.createElement('div');
		drawer.id = 'drawer';
		drawer.classList.add('drawer');
		this.lists.map((list) => {
			const listTitleDiv = document.createElement('div');
			listTitleDiv.classList.add('listTitle');
			const todayIcon = document.createElement('span');
			todayIcon.className = 'fas fa-calendar-day';
			listTitleDiv.appendChild(todayIcon);
			const listTitleText = document.createElement('span');
			listTitleText.classList.add('listTitleText');
			listTitleDiv.appendChild(listTitleText);
			drawer.appendChild(listTitleDiv);
			listTitleText.textContent = list;
		});
		return drawer;
	}
}
