import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import * as path from 'path';
async function bootstrap() {
  const keyPath = process.env.SSL_KEY_PATH || '';
  const certPath = process.env.SSL_CERT_PATH || '';
  const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, keyPath)),
    cert: fs.readFileSync(path.join(__dirname, certPath)),
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
  await app.listen(8443);
}
bootstrap();
