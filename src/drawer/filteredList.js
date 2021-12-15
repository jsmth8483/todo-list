import { icons } from '../icons';

export class FilteredList {
	render() {
		const filteredList = document.createElement('div');
		filteredList.classList.add('filteredList');
		const inbox = this.buildListItem('Inbox', icons.inbox);
		const today = this.buildListItem('Today', icons.calendarDay);
		const thisWeek = this.buildListItem('This week', icons.calendarWeek);

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
