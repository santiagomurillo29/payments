import { ApiProperty } from '@nestjs/swagger';

export class DeliveryDto {
  @ApiProperty() transactionId: string;
  @ApiProperty() deliveryAddress: string;
  @ApiProperty() deliveryStatus: string;
  @ApiProperty() createdAt: string;
}
