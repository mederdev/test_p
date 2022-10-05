import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { CarDto } from './dto/carDto';

@ApiTags('car')
@Controller('car')
export class CarController {
	constructor(private carService: CarService) { }

	@Post('newCar')
	@ApiResponse({ status: 201, description: 'The car has been successfully created.' })
	async setCar(@Body() carDto: CarDto) {
		return this.carService.setCar(carDto);
	}

	@Get('allCars')
	async getCars() {
		return this.carService.getCars();
	}
}
