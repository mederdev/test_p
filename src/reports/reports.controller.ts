import { Controller, Get, Param } from '@nestjs/common';

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