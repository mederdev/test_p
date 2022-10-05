import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/orderDto';
import { getPrice } from './orders.methods';
import { getCountCars, setCarAvailable, getAvailableCars, newSessionCar, getAllOrders } from './orders.repository';


@Injectable()
export class OrdersService {

	async carAvailables() {
		const result = await getCountCars();
		const lengtDB = result.rows[0].count;
		if (lengtDB == 0) return;
		for (let i = 0; i <= lengtDB; i++) {
			const res = await setCarAvailable(i);
		}
		return;
	}

	async newSession(dto: OrderDto) {
		const result = await getAvailableCars(dto.id);
		const carInfo = result.rows[0].row.slice(1, -1).split(',');
		await this.carAvailables();
		if (carInfo[1] == 't') {
			const resMessage = getPrice(dto.startDate, dto.endDate);
			if (typeof resMessage === 'string') return resMessage;
			await newSessionCar(dto.id, carInfo[0], dto.startDate, dto.startDate, resMessage);
			return 'Result\nCar=' + carInfo[0] + ',Price=' + resMessage;
		}
		else {
			return 'Car is not available';
		}
	}

	async getOrders() {
		const result = await getAllOrders();
		return result.rows;
	}
}

