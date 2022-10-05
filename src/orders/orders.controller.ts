import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { OrderDto } from './dto/orderDto';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {
	constructor(private orderService: OrdersService) { };

	@Post()
	async newCarOrder(@Body() dto: OrderDto) {
		return this.orderService.newSession(dto);
	}

	@Get()
	async getOrders() {
		return this.orderService.getOrders();
	}

}	
