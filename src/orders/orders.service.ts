import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/orderDto';
const db = require("../database/db");

const days = [4, 5, 8, 12];
const basePrice = 1000;

@Injectable()
export class OrdersService {

	getPrice(start, end): string | number {
		const startDate = new Date(start);
		const endDate = new Date(end);
		if (startDate.getDay() >= 5 || endDate.getDay() >= 5) {
			return 'Booking on weekdays is not available';
		}
		const timeDiff = Math.abs(startDate.getTime() - endDate.getTime());
		let percentPrice = (basePrice / 100) * 5;
		let res = 0;
		let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
		for (let i = 0; i < days.length; i++) {
			if (days[i] < diffDays) {
				res = res + days[i] * (basePrice - percentPrice);
				diffDays = diffDays - days[i];
				percentPrice = percentPrice + 50;
			} else {
				res = res + diffDays * (1000 - percentPrice)
				break;
			}
		}
		return res;
	}

	async carAvailables(db) {
		const result = await db.query(`SELECT COUNT (*) from cars`);
		const lengtDB = result.rows[0].count;
		if (lengtDB == 0) return;
		for (let i = 0; i <= lengtDB; i++) {
			const res = await db.query(`UPDATE cars set caravailable=true where DATE_PART('day',NOW()::timestamp-lastorderday::timestamp)>2 and id=${i}`);
		}
		return;
	}

	async newSession(dto: OrderDto) {
		const result = await db.query(`SELECT (carname,caravailable) from cars where id=${dto.id}`);
		const carInfo = result.rows[0].row.slice(1, -1).split(',');
		await this.carAvailables(db);
		if (carInfo[1] == 't') {
			const resMessage = this.getPrice(dto.startDate, dto.endDate);
			if (typeof resMessage === 'string') return resMessage;
			const writedData = await db.query(`INSERT INTO ORDERS (carID,carName,startDate,endDate,price,days) VALUES('${dto.id}','${carInfo[0]}','${dto.startDate}','${dto.endDate}','${resMessage}','1'+DATE_PART('day','${dto.endDate}'::timestamp-'${dto.startDate}'::timestamp))`);
			return 'Result\nCar=' + carInfo[0] + ',Price=' + resMessage;
		}
		else {
			return 'Car is not available';
		}
	}

	async getOrders() {
		const result = await db.query(`SELECT * FROM orders`);
		return result.rows;
	}
}
