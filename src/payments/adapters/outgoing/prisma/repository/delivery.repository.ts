import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service"; 
import { DeliveryRepoPort } from "src/payments/domain/port/outgoing/delivery-repo.port";
import { Delivery } from "src/payments/domain/model/delivery.entity";
import { DeliveryStatus } from "@prisma/client";

@Injectable()
export class DeliveryRepository implements DeliveryRepoPort {
    
    constructor(private readonly prisma: PrismaService) {}
    
    async findMany(): Promise<Delivery[]> {
        const dbDeliveries = await this.prisma.deliveries.findMany();
        return dbDeliveries.map(d => 
            new Delivery(d.id, d.transactionId, d.deliveryAddress, d.deliveryStatus, d.createdAt)
        );
    }

    async saveDelivery(data: Delivery): Promise<Delivery | null> {
        try {
            const dbDelivery = await this.prisma.deliveries.create({
                data: {
                    transactionId: data.transactionId,
                    deliveryStatus: DeliveryStatus.IN_PROGRESS,
                    deliveryAddress: data.deliveryAddress,
                    createdAt: data.createdAt,
                },
            });
            return new Delivery(dbDelivery.id, dbDelivery.transactionId, dbDelivery.deliveryAddress, dbDelivery.deliveryStatus, dbDelivery.createdAt);
        } catch {
            return null;
        }
    }
}