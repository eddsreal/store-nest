import { Module } from '@nestjs/common';
import { BrandController } from './controllers/brands.controller';
import { BrandService } from './services/brands.service';

@Module({
  imports: [],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandsModule {}
