import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandService {
  private counterId = 1;
  private customers: Brand[] = [
    {
      id: 1,
      name: 'Example',
      image: 'https://example.com/',
    },
  ];

  create(payload: CreateBrandDto) {
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

  updateOne(id: number, payload: UpdateBrandDto) {
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
