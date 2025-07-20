import { Customer } from "../../model/customer.entity";
import { Delivery } from "../../model/delivery.entity";
import { Result } from "../result";

export interface DeliveryPort {
  getDeliveries(): Promise<Delivery[]>;
  saveDelivery(data: Delivery): Promise<Result<Delivery, string>>;
}