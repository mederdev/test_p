import { Injectable } from '@nestjs/common';
const db = require("../database/db");

@Injectable()
export class ReportsService {
	async getByMonth() {
		const result = await db.query(`SELECT AVG(Price) AS Average_Price FROM orders`);
		return "Average Price per Month=" + result.rows[0].average_price;
	}

	async getByCar(carId: string) {
		const result = await db.query(`SELECT AVG(Price) AS Average_Price FROM orders Where id='${carId}'`);
		return "CarId=" + carId + "\nAverage Price per Month=" + result.rows[0].average_price;
	}

	async getCars() {
		const result = await db.query(`SELECT * FROM cars`);
		return result.rows;
	}
}
