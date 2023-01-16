import {Controller, Get} from '@nestjs/common';
import {SenioritiesService} from "./seniorities.service";
import {SeniorityEntity} from "./entities/seniority.entity";

@Controller('directories/seniorities')
export class SenioritiesController {
    constructor(private senioritiesService: SenioritiesService) {}
    @Get('/')
    findAll(): Promise<SeniorityEntity[]> {
        return this.senioritiesService.findAll();
    }
}
