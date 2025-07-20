import { DeliveryUseCase } from '../delivery.usecase';
import { DeliveryRepoPort } from '../../port/outgoing/delivery-repo.port';
import { Delivery } from '../../model/delivery.entity';
import { DeliveryStatus } from '@prisma/client';

describe('DeliveryUseCase', () => {
    let useCase: DeliveryUseCase;
    let repoDeliveryMock: jest.Mocked<DeliveryRepoPort>;
    let repoTransactionMock: any;

    beforeEach(() => {
        repoDeliveryMock = {
            findMany: jest.fn(),
            findById: jest.fn(),
            saveDelivery: jest.fn(),
        } as any;

        repoTransactionMock = {
            findById: jest.fn(),
        };

        useCase = new DeliveryUseCase(repoDeliveryMock, repoTransactionMock);
    });

    it('should return deliveries from repo', async () => {
        const deliveries: Delivery[] = [
            new Delivery('1', 'tx1', '123 Main St', DeliveryStatus.IN_PROGRESS, new Date()),
        ];
        repoDeliveryMock.findMany.mockResolvedValue(deliveries);
        const result = await useCase.getDeliveries();
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('1');
    });

    it('should fail if transaction not found', async () => {
        repoTransactionMock.findById.mockResolvedValue(null);
        const delivery = new Delivery('', 'tx1', '123 Main St', DeliveryStatus.IN_PROGRESS, new Date());

        const result = await useCase.saveDelivery(delivery);

        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error).toBe('Transaction not found');
        }
    });

    it('should fail if delivery address is missing', async () => {
        repoTransactionMock.findById.mockResolvedValue({ id: 'tx1' });
        const delivery = new Delivery('', 'tx1', '', DeliveryStatus.IN_PROGRESS, new Date());

        const result = await useCase.saveDelivery(delivery);

        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error).toBe('Delivery address is required');
        }
    });

    it('should fail if repo fails to save delivery', async () => {
        repoTransactionMock.findById.mockResolvedValue({ id: 'tx1' });
        repoDeliveryMock.saveDelivery.mockResolvedValue(null);

        const delivery = new Delivery('', 'tx1', '123 Main St', DeliveryStatus.IN_PROGRESS, new Date());

        const result = await useCase.saveDelivery(delivery);

        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error).toBe('Failed to save delivery');
        }
    });

    it('should succeed saving delivery', async () => {
        repoTransactionMock.findById.mockResolvedValue({ id: 'tx1' });
        const delivery = new Delivery('', 'tx1', '123 Main St', DeliveryStatus.IN_PROGRESS, new Date());
        repoDeliveryMock.saveDelivery.mockResolvedValue(delivery);

        const result = await useCase.saveDelivery(delivery);

        expect(result.ok).toBe(true);
        if (result.ok) {
            expect(result.value).toBe(delivery);
        }
    });
});
