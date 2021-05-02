import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Example',
      lastName: 'Example',
      phone: '3111111212',
    },
  ];

  create(payload: CreateCustomerDto) {
    this.counterId++;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers = [...this.customers, newCustomer];
    return newCustomer;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);

    if (!customer) {
      return new NotFoundException(`Customer ${id} Not Found`);
    }

    return customer;
  }

  find() {
    return this.customers;
  }

  updateOne(id: number, payload: UpdateCustomerDto) {
    const customer = this.customers.find((item) => item.id === id);

    if (customer) {
      const index = this.customers.findIndex((item) => item.id === id);
      this.customers[index] = { ...this.customers[index], ...payload };
      return this.customers[index];
    }

    return null;
  }

  delete(id: number) {
    const innerArray = this.customers.filter((item) => item.id !== id);
    this.customers = innerArray;
    return true;
  }
}
