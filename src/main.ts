import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import * as express from 'express';
import * as http from 'http';
import * as https from 'https';
import { ExpressAdapter } from '@nestjs/platform-express';
async function bootstrap() {
  try {
    const keyPath = process.env.SSL_KEY_PATH || '';
    const certPath = process.env.SSL_CERT_PATH || '';
    const httpsOptions = {
      key: fs.readFileSync(keyPath, 'utf8'),
      cert: fs.readFileSync(certPath, 'utf8'),
    };
    console.log(`Load key path ${keyPath}`);
    console.log(`Load cert path ${certPath}`);
    const server = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
    const configService = app.get(ConfigService);
    const frontendUrls = configService.get<string>('FRONTEND_URLS');
    app.enableCors({
      credentials: true,
      origin: frontendUrls.split(';'),
    });
    app.use(cookieParser());
    await app.init();
    http.createServer(server).listen(3000);
    https.createServer(httpsOptions, server).listen(443);
  } catch (error) {
    console.error(error);
  }
}
bootstrap();
