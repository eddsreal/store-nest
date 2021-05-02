import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { ProductsService } from '../../products/services/products.service';

@Injectable()
export class UsersService {
  constructor(private productService: ProductsService) {}

  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'example@example.com',
      password: '123123',
      role: 'Admin',
    },
  ];

  create(payload: CreateUserDto) {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users = [...this.users, newUser];
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      return new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  findOrdersByUser(id: number) {
    const user = this.findOne(id);

    return {
      date: new Date(),
      user,
      products: this.productService.findAll(),
    };
  }

  find() {
    return this.users;
  }

  updateOne(id: number, payload: UpdateUserDto) {
    const user = this.users.find((item) => item.id === id);

    if (user) {
      const index = this.users.findIndex((item) => item.id === id);
      this.users[index] = { ...this.users[index], ...payload };
      return this.users[index];
    }

    return null;
  }

  delete(id: number) {
    const innerArray = this.users.filter((item) => item.id !== id);
    this.users = innerArray;
    return true;
  }
}
