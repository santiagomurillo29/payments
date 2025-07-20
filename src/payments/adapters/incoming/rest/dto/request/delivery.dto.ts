import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, Matches } from 'class-validator';

export class DeliveryDto {

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Transaction ID is required' })
  @IsString({ message: 'Transaction ID must be a string' })
  transactionId: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Delivery address is required' })
  @IsString({ message: 'Delivery address must be a string' })
  deliveryAddress: string;
}
