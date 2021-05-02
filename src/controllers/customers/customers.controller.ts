import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from '../../dtos/customers.dtos';
import { ParseIntPipe } from 'src/common/parse-int.pipe';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customerService.create(payload);
  }

  @Get()
  find() {
    return this.customerService.find();
  }

  @Get(':customerId')
  findOne(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customerService.findOne(customerId);
  }

  @Put(':customerId')
  updateOne(
    @Param('customerId', ParseIntPipe) customerId: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customerService.updateOne(customerId, payload);
  }

  @Delete(':customerId')
  deleteOne(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customerService.delete(customerId);
  }
}
