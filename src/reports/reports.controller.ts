import { Controller, Get, Param } from '@nestjs/common';
const db = require("../database/db");

@Controller('reports')
export class ReportsController {

	@Get('byMonth')
	async getByMonth() {
		const result = await db.query(`SELECT AVG(Price) AS Average_Price FROM orders`);
		return "Average Price per Month=" + result.rows[0].average_price;
	}

	@Get('byCar/:id')
	async getByCar(@Param('id') carId: string) {
		const result = await db.query(`SELECT AVG(Price) AS Average_Price FROM orders Where id='${carId}'`);
		return "CarId=" + carId + "\nAverage Price per Month=" + result.rows[0].average_price;
	}
};