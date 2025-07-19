import { Injectable } from "@nestjs/common";
import { ProductRepoPort } from "src/payments/domain/port/outgoing/product-repo.port";
import { PrismaService } from "../prisma.service"; 
import { Product } from "src/payments/domain/model/product.entity";

@Injectable()
export class ProductRepository implements ProductRepoPort {
    
    constructor(private readonly prisma: PrismaService) {}

    async findMany(): Promise<Product[]> {
        const dbProducts = await this.prisma.products.findMany();
        return dbProducts.map(p => 
            new Product(p.id, p.name, p.description, +p.price, p.stock)
        );
    }

    async updateStock(id: string, stock: number): Promise<Product | null> {
        try {
            const dbProduct = await this.prisma.products.update({
                where: { id },
                data: { stock },
            });
            return new Product(dbProduct.id, dbProduct.name, dbProduct.description, +dbProduct.price, dbProduct.stock);
        } catch {
            return null;
        }
    }
}