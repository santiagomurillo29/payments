import { Module } from '@nestjs/common';
import { PrismaModule } from './payments/adapters/outgoing/prisma/prisma.module';
import { ProductsController } from './payments/adapters/incoming/rest/controller/products.controller';
import { ProductsUseCase } from './payments/domain/usecase/product.usecase';
import { ProductRepository } from './payments/adapters/outgoing/prisma/repository/product.repository'; 

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [ProductsUseCase, 
    {
      provide: 'ProductRepoPort',
      useClass: ProductRepository 
    }
  ],
})
export class AppModule {}
