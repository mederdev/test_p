import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDto } from './dto/orderDto';
import { getPrice } from './engine';

@Controller('orders')
export class OrdersController {

	@Post()
	async newCarOrder(@Body() dto: OrderDto) {
		return dto.id + ' ' + dto.carName + ', price=' + getPrice(dto.startDate, dto.endDate);
	}
}	
