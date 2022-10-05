import { Injectable } from '@nestjs/common';
import { carAvailables } from 'src/car/car.methods';
import { getAvailableCars } from 'src/car/car.repository';
import { OrderDto } from './dto/orderDto';
import { getPrice } from './orders.methods';
import { newSessionCar, getAllOrders } from './orders.repository';


@Injectable()
export class OrdersService {

	async newSession(dto: OrderDto) {
		const result = await getAvailableCars(dto.id);
		if (result == 't') {
			const resMessage = getPrice(dto.startDate, dto.endDate);
			if (typeof resMessage === 'string') return resMessage;
			await newSessionCar(dto.id, result, dto.startDate, dto.endDate, resMessage);
			return 'Result\nCar=' + result + ',Price=' + resMessage;
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

