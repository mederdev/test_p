import { db } from 'src/app.constants';

async function getCountCars() {
	return db.query(`SELECT COUNT (*) from cars`);
}

async function setCarAvailable(id: number) {
	return db.query(`UPDATE cars set caravailable=true where DATE_PART('day',NOW()::timestamp-lastorderday::timestamp)>2 and id=${id}`);
}

async function getAvailableCars(id: number) {
	return db.query(`SELECT (carname,caravailable) from cars where id=${id}`);
}

async function newSessionCar(id: number, carInfo: string, startDate: string, endDate: string, resMessage: number) {
	return db.query(`INSERT INTO ORDERS (carID,carName,startDate,endDate,price,days) VALUES('${id}','${carInfo}','${startDate}','${endDate}','${resMessage}','1'+DATE_PART('day','${endDate}'::timestamp-'${startDate}'::timestamp))`);
}

async function getAllOrders() {
	return db.query(`SELECT * FROM orders`);
}

export { getCountCars, setCarAvailable, getAvailableCars, newSessionCar, getAllOrders };