import { Injectable } from '@nestjs/common';
import { SeniorityEntity } from './entities/seniority.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SenioritiesService {
  constructor(
    @InjectRepository(SeniorityEntity)
    private seniorityRepository: Repository<SeniorityEntity>,
  ) {}

  findAll() {
    return this.seniorityRepository.find();
  }

  findOne(id: string) {
    return this.seniorityRepository.findOneBy({ id });
  }
}
