import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    OrdersModule,
    ReportsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
