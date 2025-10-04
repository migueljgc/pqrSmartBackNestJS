import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve campos no definidos en el DTO
      forbidNonWhitelisted: true, // Lanza error si llegan campos extra
      transform: true, // Convierte los tipos automáticamente
    }),
  );
  app.enableCors({
    origin: 'http://localhost:3000', // dominio del frontend
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
