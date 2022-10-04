import { Body, Controller, Get, Post } from '@nestjs/common';
import e from 'express';
import { json } from 'stream/consumers';
import { OrderDto } from './dto/orderDto';
import { getPrice } from './engine';
const db = require("../database/db");

@Controller('orders')
export class OrdersController {

	@Post()
	async newCarOrder(@Body() dto: OrderDto) {
		const result = await db.query(`SELECT (carname,caravailable) from cars where id=${dto.id}`);
		const carInfo = result.rows[0].row.slice(1, -1).split(',');
		if (carInfo[1] == 't') {
			return 'Car=' + dto.carName + ',Price=' + getPrice(dto.startDate, dto.endDate);
		}
		else {
			return 'Car is not available';
		}
	}
}	
