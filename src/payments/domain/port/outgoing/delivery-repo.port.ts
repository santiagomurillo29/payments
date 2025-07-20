import { Delivery } from "../../model/delivery.entity";

export interface DeliveryRepoPort {
  findMany(): Promise<Delivery[]>;
  saveDelivery(data: Delivery): Promise<Delivery | null>;
}