import { basePrice, days } from 'src/app.constants';

export function getPrice(start, end): string | number {
	const startDate = new Date(start);
	const endDate = new Date(end);
	if (startDate.getDay() >= 5 || endDate.getDay() >= 5) {
		return 'Booking on weekdays is not available';
	}
	const timeDiff = Math.abs(startDate.getTime() - endDate.getTime());
	let percentPrice = (basePrice / 100) * 5;
	let res = 0;
	let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
	for (let i = 0; i < days.length; i++) {
		if (days[i] < diffDays) {
			res = res + days[i] * (basePrice - percentPrice);
			diffDays = diffDays - days[i];
			percentPrice = percentPrice + 50;
		} else {
			res = res + diffDays * (1000 - percentPrice)
			break;
		}
	}
	return res;
}