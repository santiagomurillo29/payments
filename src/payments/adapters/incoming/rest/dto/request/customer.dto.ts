import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, Matches } from 'class-validator';

export class CustomerDto {
  
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  @Matches(/^[A-Za-z\s]+$/, { message: 'Name must contain only letters and spaces' })
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Address is required' })
  @IsString({ message: 'Address must be a string' })
  address: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'City is required' })
  @IsString({ message: 'City must be a string' })
  @Matches(/^[A-Za-z\s]+$/, { message: 'City must contain only letters and spaces' })
  city: string;
}
