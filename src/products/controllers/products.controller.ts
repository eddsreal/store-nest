import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { ApiTags } from '@nestjs/swagger';

//  Groups in documentation with API Tags
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getMany(
    @Query('limit') limit = 100,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  updateOne(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(productId, payload);
  }
}
