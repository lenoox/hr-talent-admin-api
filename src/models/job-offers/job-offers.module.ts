import { Module } from '@nestjs/common';
import { JobOffersController } from './job-offers.controller';
import { JobOffersService } from './job-offers.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {JobOfferEntity} from "./entities/job-offer.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([JobOfferEntity])
  ],
  controllers: [
    JobOffersController
  ],
  providers: [JobOffersService]
})
export class JobOffersModule {}
