import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JobOfferEntity } from './entities/job-offer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {JobOfferDto} from "./dto/job-offer.dto";

@Injectable()
export class JobOffersService {
  constructor(
    @InjectRepository(JobOfferEntity)
    private jobOfferRepository: Repository<JobOfferEntity>,
  ) {}

  create(jobOffer: JobOfferDto) {
    return this.jobOfferRepository.save(jobOffer);
  }

  findAll() {
    return this.jobOfferRepository.find();
  }

  findOne(id: string) {
    return this.jobOfferRepository.findOneBy({ id });
  }

  update(id: string, jobOfferDto: JobOfferDto) {
    return this.jobOfferRepository.update(id, jobOfferDto);
  }

  remove(id: string) {
    return this.jobOfferRepository.delete(id);
  }
}
