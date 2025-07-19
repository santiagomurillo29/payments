import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class ProductDto {
  @ApiProperty({ required: true })
  @IsInt()
  @Min(0)
  stock: number;
}