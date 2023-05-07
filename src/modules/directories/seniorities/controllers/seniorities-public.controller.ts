import { Controller, Get } from '@nestjs/common';
import { SenioritiesService } from '../seniorities.service';
import { SeniorityEntity } from '../entities/seniority.entity';

@Controller('/public/directories/seniorities')
export class SenioritiesPublicController {
  constructor(private senioritiesService: SenioritiesService) {}
  @Get('/')
  findAll(): Promise<SeniorityEntity[]> {
    return this.senioritiesService.findAll();
  }
}
