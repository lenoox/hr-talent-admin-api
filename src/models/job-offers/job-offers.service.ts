import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JobOfferEntity } from './entities/job-offer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JobOffersService {
  constructor(
    @InjectRepository(JobOfferEntity)
    private jobOfferRepository: Repository<JobOfferEntity>,
  ) {}
  create(jobOffer) {
    return this.jobOfferRepository.save(jobOffer);
  }
  findAll() {
    return this.jobOfferRepository.find();
  }
}
