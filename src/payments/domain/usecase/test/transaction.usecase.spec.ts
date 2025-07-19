import { TransactionUseCase } from '../transaction.usecase';
import { TransactionRepoPort } from '../../port/outgoing/transaction-repo.port';
import { Customer } from '../../model/customer.entity';
import { Transaction } from '../../model/transaction.entity';
import { TransactionStatus } from '@prisma/client';
import { WompiPort } from '../../port/outgoing/wompi.port';

describe('TransactionUseCase', () => {
  let useCase: TransactionUseCase;
  let repoTransactionMock: jest.Mocked<TransactionRepoPort>;
  let repoProductMock: any;
  let repoCustomerMock: any;
  let wompiMock: jest.Mocked<WompiPort>;

  beforeEach(() => {
    repoTransactionMock = {
      findMany: jest.fn(),
      findById: jest.fn(),
      saveTransaction: jest.fn(),
      updateStatus: jest.fn(),
    } as any;

    repoProductMock = {
      findById: jest.fn(),
      updateStock: jest.fn(),
    };

    repoCustomerMock = {
      findById: jest.fn(),
    };

    wompiMock = {
      createTransaction: jest.fn(),
    } as any;

    useCase = new TransactionUseCase(
      repoTransactionMock,
      repoProductMock,
      repoCustomerMock,
      wompiMock
    );
  });

  it('should return transactions from repo', async () => {
    const transactions: Transaction[] = [
      new Transaction('1', 'cust1', 'prod1', 1, 1000, 2000, 3000, TransactionStatus.PENDING, null, 'ORD-1'),
    ];
    repoTransactionMock.findMany.mockResolvedValue(transactions);
    const result = await useCase.getTransactions();
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('1');
  });

  it('should fail if customer not found', async () => {
    repoCustomerMock.findById.mockResolvedValue(null);
    const result = await useCase.saveTransaction({
      customerId: 'cust1',
      productId: 'prod1',
      quantity: 1,
      baseFee: 1000,
      deliveryFee: 2000,
      wompiTransactionId: 'wompi1',
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toBe('Customer not found');
  });

  it('should fail if product not found', async () => {
    repoCustomerMock.findById.mockResolvedValue(new Customer('cust1', 'John', 'john@mail.com', 'Address', 'City'));
    repoProductMock.findById.mockResolvedValue(null);
    const result = await useCase.saveTransaction({
      customerId: 'cust1',
      productId: 'prod1',
      quantity: 1,
      baseFee: 1000,
      deliveryFee: 2000,
      wompiTransactionId: 'wompi1',
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toBe('Product not found');
  });

  it('should fail if quantity <= 0', async () => {
    repoCustomerMock.findById.mockResolvedValue(new Customer('cust1', 'John', 'john@mail.com', 'Address', 'City'));
    repoProductMock.findById.mockResolvedValue({ stock: 10, price: 1000 });
    const result = await useCase.saveTransaction({
      customerId: 'cust1',
      productId: 'prod1',
      quantity: 0,
      baseFee: 1000,
      deliveryFee: 2000,
      wompiTransactionId: 'wompi1',
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toBe('Quantity must be > 0');
  });

  it('should fail if insufficient stock', async () => {
    repoCustomerMock.findById.mockResolvedValue(new Customer('cust1', 'John', 'john@mail.com', 'Address', 'City'));
    repoProductMock.findById.mockResolvedValue({ stock: 1, price: 1000 });
    const result = await useCase.saveTransaction({
      customerId: 'cust1',
      productId: 'prod1',
      quantity: 2,
      baseFee: 1000,
      deliveryFee: 2000,
      wompiTransactionId: 'wompi1',
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toBe('Insufficient stock');
  });

  it('should fail if repo fails to save transaction', async () => {
    repoCustomerMock.findById.mockResolvedValue(new Customer('cust1', 'John', 'john@mail.com', 'Address', 'City'));
    repoProductMock.findById.mockResolvedValue({ id: 'prod1', stock: 10, price: 1000 });
    repoTransactionMock.saveTransaction.mockResolvedValue(null);
    const result = await useCase.saveTransaction({
      customerId: 'cust1',
      productId: 'prod1',
      quantity: 1,
      baseFee: 1000,
      deliveryFee: 2000,
      wompiTransactionId: 'wompi1',
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toBe('Failed to save transaction');
  });

  it('should succeed creating a transaction and updating status', async () => {
    const customer = new Customer('cust1', 'John', 'john@mail.com', 'Address', 'City');
    const product = { id: 'prod1', stock: 10, price: 1000 };
    const transaction = new Transaction('tx1', 'cust1', 'prod1', 1, 1000, 2000, 4000, TransactionStatus.PENDING, null, 'ORD-1');

    repoCustomerMock.findById.mockResolvedValue(customer);
    repoProductMock.findById.mockResolvedValue(product);
    repoTransactionMock.saveTransaction.mockResolvedValue(transaction);
    wompiMock.createTransaction.mockResolvedValue({ status: 'APPROVED', transactionId: 'tx-wompi' });
    repoTransactionMock.updateStatus.mockResolvedValue(transaction);
    repoTransactionMock.findById.mockResolvedValue(transaction);

    const result = await useCase.saveTransaction({
      customerId: 'cust1',
      productId: 'prod1',
      quantity: 1,
      baseFee: 1000,
      deliveryFee: 2000,
      wompiTransactionId: 'wompi1',
    });

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe(transaction);
    }
    expect(repoProductMock.updateStock).toBeCalledWith('prod1', 9);
  });

  it('should fail when update status fails', async () => {
    const transaction = new Transaction('tx1', 'cust1', 'prod1', 1, 1000, 2000, 4000, TransactionStatus.PENDING, null, 'ORD-1');
    repoTransactionMock.findById.mockResolvedValue(transaction);
    repoTransactionMock.updateStatus.mockResolvedValue(null);

    const result = await useCase.updateTransactionStatus('tx1', { status: TransactionStatus.APPROVED });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toBe('Failed to update status');
  });

  it('should succeed updating transaction status and stock', async () => {
    const transaction = new Transaction('tx1', 'cust1', 'prod1', 1, 1000, 2000, 4000, TransactionStatus.PENDING, null, 'ORD-1');
    repoTransactionMock.findById.mockResolvedValue(transaction);
    repoTransactionMock.updateStatus.mockResolvedValue(transaction);
    repoProductMock.findById.mockResolvedValue({ id: 'prod1', stock: 10 });

    const result = await useCase.updateTransactionStatus('tx1', { status: TransactionStatus.APPROVED });
    expect(result.ok).toBe(true);
    expect(repoProductMock.updateStock).toBeCalledWith('prod1', 9);
  });
});
