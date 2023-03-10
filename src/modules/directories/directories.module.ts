import { Module } from '@nestjs/common';
import { SenioritiesController } from './seniorities/seniorities.controller';
import { LocationsController } from './locations/locations.controller';
import { LocationsService } from './locations/locations.service';
import { SenioritiesService } from './seniorities/seniorities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { LocationEntity } from './locations/entities/location.entity';
import { SeniorityEntity } from './seniorities/entities/seniority.entity';
import { StatusEntity } from './statuses/entities/status.entity';
import { StatusesController } from './statuses/statuses.controller';
import { StatusesService } from './statuses/statuses.service';

const MODULES = [
  TypeOrmModule.forFeature([SeniorityEntity, LocationEntity, StatusEntity]),
  SharedModule,
];
const CONTROLLERS = [
  SenioritiesController,
  LocationsController,
  StatusesController,
];
const PROVIDERS = [LocationsService, SenioritiesService, StatusesService];
@Module({
  imports: [...MODULES],
  controllers: [...CONTROLLERS],
  providers: [...PROVIDERS],
  exports: [...PROVIDERS],
})
export class DirectoriesModule {}
