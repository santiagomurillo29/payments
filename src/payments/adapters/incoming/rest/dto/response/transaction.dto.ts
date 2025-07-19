import { ApiProperty } from "@nestjs/swagger";

export class TransactionResponse {
    @ApiProperty() id: string;
    @ApiProperty() customerId: string;
    @ApiProperty() productId: string;
    @ApiProperty() quantity: number;
    @ApiProperty() baseFee: number;
    @ApiProperty() deliveryFee: number;
    @ApiProperty() totalAmount: number;
    @ApiProperty() status: string;
    @ApiProperty() wompiTransactionId: string;
    @ApiProperty() referenceCode: string;
}