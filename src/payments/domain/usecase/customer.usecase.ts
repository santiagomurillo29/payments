import { Inject, Injectable } from '@nestjs/common';
import { Result } from './result'; 
import { CustomerPort } from './incoming/customer.port';
import { Customer } from '../model/customer.entity';
import { CustomerRepoPort } from '../port/outgoing/customer-repo.port';

@Injectable()
export class CustomerUseCase implements CustomerPort {
  
  constructor(
    @Inject('CustomerRepoPort') private readonly repo: CustomerRepoPort
  ) {}

  async getCustomers(): Promise<Customer[]> {
    return this.repo.findMany();
  }

  async saveCustomer(data: Customer): Promise<Result<Customer, string>> {
    if (!data.name || !data.email) {
      return {ok: false, error: 'Name and email are required'};
    }
    const customer = new Customer(data.id, data.name, data.email, data.address, data.city);
    const saved = await this.repo.saveCustomer(customer);
    if (!saved) return {ok: false, error: 'Failed to save customer'};
    return {ok: true, value: saved};
  }
}

