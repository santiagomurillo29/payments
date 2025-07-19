import { ProductsUseCase } from '../product.usecase'; 
import { ProductRepoPort } from '../../port/outgoing/product-repo.port';
import { Product } from '../../model/product.entity';

describe('ProductsUseCase', () => {
    let useCase: ProductsUseCase;
    let repoMock: jest.Mocked<ProductRepoPort>;

    beforeEach(() => {
        repoMock = {
            findMany: jest.fn(),
            updateStock: jest.fn(),
        };
        useCase = new ProductsUseCase(repoMock);
    });

    it('should return products from repo', async () => {
        const products: Product[] = [
            new Product('1', 'test', 'desc', 100, 5),
        ];
        repoMock.findMany.mockResolvedValue(products);
        const result = await useCase.getProducts();
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('test');
    });

    it('should fail on negative stock', async () => {
        const result = await useCase.updateProductStock('1', -1);
        expect(result.ok).toBe(false);
        if (!result.ok) {
        expect(result.error).toBe('Stock cannot be negative');
    }
    });

    it('should fail on non-existing product', async () => {
        repoMock.updateStock.mockResolvedValue(null);
        const result = await useCase.updateProductStock('1', 10);
        expect(result.ok).toBe(false);
        if (!result.ok) {
        expect(result.error).toBe('Product not found');
    }
    });

    it('should succeed updating stock', async () => {
        const product = new Product('1', 'test', 'desc', 100, 5);
        repoMock.updateStock.mockResolvedValue(product);
        const result = await useCase.updateProductStock('1', 10);
        expect(result.ok).toBe(true);
        if (result.ok) {
        expect(result.value).toBe(product);
    }
    });
});
