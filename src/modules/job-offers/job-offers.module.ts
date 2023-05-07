import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JobOffersService } from './job-offers.service';
import { JobOfferEntity } from './entities/job-offer.entity';
import { JobOffersController } from './controllers/job-offers.controller';
import { SharedModule } from '../../shared/shared.module';
import { JobOffersMapper } from './mappers/job-offers-mapper';
import { JobOffersPublicController } from './controllers/job-offers-public.controller';

const MODULES = [TypeOrmModule.forFeature([JobOfferEntity]), SharedModule];
const CONTROLLERS = [JobOffersController, JobOffersPublicController];
const PROVIDERS = [JobOffersService, JobOffersMapper];

@Module({
  imports: [...MODULES],
  controllers: [...CONTROLLERS],
  providers: [...PROVIDERS],
})
export class JobOffersModule {}
