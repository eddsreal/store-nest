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
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Get()
  find() {
    return this.categoriesService.find();
  }

  @Get(':categoriesId')
  findOne(@Param('categoriesId', ParseIntPipe) categoriesId: number) {
    return this.categoriesService.findOne(categoriesId);
  }

  @Put(':categoriesId')
  updateOne(
    @Param('categoriesId', ParseIntPipe) categoriesId: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateOne(categoriesId, payload);
  }

  @Delete(':categoriesId')
  deleteOne(@Param('categoriesId', ParseIntPipe) categoriesId: number) {
    return this.categoriesService.delete(categoriesId);
  }
}
