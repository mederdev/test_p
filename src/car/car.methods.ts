import { getCountCars, setCarAvailable } from './car.repository';

async function carAvailables() {
	const result = await getCountCars();
	const lengtDB = result.rows[0].count;
	if (lengtDB == 0) return;
	for (let i = 0; i <= lengtDB; i++) {
		await setCarAvailable(i);
	}
	return;
}

export { carAvailables };