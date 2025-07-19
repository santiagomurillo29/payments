import { Product } from "../../model/product.entity";

export interface ProductRepoPort {
  findMany(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  updateStock(id: string, stock: number): Promise<Product | null>;
}