import { Customer } from "../../model/customer.entity";

export interface CustomerRepoPort {
  findMany(): Promise<Customer[]>;
  findById(id: string): Promise<Customer | null>;
  saveCustomer(data: Customer): Promise<Customer | null>;
}