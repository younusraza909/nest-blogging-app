import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //extra property wont come if not there in DTO , this alone wont throw error
      forbidNonWhitelisted: true, //this will throw error if extra property comes, it works with whilelist config
      transform: true, //After validation it will transform that property to the instance we have defined in DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
