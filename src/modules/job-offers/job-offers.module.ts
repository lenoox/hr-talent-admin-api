import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JobOffersService } from './job-offers.service';
import { JobOfferEntity } from './entities/job-offer.entity';
import { JobOffersController } from './job-offers.controller';
import { SharedModule } from '../../shared/shared.module';
import { JobOffersMapper } from './mappers/job-offers-mapper';

const MODULES = [TypeOrmModule.forFeature([JobOfferEntity]), SharedModule];
const CONTROLLERS = [JobOffersController];
const PROVIDERS = [JobOffersService, JobOffersMapper];
@Module({
  imports: [...MODULES],
  controllers: [...CONTROLLERS],
  providers: [...PROVIDERS],
})
export class JobOffersModule {}
