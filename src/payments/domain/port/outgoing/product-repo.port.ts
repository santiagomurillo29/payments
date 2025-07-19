import { Product } from "../../model/product.entity";

export interface ProductRepoPort {
  findMany(): Promise<Product[]>;
  updateStock(id: string, stock: number): Promise<Product | null>;
}