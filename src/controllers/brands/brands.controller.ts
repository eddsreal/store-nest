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
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brand.dtos';
import { BrandService } from 'src/services/brands/brands.service';

@Controller('brands')
export class BrandController {
  constructor(private brandsService: BrandService) {}

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Get()
  find() {
    return this.brandsService.find();
  }

  @Get(':brandsId')
  findOne(@Param('brandsId', ParseIntPipe) brandsId: number) {
    return this.brandsService.findOne(brandsId);
  }

  @Put(':brandsId')
  updateOne(
    @Param('brandsId', ParseIntPipe) brandsId: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.updateOne(brandsId, payload);
  }

  @Delete(':brandsId')
  deleteOne(@Param('brandsId', ParseIntPipe) brandsId: number) {
    return this.brandsService.delete(brandsId);
  }
}
