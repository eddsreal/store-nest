import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../products/entities/product.entity';
import {
  CreateProductDto,
  UpdateProductDto,
} from '../../products/dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Prodcut 1',
      description: 'bla bla',
      price: 122,
      stock: 21,
      image: 'Hola!',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      return new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products = [...this.products, newProduct];
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = { ...this.products[index], ...payload };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const innerArray = this.products.filter((item) => item.id !== id);
    this.products = innerArray;
    return true;
  }
}
