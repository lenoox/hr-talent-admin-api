import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOffersModule } from './modules/job-offers/job-offers.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthenticationModule } from './core/authentication/authentication.module';
import { UsersModule } from './modules/users/users.module';
import { CandidatesModule } from './modules/candidates/candidates.module';
import { DirectoriesModule } from './modules/directories/directories.module';
import { TYPEORM_CONFIG, VALIDATION_SCHEMA } from './core/consts/configs.const';

const MODULES = [
  ConfigModule.forRoot(VALIDATION_SCHEMA),
  TypeOrmModule.forRootAsync(TYPEORM_CONFIG),
  JobOffersModule,
  AuthenticationModule,
  UsersModule,
  CandidatesModule,
  DirectoriesModule,
];
const CONTROLLERS = [AppController];
const SERVICES = [AppService];
@Module({
  imports: [...MODULES],
  controllers: [...CONTROLLERS],
  providers: [...SERVICES],
})
export class AppModule {}
