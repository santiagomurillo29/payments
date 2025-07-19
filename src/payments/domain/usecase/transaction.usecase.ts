import { Inject, Injectable } from '@nestjs/common';
import { Result } from './result'; 
import { TransactionPort } from './incoming/transaction.port';
import { TransactionRepoPort } from '../port/outgoing/transaction-repo.port';
import { Transaction } from '../model/transaction.entity';
import { v4 as uuid } from 'uuid';
import { TransactionStatus } from '@prisma/client'; 
import { WompiPort } from '../port/outgoing/wompi.port';

@Injectable()
export class TransactionUseCase implements TransactionPort {

  constructor(
    @Inject('TransactionRepoPort') private readonly repoTransaction: TransactionRepoPort,
    @Inject('ProductRepoPort') private readonly repoProduct: any,
    @Inject('CustomerRepoPort') private readonly repoCustomer: any,
    @Inject('WompiPort') private readonly wompi: WompiPort,
  ) {}

  async getTransactions(): Promise<Transaction[]> {
    return this.repoTransaction.findMany();
  }

  async saveTransaction(data: {
    customerId: string;
    productId: string;
    quantity: number;
    baseFee: number;
    deliveryFee: number;
    wompiTransactionId: string;
  }): Promise<Result<Transaction, string>> {
    
    const customer = await this.repoCustomer.findById(data.customerId);
    if (!customer) return { ok: false, error: 'Customer not found' };

    const product = await this.repoProduct.findById(data.productId);
    if (!product) return { ok: false, error: 'Product not found' };
    if (data.quantity <= 0) return { ok: false, error: 'Quantity must be > 0' };
    if (product.stock < data.quantity) return { ok: false, error: 'Insufficient stock' };

    const totalAmount = product.price * data.quantity + data.baseFee + data.deliveryFee;
    const amountInCents = Math.round(totalAmount * 100);

    const referenceCode = `ORD-${uuid()}`;

    const tx = await this.repoTransaction.saveTransaction(
      new Transaction(
        '', 
        data.customerId, 
        data.productId, 
        data.quantity,
        data.baseFee, 
        data.deliveryFee, 
        totalAmount,
        TransactionStatus.PENDING, 
        null, 
        referenceCode
      )
    );

    if(!tx) return { ok: false, error: 'Failed to save transaction' };

    const wompiResp = await this.wompi.createTransaction({
      amountInCents,
      currency: 'COP',
      customerEmail: customer.email,
      paymentSourceId: data.wompiTransactionId,
      reference: referenceCode,
  });

    const finalStatus = wompiResp.status as TransactionStatus;
    await this.repoTransaction.updateStatus(tx.id, finalStatus);

    if (finalStatus === TransactionStatus.APPROVED) {
      await this.repoProduct.updateStock(
        tx.productId,
        product.stock - tx.quantity
      );
    }

    const updated = await this.repoTransaction.findById(tx.id);
    return { ok: true, value: updated! };
  }

  async updateTransactionStatus(id: string, data: { status: TransactionStatus }): Promise<Result<Transaction, string>> {

    const tx = await this.repoTransaction.findById(id);
    if (!tx) return { ok: false, error: 'Transaction not found' };

    const updated = await this.repoTransaction.updateStatus(id, data.status as TransactionStatus);
    if (!updated) return { ok: false, error: 'Failed to update status' };

    if (data.status === TransactionStatus.APPROVED) {
      const product = await this.repoProduct.findById(updated.productId);
      await this.repoProduct.updateStock(
        updated.productId,
        product.stock - updated.quantity
      );
    }

    return { ok: true, value: updated };
  }
}


