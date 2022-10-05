import { db } from 'src/app.constants';

async function getCarReport(carId: string) {
	return db.query(`SELECT AVG(Price) AS Average_Price FROM orders Where id='${carId}'`);
}

async function getMonthReport() {
	return db.query(`SELECT AVG(Price) AS Average_Price FROM orders`);
}

async function getCarsList() {
	return db.query(`SELECT * FROM cars`);
}

export { getCarReport, getMonthReport, getCarsList };