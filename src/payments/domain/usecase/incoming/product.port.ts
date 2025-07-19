import { Result } from "../result";
import { Product } from "../../model/product.entity";

export interface ProductPort {
  getProducts(): Promise<Product[]>;  
  updateProductStock(id: string, stock: number): Promise<Result<Product, string>>;
}