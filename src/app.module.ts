import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesService } from './services/categories/categories.service';
import { ProductsService } from './services/products/products.service';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { BrandController } from './controllers/brands/brands.controller';
import { BrandService } from './services/brands/brands.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    CustomersController,
    BrandController,
  ],
  providers: [
    AppService,
    ProductsService,
    UsersService,
    CustomersService,
    CategoriesService,
    BrandService,
  ],
})
export class AppModule {}
