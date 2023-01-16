import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {JobOffersModule} from "./modules/job-offers/job-offers.module";
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import { AuthenticationModule } from './core/authentication/authentication.module';
import { UsersModule } from './modules/users/users.module';
import * as Joi from '@hapi/joi';
import { CandidatesModule } from './modules/candidates/candidates.module';
import { DirectoriesModule } from './modules/directories/directories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        FRONTEND_URLS: Joi.string().required(),
        JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        TWO_FACTOR_AUTHENTICATION_APP_NAME: Joi.string()
      })
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: ["dist/src/**/*.entity{ .ts,.js}"],
        migrations: ["dist/migrations/*{.ts,.js}"],
        synchronize: true,
        autoLoadEntities: true,
        migrationsRun: false
      }),
    }),
    JobOffersModule,
    AuthenticationModule,
    UsersModule,
    CandidatesModule,
    DirectoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
