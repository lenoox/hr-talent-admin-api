import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import {JobOfferEntity} from "./entities/job-offer.entity";

@Controller('job-offers')
export class JobOffersController {

  constructor(private jobOffersService: JobOffersService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<JobOfferEntity> {
    return this.jobOffersService.findOne(id);
  }

  @Get('/')
  findAll(): Promise<JobOfferEntity[]> {
    return this.jobOffersService.findAll();
  }

  @Post('/')
  create(@Body() jobOffers: any): Promise<JobOfferEntity> {
    return this.jobOffersService.create(jobOffers);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobOffersService.remove(id);
  }
}
