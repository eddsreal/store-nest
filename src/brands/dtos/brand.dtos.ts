import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'It should be the brand name' })
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
