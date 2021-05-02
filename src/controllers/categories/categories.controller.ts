import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categries.dtos';
import { CategoriesService } from 'src/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private customerService: CategoriesService) {}

  @Post()
  create(@Body() payload: CreateCategoryDto) {
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
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.customerService.updateOne(customerId, payload);
  }

  @Delete(':customerId')
  deleteOne(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customerService.delete(customerId);
  }
}
