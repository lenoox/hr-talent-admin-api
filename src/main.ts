import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
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
    const cors = {
      credentials: true,
      origin: process.env.FRONTEND_URLS.split(';'),
    };
    const server = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
      {
        cors,
        logger: ['error', 'warn', 'log'],
      },
    );
    console.log(`Load key path ${process.env.FRONTEND_URLS}`);
    console.log(`Load key path ${keyPath}`);
    console.log(`Load cert path ${certPath}`);
    app.use(cookieParser());
    await app.init();
    console.log(`Listen port 3000`);
    console.log(`Listen port 443`);
    http.createServer(server).listen(3000);
    https.createServer(httpsOptions, server).listen(443);
  } catch (error) {
    console.error(error);
  }
}
bootstrap();
