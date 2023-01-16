import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import {JobOfferEntity} from "./entities/job-offer.entity";
import { JwtTwoFactorGuard } from "../../core/authentication/jwt-two-factor.guard";
import {JobOfferRequest, JobOfferResponse} from "./dto/job-offer.dto";
import {DeleteResult} from "typeorm";

@Controller('job-offers')
export class JobOffersController {

  constructor(private jobOffersService: JobOffersService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<JobOfferEntity> {
    return this.jobOffersService.findOne(id);
  }

  @Get('/')
  @UseGuards(JwtTwoFactorGuard)
  findAll(): Promise<JobOfferEntity[]> {
    return this.jobOffersService.findAll();
  }

  @Post('/')
  @UseGuards(JwtTwoFactorGuard)
  create(@Body() jobOffers: JobOfferRequest): Promise<JobOfferEntity> {
    return this.jobOffersService.create(jobOffers);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() jobOffers: JobOfferRequest): Promise<JobOfferResponse> {
    return this.jobOffersService.update(id,jobOffers);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult>  {
    return this.jobOffersService.remove(id);
  }
}
