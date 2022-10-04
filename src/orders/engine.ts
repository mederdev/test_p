const days = [4, 5, 8, 12];
const weekdays = [6, 7, 13, 14, 20, 21, 27, 28]

export function getPrice(start, end): string | number {
	const startDate = new Date(start);
	const endDate = new Date(end);
	if (startDate.getDay() >= 5 || endDate.getDay() >= 5) {
		return 'Booking on weekdays is not available';
	}
	const timeDiff = Math.abs(startDate.getTime() - endDate.getTime());
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


export async function carAvailables(db) {
	const result = await db.query(`SELECT COUNT (*) from cars`);
	const lengtDB = result.rows[0].count;
	if (lengtDB == 0) return;
	for (let i = 0; i <= lengtDB; i++) {
		const res = await db.query(`UPDATE cars set caravailable=true where DATE_PART('day',NOW()::timestamp-lastorderday::timestamp)>2 and id=${i}`);
	}
	return;
}

