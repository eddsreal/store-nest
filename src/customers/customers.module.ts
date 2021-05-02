import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
