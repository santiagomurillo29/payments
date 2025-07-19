import { Module } from '@nestjs/common';
import { PrismaModule } from './payments/adapters/outgoing/prisma/prisma.module';
import { ProductsController } from './payments/adapters/incoming/rest/controller/products.controller';
import { ProductsUseCase } from './payments/domain/usecase/product.usecase';
import { ProductRepository } from './payments/adapters/outgoing/prisma/repository/product.repository'; 
import { CustomerRepository } from './payments/adapters/outgoing/prisma/repository/customer.repository';
import { CustomerController } from './payments/adapters/incoming/rest/controller/customer.controller';
import { CustomerUseCase } from './payments/domain/usecase/customer.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController, CustomerController],
  providers: [ProductsUseCase, CustomerUseCase,
    {
      provide: 'ProductRepoPort',
      useClass: ProductRepository,
    },
    {
      provide: 'CustomerRepoPort',
      useClass: CustomerRepository,
    }
  ],
})
export class AppModule {}
