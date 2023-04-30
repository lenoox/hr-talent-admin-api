import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  const configService = app.get(ConfigService);
  const frontendUrls = configService.get<string>('FRONTEND_URLS');
  app.enableCors({
    credentials: true,
    origin: frontendUrls.split(';'),
  });
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
