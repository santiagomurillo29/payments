import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, Matches } from 'class-validator';

export class TransactionDto {
  
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Customer ID must be a string' })
  customerId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Product ID is required' })
  @IsString({ message: 'Product ID must be a string' })
  productId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Quantity is required' })
  quantity: number;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Base fee is required' })
  baseFee: number;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Delivery fee is required' })
  deliveryFee: number;

  @ApiProperty({ required: true, description: 'ID de la fuente de pago (payment_source_id) obtenido con public_key' })
  @IsString()
  paymentSourceId: string;
}
