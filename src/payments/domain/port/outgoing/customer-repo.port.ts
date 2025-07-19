import { Customer } from "../../model/customer.entity";

export interface CustomerRepoPort {
  findMany(): Promise<Customer[]>;
  saveCustomer(data: Customer): Promise<Customer | null>;
}