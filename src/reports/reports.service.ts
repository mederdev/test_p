import { Injectable } from '@nestjs/common';
import { getMonthReport, getCarReport, getCarsList } from './reports.repository';


@Injectable()
export class ReportsService {
	async getByMonth() {
		const result = await getMonthReport();
		return "Average Price per Month=" + result.rows[0].average_price;
	}

	async getByCar(carId: string) {
		const result = await getCarReport(carId);
		return "CarId=" + carId + "\nAverage Price per Month=" + result.rows[0].average_price;
	}

	async getCars() {
		const result = await getCarsList();
		return result.rows;
	}
}
