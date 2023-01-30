import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import {JobOffersService} from "./job-offers.service";
import {JobOfferEntity} from "./entities/job-offer.entity";
import {JobOffersController} from "./job-offers.controller";
import {SharedModule} from "../../shared/shared.module";
import {JobOffersMapper} from "./mappers/job-offers-mapper";

@Module({
  imports: [
    TypeOrmModule.forFeature([JobOfferEntity]),
    SharedModule
  ],
  controllers: [
    JobOffersController
  ],
  providers: [JobOffersService,JobOffersMapper]
})
export class JobOffersModule {}
