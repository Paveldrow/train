const ticket = document.querySelector('.ticket');
const dates = document.querySelectorAll('.date');
const time = document.querySelector('.time');

const trainsList = document.querySelectorAll('.train-item');
const trainsFromMoscow = [
	'08:05',
	'08:22',
	'08:29',
	'09:03',
	'11:00',
	'13:20',
	'14:06',
	'15:02'];

const monthList = [
	'Января',
	'Февраля',
	'Марта',
	'Апреля',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Октября',
	'Ноября',
	'Декабря',
];

function removeActive() {
	ticket.classList.remove('ticket--active');
};

ticket.addEventListener('click', () => {
	if (ticket.classList.contains('ticket--active')) {
		return;
	} else {												
		ticket.classList.add('ticket--active');
		setTimeout(removeActive, 1400);
	}
})

const localDate = new Date();
const nowDate = localDate.getDate();
const nowMonth = localDate.getMonth();
const nowYear = localDate.getFullYear();
const nowHour = localDate.getHours();
const nowMinutes = localDate.getMinutes();

for (let i = 0; i < dates.length; i++) {

	// dates[i].textContent = nowDate + ' ' + monthList[nowMonth] + ' ' + nowYear;

	dates[i].textContent = nowDate + ' ' + monthList[nowMonth] + ' ' + nowYear;
	let minutes = nowMinutes - 10;
	if(minutes < 10) {
		minutes = '0' + minutes;
	}
	time.textContent = ' в ' + nowHour + ':' + (minutes);
}



function snowTrains() {
	for (let i = 0; i < trainsList.length; i++) {
		trainsList[i].textContent = trainsFromMoscow[i];
	};
}

snowTrains();
console.log(dates)
