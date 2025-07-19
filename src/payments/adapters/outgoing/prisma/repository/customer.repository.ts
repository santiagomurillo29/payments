import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service"; 
import { CustomerRepoPort } from "src/payments/domain/port/outgoing/customer-repo.port";
import { Customer } from "src/payments/domain/model/customer.entity";

@Injectable()
export class CustomerRepository implements CustomerRepoPort {
    
    constructor(private readonly prisma: PrismaService) {}

    async findMany(): Promise<Customer[]> {
        const dbCustomers = await this.prisma.customers.findMany();
        return dbCustomers.map(c => 
            new Customer(c.id, c.name, c.email, c.address, c.city)
        );
    }

    async saveCustomer(data: Customer): Promise<Customer | null> {
        try {
            const dbCustomer = await this.prisma.customers.create({
                data: {
                    name: data.name,
                    email: data.email,
                    address: data.address,
                    city: data.city,
                },
            });
            return new Customer(dbCustomer.id, dbCustomer.name, dbCustomer.email, dbCustomer.address, dbCustomer.city);
        } catch {
            return null;
        }
    }
}