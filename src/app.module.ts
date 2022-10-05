import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ReportsModule } from './reports/reports.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    OrdersModule,
    ReportsModule,
    CarModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
