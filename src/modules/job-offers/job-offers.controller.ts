import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import {JobOfferEntity} from "./entities/job-offer.entity";
import { JwtTwoFactorGuard } from "../../core/authentication/jwt-two-factor.guard";

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
  create(@Body() jobOffers: any): Promise<JobOfferEntity> {
    return this.jobOffersService.create(jobOffers);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobOffersService.remove(id);
  }
}
