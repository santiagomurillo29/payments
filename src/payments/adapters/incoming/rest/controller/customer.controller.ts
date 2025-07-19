import { Controller, Get, Put, Body, HttpCode, Param, BadRequestException, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerResponse } from '../dto/response/customer.dto';
import { CustomerUseCase } from 'src/payments/domain/usecase/customer.usecase';
import { CustomerDto } from '../dto/request/customer.dto';
import { Customer } from 'src/payments/domain/model/customer.entity';


@ApiTags('Customers')
@Controller('customers')
export class CustomerController {
    constructor( private readonly customerUseCase: CustomerUseCase) {}

    @Get()
    @ApiOperation({ summary: 'Get all customers' })
    @ApiResponse({ status: 200, type: [CustomerResponse] })
    async getCustomers(): Promise<CustomerResponse[]> {
        const customers = await this.customerUseCase.getCustomers();
        return customers.map(c => ({
            id: c.id,
            name: c.name,
            email: c.email,
            address: c.address,
            city: c.city
        }));
    }

    @Post()
    @ApiOperation({ summary: 'Save a customer' })
    @ApiResponse({ status: 201, type: CustomerResponse })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async saveCustomer(@Body() customerDto: CustomerDto): Promise<CustomerResponse> {
        const customer = new Customer('', customerDto.name, customerDto.email, customerDto.address, customerDto.city);
        const result = await this.customerUseCase.saveCustomer(customer);

        if (!result.ok) {
            throw new BadRequestException(result.error);
        }

        return {
            id: result.value.id,
            name: result.value.name,
            email: result.value.email,
            address: result.value.address,
            city: result.value.city,
        };
    }
}