import { Controller, Get } from '@nestjs/common';
import { LocationsService } from '../locations.service';
import { LocationEntity } from '../entities/location.entity';

@Controller('/public/directories/locations')
export class LocationsPublicController {
  constructor(private locationsService: LocationsService) {}
  @Get('/')
  findAll(): Promise<LocationEntity[]> {
    return this.locationsService.findAll();
  }
}
