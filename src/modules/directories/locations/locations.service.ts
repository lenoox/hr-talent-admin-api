import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationEntity } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationsRepository: Repository<LocationEntity>,
  ) {}

  findAll() {
    return this.locationsRepository.find();
  }

  findOne(id: string) {
    return this.locationsRepository.findOneBy({ id });
  }
}
