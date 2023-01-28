import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const frontendUrls = configService.get<string>('FRONTEND_URLS');
  app.enableCors({
    credentials: true,
    origin: frontendUrls.split(";"),
  })
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
