import { Module } from '@nestjs/common';
import { SenioritiesController } from './seniorities/seniorities.controller';
import { LocationsController } from './locations/locations.controller';
import { LocationsService } from './locations/locations.service';
import { SenioritiesService } from './seniorities/seniorities.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SharedModule} from "../../shared/shared.module";
import {LocationEntity} from "./locations/entities/location.entity";
import {SeniorityEntity} from "./seniorities/entities/seniority.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([SeniorityEntity, LocationEntity]),
    SharedModule
  ],
  controllers: [
    SenioritiesController,
    LocationsController,
  ],
  providers: [LocationsService, SenioritiesService]
})
export class DirectoriesModule {}
