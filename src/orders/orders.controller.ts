import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { OrderDto } from './dto/orderDto';
import { carAvailables, getPrice } from './engine';
const db = require("../database/db");

@Controller('orders')
export class OrdersController {

	@HttpCode(200)
	@Post()
	async newCarOrder(@Body() dto: OrderDto) {
		const result = await db.query(`SELECT (carname,caravailable) from cars where id=${dto.id}`);
		const carInfo = result.rows[0].row.slice(1, -1).split(',');
		await carAvailables(db);
		if (carInfo[1] == 't') {
			const resMessage = getPrice(dto.startDate, dto.endDate);
			if (typeof resMessage === 'string') return resMessage;
			const writedData = await db.query(`INSERT INTO ORDERS (carID,carName,startDate,endDate,price,days) VALUES('${dto.id}','${carInfo[0]}','${dto.startDate}','${dto.endDate}','${resMessage}','1'+DATE_PART('day','${dto.endDate}'::timestamp-'${dto.startDate}'::timestamp))`);
			return 'Result\nCar=' + carInfo[0] + ',Price=' + resMessage;
		}
		else {
			return 'Car is not available';
		}
	}

	@Get()
	async getAllOrders() {
		const result = await db.query(`SELECT * FROM orders`);
		return result.rows;
	}

}	
