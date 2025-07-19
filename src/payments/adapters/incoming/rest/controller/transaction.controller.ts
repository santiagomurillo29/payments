import { Controller, Get, Put, Body, HttpCode, Param, BadRequestException, Post, NotFoundException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerResponse } from '../dto/response/customer.dto';
import { TransactionResponse } from '../dto/response/transaction.dto';
import { TransactionUseCase } from 'src/payments/domain/usecase/transaction.usecase';
import { TransactionDto } from '../dto/request/transaction.dto';
import { UpdateTransactionDto } from '../dto/request/update-customer.dto';

@ApiTags('Transactions')
@Controller('transactions')
export class TransactionController {

    constructor( private readonly transactionUseCase: TransactionUseCase) {}

    @Get()
    @ApiOperation({ summary: 'Get all transactions' })
    @ApiResponse({ status: 200, type: [TransactionResponse] })
    async getTransactions(): Promise<TransactionResponse[]> {
        const transactions = await this.transactionUseCase.getTransactions();
        return transactions.map(t => ({
            id: t.id,
            customerId: t.customerId,
            productId: t.productId,
            quantity: t.quantity,
            baseFee: t.baseFee,
            deliveryFee: t.deliveryFee,
            totalAmount: t.totalAmount,
            status: t.status,
            wompiTransactionId: t.wompiTransactionId ?? '',
            referenceCode: t.referenceCode
        }));
    }

    @Post()
    @ApiOperation({ summary: 'Save a customer' })
    @ApiResponse({ status: 201, type: CustomerResponse })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async saveTransaction(@Body() transactionDto: TransactionDto): Promise<TransactionResponse> {
        
        const result = await this.transactionUseCase.saveTransaction({
            customerId: transactionDto.customerId,
            productId: transactionDto.productId,
            quantity: transactionDto.quantity,
            baseFee: transactionDto.baseFee,
            deliveryFee: transactionDto.deliveryFee,
            wompiTransactionId: transactionDto.paymentSourceId 
        });

        if (!result.ok) {
            throw new BadRequestException(result.error);
        }

       const t = result.value;
        return {
            id: t.id,
            customerId: t.customerId,
            productId: t.productId,
            quantity: t.quantity,
            baseFee: t.baseFee,
            deliveryFee: t.deliveryFee,
            totalAmount: t.totalAmount,
            status: t.status,
            wompiTransactionId: t.wompiTransactionId ?? '',
            referenceCode: t.referenceCode,
        };
    }

    @Put(':id')
    @HttpCode(204)
    @ApiOperation({ summary: 'Update transaction' })
    @ApiResponse({ status: 204, description: 'Transaction successfully' })
    @ApiResponse({ status: 400, description: 'Invalid transaction data' })
    @ApiResponse({ status: 404, description: 'Transaction not found' })
    async updateTransaction(@Param('id') id: string, @Body() dto: UpdateTransactionDto): Promise<void> {

        const result = await this.transactionUseCase.updateTransactionStatus(id, { status: dto.status });

        if (!result.ok) {
            if (result.error === 'Transaction not found')
                throw new NotFoundException(result.error);
            throw new BadRequestException(result.error);    
        }
    }
}