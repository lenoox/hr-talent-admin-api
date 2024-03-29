import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JobOfferEntity } from './entities/job-offer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JobOfferRequest, JobOfferResponse } from './dto/job-offer.dto';
import { JobOffersMapper } from './mappers/job-offers-mapper';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class JobOffersService {
  constructor(
    @InjectRepository(JobOfferEntity)
    private jobOfferRepository: Repository<JobOfferEntity>,
    private jobOffersMapper: JobOffersMapper,
  ) {}

  async create(jobOfferDto: JobOfferRequest): Promise<JobOfferResponse> {
    const jobOffer = this.jobOffersMapper.dtoToEntity(jobOfferDto);
    return this.jobOfferRepository
      .save(jobOffer)
      .then((jobOffer: JobOfferEntity) =>
        this.jobOffersMapper.entityToDto(jobOffer),
      );
  }

  findAll(options: IPaginationOptions): Promise<Pagination<JobOfferResponse>> {
    return paginate<JobOfferEntity>(this.jobOfferRepository, options);
  }

  findOne(id: string): Promise<JobOfferResponse> {
    return this.jobOfferRepository
      .findOneBy({ id })
      .then((jobOffer: JobOfferEntity) =>
        this.jobOffersMapper.entityToDto(jobOffer),
      );
  }

  async update(
    id: string,
    jobOfferRequest: JobOfferRequest,
  ): Promise<JobOfferResponse> {
    jobOfferRequest.id = id;
    const jobOffer = await this.jobOfferRepository.findOneBy({ id });
    const jobOfferEntity = this.jobOffersMapper.dtoToEntity(jobOfferRequest);
    Object.assign(jobOffer, jobOfferEntity);
    return await this.jobOfferRepository
      .save(jobOffer)
      .then((jobOffer: JobOfferEntity) =>
        this.jobOffersMapper.entityToDto(jobOffer),
      );
  }

  remove(id: string): Promise<null> {
    return this.jobOfferRepository.delete(id).then(() => null);
  }
}
