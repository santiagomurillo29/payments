import { CustomerUseCase } from '../customer.usecase';
import { CustomerRepoPort } from '../../port/outgoing/customer-repo.port';
import { Customer } from '../../model/customer.entity';

describe('CustomerUseCase', () => {
    let useCase: CustomerUseCase;
    let repoMock: jest.Mocked<CustomerRepoPort>;

    beforeEach(() => {
        repoMock = {
            findMany: jest.fn(),
            findById: jest.fn(),
            saveCustomer: jest.fn(),
        };
        useCase = new CustomerUseCase(repoMock);
    });

    it('should return customers from repo', async () => {
        const customers: Customer[] = [
            new Customer('1', 'John Doe', 'john@example.com', '123 Main St', 'CityX'),
        ];
        repoMock.findMany.mockResolvedValue(customers);
        const result = await useCase.getCustomers();
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('John Doe');
    });

    it('should fail when name or email is missing', async () => {
    const customer = { id: '1', name: '', email: '', address: '123', city: 'CityX' } as Customer;
        const result = await useCase.saveCustomer(customer);
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error).toBe('Name and email are required');
        }
    });

    it('should fail when repo fails to save', async () => {
        const customer = new Customer('1', 'John Doe', 'john@example.com', '123 Main St', 'CityX');
        repoMock.saveCustomer.mockResolvedValue(null);
        const result = await useCase.saveCustomer(customer);
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error).toBe('Failed to save customer');
        }
    });

    it('should succeed saving customer', async () => {
        const customer = new Customer('1', 'John Doe', 'john@example.com', '123 Main St', 'CityX');
        repoMock.saveCustomer.mockResolvedValue(customer);
        const result = await useCase.saveCustomer(customer);
        expect(result.ok).toBe(true);
        if (result.ok) {
            expect(result.value).toBe(customer);
        }
    });
});
