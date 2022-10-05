import { ApiProperty } from '@nestjs/swagger';
export class OrderDto {
	@ApiProperty()
	id: number;

	@ApiProperty()
	startDate: string;

	@ApiProperty()
	endDate: string;
}