import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './payments/adapters/incoming/rest/exception/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Payments API')
    .setDescription('API for managing payments')
    .setVersion('1.0')
    .addBearerAuth()
    .build(); 

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(3000);
  // await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
