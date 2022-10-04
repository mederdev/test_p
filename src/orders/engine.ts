export function getPrice(start, end) {
	const days = [4, 5, 8, 12];
	const timeDiff = Math.abs(new Date(start).getTime() - new Date(end).getTime());
	let percentPrice = 0;
	let res = 0;
	let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
	for (let i = 0; i < days.length; i++) {
		if (days[i] < diffDays) {
			res = res + days[i] * (1000 - percentPrice);
			diffDays = diffDays - days[i];
			percentPrice = percentPrice + 50;
		} else {
			res = res + diffDays * (1000 - percentPrice)
			break;
		}
	}
	return res;
}

