import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import * as path from 'path';
async function bootstrap() {
  try {
    const keyPath = process.env.SSL_KEY_PATH || '';
    const certPath = process.env.SSL_CERT_PATH || '';
    const httpsOptions = {
      key: fs.readFileSync(keyPath, 'utf8'),
      cert: fs.readFileSync(certPath, 'utf8'),
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
    await app.listen(process.env.PORT);
  } catch (error) {
    console.error(error);
  }
}
bootstrap();
