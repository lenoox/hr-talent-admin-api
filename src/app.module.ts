import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {JobOffersModule} from "./modules/job-offers/job-offers.module";
import {AppService} from "./app.service";
import {AppController} from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot(),
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
