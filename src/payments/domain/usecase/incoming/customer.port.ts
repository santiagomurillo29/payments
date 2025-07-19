import { Customer } from "../../model/customer.entity";
import { Result } from "../result";

export interface CustomerPort {
  getCustomers(): Promise<Customer[]>;
  saveCustomer(data: Customer): Promise<Result<Customer, string>>;
}