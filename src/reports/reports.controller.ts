import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReportsService } from './reports.service';


@ApiTags('reports')
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

};