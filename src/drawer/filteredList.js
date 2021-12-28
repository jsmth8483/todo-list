import { icons } from '../icons';
import { TodoPane } from '../todo';

export class FilteredList {
	render() {
		const filteredList = document.createElement('div');
		filteredList.classList.add('filteredList');
		const inbox = this.buildListItem('Inbox', icons.inbox);
		inbox.addEventListener('click', () => {
			const todoPaneContainer = document.querySelector('#todoPaneContainer');
			const todoPane = new TodoPane('Inbox');
			TodoPane.setFilter('', '');
			todoPaneContainer.appendChild(todoPane.render());
			TodoPane.reloadTodos();
		});
		const today = this.buildListItem('Today', icons.calendarDay);
		today.addEventListener('click', () => {
			const todoPaneContainer = document.querySelector('#todoPaneContainer');
			const todoPane = new TodoPane('Today');
			TodoPane.setFilter('date', 'today');
			todoPaneContainer.appendChild(todoPane.render());
			TodoPane.reloadTodos();
		});
		const thisWeek = this.buildListItem('This week', icons.calendarWeek);
		thisWeek.addEventListener('click', () => {
			const todoPaneContainer = document.querySelector('#todoPaneContainer');
			const todoPane = new TodoPane('This week');
			TodoPane.setFilter('date', 'week');
			todoPaneContainer.appendChild(todoPane.render());
			TodoPane.reloadTodos();
		});

		filteredList.appendChild(inbox);
		filteredList.appendChild(today);
		filteredList.appendChild(thisWeek);

		return filteredList;
	}

	buildListItem(title, iconClass) {
		const listTitleDiv = document.createElement('div');
		listTitleDiv.classList.add('listTitle');

		const iconSpan = document.createElement('span');
		const icon = document.createElement('i');
		icon.className = iconClass;
		iconSpan.appendChild(icon);

		const listTitleText = document.createElement('a');
		listTitleText.classList.add('listTitleText');
		listTitleText.textContent = title;

		listTitleDiv.appendChild(iconSpan);
		listTitleDiv.appendChild(listTitleText);

		return listTitleDiv;
	}
}
