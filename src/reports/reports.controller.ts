import { Body, Controller, Get, Param } from '@nestjs/common';
import { OrderDto } from 'src/orders/dto/orderDto';

@Controller('reports')
export class ReportsController {

	@Get('byMonth')
	async getByMonth() {
		//Отчет за месяц
		return 'ByMonth'
	}

	@Get('byCar/:id')
	async getByCar(@Param('id') carId: string) {
		//Отчет по автомобилям
	}
};