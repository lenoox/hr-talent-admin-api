import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
const keyFile = fs.readFileSync(__dirname + '/../../certs/key.pem');
const certFile = fs.readFileSync(__dirname + '/../../certs/cert.pem');
async function bootstrap() {
  const httpsOptions = {
    key: keyFile,
    cert: certFile,
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
  await app.listen(443);
}
bootstrap();
