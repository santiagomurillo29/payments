import { Module } from '@nestjs/common';
import { PrismaModule } from './payments/adapters/outgoing/prisma/prisma.module';
import { ProductsController } from './payments/adapters/incoming/rest/controller/products.controller';
import { ProductsUseCase } from './payments/domain/usecase/product.usecase';
import { ProductRepository } from './payments/adapters/outgoing/prisma/repository/product.repository'; 
import { CustomerRepository } from './payments/adapters/outgoing/prisma/repository/customer.repository';
import { CustomerController } from './payments/adapters/incoming/rest/controller/customer.controller';
import { CustomerUseCase } from './payments/domain/usecase/customer.usecase';
import { HttpModule } from '@nestjs/axios';
import { TransactionRepository } from './payments/adapters/outgoing/prisma/repository/transaction.repository';
import { TransactionController } from './payments/adapters/incoming/rest/controller/transaction.controller';
import { TransactionUseCase } from './payments/domain/usecase/transaction.usecase';
import { WompiAdapter } from './payments/adapters/outgoing/wompi/wompi-adapter';

@Module({
  imports: [
    PrismaModule,
    HttpModule.register({ timeout: 5000 }),
  ],
  controllers: [ProductsController, CustomerController, TransactionController],
  providers: [ProductsUseCase, CustomerUseCase, TransactionUseCase,
    {
      provide: 'ProductRepoPort',
      useClass: ProductRepository,
    },
    {
      provide: 'CustomerRepoPort',
      useClass: CustomerRepository,
    },
    {
      provide: 'TransactionRepoPort',
      useClass: TransactionRepository,
    },
    {
      provide: 'WompiPort',
      useClass: WompiAdapter,
    }
  ],
})
export class AppModule {}
