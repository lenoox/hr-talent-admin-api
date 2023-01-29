import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put, Query,
  UseGuards
} from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import {JobOfferEntity} from "./entities/job-offer.entity";
import { JwtTwoFactorGuard } from "../../core/authentication/jwt-two-factor.guard";
import {JobOfferRequest, JobOfferResponse} from "./dto/job-offer.dto";
import {DeleteResult} from "typeorm";
import {Pagination} from "nestjs-typeorm-paginate";

@Controller('job-offers')
export class JobOffersController {

  constructor(private jobOffersService: JobOffersService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<JobOfferEntity> {
    return this.jobOffersService.findOne(id);
  }

  @Get('/')
  @UseGuards(JwtTwoFactorGuard)
  findAll(
      @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
      @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<JobOfferEntity>> {
    return this.jobOffersService.findAll({
      page,
      limit
    });
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
