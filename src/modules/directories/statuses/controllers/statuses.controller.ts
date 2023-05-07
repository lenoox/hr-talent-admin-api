import { Controller, Get } from '@nestjs/common';
import { StatusesService } from '../statuses.service';
import { StatusEntity } from '../entities/status.entity';

@Controller('directories/statuses')
export class StatusesController {
  constructor(private senioritiesService: StatusesService) {}
  @Get('/')
  findAll(): Promise<StatusEntity[]> {
    return this.senioritiesService.findAll();
  }
}
