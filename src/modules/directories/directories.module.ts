import { Module } from '@nestjs/common';
import { LocationsService } from './locations/locations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../../shared/shared.module';
import { LocationEntity } from './locations/entities/location.entity';
import { SeniorityEntity } from './seniorities/entities/seniority.entity';
import { StatusEntity } from './statuses/entities/status.entity';
import { StatusesController } from './statuses/controllers/statuses.controller';
import { StatusesService } from './statuses/statuses.service';
import { SenioritiesPublicController } from './seniorities/controllers/seniorities-public.controller';
import { LocationsPublicController } from './locations/controllers/locations-public.controller';
import { SenioritiesService } from './seniorities/seniorities.service';

const MODULES = [
  TypeOrmModule.forFeature([SeniorityEntity, LocationEntity, StatusEntity]),
  SharedModule,
];
const CONTROLLERS = [
  SenioritiesPublicController,
  LocationsPublicController,
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
