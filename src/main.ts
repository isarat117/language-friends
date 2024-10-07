import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dil Arkadaşlığı API')
    .setDescription('Dil arkadaşlığı uygulaması için API dokümantasyonu')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.listen(3000, () => {
    console.log('Application is running on: http://localhost:3000/api/docs');
  });
}

bootstrap();
