import { Decimal } from "@prisma/client/runtime/library";

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public stock: number
  ) 
  {
    if (price < 0) throw new Error("Price cannot be negative");
    if (stock < 0) throw new Error("Stock cannot be negative");
  }

  updateStock(stock: number): void {
        if (stock < 0) throw new Error("Invalid stock");
        this.stock = stock;
  }
}