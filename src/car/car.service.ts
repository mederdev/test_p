import { Injectable } from '@nestjs/common';
import { getCarsFromDB, setCarToDB } from './car.repository';
import { CarDto } from './dto/carDto';

@Injectable()
export class CarService {

	async getCars() {
		const res = await getCarsFromDB();
		return res.rows;
	}

	async setCar(dto: CarDto) {
		const res = await setCarToDB(dto);
		return res.command == "INSERT" ? "New car has been created" : "Wrong parameters";
	}
}
