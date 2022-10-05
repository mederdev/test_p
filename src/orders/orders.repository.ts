import { db } from 'src/app.constants';

async function newSessionCar(id: number, carInfo: string, startDate: string, endDate: string, resMessage: number) {
	return db.query(`INSERT INTO ORDERS (carID,carName,startDate,endDate,price,days) VALUES('${id}','${carInfo}','${startDate}','${endDate}','${resMessage}','1'+DATE_PART('day','${endDate}'::timestamp-'${startDate}'::timestamp))`);
}

async function getAllOrders() {
	return db.query(`SELECT * FROM orders`);
}

export { newSessionCar, getAllOrders };