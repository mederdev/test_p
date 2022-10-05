import { ApiProperty } from '@nestjs/swagger';

export class CarDto {
	@ApiProperty()
	carName: string;

	@ApiProperty()
	carAvailable: boolean;

	@ApiProperty()
	lastOrderDay: string;
}