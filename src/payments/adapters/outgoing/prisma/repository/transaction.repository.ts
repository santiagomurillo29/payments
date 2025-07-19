import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service"; 
import { CustomerRepoPort } from "src/payments/domain/port/outgoing/customer-repo.port";
import { Customer } from "src/payments/domain/model/customer.entity";
import { TransactionRepoPort } from "src/payments/domain/port/outgoing/transaction-repo.port";
import { Transaction } from "src/payments/domain/model/transaction.entity";
import { TransactionStatus } from "@prisma/client";

@Injectable()
export class TransactionRepository implements TransactionRepoPort {
    
    constructor(private readonly prisma: PrismaService) {}
    async findById(id: string): Promise<Transaction> {
        const dbTransaction = await this.prisma.transactions.findUnique({
            where: { id },
        });
        if (!dbTransaction) {
            throw new Error("Transaction not found");
        }
        return new Transaction(
            dbTransaction.id,
            dbTransaction.customerId,
            dbTransaction.productId,
            dbTransaction.quantity,
            +dbTransaction.baseFee,
            +dbTransaction.deliveryFee,
            +dbTransaction.totalAmount,
            dbTransaction.status,
            dbTransaction.wompiTransactionId,
            dbTransaction.referenceCode
        );
    }

    async findMany(): Promise<Transaction[]> {
        const dbTransactions = await this.prisma.transactions.findMany();
        return dbTransactions.map(t => 
            new Transaction(t.id, t.customerId, t.productId, t.quantity, +t.baseFee, +t.deliveryFee, +t.totalAmount, t.status, t.wompiTransactionId, t.referenceCode)
        );
    }

    async saveTransaction(data: Transaction): Promise<Transaction | null> {
        try {
            const dbTransaction = await this.prisma.transactions.create({
                data: {
                    customerId: data.customerId,
                    productId: data.productId,
                    quantity: data.quantity,
                    baseFee: data.baseFee,
                    deliveryFee: data.deliveryFee,
                    totalAmount: data.totalAmount,
                    // status: data.status (se supone que esto no porque siempre seria "PENDING"),
                    wompiTransactionId: data.wompiTransactionId,
                    referenceCode: data.referenceCode,
                    
                },
            });
            return new Transaction(dbTransaction.id, dbTransaction.customerId, dbTransaction.productId, dbTransaction.quantity, +dbTransaction.baseFee, +dbTransaction.deliveryFee, +dbTransaction.totalAmount, dbTransaction.status, dbTransaction.wompiTransactionId, dbTransaction.referenceCode);
        } catch {
            return null;
        }
    }

    async updateStatus(id: string, status: TransactionStatus): Promise<Transaction | null> {
        try {
            const dbTransaction = await this.prisma.transactions.update({
                where: { id },
                data: { status }, 
            });
            return new Transaction(
                dbTransaction.id,
                dbTransaction.customerId,
                dbTransaction.productId,
                dbTransaction.quantity,
                +dbTransaction.baseFee,
                +dbTransaction.deliveryFee,
                +dbTransaction.totalAmount,
                dbTransaction.status,
                dbTransaction.wompiTransactionId,
                dbTransaction.referenceCode  
            );
        } catch {
            return null;
        }
    }
}
         