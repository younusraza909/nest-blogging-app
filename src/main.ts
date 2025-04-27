import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //extra property wont come if not there in DTO , this alone wont throw error
      forbidNonWhitelisted: true, //this will throw error if extra property comes, it works with whilelist config
      transform: true, //After validation it will transform that property to the instance we have defined in DTO
      transformOptions: {
        enableImplicitConversion: true, // in dto we dont need to convert implicit conversion use Type from transformer
      },
    }),
  );
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest.js Masterclass - Blog app API')
    .setDescription('User the base API url as http://localhost:3000')
    .setTermsOfService('https://example.com/terms')
    .setLicense('MIT license', 'https://example.com/license')
    .addServer('http://localhost:3000', 'Local server')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  // Set AWS SDK
  const configService = app.get(ConfigService);
  config.update({
    region: configService.get('AWS_REGION'),
    credentials: {
      accessKeyId: configService.get('AWS_ACCESS_KEY_ID') ?? '',
      secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY') ?? '',
    },
  });

  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
