import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderDto } from './dto/orderDto';
import { OrdersService } from './orders.service';


@ApiTags('orders')
@Controller('orders')
export class OrdersController {
	constructor(private orderService: OrdersService) { };

	@Post('newSession')
	@ApiResponse({ status: 201, description: 'The order has been successfully created.' })
	async newCarOrder(@Body() dto: OrderDto) {
		return this.orderService.newSession(dto);
	}

	@Get('allSession')
	async getOrders() {
		return this.orderService.getOrders();
	}
}	
