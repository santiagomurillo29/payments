import { Inject, Injectable } from '@nestjs/common';
import { ProductRepoPort } from '../port/outgoing/product-repo.port';
import { Product } from '../model/product.entity';
import { Result } from './result'; 
import { ProductPort } from './incoming/product.port';

@Injectable()
export class ProductsUseCase implements ProductPort{
  
  constructor(
    @Inject('ProductRepoPort') private readonly repo: ProductRepoPort
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.repo.findMany();
  }

  async updateProductStock(id: string, stock: number): Promise<Result<Product, string>> {
    if (stock < 0) return {ok: false, error: 'Stock cannot be negative'};
    const updated = await this.repo.updateStock(id, stock);
    if (!updated) return {ok: false, error: 'Product not found'};
    return {ok: true, value: updated};
  }
}



