import { Inject, Injectable } from '@nestjs/common';
import { Result } from './result'; 
import { DeliveryPort } from './incoming/delivery.port';
import { DeliveryRepoPort } from '../port/outgoing/delivery-repo.port';
import { Delivery } from '../model/delivery.entity';
import { DeliveryStatus } from "@prisma/client";

@Injectable()
export class DeliveryUseCase implements DeliveryPort {

  constructor(
    @Inject('DeliveryRepoPort') private readonly repoDelivery: DeliveryRepoPort,
    @Inject('TransactionRepoPort') private readonly repoTransaction: any,
  ) {}

  async getDeliveries(): Promise<Delivery[]> {
    return this.repoDelivery.findMany();
  }

  async saveDelivery(data: Delivery): Promise<Result<Delivery, string>> {
    const transaction = await this.repoTransaction.findById(data.transactionId);
    if (!transaction) return { ok: false, error: 'Transaction not found' };

    if (!data.deliveryAddress) {
      return {ok: false, error: 'Delivery address is required'};
    }

    const delivery = new Delivery('', data.transactionId, data.deliveryAddress, DeliveryStatus.IN_PROGRESS, data.createdAt);
    const saved = await this.repoDelivery.saveDelivery(delivery);
    if (!saved) return {ok: false, error: 'Failed to save delivery'};
    return {ok: true, value: saved};
  }
}

