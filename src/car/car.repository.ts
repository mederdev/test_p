import { db } from 'src/app.constants';
import { CarDto } from './dto/carDto';

async function getCarsFromDB() {
	return db.query(`SELECT * from cars`);
}

async function setCarToDB(dto: CarDto) {
	return db.query(`INSERT INTO cars (carname,caravailable,lastorderday) VALUES('${dto.carName}','${dto.carAvailable}','${dto.lastOrderDay}')`);
}

async function getCountCars() {
	return db.query(`SELECT COUNT (*) from cars`);
}

async function setCarAvailable(id: number) {
	return db.query(`UPDATE cars set caravailable=true where DATE_PART('day',NOW()::timestamp-lastorderday::timestamp)>2 and id=${id}`);
}

async function getAvailableCars(id: number) {
	const result = await db.query(`SELECT (carname,caravailable) from cars where id=${id}`);
	return result.rows[0].row.slice(1, -1).split(',')[1];
}

export { getCarsFromDB, setCarToDB, getCountCars, setCarAvailable, getAvailableCars };