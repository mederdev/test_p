import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { OrdersModule } from './orders/orders.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    OrdersModule,
    ReportsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
