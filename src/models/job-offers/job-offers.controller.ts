import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';

@Controller('job-offers')
export class JobOffersController {
  constructor(private jobOffersService: JobOffersService) {}

  @Get('/')
  findAll(): any {
    return this.jobOffersService.findAll();
  }
  @Post('/')
  create(@Body() jobOffers: any): any {
    return this.jobOffersService.create(jobOffers);
  }
}
