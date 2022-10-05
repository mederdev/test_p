import { Controller, Get, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';


@Controller('reports')
export class ReportsController {
	constructor(private reportsService: ReportsService) { };

	@Get('byMonth')
	async getByMonth() {
		return this.reportsService.getByMonth();
	}

	@Get('byCar/:id')
	async getByCar(@Param('id') carId: string) {
		return this.reportsService.getByCar(carId);
	}

	@Get('cars')
	async getCars() {
		return this.reportsService.getCars();
	}
};