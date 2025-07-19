import { Controller, Get, Put, Body, HttpCode, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDto } from '../dto/request/producto.dto';
import { ProductsUseCase } from 'src/payments/domain/usecase/product.usecase';
import { ProductResponse } from '../dto/response/producto.dto';
import { BadRequestException, NotFoundException } from '@nestjs/common';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  
  constructor( private readonly productUseCase: ProductsUseCase) {}

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: [ProductResponse] })
  async findAll(): Promise<ProductResponse[]> {
    const products = await this.productUseCase.getProducts();
    return products.map(p => ({
      id: p.id,
      name: p.name,
      description: p.description,
      price: p.price,
      stock: p.stock
    }));
  }

  @Put(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Update product stock' })
  @ApiResponse({ status: 204, description: 'Updated successfully' })
  @ApiResponse({ status: 400, description: 'Invalid stock' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  async updateStock(@Param('id') id: string, @Body() data: ProductDto) {
    const result = await this.productUseCase.updateProductStock(id, data.stock);
    await this.productUseCase.updateProductStock(id, data.stock);
    if (!result.ok) {
            if (result.error === 'Stock cannot be negative') throw new BadRequestException(result.error);
            if (result.error === 'Product not found') throw new NotFoundException(result.error);
        }
  }
}