import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { JobOffersService } from '../job-offers.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { JobOfferEntity } from '../entities/job-offer.entity';

@Controller('/public/job-offers')
export class JobOffersPublicController {
  constructor(private jobOffersService: JobOffersService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<JobOfferEntity> {
    return this.jobOffersService.findOne(id);
  }

  @Get('/')
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<JobOfferEntity>> {
    return this.jobOffersService.findAll({
      page,
      limit,
    });
  }
}
